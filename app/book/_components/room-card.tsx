"use client";
import Image from "next/image";
import { RoomType, Room } from "../types";
import { Button } from "@/components/ui/button";
import { Dialog, DialogTrigger, DialogContent } from "@/components/ui/dialog";
import { getNoOfDays } from "@/lib/utils";
import { BookingForm } from "./booking-form";

type Props = {
  roomType: RoomType;
  startDate: Date | undefined;
  endDate: Date | undefined;
  room: Room;
};
export const RoomCard = ({ room, roomType, endDate, startDate }: Props) => {
  const noOfDays = getNoOfDays({ endDate, startDate });
  return (
    <div className="w-full min-h-[55vh] border relative border-accent p-">
      <div className="w-full px-3 bg-accent flex justify-between text-secondary border-accent py-4 text-5xl border-t">
        <p>{roomType.name}</p>
        <p>{room.roomNo}</p>
      </div>
      <div className="ml-3 mt-3 flex gap-8">
        <ul className="list-disc ml-6">
          {roomType?.features?.map((feature) => (
            <li className="mb-1 text-lg" key={feature}>
              {feature}
            </li>
          ))}
        </ul>
        <div className="flex-1 items-center justify-center my-auto flex gap-2 h-full border-accent overflow-y-clip">
          {roomType.roomImageURLS?.map((url) => (
            <div
              className="h-full border flex-1 max-h-96 overflow-y-clip"
              key={url}
            >
              <Image
                src={url}
                alt=""
                width={400}
                height={400}
                className="flex-1 border object-cover"
              />
            </div>
          ))}
        </div>
      </div>
      <div className="w-fit absolute bottom-3  mt-3 ml-3 text-3xl font-bold">
        <p className="">
          <span className="block text-sm mb-1">Price per night:</span>$
          {roomType.price}
        </p>
        <Dialog>
          <DialogTrigger>
            <Button className="rounded-none mt-6 bg-accent hover:bg-accent hover:text-secondary text-2xl font-medium">
              Book This Room
            </Button>
          </DialogTrigger>
          <DialogContent className="p-0  m-0 bg-accent border-primary flex text-white rounded-none w-11/12 max-w-[900px]">
            <BookingForm
              room={room}
              roomType={roomType}
              endDate={endDate}
              startDate={startDate}
              noOfDays={noOfDays}
            />
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
};
