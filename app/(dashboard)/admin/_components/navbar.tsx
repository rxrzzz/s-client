import { Separator } from "@/components/ui/separator";
import { Bed, Calendar, Cog, DollarSign, Users } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export const Navbar = () => {
  return (
    <aside className="sticky h-screen left-0 z-10 inset-y-0 hidden border-accent flex-col border-r bg-background sm:flex">
      <Link
        href={"/"}
        className="bg-accent flex items-center gap-2 py-6 text-white px-10 font-bold text-2xl"
      >
        <Image
          src={"/logo.svg"}
          alt=""
          height={40}
          width={40}
          className="invert"
        />
        <p>Bliss Hotel.</p>
      </Link>
      <div className="flex flex-col ">
        <Link
          href={"#"}
          className=" flex items-center gap-5 py-3 text- px-10 font-medium  text-lg hover:bg-secondary"
        >
          <Users size={30} className="" /> <p>Customers</p>
        </Link>
        <Separator />
        <Link
          href={"#"}
          className=" flex items-center gap-5 py-3 text- px-10 font-medium  text-lg hover:bg-secondary"
        >
          <Bed size={30} /> <p>Rooms</p>
        </Link>
        <Separator />
        <Link
          href={"#"}
          className=" flex items-center gap-5 py-3 text- px-10 font-medium  text-lg hover:bg-secondary"
        >
          <Calendar size={30} /> <p>Bookings</p>
        </Link>
        <Separator />
        <Link
          href={"#"}
          className=" flex items-center gap-5 py-3 text- px-10 font-medium  text-lg hover:bg-secondary"
        >
          <DollarSign size={30} /> <p>Payments</p>
        </Link>
        <Separator />
      </div>

      <Link
        href={"#"}
        className=" flex mt-auto items-center gap-5 border-t  py-3 text- px-10 font-bold text-2xl hover:bg-secondary"
      >
        <Cog size={30} /> <p>Settings</p>
      </Link>
    </aside>
  );
};
