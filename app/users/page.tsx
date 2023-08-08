import UsersList from "./UsersList";

const Page = async () => {
  const response = await fetch("http://localhost:3000/api", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      name: "John",
      email: "john@example.com",
    }),
  });

  const data = await response.json();

  console.log(data);

  return (
    <div className="m-4">
      <h1 className="text-lg font-bold">User List</h1>
      <UsersList />
    </div>
  );
};

export default Page;
