import Link from "next/link";
import Image from "next/image";
import { getServerSession } from "next-auth";

import { PiCookie } from "react-icons/pi";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import {
  IoCalendarOutline,
  IoCheckboxOutline,
  IoListOutline,
} from "react-icons/io5";

import { authOptions } from "@/app/api/auth/[...nextauth]/route";

import tailusLogo from "../../../public/tailus.svg";
import SidebarItem from "./SidebarItem";
import AuthButton from "../AuthButton";

const sidebarOptions = [
  {
    name: "Dashboard",
    href: "/dashboard",
    Icon: <IoCalendarOutline size={20} />,
  },
  {
    name: "Rest TODOS",
    href: "/dashboard/rest-todos",
    Icon: <IoCheckboxOutline size={20} />,
  },
  {
    name: "Server Actions",
    href: "/dashboard/server-todos",
    Icon: <IoListOutline size={20} />,
  },
  {
    name: "Cookies",
    href: "/dashboard/cookies",
    Icon: <PiCookie size={23} />,
  },
  {
    name: "Products",
    href: "/dashboard/products",
    Icon: <HiOutlineShoppingBag size={23} />,
  },
];

export default async function Sidebar() {
  const session = await getServerSession(authOptions);

  const user = {
    name: session?.user?.name || "Cynthio J. Watts",
    image:
      session?.user?.image ||
      "https://avatars.githubusercontent.com/u/47919550?v=4",
    role: "admin",
  };

  return (
    <aside className="ml-[-100%] fixed z-10 top-0 pb-3 px-6 w-full flex flex-col justify-between h-screen border-r bg-white transition duration-300 md:w-4/12 lg:ml-0 lg:w-[25%] xl:w-[20%] 2xl:w-[15%]">
      <div>
        <div className="-mx-6 px-6 py-4">
          <Link href="/dashboard" title="home">
            <Image src={tailusLogo} className="w-32" alt="tailus logo" />
          </Link>
        </div>

        <div className="mt-8 text-center">
          <Image
            src={user.image}
            width={40}
            height={40}
            className="w-10 h-10 m-auto rounded-full object-cover lg:w-28 lg:h-28"
            alt="tailus logo"
          />
          <h5 className="hidden mt-4 text-xl font-semibold text-gray-600 lg:block">
            {user.name}
          </h5>
          <span className="hidden text-gray-400 lg:block">{user.role}</span>
        </div>

        <ul className="space-y-2 tracking-wide mt-8">
          {sidebarOptions.map((option) => (
            <SidebarItem
              key={option.name}
              href={option.href}
              icon={option.Icon}
            >
              {option.name}
            </SidebarItem>
          ))}
        </ul>
      </div>

      <div className="px-6 -mx-6 pt-4 flex justify-between items-center border-t">
        <AuthButton />
      </div>
    </aside>
  );
}
