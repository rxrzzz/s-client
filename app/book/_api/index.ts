import { api } from "@/lib/axios";
import useSWR from "swr";
import {
  AvailableRoomsResponse,
  CreateBookingRequest,
  CreateBookingResponse,
} from "../types";
import useSWRMutation from "swr/mutation";

export const getAvailableRooms = () => {
  const fetcher = (url: string): Promise<AvailableRoomsResponse> => {
    return api.get(url);
  };
  const { data: availableRooms, isLoading: availableRoomsIsLoading } = useSWR(
    "/rooms/getAvailableRooms",
    fetcher
  );

  return {
    availableRooms,
    availableRoomsIsLoading,
  };
};

export const createBooking = () => {
  const fetcher = (
    url: string,
    { arg }: { arg: CreateBookingRequest }
  ): Promise<CreateBookingResponse> => {
    return api.post(url, arg);
  };
  const {
    trigger: makeBooking,
    isMutating: makeBookingIsLoading,
    data: makeBookingData,
    error: makeBookingError,
  } = useSWRMutation("/bookings/createBooking", fetcher);

  return {
    makeBooking,
    makeBookingIsLoading,
    makeBookingData,
    makeBookingError,
  };
};
