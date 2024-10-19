"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
} from "@nextui-org/navbar";
import { useState } from "react";

export default function NavBar() {
  const menuItems = [
    { name: "Projects", pathname: "/projects" },
    { name: "About", pathname: "/about" },
    { name: "Resume", pathname: "/resume" },
    { name: "Contact", pathname: "/contact" },
  ];
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const normalStyles =
    "hover:text-purple-300 transition-all duration-200 text-white";
  const activeStyles = `${normalStyles} border-b border-purple-500 pb-1`;
  return (
    <Navbar
      className="border-b-1 border-purple-800 z-20"
      isMenuOpen={isMenuOpen}
      onMenuOpenChange={setIsMenuOpen}
    >
      <NavbarBrand>
        <Link
          href="/"
          className={pathname === "/" ? activeStyles : normalStyles}
        >
          <p>
            <span className="text-purple-500">{`{ `}</span>haydenJenkins
            <span className="text-purple-500">{` }`}</span>
          </p>
        </Link>
      </NavbarBrand>
      <NavbarContent justify="end" className="hidden sm:flex">
        <NavbarItem>
          <Link
            className={pathname === "/projects" ? activeStyles : normalStyles}
            href="/projects"
          >
            Projects
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link
            className={pathname === "/about" ? activeStyles : normalStyles}
            href="/about"
          >
            About
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link
            className={pathname === "/resume" ? activeStyles : normalStyles}
            href="/resume"
          >
            Resume
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link
            className={pathname === "/contact" ? activeStyles : normalStyles}
            href="/contact"
          >
            Contact
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent className="sm:hidden" justify="end">
        <NavbarMenuToggle className="hover:text-purple-400" />
      </NavbarContent>
      <NavbarMenu className="p-8">
        <NavbarMenuItem>
          <Link
            className={pathname === "/projects" ? activeStyles : normalStyles}
            href="/projects"
          >
            Projects
          </Link>
        </NavbarMenuItem>
        <NavbarMenuItem>
          <Link
            className={pathname === "/about" ? activeStyles : normalStyles}
            href="/about"
          >
            About
          </Link>
        </NavbarMenuItem>
        <NavbarMenuItem>
          <Link
            className={pathname === "/resume" ? activeStyles : normalStyles}
            href="/resume"
          >
            Resume
          </Link>
        </NavbarMenuItem>
        <NavbarMenuItem>
          <Link
            className={pathname === "/contact" ? activeStyles : normalStyles}
            href="/contact"
          >
            Contact
          </Link>
        </NavbarMenuItem>
      </NavbarMenu>
    </Navbar>
  );
}
