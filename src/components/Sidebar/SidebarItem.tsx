import Link from "next/link";
import { cn } from "@/lib/utils";
import { CiBookmarkCheck } from "react-icons/ci";

interface SidebarItemProps {
  children?: React.ReactNode;
  isActive?: boolean;
  href?: string;
}

export default function SidebarItem({
  children,
  isActive = false,
  href = "#",
}: SidebarItemProps) {
  return (
    <li>
      <Link
        href={href}
        className={cn(
          "px-4 py-3 flex items-center space-x-4 rounded-md text-gray-600 group",
          isActive && "text-white bg-gradient-to-r from-sky-600 to-cyan-400"
        )}
      >
        <CiBookmarkCheck size={30} />
        <span className="-mr-1 font-medium">{children}</span>
      </Link>
    </li>
  );
}
