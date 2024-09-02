"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "../ui/button";
import { useState } from "react";
import NavMenu from "./NavMenu";
import { signIn, signOut, useSession } from "next-auth/react";
import { useRouter } from "next/router";

export const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { data: session, status } = useSession();
  const router = useRouter();

  return (
    <nav className=" flex justify-between py-8 items-center">
      <div className="flex gap-5 items-center">
        <Image
          onClick={() => {
            setIsOpen(true);
          }}
          className="sm:hidden cursor-pointer w-auto h-auto"
          src="/assets/images/icon-menu.svg"
          width={40}
          height={40}
          alt="Toggle navigation"
        />
        <Link href="/">
          <Image
            className="w-auto h-auto mb-[2px]"
            src="/assets/images/logo.svg"
            width={200}
            height={200}
            alt="Logo"
          />
        </Link>
        <NavMenu
          containerClassName="hidden sm:flex gap-8 sm:ml-10 ml-0"
          navItemClassName="text-sm text-gray-400 font-normal hover:text-gray-600 py-4 hover:border-b-4 hover:border-b-red transition-all"
        />
      </div>
      <div className="flex items-center gap-3">
        <div className="relative">
          <Image
            className="cursor-pointer w-auto h-auto"
            src="/assets/images/icon-cart.svg"
            width={40}
            height={40}
            alt="Cart Icon"
          />
          <span className="absolute text-[8px] right-[-4px] top-[-6px] rounded-full px-[6px] py-[1px] text-white bg-orange">
            3
          </span>
        </div>
        <Link href="/sign-in">
          {status === "authenticated" && (
            <Button
              onClick={async () => {
                await signOut({ redirect: false });
                router.push("/sign-in", undefined, { shallow: true });
              }}
              size="sm"
              className="bg-orange px-6 text-white"
            >
              Sign Out
            </Button>
          )}
          {status === "unauthenticated" && router.pathname !== "/sign-in" && (
            <Button
              onClick={() => {
                router.push("/sign-in", undefined, { shallow: true });
              }}
              size="sm"
              className="bg-orange px-6 text-white"
            >
              Sign In
            </Button>
          )}
        </Link>
        {isOpen && (
          <div className="sm:hidden w-full fixed left-0 top-0 h-screen bg-[rgba(0,0,0,.2)] z-10 transition-all delay-1000">
            <div className="w-[60%] px-8 pt-12 opacity-100 h-full bg-white">
              <Image
                onClick={(e) => {
                  setIsOpen(false);
                }}
                src="/assets/images/icon-close.svg"
                width={20}
                height={20}
                className="cursor-pointer w-auto h-auto mb-16 "
                alt="Close Icon"
              />
              <NavMenu
                containerClassName="flex-col gap-5 animate-scaleX"
                navItemClassName="text-[rgba(0,0,0,.8)] hover:text-black"
              />
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default NavBar;
