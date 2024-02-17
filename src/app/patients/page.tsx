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
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const PatientsPage = async () => {
  const patients = await prisma.patient.findMany({
    include: {
      issues: true,
    },
  });

  return (
    <div className="overflow-x-auto">
      <div className="max-w-7xl mx-auto">
        <Link href="/patients/new">
          <div className="flex md:justify-end md:mr-10">
            <Button variant="default" className="ml-10 mt-10 shadow-md">
              New patient
            </Button>
          </div>
        </Link>
        <div className="lg:hidden md:grid md:grid-cols-2">
          {patients.map((patient, index) => (
            <div className="">
              <Card key={patient.id} className=" p-5 m-5 ">
                <CardHeader>
                  <CardTitle>
                    {index + 1}. {`${patient.firstName} ${patient.lastName}`},{" "}
                    {patient.age}
                    {
                      <div>
                        <h2 className="text-blue-500">{patient.status}</h2>
                        <p>Joined At {patient.createdAt.toDateString()}</p>
                      </div>
                    }
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="">
                    <div>
                      <div className="grid grid-cols-2 gap-2 mt-2 ">
                        <Button className="md:w-32">Vitals</Button>
                        <Button className="md:w-32">Comorbidities</Button>
                        <Button className="md:w-32">Disablities</Button>
                        <Button className="md:w-32">Previous History</Button>
                        <Button>
                          <Link href={`/patients/${patient.id}/newissue`}>
                            Add New Issue
                          </Link>
                        </Button>
                      </div>
                    </div>
                    <div className="mt-4"></div>
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
        <div className="hidden lg:block max-w-6xl mx-auto">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Count</TableHead>
                <TableHead>Id</TableHead>
                <TableHead>Name</TableHead>
                <TableHead>Age</TableHead>
                <TableHead>Email</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Joined At</TableHead>

                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {patients.map((patient, index) => (
                <TableRow key={patient.id}>
                  <TableCell>{index + 1}</TableCell>
                  <TableCell className="hidden md:block">
                    {patient.id}
                  </TableCell>
                  <TableCell>
                    {`${patient.firstName} ${patient.lastName}`}

                    <div>hello</div>
                  </TableCell>

                  <TableCell>{patient.age}</TableCell>
                  <TableCell>{patient.email}</TableCell>
                  <TableCell>{patient.status}</TableCell>
                  <TableCell>{patient.createdAt.toDateString()}</TableCell>

                  <TableCell className="flex gap-2">
                    <Dialog>
                      <DialogTrigger>
                        <div className="btn-primary">View</div>
                      </DialogTrigger>
                      <DialogContent>
                        <DialogHeader>
                          <DialogTitle>{`${patient.firstName} ${patient.lastName}`}</DialogTitle>
                          <DialogDescription>
                            Further details can be found here
                          </DialogDescription>
                          {patient.issues.slice(0, 2).map((issue, index) => (
                            <div key={issue.id} className="flex gap-1 flex-col">
                              <div className="flex gap-2">
                                <h2>{index + 1} .</h2>
                                <h2>{issue.issue}</h2>
                              </div>
                              <h2>{issue.description}</h2>
                            </div>
                          ))}
                          {patient.issues.length > 3 && (
                            <Link href={`/patients/${patient.id}/viewissues`}>
                              <div className="text-blue-500">View More</div>
                            </Link>
                          )}
                        </DialogHeader>
                      </DialogContent>
                    </Dialog>
                    <Link href={`/patients/${patient.id}/newissue`}>
                      <div className="btn-primary w-36">Add New Issue</div>
                    </Link>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>
    </div>
  );
};

export default PatientsPage;
