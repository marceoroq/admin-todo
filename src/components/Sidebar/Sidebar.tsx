import Link from "next/link";
import Image from "next/image";
import { CiLogout } from "react-icons/ci";
import tailusLogo from "../../../public/tailus.svg";

import SidebarItem from "./SidebarItem";

export default function Sidebar() {
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
            src="https://avatars.githubusercontent.com/u/47919550?v=4"
            width={40}
            height={40}
            className="w-10 h-10 m-auto rounded-full object-cover lg:w-28 lg:h-28"
            alt="tailus logo"
          />
          <h5 className="hidden mt-4 text-xl font-semibold text-gray-600 lg:block">
            Cynthio J. Watts
          </h5>
          <span className="hidden text-gray-400 lg:block">Admin</span>
        </div>

        <ul className="space-y-2 tracking-wide mt-8">
          <SidebarItem>Dashboard</SidebarItem>
          <SidebarItem href="/dashboard/rest-todos">Categories</SidebarItem>
        </ul>
      </div>

      <div className="px-6 -mx-6 pt-4 flex justify-between items-center border-t">
        <button className="px-4 py-3 flex items-center space-x-4 rounded-md text-gray-600 group">
          <CiLogout />
          <span className="group-hover:text-gray-700">Logout</span>
        </button>
      </div>
    </aside>
  );
}
