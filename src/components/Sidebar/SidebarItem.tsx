"use client";

import Link from "next/link";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";

interface SidebarItemProps {
  children?: React.ReactNode;
  icon?: React.ReactNode;
  href?: string;
}

export default function SidebarItem({
  children,
  icon,
  href = "#",
}: SidebarItemProps) {
  const pathname = usePathname();
  const isActive = href === pathname;

  return (
    <li>
      <Link
        href={href}
        className={cn(
          "px-4 py-3 flex items-center space-x-4 rounded-md text-gray-600 group",
          "hover:bg-gradient-to-r hover:from-gray-600 hover:to-gray-400 hover:text-white",
          "transition duration-600 ease-in-out",

          isActive && "text-white bg-gradient-to-r from-sky-600 to-cyan-400"
        )}
      >
        {icon}
        <span className="-mr-1 font-medium">{children}</span>
      </Link>
    </li>
  );
}
