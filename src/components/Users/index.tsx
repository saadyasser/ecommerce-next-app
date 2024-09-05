import React, { useEffect, useState } from "react";

const Users = () => {
  const [loading, setLoading] = useState(false);
  const [users, setUsers] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    const fetchUsers = async () => {
      const response = await fetch("/api/users");
      const users = await response.json();
      console.log(users);

      if (response.status === 200) {
        setUsers(users);
      } else {
        setError(users);
      }
    };
    fetchUsers();
    // .then((response) => response.json())
    // .then((data) => setUsers(data))
    // .catch((error) => console.error("Error fetching users:", error));
    setLoading(false);
  }, []);
  console.log(users, "users list");

  return (
    <div>
      <h1>Users List</h1>
      {/* {error && <p>{error.error}</p>} */}
      {loading ? (
        <div>Loading...</div>
      ) : users.length ? (
        <ul>
          {users.map((user: any) => (
            <li key={user.id}>{user.name}</li>
          ))}
        </ul>
      ) : (
        <p>No any user.</p>
      )}
    </div>
  );
};

export default Users;
