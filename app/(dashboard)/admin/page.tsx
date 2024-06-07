"use client";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Card, CardDescription, CardTitle } from "@/components/ui/card";
import { GetRoomProps, getRooms } from "./_api";
import { useEffect, useState } from "react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

export default function Page() {
  const [defaultParams, setDefaultParams] = useState<GetRoomProps>({
    ascOrDesc: "asc",
    limit: 10,
    orderBy: "roomNo",
    pageNo: 1,
    searchBy: [],
  });
  const { rooms, refetchRooms } = getRooms({
    ...defaultParams,
  });

  useEffect(() => {
    refetchRooms();
    console.log(defaultParams.pageNo);
  }, [defaultParams]);

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
          <>
            <div className="max-w- mt-10">
              <Table>
                <TableCaption>Recent Rooms</TableCaption>
                <TableHeader>
                  <TableRow>
                    <TableHead>N/0</TableHead>
                    <TableHead>Room Type</TableHead>
                    <TableHead>Room Number</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>No Of Times Booked</TableHead>
                    <TableHead>Price</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {rooms.rooms.map((room, index) => (
                    <TableRow key={room.roomNo}>
                      <TableCell>{index + 1}</TableCell>
                      <TableCell>{room.name}</TableCell>
                      <TableCell>{room.roomNo}</TableCell>
                      <TableCell>{room.status}</TableCell>
                      <TableCell>{room.noOfTimesBooked}</TableCell>
                      <TableCell>{room.price}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
            <button
              onClick={async () => {
                setDefaultParams({
                  ...defaultParams,
                  pageNo: (defaultParams.pageNo += 1),
                });
              }}
            >
              Next
            </button>
          </>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
}
