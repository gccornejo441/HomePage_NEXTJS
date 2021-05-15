import Link from "next/link";
import {
  SearchIcon,
  ShoppingBagIcon,
  FingerPrintIcon,
  MenuIcon,
} from "@heroicons/react/solid";

const links = [
  { href: "/", label: "Press" },
  { href: "/", label: "About" },
  { href: "/", label: "Shop" },
].map((link) => {
  link.key = `nav-link-${link.href}-${link.label}`;
  return link;
});

const Nav = () => (
  <>
    <nav class="bg-gray-900 md:flex justify-between hidden">
      <span class="flex items-center ml-10">
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
  </>
);

export default Nav;
