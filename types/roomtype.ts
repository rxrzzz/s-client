export type RoomTypeResponse = {
  roomTypes: {
    name: string;
    price: string;
    roomImageURLS: string[] | null;
    imageFileNames: string[] | null;
    id: number;
    features: string[] | null;
    description: string | null;
    rating: string;
  }[];
  isSuccess: boolean;
};
