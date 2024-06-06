import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const getNoOfDays = ({
  startDate,
  endDate,
}: {
  startDate: Date | undefined;
  endDate: Date | undefined;
}) => {
  if (startDate && endDate) {
    const diffInMilliseconds = Math.abs(
      endDate.getTime() - startDate.getTime()
    );
    const diffInDays = Math.ceil(diffInMilliseconds / (1000 * 3600 * 24));
    return diffInDays;
  }
};
