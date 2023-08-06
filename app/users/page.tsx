type User = {
  id: string;
  name: string;
  email: string;
};

const Page = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const users: User[] = await response.json();
  console.log(users);
  return (
    <div className="m-4">
      <h1 className="text-lg font-bold">User List</h1>
      <ul>
        {users.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default Page;
