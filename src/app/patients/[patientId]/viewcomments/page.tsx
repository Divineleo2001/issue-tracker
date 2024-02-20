import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";
import prisma from "@/../prisma/client";
import ViewCommentTable from "./ViewCommentTable";

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
      <Link href="/patients">
        <Button>Back</Button>
      </Link>
      <h1 className="text-3xl font-bold py-4">{patientName} Issues</h1>

      <ViewCommentTable comments={comments} />

      <Link href={`/patients/${params.patientId}/newcomment`}>
        <div className="flex justify-end m-3">
          <Button className="">Add new Issue</Button>
        </div>
      </Link>
    </div>
  );
};

export default ViewPatientIssue;
