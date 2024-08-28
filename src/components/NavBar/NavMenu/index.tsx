import Link from "next/link";
import React from "react";

export const NavMenu = ({
  containerClassName,
  navItemClassName = "",
}: {
  containerClassName: string;
  navItemClassName?: string;
}) => {
  return (
    <ul className={`flex ${containerClassName}`}>
      <li>
        <Link href="/" className={`font-bold ${navItemClassName}`}>
          Collections
        </Link>
      </li>
      <li>
        <Link href="/test" className={`font-bold ${navItemClassName}`}>
          Women
        </Link>
      </li>
      <li>
        <Link href="/test" className={`font-bold ${navItemClassName}`}>
          Men
        </Link>
      </li>
      <li>
        <Link href="/test" className={`font-bold ${navItemClassName}`}>
          Blog
        </Link>
      </li>
      <li>
        <Link href="/test" className={`font-bold ${navItemClassName}`}>
          Contact
        </Link>
      </li>
    </ul>
  );
};

export default NavMenu;
