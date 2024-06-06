"use client";
import Image from "next/image";
import Link from "next/link";

export const Navbar = () => {
  return (
    <div className="sticky top-0 w-full z-20 flex px-2 justify-between items-center bg-accent text-primary text-3xl font-medium">
      <Link href={"/"} className="flex gap-1 items-center font-britney text-secondary">
        <Image
          alt=""
          src={"/logo.svg"}
          width={60}
          height={60}
          className="invert"
        />
        <p>Bliss Hotel</p>
      </Link>
      <p>Est. <span className="text-secondary">1871</span></p>
    </div>
  );
};
