import React from "react";

type User = {
  id: string;
  name: string;
  email: string;
};

const UsersList = async () => {
  const getUsers = async (): Promise<User[]> => {
    await new Promise((resolve) => setTimeout(resolve, 3000));
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    if (!response.ok) throw new Error("Error fetching users");
    return response.json();
  };
  const users = await getUsers();

  return (
    <ul>
      {users.map((user) => (
        <li key={user.id}>{user.name}</li>
      ))}
    </ul>
  );
};

export default UsersList;
