"use client";
import { Calendar } from "@/components/ui/calendar";
import { useState } from "react";
import { DateRange } from "react-day-picker";

type FromTo = {
  from: Date;
  to: Date;
};
export default function Page() {
  const date = new Date();

  const [range, setRange] = useState<DateRange | undefined>({
    from: new Date(),
  });
  console.log({range})
  const handleDayClick = (day: Date) => {
    console.log({ day });
    if (range)
      if (!range.from || (range.from && range.to)) {
        setRange({ from: day, to: undefined });
      } else if (range.from && !range.to) {
        setRange({ from: range.from, to: day });
      }
  };
  
  return (
    <main className="mx-4 p-5">
      <h1 className="text-5xl font-medium mb-10">Book a Room</h1>
      <Calendar
        mode="range"
        className="text-accent font-bold bg- w-fit"
        disabled={{ before: date }}
        selected={range}
        onDayClick={handleDayClick}
        onSelect={setRange}
      />
    </main>
  );
}
