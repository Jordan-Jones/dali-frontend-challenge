import Image from 'next/image';
import Link from 'next/link';

export type PersonType = {
  name: string;
  year: string;
  picture: string;
  gender: string;
  'American Indian or Alaska Native': string;
  Asian: string;
  'Black or African American': string;
  'Hispanic or Latino': string;
  'Middle Eastern': string;
  'Native Hawaiian or Other Pacific Islander': string;
  White: string;
  Other: string;
  major: string;
  minor: string;
  modification: string;
  birthday: string;
  role: string;
  home: string;
  quote: string;
  favoriteShoe: string;
  favoriteArtist: string;
  favoriteColor: string;
  phoneType: string;
};

interface PersonProps {
  person: PersonType;
}

const ProfilePicture = ({ person }: PersonProps): JSX.Element => {
  return (
    <Link href={`/profile/${person?.name}`}>
      <a
        id="parent"
        className="min-w-[100px] min-h-[100px] p-[2px] hover:bg-sky-700/50 
        rounded-full flex items-center relative justify-center 
        bg-gradient-to-r from-sky-500 to-indigo-800 hover:from-sky-500/20 hover:to-indigo-800/20"
      >
        <svg
          id="plus"
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 absolute top-9 z-40"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 4v16m8-8H4"
          />
        </svg>
        <div
          className="bg-gray-800 flex justify-center rounded-full p-1"
          id="image"
        >
          <Image
            onClick={() => console.log(`pressed ${person?.name}`)}
            className="rounded-full"
            width={100}
            height={100}
            src={person?.picture}
            objectFit="cover"
            alt="some picture"
          />
        </div>
      </a>
    </Link>
  );
};

export default ProfilePicture;
