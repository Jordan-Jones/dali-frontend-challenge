interface PostProps {
  title: String;
  description: String;
  image?: String;
  tags?: String[];
}

const Post = (post: PostProps) => {
  return (
    <div>
      <h1>{post.title}</h1>
      <p>{post.description}</p>
    </div>
  );
};

export default Post;
