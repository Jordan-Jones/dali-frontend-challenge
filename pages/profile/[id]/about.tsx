import { NextPage } from 'next';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useAppContext } from '@components/state';
import { PersonType } from '@components/pfp';

const AboutMe: NextPage = () => {
  const router = useRouter();
  const { data } = useAppContext();
  const person = data.find(
    (person) => person.name === router.query.id
  ) as PersonType;
  console.log(router.query);

  return (
    <div>
      <h1>About Me</h1>
      <Link href={`/profile/${router.query.id}`}>
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

export default AboutMe;
