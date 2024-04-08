"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const menuItems = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "About Us",
    href: "/about",
    subItems: [
      { label: "Our Story", href: "/about#our-story" },
      { label: "Why Choose Us", href: "/about#why-choose-us" },
    ],
  },
  {
    label: "Our Services",
    href: "/services",
    subItems: [
      {
        label: "Cleaning",
        href: "/services/cleaning",
        subItems: [
          { label: "Stroller Cleaning", href: "/services/cleaning/strollers" },
          { label: "Car Seat Cleaning", href: "/services/cleaning/car-seats" },
          {
            label: "High Chair Cleaning",
            href: "/services/cleaning/high-chairs",
          },
          {
            label: "Other Baby Gear Cleaning",
            href: "/services/cleaning/other",
          },
        ],
      },
      {
        label: "Repair",
        href: "/services/repair",
        subItems: [
          { label: "Stroller Repair", href: "/services/repair/strollers" },
          { label: "Car Seat Repair", href: "/services/repair/car-seats" },
          { label: "High Chair Repair", href: "/services/repair/high-chairs" },
        ],
      },
      {
        label: "Rental",
        href: "/services/rental",
        subItems: [
          { label: "Stroller Rental", href: "/services/rental/strollers" },
          { label: "Car Seat Rental", href: "/services/rental/car-seats" },
          {
            label: "Full Travel System Rental",
            href: "/services/rental/full-travel-system",
          },
        ],
      },
    ],
  },
  {
    label: "Pricing",
    href: "/pricing",
  },
  {
    label: "FAQs",
    href: "/faqs",
  },
  {
    label: "Blog",
    href: "/blog",
  },
  {
    label: "Contact Us",
    href: "/contact",
    subItems: [
      { label: "Booking", href: "/contact#booking" },
      { label: "Customer Service", href: "/contact#customer-service" },
      { label: "Location", href: "/contact#location" },
    ],
  },
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div>
      <span className="text-sm bg-black text-white w-full flex text-center py-1 justify-center">
        Free delivery in all around UAE above AED 100
      </span>
      <header className="sticky top-0 z-10 bg-white shadow dark:shadow-lg">
        <div className="flex items-center justify-between h-16 px-4 md:px-6">
          <Link className="flex-col pr-4 md:pr-8" href="/">
            <p className="text-xl md:text-2xl font-bold">Crizalapparel</p>
          </Link>
          <nav className="md:hidden">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
              <Menu className="w-6 h-6" />
            </button>
          </nav>
          <nav
            className={`absolute top-0 left-0 w-full bg-sky-100 h-screen transform ${isMenuOpen ? "translate-x-0" : "-translate-x-full"} transition-transform duration-300 ease-in-out md:relative md:translate-x-0 md:bg-transparent md:w-auto md:h-auto`}
          >
            <div className="flex md:hidden items-center justify-end h-16 px-4">
              <button onClick={() => setIsMenuOpen(false)}>
                <X className="w-6 h-6" />
              </button>
            </div>
            <div className="flex flex-col md:flex-row md:space-x-8 min-w-0 text-sm font-medium">
              {menuItems.map((item, index) => (
                <div className="group" key={index}>
                  <Link
                    className="flex items-center px-8 py-2 text-lg md:justify-start hover:bg-sky-200"
                    href={item.href}
                  >
                    {item.label}
                  </Link>
                  {item.subItems && (
                    <div className="md:absolute md:bg-white md:shadow-lg md:rounded-lg md:mt-1 md:min-w-[200px] md:hidden group-hover:block">
                      <div className="flex flex-col">
                        {item.subItems.map((subItem, subIndex) => (
                          <Link
                            className="px-4 py-2 hover:bg-sky-100"
                            href={subItem.href}
                            key={subIndex}
                          >
                            {subItem.label}
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </nav>
        </div>
      </header>
    </div>
  );
}
