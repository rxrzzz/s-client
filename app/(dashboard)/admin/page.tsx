"use client";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { getRooms } from "./_api";
import { RoomTable } from "../_components/room-table";
import { room_columns } from "../room-columns";

export default function Page() {
  const { rooms } = getRooms();
  console.log(rooms);
  return (
    <div>
      <Breadcrumb>
        <BreadcrumbList className="text-lg font-medium mb-8">
          <BreadcrumbItem>
            <BreadcrumbLink href="/">Home</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink href="/admin">Overview</BreadcrumbLink>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
      <div className="flex max-w-5xl gap-2">
        <Card className="flex-1 border-accent rounded-none gap-2 p-4">
          <CardTitle>Bookings</CardTitle>
          <CardDescription>Bookings in the past week</CardDescription>
        </Card>
        <Card className="flex-1 border-accent rounded-none gap-2 p-4">
          <CardTitle>Rooms</CardTitle>
          <CardDescription>Rooms available for booking</CardDescription>
        </Card>
        <Card className="flex-1 border-accent rounded-none gap-2 p-4">
          <CardTitle>Bookings</CardTitle>
          <CardDescription>Bookings in the past week</CardDescription>
        </Card>
      </div>
      <div>
        {rooms ? (
          <div className="max-w- mt-10">
            <RoomTable columns={room_columns} data={rooms.rooms} />
          </div>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
}
