"use client";
import { Navbar } from "@/components/ui/navbar";
import { api } from "@/lib/axios";
import { RoomTypeResponse } from "@/types/roomtype";
import { GithubIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";
import useSWR from "swr";

const reviews = [
  {
    author: "Emily",
    rating: 4,
    review:
      "The hotel had a warm and inviting atmosphere. The rooms were spacious and well-appointed, with comfortable beds and modern amenities. However, the service at the restaurant could have been better.",
  },
  {
    author: "Alex",
    rating: 5,
    review:
      "An exceptional experience from start to finish! The staff went above and beyond to ensure our stay was comfortable and memorable. The facilities were top-notch, and the location was perfect for exploring the city.",
  },
  {
    author: "Sarah",
    rating: 3,
    review:
      "The hotel itself was nice and clean, but there were a few issues with our stay. The pool area was overcrowded, and the parking situation was quite inconvenient. Overall, it was an average experience.",
  },
  {
    author: "Sarah",
    rating: 4,
    review:
      "The hotel itself was nice and clean, but there were a few issues with our stay. The pool area was overcrowded, and the parking situation was quite inconvenient. Overall, it was an average experience.",
  },
];

const fetcher = async (
  ...args: Parameters<typeof fetch>
): Promise<RoomTypeResponse> => {
  const response = await fetch(...args);
  if (!response.ok) {
    throw new Error(`HTTP error! Status: ${response.status}`);
  }
  return await response.json();
};

export default function Home() {
  const { data } = useSWR(
    "http://127.0.0.1:3891/api/v1/roomtypes/getRoomTypes",
    fetcher
  );

  return (
    <main className="tracking-tight font-quicksand bg-primary text-accent">
      <Navbar />
      <div className="mx- border-2 border-accent">
        <Image
          className="object-cover w-full max-h-screen object-bottom"
          alt=""
          src={"/main.jpeg"}
          width={3000}
          height={2200}
        />
      </div>
      <div className="text-8xl bg-secondary font-britney text-center tracking-tighter py-48  text- px-4">
        <p>
          Nestled in the heart of a vibrant downtown district, The Bliss Hotel
          offers a refined sanctuary for discerning travelers. Our elegant
          accommodations ensure a truly indulgent experience.
        </p>
      </div>
      <section className="border-b border-accent grid grid-cols-2 ">
        {data ? (
          data.roomTypes.map((room) => (
            <div className="w-full h-[60vh] border relative border-accent p-">
              <div className="w-full bg-accent  text-primary border-accent absolute bottom-0 py-4 text-5xl border-t">
                <p className="ml-3 font-medium text-secondary">{room.name}</p>
              </div>
              <p className="mt-3 ml-3 text-3xl font-medium">${room.price}</p>
            </div>
          ))
        ) : (
          <></>
        )}
      </section>
      <section className="  flex gap-1">
        {reviews.map(({ author, rating, review }) => (
          <div className="flex-1 bg-transparent backdrop-blur-lg p-8 border-r last:border-none border-accent pb-44 relative">
            <p className=" text-lg font-extrabold font-britney">{author}</p>
            <p className="text-xl mt-4">{review}</p>
            <p className="text-6xl font-bold absolute bottom-8 text-secondary font-britney">
              {rating}/<span className="text-black">5</span>
            </p>
          </div>
        ))}
      </section>
      <Link
        href="/book"
        className="fixed z-10 text-2xl bottom-8 right-8 shadow-md bg-secondary h-32 w-32 flex justify-center items-center flex-col text-accent font-bold rounded-full"
      >
        <span className="block">Book</span> <span>Now</span>
      </Link>
      <footer className=" border bg-secondary border-accent h-[95vh]  relative overflow-clip">
        <div className="flex justify-center items-center">
          <div className=" h-fit w-fit">
            <Image
              className="w-fit h-fit object-contain  "
              alt=""
              src="/logo.svg"
              width={500}
              height={500}
            />
          </div>
        </div>
        <div className="absolute text-8xl gap-10 font-bold border-accent bg-accent text-secondary flex text-nowrap bottom-0 py-5 overflow-x-clip ">
          <p>Bliss Hotel</p>
          <p>Bliss Hotel</p>
          <p>Bliss Hotel</p>
          <p>Bliss Hotel</p>
          <p>Bliss Hotel</p>
        </div>
      </footer>
    </main>
  );
}
