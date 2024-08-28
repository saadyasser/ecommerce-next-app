// lib/users.ts

import bcrypt from "bcrypt";

interface User {
  id: string;
  name: string;
  email: string;
  username: string;
  password: string;
}

const users: User[] = [
  {
    id: "1",
    name: "John Doe",
    email: "john@example.com",
    username: "john_doe",
    password: "$2b$10$e0NRlDxFy8M1Kh8.z3m73eXwqlDjH1G4/9n8RzIkAPZ6DOWMWuNMS", // "password" hashed
  },
];

export async function findUserByUsername(username: string) {
  return users.find((user) => user.username === username);
}

export async function validatePassword(user: User, password: string) {
  return bcrypt.compare(password, user.password);
}
