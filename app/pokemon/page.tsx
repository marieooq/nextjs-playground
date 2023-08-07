import React, { Suspense } from "react";
import CharactersList from "./CharactersList";
import ItemsList from "./ItemsList";

const Page = () => {
  return (
    <div className="flex flex-row space-x-8">
      <Suspense
        fallback={<p className="text-red-400">Loading characters list...</p>}
      >
        <CharactersList />
      </Suspense>
      <Suspense
        fallback={<p className="text-blue-400">Loading items list...</p>}
      >
        <ItemsList />
      </Suspense>
    </div>
  );
};

export default Page;
