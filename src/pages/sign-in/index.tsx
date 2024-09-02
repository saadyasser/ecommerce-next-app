// pages/auth/login.tsx

import { useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/router";
import { Button } from "@/components";
import Link from "next/link";

export default function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    const result = await signIn("credentials", {
      redirect: false,
      email,
      password,
    });
    router.push("/");

    // if (result.error) {
    //   console.log(typeof result.error);

    //   setError(result.error);
    // } else {
    //   router.push("/");
    // }
  };

  return (
    <div className="h-[80vh] flex items-center justify-center max-w-[400px] w-full mx-auto">
      <div className="bg-white rounded-lg px-8 py-6">
        <h1 className="font-bold text-xl text-center mb-6">Sign In</h1>
        <p className="text-gray-500 mb-4">
          Please! provide us with your credentials.
        </p>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="font-semibold cursor-pointer text-sm">
              Email
              <input
                className="block w-full border border-gray-600 focus:border-gray-800 outline-none rounded-md pl-3 py-1 font-normal text-sm"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </label>
          </div>
          <div className="mb-6">
            <label className="font-semibold cursor-pointer text-sm">
              Password
              <input
                className="block w-full border border-gray-600 focus:border-gray-800 outline-none rounded-md pl-3 py-1 font-normal  text-sm"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </label>
            <Link
              href="/forget-password"
              className="block text-blue-800 mt-1 text-xs font-semibold text-right hover:text-blue-900"
              shallow={true}
            >
              forget your password?
            </Link>
          </div>
          <Button
            type="submit"
            size="sm"
            className="w-full bg-orange text-white "
          >
            Sign In
          </Button>
        </form>
      </div>
    </div>
  );
}
