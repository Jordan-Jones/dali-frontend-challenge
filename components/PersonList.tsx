import { RefObject, useRef } from 'react';
import ProfilePicture, { PersonType } from './pfp';

interface PersonListProps {
  data: PersonType[];
}

const easeInOutQuad = (t: number, b: number, c: number, d: number): number => {
  t /= d / 2;
  if (t < 1) return (c / 2) * t * t + b;
  t--;
  return (-c / 2) * (t * (t - 2) - 1) + b;
};

const scroll = (change: number, ref: RefObject<HTMLInputElement>): void => {
  const translation = change;
  const duration = 500;

  const start = ref.current!.scrollLeft;
  let currentTime = 0;
  const increment = 20;

  const animateScroll = () => {
    currentTime += increment;
    const val = easeInOutQuad(currentTime, start, translation, duration);
    ref.current!.scrollLeft = val;
    if (currentTime < duration) {
      setTimeout(animateScroll, increment);
    }
  };
  animateScroll();
};

const PersonList = ({ data }: PersonListProps): JSX.Element => {
  const ref = useRef<HTMLInputElement>(null);
  const scrollDistance = 300;
  console.log(ref);

  return (
    <div className="flex flex-col">
      <div className="flex justify-between p-2 ">
        <h1 className="text-xl font-bold">Stories</h1>
        <div className="flex gap-4">
          <button
            type="button"
            onClick={() => scroll(-scrollDistance, ref)}
            className="border rounded-full p-2 bg-gradient-to-r to-sky-500 from-indigo-800 text-black"
          >
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
                d="M11 19l-7-7 7-7m8 14l-7-7 7-7"
              />
            </svg>
          </button>
          <button
            type="button"
            onClick={() => scroll(scrollDistance, ref)}
            className="border rounded-full p-2 bg-gradient-to-r from-sky-500 to-indigo-800 text-black"
          >
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
                d="M13 5l7 7-7 7M5 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>
      </div>
      <div
        className="overflow-auto overflow-x-scroll flex flex-row gap-4 no-scrollbar px-2"
        ref={ref}
      >
        {data.map((person, index) => (
          <ProfilePicture person={person} key={index} size={100} height={9} />
        ))}
      </div>
    </div>
  );
};

export default PersonList;
