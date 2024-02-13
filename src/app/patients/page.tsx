import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import Link from "next/link";
import React from "react";
import prisma from "@/../prisma/client";
import { useRouter } from "next/navigation";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";


const PatientsPage = async () => {
  const patients = await prisma.patient.findMany({
    include:{
      issues: true
    }
  });


  return (
    <div>
      <Link href="/patients/new">
        <Button variant="default" className="ml-10 mt-10">
          New patient
        </Button>
      </Link>
      <div className="max-w-7xl mx-auto">
        <Table className="rounded p-5">
          <TableHeader>
            <TableRow>
              <TableHead>Name</TableHead>
              <TableHead className="hide-md">Age</TableHead>
              <TableHead className="hide-md">Email</TableHead>
              <TableHead className="">Status</TableHead>
              <TableHead className="hide-md">Joined At</TableHead>
              <TableHead>Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {patients.map((patient) => (
              <TableRow key={patient.id}>
                <TableCell>{`${patient.firstName} ${patient.lastName}`}</TableCell>
                <TableCell>{patient.age}</TableCell>
                <TableCell>{patient.email}</TableCell>
                <TableCell>{patient.status}</TableCell>
                <TableCell>{patient.createdAt.toDateString()}</TableCell>
                <TableCell>
                  <Dialog>
                    <DialogTrigger>
                      <Button>View</Button>
                    </DialogTrigger>
                    <DialogContent>
                      <DialogHeader>
                        <DialogTitle>{`${patient.firstName} ${patient.lastName}`}</DialogTitle>
                        <DialogDescription>
                          {patient.issues.map((issue) => (
                            <div key={issue.id}>
                              <p>

                              {issue.title}
                              </p>
                              <p>

                              {issue.description}
                              </p>
                              </div>
                            
                          ))}
                          
                        </DialogDescription>
                      </DialogHeader>
                    </DialogContent>
                  </Dialog>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default PatientsPage;
