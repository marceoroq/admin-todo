import { Metadata } from "next";

import Widget from "@/components/Widget";

export const metadata: Metadata = {
  title: "Dashboard",
  description: "Dashboard Page",
};

export default function DashboardPage() {
  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      <Widget />
    </div>
  );
}
