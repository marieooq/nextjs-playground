import UsersList from "./UsersList";

const Page = async () => {
  try {
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
    console.log("in users/page");
    console.log(data);
  } catch (err) {
    console.log(err);
  }

  return (
    <div className="m-4">
      <h1 className="text-lg font-bold">User List</h1>
      <UsersList />
    </div>
  );
};

export default Page;
