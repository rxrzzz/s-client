import { Booking } from "@/app/book/types";
import { api } from "@/lib/axios";
import useSWR from "swr";
import { Customer, GetRoomResponse, Room } from "../../types";

export const getBookings = () => {
  const fetcher = (url: string): Promise<Booking[]> => {
    return api.get(url);
  };
  const { data: bookings, isLoading: bookingsAreLoading } = useSWR(
    "/bookings/listBookings",
    fetcher
  );

  return {
    bookings,
    bookingsAreLoading,
  };
};

export const getRooms = () => {
  const fetcher = (url: string): Promise<GetRoomResponse> => {
    return api.get(url);
  };
  const { data: rooms, isLoading: roomsAreLoading } = useSWR(
    "/rooms/listRooms",
    fetcher
  );
  return {
    rooms,
    roomsAreLoading,
  };
};

export const getCustomers = () => {
  const fetcher = (url: string): Promise<Customer[]> => {
    return api.get(url);
  };

  const { data: customers, isLoading: customersAreLoading } = useSWR(
    "/customers/listCustomers",
    fetcher
  );
  return {
    customers,
    customersAreLoading,
  };
};
