import React from "react";

const BlogPage = ({ params }: { params: { id: string[] } }) => {
  return (
    <div className="flex items-center justify-center">
      <p className="text-9xl">Blog Page {params.id}</p>
    </div>
  );
};

export default BlogPage;
