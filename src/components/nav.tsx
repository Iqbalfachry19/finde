"use client";

import { ScanSearch } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cookies } from "next/headers";
const routes = [
  {
    label: "HOME",
    path: "/",
  },
  {
    label: "ABOUT",
    path: "/#about",
  },
  {
    label: "FIND",
    path: "/find",
  },
  {
    label: "ADMIN",
    path: "/admin/finderlaptop",
  },
];

export function Nav() {
  const pathName = usePathname();

  return (
    <header className="sticky flex justify-between items-center w-full top-0 bg-black/0 backdrop-blur py-4 mt-7 px-4 md:px-[10rem] nav">
      <Link href="/">
        <div className="flex items-center text-white dark:text-black gap-2">
          <ScanSearch size={30} />
          <p className="font-semibold text-2xl">FINDE</p>
        </div>
      </Link>
      <nav className="md:flex hidden">
        <ul className="flex items-center gap-3">
          {routes.map((route) => (
            <li key={route.path}>
              <Link href={route.path}>
                <p
                  className={`${
                    pathName === route.path
                      ? "text-white border dark:text-black border-white dark:border-black rounded-full"
                      : "text-white/50 dark:text-black hover:text-white"
                  } text-sm font-semibold px-5 py-2`}
                >
                  {route.label}
                </p>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
