import Image from 'next/image';
import Profile from 'pages/profile';
import ProfilePicture, { PersonType } from './pfp';

interface PostProps {
  title: String;
  description: String;
  author: PersonType;
  likes?: number;
  image?: String;
  pfp?: String;
  //tags?: String[];
}

const Post = (post: PostProps): JSX.Element => {
  return (
    <div className="flex flex-col min-w-[100px] min-h-[100px]">
      <Image
        className="rounded-xl"
        src={'http://i.giphy.com/gyRWkLSQVqlPi.gif'}
        height={300}
        width={300}
        alt="some picture"
      />
      <div className="flex items-center">
        <ProfilePicture person={post.author} size={50} height={4} />
        <span>{post.author.name}</span>
      </div>
    </div>
  );
};

export default Post;
