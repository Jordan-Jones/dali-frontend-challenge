import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import ProfilePicture, { PersonType } from '@components/pfp';
import { useAppContext } from '@components/state';
import PersonList from '@components/PersonList';
import { useState } from 'react';

const Home: NextPage = () => {
  const { data } = useAppContext();
  const [text, setText] = useState('');

  console.log(data);

  return (
    <div className="">
      <Head>
        <title>Dali Social</title>
        <meta name="description" content="The next best thing" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <nav className="flex justify-between items-center lg:justify-around bg-teal-600 p-4">
        <Image src="/dali.jpg" width={50} height={50} alt="Dali" />
        <div className="lg:flex hidden items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
          <input
            placeholder="Search User"
            className="p-2 rounded-md outline-none border border-slate-500 text-black
            focus:border-sky-400 focus:ring-1 focus:ring-sky-400 placeholder-slate-400 shadow-sm"
            onChange={(phrase) => setText(phrase.target.value)}
          />
        </div>
        <div className="lg:hidden">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </div>
        <div className="lg:flex lg:items-center hidden ">Profile</div>
        <div className="lg:hidden ">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </div>
      </nav>

      <Link href="/profile/2">
        <a>touch me</a>
      </Link>
      <PersonList
        data={data.filter((person) =>
          person.name.toLowerCase().includes(text.toLowerCase())
        )}
      />
    </div>
  );
};

export default Home;
