import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import React, { FC } from "react";
import { Room, RoomType } from "../types";

interface Props {
  startDate?: Date;
  endDate?: Date;
  roomType: RoomType;
  room: Room;
  noOfDays?: number;
}

export const BookingForm = ({
  startDate,
  endDate,
  roomType,
  room,
  noOfDays,
}: Props) => {
  
  return (
    <>
      <div className="flex-1 p-12 gap-2 text-primary">
        <h1 className="text-3xl font-bold text-secondary">Booking Details</h1>
        <div className="flex flex-col gap-6 mt-8">
          <div>
            <h3 className="font-medium opacity-90">Start Date</h3>
            <p className="text-xl font-bold">{startDate?.toDateString()}</p>
          </div>
          <div>
            <h3 className="font-medium opacity-90">End Date</h3>
            <p className="text-xl font-bold">{endDate?.toDateString()}</p>
          </div>
          <div>
            <h3 className="font-medium opacity-90">Room Type</h3>
            <p className="text-xl font-bold">{roomType.name}</p>
          </div>
          <div>
            <h3 className="font-medium opacity-90">Room Number</h3>
            <p className="text-xl font-bold">{room.roomNo}</p>
          </div>
          <div>
            <h3 className="font-medium opacity-90">Number Of Days</h3>
            <p className="text-xl font-bold">{noOfDays}</p>
          </div>
          {noOfDays ? (
            <div>
              <h3 className="font-medium opacity-90">Total Price</h3>
              <p className="text-5xl font-bold  text-secondary">
                ${noOfDays * Number(roomType.price)}
              </p>
            </div>
          ) : (
            <></>
          )}
        </div>
      </div>
      <div className="flex-1 p-12 bg-primary ">
        <form className="text-black mt-14 flex flex-col gap-5">
          <div>
            <label htmlFor="firstName" className="font-bold">
              First Name
            </label>
            <Input
              className="bg-transparent border-black mt-2 rounded-none text-black text-xl"
              type="text"
              name="firstName"
              required
            />
          </div>
          <div>
            <label htmlFor="lastName" className="font-bold">
              Last Name
            </label>
            <Input
              className="bg-transparent border-black mt-2 rounded-none text-black text-xl"
              type="text"
              name="lastName"
              required
            />
          </div>
          <div>
            <label htmlFor="email" className="font-bold">
              Email
            </label>
            <Input
              className="bg-transparent border-black mt-2 rounded-none text-black text-xl"
              name="email"
              type="email"
              required
            />
          </div>
          <div>
            <label htmlFor="password" className="font-bold">
              Password
            </label>
            <Input
              className="bg-transparent border-black mt-2 rounded-none text-black text-xl"
              min={6}
              type="password"
            />
          </div>
          <Button className="rounded-none mt-10 bg-accent hover:bg-accent hover:text-primary text-xl py-6 font-medium">
            Make Booking
          </Button>
        </form>
      </div>
    </>
  );
};
