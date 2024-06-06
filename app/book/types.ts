export type AvailableRoomsResponse = {
  rooms: AvailableRoom[];
  isSuccess: boolean;
};

export type AvailableRoom = {
  rooms: Room;
  room_types: RoomType;
};

export type Room = {
  roomNo: number;
  typeId: number;
  status: string;
  noOfTimesBooked: number;
  createdAt: string;
};

export type RoomType = {
  id: number;
  rating: string;
  name: string;
  price: string;
  roomImageURLS: string[] | undefined;
  description: string;
  features: string[];
  imageFileNames: any;
  createdAt: string;
};

export type CreateBookingRequest = {
  roomNo: number;
  startDate: string;
  endDate: string;
  customerId: string;
  amount: number;
};

export type Booking = {
  id: string;
  customerId: string;
  startDate: string;
  endDate: string;
  status: "pending";
  createdAt: string;
  roomNo: number;
  //amount comes as a string from the endpoint
  amount: string;
};

export type CreateBookingResponse = {
  booking: Booking;
  isSuccess: boolean;
};
