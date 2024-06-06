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
  createdAt: string;
  roomType: {
    name: string;
    price: number;
    id: number;
  };
};

export type GetRoomResponse = {
  rooms: Room[];
  isSuccess: boolean;
};
