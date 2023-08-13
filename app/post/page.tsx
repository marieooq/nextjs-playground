import { Post } from "@prisma/client";

const Page = async () => {
  const response = await fetch("http://localhost:3000/api/posts");
  const posts: Post[] = await response.json();

  return (
    <div className="m-4">
      <h1 className="text-lg font-bold">Articles</h1>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default Page;
