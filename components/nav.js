import Link from "next/link";
import {
  SearchIcon,
  ShoppingBagIcon,
  FingerPrintIcon,
  MenuIcon,
} from "@heroicons/react/solid";
import React, { useState, useEffect, useRef } from 'react';


const links = [
  { href: "/", label: "Press" },
  { href: "/", label: "About" },
  { href: "/", label: "Shop" },
].map((link) => {
  link.key = `nav-link-${link.href}-${link.label}`;
  return link;
});

const Nav = () => {
  const [scrollY, setScrollTop] = useState(0);

  const logit = () => {
    setScrollTop(window.pageYOffset);
  }

  const scrollRef = useRef();
  const bannerRef = useRef();

  useEffect(() => {
    const watchScroll = () => {
      window.addEventListener('scroll', logit);
    }

    if ( scrollY > 50) {
      scrollRef.current.style.position = 'fixed';
      scrollRef.current.style.top = 0;
      // scrollRef.current.style.display = 'none'
      bannerRef.current.style.display = 'flex';
    } else {
      scrollRef.current.style.position = 'relative';

      bannerRef.current.style.display = 'none';
      
    }
    return watchScroll();   
  })

  return (
    <>
      <div class="bg-yellow-100 text-center flex justify-center md:hidden">
        <div class="text-gray-900 font-thin w-1/3 uppercase text-xs py-4">
          Welcome to biko. Our Jewels are proudly mad in canada, with love.{" "}
          <span>
            <a>| shop now</a>
          </span>
        </div>
      </div>

      {/* FULL WINDOW DISPLAYED NON-SCROLL */}
      <div class="hidden md:block">
        <div class="text-green-900 font-bold w-full uppercase text-xs py-4 flex">
          <span class="flex items-center ml-10 w-1/2">
            <FingerPrintIcon className="w-12 h-12 text-gray-900" />
          </span>
        <ul class="flex flex-row-reverse w-1/2">
          <li class="flex items-center">
            <a href="/" class="p-4">
              <SearchIcon className="w-4 h-4 text-gray-900" />
            </a>
          </li>
          <li class="flex items-center">
            <a href="/" class="p-4">
              <ShoppingBagIcon className="w-4 h-4 text-gray-900" />
            </a>
          </li>
        </ul>
        </div>
      </div>

      {/* FULL WINDOW DISPLAYED NON-SCROLL */}
      <nav ref={scrollRef} class="bg-gray-900 md:flex justify-between hidden w-full">
        <span ref={bannerRef} class="flex items-center ml-10">
          <FingerPrintIcon className="w-10 h-10 text-gray-50" />
        </span>
        <ul class="flex container">
          <li class="text-gray-50 py-3 px-5">
            <Link href="/">
              <a class="uppercase text-sm">Lookbook</a>
            </Link>
          </li>
          <ul class="flex">
            {links.map(({ key, href, label }) => (
              <li class="text-gray-50 py-3 px-5" key={key}>
                <Link href={href}>
                  <a class="uppercase text-sm">{label}</a>
                </Link>
              </li>
            ))}
          </ul>
        </ul>
        <ul class="flex justify-around">
          <li class="flex items-center">
            <a href="/" class="border-l border-gray-50 p-4">
              <SearchIcon className="w-4 h-4 text-gray-50" />
            </a>
          </li>
          <li class="flex items-center">
            <a href="/" class="border-l border-gray-50 p-4">
              <ShoppingBagIcon className="w-4 h-4 text-gray-50" />
            </a>
          </li>
        </ul>
      </nav>

      <nav class="bg-gray-900 md:hidden">
        <ul class="grid grid-cols-3">
          <li class="flex items-center justify-center">
            <a href="/" class="border-gray-50 p-4">
              <MenuIcon className="w-full h-4 text-gray-50" />
            </a>
          </li>
          <li class="flex items-center">
            <a href="/" class="border-l border-gray-50 p-4">
              <ShoppingBagIcon className="w-full h-4 text-gray-50" />
            </a>
          </li>
          <li class="flex items-center">
            <a href="/" class="border-l border-gray-50 p-4">
              <SearchIcon className="w-full h-4 text-gray-50" />
            </a>
          </li>
        </ul>
      </nav>
      <div  class="bg-gray-50 text-center md:hidden">
        <span class="flex items-center justify-center">
          <FingerPrintIcon className="w-10 h-10 text-gray-900" />
        </span>
        <div class="pt-2 text-red-900 font-thin">
          Free shiping in north america on orders
        </div>
        <div class="text-red-900 font-thin text-xs pb-4">$150+</div>
      </div>
    </>
  );
};

export default Nav;
