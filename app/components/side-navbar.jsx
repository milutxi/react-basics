"use client";

import React from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

const navConfig = [
  {
    title: "Destructuring",
    href: "/destructuring-exercises",
  },
  {
    title: "State",
    href: "/use-state-exercises",
  },
  {
    title: "Forms",
    href: "/forms-exercises",
  },
  {
    title: "Hooks",
    href: "/hooks-exercises",
  },
  {
    title: "Context",
    href: "/context-exercises",
  },
  {
    title: "Shop App",
    href: "/shop",
  },
];

export function SidebarNav({ items = navConfig }) {
  const router = useRouter();
  const pathname = usePathname();

  return (
    <div className="border border-r-border p-4 pt-10 grid min-h-screen min-w-[200px]">
      <div className="flex flex-col">
        <div className="flex h-full flex-col">
          <div className="flex-1">
            {items.map((item, index) => {
              return (
                <div key={index} className="pb-6">
                  <SidebarNavItems
                    title={item.title}
                    href={item.href}
                    pathname={pathname}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export function SidebarNavItems({ title, href, pathname }) {
  return (
    <Link
      key={title}
      href={href}
      className={`p-2 dark:hover:bg-background-muted transition-colors duration-200 hover:bg-gray-700 hover:text-white group flex w-full items-center whitespace-nowrap rounded-md border-transparent ${
        pathname === href.split("?")[0] || pathname?.startsWith(href)
          ? "font-medium border-none text-secondary bg-primary bg-white text-black"
          : ""
      }`}
    >
      {title}
    </Link>
  );
}
