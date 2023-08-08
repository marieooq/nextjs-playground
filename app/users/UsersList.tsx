import React from "react";

type User = {
  id: string;
  name: string;
  email: string;
};

const UsersList = async () => {
  const getUsers = async (): Promise<User[]> => {
    // await new Promise((resolve) => setTimeout(resolve, 3000));
    // const response = await fetch("http://localhost:3000/api");
    const response = await fetch("http://localhost:3000/api?name=John", {
      // cache: "no-store",
      next: { revalidate: 5 },
    });
    if (!response.ok) throw new Error("Error fetching users");
    return response.json();
  };
  const users = await getUsers();
  // console.log({ users });

  return (
    <ul>
      {users.map((user) => (
        <li key={user.id}>{user.name}</li>
      ))}
    </ul>
  );
};

export default UsersList;
