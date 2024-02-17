import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";
import prisma from "@/../prisma/client";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const ViewPatientIssue = async ({
  params,
}: {
  params: { patientId: number };
}) => {
  const comments = await prisma.comment.findMany({
    where: {
      patientId: parseInt(params.patientId?.toString()),
    },
    include: {
      patient: true,
    },
  });

  const patientName = `${comments[0].patient.firstName} ${comments[0].patient.lastName}`;

  return (
    <div className="max-w-6xl  mx-auto p-10">
      <Link href={`/patients/${params.patientId}/newcomment`}>
        <div className="flex justify-end m-3">
          <Button className="">Add new Issue</Button>
        </div>
      </Link>
      <h1 className="text-3xl font-bold py-4">{patientName} Issues</h1>
      <Table className="">
        <TableHeader className="bg-slate-100">
          <TableRow>
            <TableHead className="w-[10%]">id</TableHead>
            <TableHead className="w-[20%]">Comments</TableHead>
            <TableHead className="w-[30%]">Doctor</TableHead>

            <TableHead className="w-[20%]">Time</TableHead>
            <TableHead className="w-[20%]">Date</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {comments.map((comment, index) => (
            <TableRow key={comment.id}>
              <TableCell>{index + 1}</TableCell>
              <TableCell>{comment.comment}</TableCell>
              <TableCell>{comment.doctorName}</TableCell>
              <TableCell>{comment.createdAt.toTimeString()}</TableCell>
              <TableCell>{comment.createdAt.toDateString()}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default ViewPatientIssue;
