"use client";

import { useSession, signIn, signOut } from "next-auth/react";
import { CiLogin, CiLogout } from "react-icons/ci";

export default function AuthButton() {
  const { data: session, status } = useSession();

  if (status === "loading") return "Loading...";

  if (!session) {
    return (
      <button
        onClick={() =>
          signIn(undefined, { callbackUrl: "/dashboard/server-todos" })
        }
        className="px-4 py-3 flex items-center space-x-4 rounded-md text-gray-600 group"
      >
        <CiLogin />
        <span className="group-hover:text-gray-700">Login</span>
      </button>
    );
  }

  return (
    <button
      onClick={() => signOut()}
      className="px-4 py-3 flex items-center space-x-4 rounded-md text-gray-600 group"
    >
      <CiLogout />
      <span className="group-hover:text-gray-700">Logout</span>
    </button>
  );
}
