"use client";

import Link from "next/link";
import Image from "next/image";
import Container from "./container";
import Button from "./button";
import { Menu } from "lucide-react";
import { useEffect, useState } from "react";
import { cn } from "../lib/utilis";

const navItems = [
  { item: "Features" },
  { item: "Method" },
  { item: "Customers" },
  { item: "Changelog" },
  { item: "Pricing" },
  { item: "Company" },
  { item: "Contact" },
];

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  useEffect(() => {
    document.querySelector("html")?.classList.toggle("overflow-hidden",isOpen)
  }, [isOpen])

  useEffect(() => {
    const closeHamburgerNavigation = () => setIsOpen(false)

    window.addEventListener("orientationchange",closeHamburgerNavigation)
    window.addEventListener("resize",closeHamburgerNavigation)
    return () => {
     window.removeEventListener("orientationchange",closeHamburgerNavigation)
     window.removeEventListener("resize",closeHamburgerNavigation)
    }
  }, [setIsOpen])
  
  
  return (
    <header className="fixed top-0 left-0 w-full border border-b border-transparent-white backdrop-blur">
      <Container className="flex h-navigation-height">
        <Link className="flex items-center text-md" href="/">
          <Image
            src="/logo-light.svg"
            alt="linear-logo"
            width={18}
            height={18}
            className="mr-2"
          />
          Linear
        </Link>

        <nav
          className={cn(
            "transition-opacity duration-500 h-[calc(100vh_-_var(--navigation-height))] fixed top-navigation-height left-0 w-full overflow-auto bg-background md:block md:relative md:top-0 md:h-auto md:w-auto md:bg-transparent md:opacity-100",
            isOpen ? "visible opacity-100" : "invisible opacity-0"
          )}
        >
          <ul className="flex flex-col md:flex-row md:items-center h-full [&>*:nth-child(3)]:hideNav [&>*:nth-child(4)]:hideNav [&>*:nth-child(5)]:hideNav">
            {navItems.map((item) => (
              <li
                key={item.item}
                className={cn(isOpen ? "[&_a]:translate-y-0":"[&_a]:translate-y-8","text-md border-b border-b-grey-dark pl-8 md:pl-0 md:text-sm md:ml-6 md:border-none md:[&_a]:translate-y-0 [&_a]:hover:text-offWhite [&_a]:h-navigation-height [&_a]:w-full [&_a]:flex [&_a]:items-center [&_a]:duration-300 ease-in [&_a]:transition-transform")}
              >
                <Link href="/">{item.item}</Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="ml-auto h-full flex items-center">
          <Link className="mr-6 text-sm" href="/">
            Login
          </Link>
          <Button variant="primary" href="/">
            Sign up
          </Button>
        </div>

        <button className="ml-6 md:hidden" onClick={() => setIsOpen(!isOpen)}>
          <span className="sr-only">Toggle Menu</span>
          <Menu />
        </button>
      </Container>
    </header>
  );
};

export default Header;
