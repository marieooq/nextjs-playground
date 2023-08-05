import React from "react";

const NestedPage = ({
  params,
}: {
  params: { id: string[]; userId: string[]; categoryId: string[] };
}) => {
  return (
    <div className="w-full h-screen bg-cyan-200 flex flex-col items-center justify-center gap-8">
      <p className="text-7xl">Nested page: Id {params.id}</p>
      <p className="text-7xl">Nested page: UserId {params.userId}</p>
      <p className="text-7xl">Nested page: CategoryId {params.categoryId}</p>
    </div>
  );
};

export default NestedPage;
