import React from "react";
import Container from "./container";
import Link from "next/link";
import Image from "next/image";
import { Github, Slack, Twitter, Youtube } from "lucide-react";

const footerLinks = [
  {
    title: "Product",
    links: [
      { title: "Features", href: "#" },
      { title: "Integrations", href: "#" },
      { title: "Pricing", href: "#" },
      { title: "Changelog", href: "#" },
      { title: "Docs", href: "#" },
      { title: "Linear Method", href: "#" },
      { title: "Download", href: "#" },
    ],
  },
  {
    title: "Company",
    links: [
      { title: "About Us", href: "#" },
      { title: "Blog", href: "#" },
      { title: "Careers", href: "#" },
      { title: "Customers", href: "#" },
      { title: "Brand", href: "#" },
    ],
  },
  {
    title: "Resources",
    links: [
      { title: "Startup Program", href: "#" },
      { title: "Community", href: "#" },
      { title: "Contact", href: "#" },
      { title: "DPA", href: "#" },
      { title: "Privacy Policy", href: "#" },
      { title: "Terms of Service", href: "#" },
      { title: "Privacy Policy", href: "#" },
      { title: "Terms of Service", href: "#" },
      { title: "Report a Vulnerability", href: "#" },
    ],
  },
  {
    title: "Developers",
    links: [
      { title: "API", href: "#" },
      { title: "Status", href: "#" },
      { title: "Github", href: "#" },
      { title: "README", href: "#" },
    ],
  },
];

const Footer = () => {
  return (
    <footer className="mt-12 border-t border-transparent-white py-[5.6rem] text-sm">
      <Container className="flex flex-col lg:flex-row justify-between">
       <div>
       <div className="flex flex-row justify-between lg:flex-col h-full">
        <Link className="flex items-center text-sm" href="/">
          <Image
            src="/logo-light.svg"
            alt="linear-logo"
            width={18}
            height={18}
            className="mr-2"
          />
          <span className="text-grey text-sm mr-4">Linear - Designed Worldwide</span>
        </Link>

        <div className="mt-auto flex space-x-4 text-grey">
            <Twitter className="h-6 w-6"/>
            <Github className="h-6 w-6"/>
            <Slack className="h-6 w-6"/>
            <Youtube className="h-6 w-6"/>
        </div>
        </div>
       </div>
        <div className="flex flex-wrap">
          {footerLinks.map((column) => (
            <div className="min-w-[50%] lg:min-w-[18rem] mt-10 lg:mt-0" key={column.title}>
              <h3 className="font-medium mb-3 ">{column.title}</h3>
              <ul>
                {column.links.map((link) => (
                  <li key={link.title} className="[&_a]:last:mb-0">
                    <Link className="text-grey mb-3 block hover:text-offWhite transition-colors" href={link.href}>{link.title}</Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
