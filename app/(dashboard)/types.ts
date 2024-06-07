export type Customer = {
  firstName: string;
  lastName: string;
  email: string;
  id: string;
  isVerified: boolean;
  createdAt: string;
};

export type Room = {
  roomNo: number;
  typeId: number;
  status: "available" | "pending" | "booked";
  noOfTimesBooked: number;
  name: string;
  price: string;
};

export type GetRoomResponse = {
  rooms: Room[];
  noOfRooms: number;
  maxPageNo: number;
  isSuccess: boolean;
};
