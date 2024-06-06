"use client";

import { useState } from "react";
import { DateRange } from "react-day-picker";
import { BookingCalendar } from "./_components/calendar";
import { Button } from "@/components/ui/button";
import { getAvailableRooms } from "./_api";
import { RoomCard } from "./_components/room-card";
import { Navbar } from "@/components/ui/navbar";

export default function Page() {
  const [range, setRange] = useState<DateRange | undefined>({
    from: new Date(),
  });
  const [getRooms, setGetRooms] = useState(false);
  const { availableRooms } = getAvailableRooms();

  const handleDayClick = (day: Date) => {
    if (range)
      if (!range.from || (range.from && range.to)) {
        setRange({ from: day, to: undefined });
      } else if (range.from && !range.to) {
        setRange({ from: range.from, to: day });
      }
  };

  return (
    <div>
      <Navbar />
      <main className="mx-4 p-5">
        <div className="flex gap-10">
          <div className="w-fit sticky border-accent top-24 h-fit px-4 ">
            <div>
              <h2 className="text-2xl mb-4 font-medium">Booking Date</h2>
            </div>
            <BookingCalendar
              handleDayClick={handleDayClick}
              range={range}
              setRange={setRange}
            />
            <div className="flex justify-between mt-2">
              {range && range.from ? (
                <div>
                  <p className="text-xl font-bold">From</p>
                  <p>{range.from.toLocaleDateString()}</p>
                </div>
              ) : (
                <></>
              )}
              {range && range.to ? (
                <div>
                  <p className="text-xl font-bold">To</p>
                  <p>{range.to.toLocaleDateString()}</p>
                </div>
              ) : (
                <></>
              )}
            </div>
            <Button
              className="rounded-none bg-accent mt-10 text-white text-xl py-6 w-full disabled:opacity-90 hover:bg-accent"
              onClick={() => setGetRooms(true)}
              disabled={range && typeof range.to === "undefined"}
            >
              View Available Rooms
            </Button>
          </div>
          <div className="flex-1 grid grid-cols-1 gap-3 ">
            <div>
              <h2 className="text-2xl mb-1 font-medium ">Available Rooms</h2>
            </div>
            {getRooms && availableRooms ? (
              availableRooms.rooms?.map(
                ({ rooms: room, room_types: roomType }) => (
                  <RoomCard
                    room={room}
                    roomType={roomType}
                    key={room.roomNo}
                    startDate={range && range.from}
                    endDate={range && range.to}
                  />
                )
              )
            ) : (
              <></>
            )}
          </div>
        </div>
      </main>
    </div>
  );
}
