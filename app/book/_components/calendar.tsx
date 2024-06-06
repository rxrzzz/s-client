import { Calendar } from "@/components/ui/calendar";
import { Dispatch, SetStateAction, useEffect } from "react";
import { DateRange } from "react-day-picker";

type Props = {
  range: DateRange | undefined;
  setRange: Dispatch<SetStateAction<DateRange | undefined>>;
  handleDayClick: (day: Date) => void;
};
export const BookingCalendar = ({ range, setRange, handleDayClick }: Props) => {
  const date = new Date();



  return (
    <>
      <Calendar
        mode="range"
        className="text-accent font-bold bg- w-fit"
        style={{
          backgroundColor: "#1c1a17",
          color: "white",
          paddingInline: "50px",
          paddingBlock: "30px",
        }}
        styles={{
          row: {
            border: "1px solid #fddc5c",
          },
          head_row: {
            backgroundColor: "#fddc5c",
            paddingBlock: "10px",
            color: "black",
          },
          head_cell: {
            color: "black",
          },
          cell: {},
        }}
        disabled={{ before: date }}
        selected={range}
        onDayClick={handleDayClick}
        onSelect={setRange}
      />
    </>
  );
};
