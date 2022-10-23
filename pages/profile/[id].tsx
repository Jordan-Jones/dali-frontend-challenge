import type { NextPage } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/router';
import type { PersonType } from '@components/pfp';
import { useAppContext } from '@components/state';
import Head from 'next/head';

interface TitleProps {
  info: string;
  title: string;
}

const Title = ({ info, title }: TitleProps): JSX.Element => {
  return (
    <div className="flex flex-col items-center text-center p-5 border-l border-l-gray-200/20 first:border-none">
      <h1 className="font-bold">{info}</h1>
      <p className="text-sm">{title}</p>
    </div>
  );
};

const Person: NextPage = () => {
  const router = useRouter();
  const { data } = useAppContext();
  const person = data.find(
    (person) => person.name === router.query.id
  ) as PersonType;

  if (!person) {
    return (
      <div className="flex flex-col w-screen h-screen justify-center items-center gap-2">
        <span>URL &quot;{router.query.id}&quot; NOT FOUND</span>
        <Link href="/">
          <a className="bg-violet-700 p-5 rounded hover:bg-violet-700/80 transition-colors ease-linear">
            Go Back to Home Page
          </a>
        </Link>
      </div>
    );
  }

  return (
    <div className="flex justify-center flex-col items-center">
      <Head>
        <title>{person.name}</title>
        <meta name="description" content={`Person profile of ${person.name}`} />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Image
        className="rounded-full"
        src={person.picture}
        height={200}
        width={200}
        objectFit="cover"
        alt="some picture"
      />
      <div className="flex flex-col text-center p-4">
        <h1 className="font-bold">@{person.name}</h1>
        <p className="text-sm">{person.quote}</p>
      </div>
      <div className="flex">
        <Title info={person.major} title="Major" />
        <Title info={person.birthday} title="Birthday" />
        <Title info={person.gender} title="Gender" />
      </div>

      <Link href={`/profile/${person.name}/about`}>
        <a className="p-4 bg-amber-600 hover:bg-amber-600/70 transition-colors ease-linear m-3">
          About Me
        </a>
      </Link>

      <Link href="/">
        <button
          type="button"
          className="p-4 bg-purple-300 hover:bg-purple-300/70 transition-colors ease-linear"
        >
          Go Back please
        </button>
      </Link>
    </div>
  );
};

export default Person;
