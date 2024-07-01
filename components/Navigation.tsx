"use client";
import { Fragment } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useTheme } from "next-themes";

import NavLink from "./ui/NavLink";

import { Popover, Transition } from "@headlessui/react";
import clsx from "clsx";

const links = [
  { label: "Studies", href: "/blog" },
  { label: "Resources", href: "/resources" },
];

export default function Navigation() {
  const pathname = `/${usePathname().split("/")[1]}`; // active paths on dynamic subpages
  const { theme } = useTheme();

  return (
    <header className={clsx("relative md:sticky top-0 z-20 bg-primary")}>
      <nav className="px-4 md:px-6 py-3 lg max-w-[700px] mx-auto flex justify-between items-center gap-3">
        <Link href="/" className="shrink-0 text-primary">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="32.000000pt"
          height="32.000000pt"
          viewBox="0 0 32.000000 32.000000"
          preserveAspectRatio="xMidYMid meet"
        >
          <g transform="translate(0.000000,32.000000) scale(0.100000,-0.100000)" fill="#FFFFFF" stroke="none">
            <path d="M0 160 l0 -160 160 0 160 0 0 160 0 160 -160 0 -160 0 0 -160z m245 -5 l-1 -100 -67 -3 c-101 -4 -107 1 -107 107 0 48 3 91 7 95 4 4 43 5 88 4 l80 -3 0 -100z"/>
            <path d="M90 175 c0 -37 4 -65 10 -65 6 0 10 28 10 65 0 37 -4 65 -10 65 -6 0 -10 -28 -10 -65z"/>
            <path d="M158 213 c12 -2 30 -2 40 0 9 3 -1 5 -23 4 -22 0 -30 -2 -17 -4z"/>
            <path d="M153 183 c9 -2 23 -2 30 0 6 3 -1 5 -18 5 -16 0 -22 -2 -12 -5z"/>
            <path d="M95 80 c8 -13 112 -13 120 0 4 6 -18 10 -60 10 -42 0 -64 -4 -60 -10z"/>
          </g>
        </svg>
        </Link>
        <ul className="hidden md:flex items-center gap-1">
          {links.map((link) => (
            <li key={link.href}>
              <NavLink href={link.href}>{link.label}</NavLink>
            </li>
          ))}
        </ul>
        <Popover className="relative ml-auto md:hidden">
          <Popover.Button className="flex items-center gap-1 text-secondary p-1 rounded-lg focus-visible:outline-none focus:ring-0">
            Menu
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="w-5 h-5"
            >
              <path d="M10.75 4.75a.75.75 0 00-1.5 0v4.5h-4.5a.75.75 0 000 1.5h4.5v4.5a.75.75 0 001.5 0v-4.5h4.5a.75.75 0 000-1.5h-4.5v-4.5z" />
            </svg>
          </Popover.Button>

          <Transition
            as={Fragment}
            enter="transition ease-out duration-200"
            enterFrom="opacity-0 translate-y-1"
            enterTo="opacity-100 translate-y-0"
            leave="transition ease-in duration-150"
            leaveFrom="opacity-100 translate-y-0"
            leaveTo="opacity-0 translate-y-1"
          >
          </Transition>
        </Popover>

        <div className="flex items-center justify-center w-8 h-8">
        </div>
      </nav>
    </header>
  );
}
