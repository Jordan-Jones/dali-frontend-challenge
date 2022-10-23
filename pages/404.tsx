import { NextPage } from 'next';
import Link from 'next/link';

const Void: NextPage = () => {
  return (
    <div className="flex flex-col w-screen h-screen justify-center items-center gap-2">
      <h1>404 - Page Not Found</h1>
      <Link href="/">
        <a className="bg-violet-700 p-5 rounded hover:bg-violet-700/80 transition-colors ease-linear">
          Go back to Home Page
        </a>
      </Link>
    </div>
  );
};

export default Void;
