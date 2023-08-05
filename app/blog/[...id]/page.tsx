import React from "react";

const BlogPage = ({ params }: { params: { id: string[] } }) => {
  console.log("BlogPage");
  console.log("params", params);
  return (
    <div className="w-full h-screen bg-cyan-200 flex items-center justify-center">
      <p className="text-9xl">Blog Page {params.id}</p>
    </div>
  );
};

export default BlogPage;
