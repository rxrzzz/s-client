import { Badge } from "@/components/ui/badge";
import { Room } from "./types";
import { ColumnDef } from "@tanstack/react-table";
export const room_columns: ColumnDef<Room>[] = [
  {
    accessorKey: "roomNo",
    header: () => <p className="text-base text-accent font-bold">Room Number</p>,
  },
  {
    accessorKey: "noOfTimesBooked",
    header: () => <p className="text-base text-accent font-bold">No Of Times Booked</p>,
  },
  {
    accessorKey: "status",
    header: () => <p className="text-base text-accent font-bold">Status</p>,
    cell: ({ row }) => {
      return (
        <Badge className="capitalize" variant={"default"}>
          {row.getValue("status")}
        </Badge>
      );
    },
  },
  {
    accessorKey: "createdAt",
    header: () => <p className="text-base text-accent font-bold">Created At</p>,
  },
  {
    accessorKey: "roomName",
    header: () => <p className="text-base text-accent font-bold">Room Type</p>,
    accessorFn: (room) => {
      return room.roomType.name;
    },
  },
  {
    accessorKey: "roomPrice",
    header: () => <p className="text-base text-accent font-bold">Room Price</p>,
    accessorFn: (room) => {
      return room.roomType.price;
    },
    cell: ({ row }) => {
      return <>${row.getValue("roomPrice")}</>;
    },
  },
];
