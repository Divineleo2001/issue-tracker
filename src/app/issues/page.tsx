import React from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import prisma from "@/../prisma/client";
import {
  Table,
  TableBody,
  TableCell,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const IssuesPage = async () => {
  const issues = await prisma.issue.findMany();
  return (
    <div className="flex flex-col gap-5">
      <Link href="/issues/new">
        <Button variant="default" className="ml-10 mt-10">
          New Issue
        </Button>
      </Link>

      <Table className="max-w-[1700px]  mx-auto">
        <TableHeader className="bg-slate-100">
          <TableRow>
            <TableCell className="w-[10%]">Issues</TableCell>
            <TableCell className="w-[40%]">Description</TableCell>
            <TableCell className="w-[10%]">Created</TableCell>
          </TableRow>
        </TableHeader>
        <TableBody>
          {issues.map((issue) => (
            <TableRow key={issue.id}>
              <TableCell>{issue.title}</TableCell>
              <TableCell>{issue.description}</TableCell>
              <TableCell>{issue.createdAt.toDateString()}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default IssuesPage;
