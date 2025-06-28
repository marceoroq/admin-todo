import { Metadata } from "next";
import { redirect } from "next/navigation";
import { getServerSession } from "next-auth";

import Widget from "@/components/Widget";

import { authOptions } from "../api/auth/[...nextauth]/route";

export const metadata: Metadata = {
  title: "Dashboard",
  description: "Dashboard Page",
};

export default async function DashboardPage() {
  const session = await getServerSession(authOptions);

  if (!session) redirect("/api/auth/signin");

  return (
    <div className="flex flex-col gap-6 md:grid-cols-2 lg:grid-cols-3">
      <Widget />
      <div>{JSON.stringify(session.user)}</div>
    </div>
  );
}
