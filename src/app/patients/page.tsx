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
import { PlusIcon, EyeOpenIcon } from "@radix-ui/react-icons";
import PatientStatusBadge from "@/components/PatientStatusBadge";
import { Badge } from "@/components/ui/badge";

const users = require("@/data/data.json");

const PatientsPage = async () => {
  const patients = await prisma.patient.findMany({
    include: {
      comments: true,
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
      </div>
      <div className="lg:hidden md:grid md:grid-cols-2">
        {patients.map((patient, index) => (
          <div key={patient.id}>
            <Card key={patient.id} className=" p-5 m-5 ">
              <CardHeader>
                <CardTitle>
                  {index + 1}. {`${patient.firstName} ${patient.lastName}`},{" "}
                  {patient.age}
                  {
                    <div>
                      <div>
                        <PatientStatusBadge status={patient.status} />
                        <Badge className="bg--500"></Badge>
                      </div>
                      <p>Joined At {patient.createdAt.toDateString()}</p>
                      <div>
                        <Button>
                          <Link
                            href={`/patients/${patient.id}/view-patient-details`}
                          >
                            View
                          </Link>
                        </Button>
                      </div>
                    </div>
                  }
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-col">
                  <div>
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-2 gap-2 md:gap-0 mt-2 ">
                      <div className=" p-2 rounded-md">
                        <button className="text-black font-semibold">
                          Vitals
                        </button>
                        <div className="sm:w-20 md:w-32 flex gap-2">
                          <Link href={`/patients/${patient.id}/newvitals`}>
                            <Button>
                              <PlusIcon />
                            </Button>
                          </Link>
                          <Link href={`/patients/${patient.id}/viewvitals`}>
                            <Button>
                              <EyeOpenIcon />
                            </Button>
                          </Link>
                        </div>
                      </div>
                      <div className=" p-2 rounded-md">
                        <button className="text-black font-semibold">
                          Comorbidities
                        </button>
                        <div className="sm:w-20 md:w-32 flex gap-2">
                          <Link href={`/patients/${patient.id}/newvitals`}>
                            <Button>
                              <PlusIcon />
                            </Button>
                          </Link>
                          <Link href={`/patients/${patient.id}/newvitals`}>
                            <Button>
                              <EyeOpenIcon />
                            </Button>
                          </Link>
                        </div>
                      </div>
                      <div className=" p-2 rounded-md">
                        <button className="text-black font-semibold">
                          Disabilities
                        </button>
                        <div className="sm:w-20 md:w-32 flex gap-2">
                          <Link href={`/patients/${patient.id}/newvitals`}>
                            <Button>
                              <PlusIcon />
                            </Button>
                          </Link>
                          <Link href={`/patients/${patient.id}/newvitals`}>
                            <Button>
                              <EyeOpenIcon />
                            </Button>
                          </Link>
                        </div>
                      </div>
                    </div>
                    <div className="flex gap-2 flex-col mt-4">
                      <Button>
                        <Link href={`/patients/${patient.id}/newcomment`}>
                          Add New Comment
                        </Link>
                      </Button>
                      {patient.comments.length <= 2 ? (
                        <Dialog>
                          <DialogTrigger>
                            <div className="btn-primary">View</div>
                          </DialogTrigger>
                          <DialogContent className="text-left">
                            <DialogHeader>
                              <DialogTitle className="text-left">{`${patient.firstName} ${patient.lastName}`}</DialogTitle>
                              <DialogDescription className="text-left">
                                Further Comments can be found here
                              </DialogDescription>

                              {patient.comments.map((comment, index) => (
                                <div
                                  key={comment.id}
                                  className="flex gap-1 flex-col justify-start text-left"
                                >
                                  <div>
                                    <h2 className="text-blue-800">
                                      <p className="text-blue-700 text-sm font-extralight">
                                        {comment.createdAt.toDateString()}
                                      </p>
                                      {comment.doctorName}
                                    </h2>{" "}
                                  </div>
                                  <div className="flex gap-2">
                                    <h2>{index + 1}.</h2>
                                    <h2>{comment.comment}</h2>
                                  </div>
                                </div>
                              ))}
                            </DialogHeader>
                          </DialogContent>
                        </Dialog>
                      ) : (
                        <Button>
                          <Link href={`/patients/${patient.id}/viewcomments`}>
                            View More
                          </Link>
                        </Button>
                      )}
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
                <TableCell className="hidden md:block">{patient.id}</TableCell>
                <TableCell>
                  {`${patient.firstName} ${patient.lastName}`}
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
                          Further Comments can be found here
                        </DialogDescription>
                        {patient.comments.slice(0, 2).map((comment, index) => (
                          <div
                            key={comment.id}
                            className="flex gap-1 flex-col justify-start"
                          >
                            <div>
                              <h2 className="text-blue-800">
                                {comment.doctorName}
                              </h2>{" "}
                              <p className="text-blue-700">
                                {comment.createdAt.toTimeString()}
                              </p>
                            </div>
                            <div className="flex gap-2">
                              <h2>{index + 1}.</h2>
                              <h2>{comment.comment}</h2>
                            </div>
                          </div>
                        ))}
                        {patient.comments.length > 3 && (
                          <Link href={`/patients/${patient.id}/viewcomments`}>
                            <div className="text-blue-500">View More</div>
                          </Link>
                        )}
                      </DialogHeader>
                    </DialogContent>
                  </Dialog>
                  <Link href={`/patients/${patient.id}/newcomment`}>
                    <Button className=" w-36">Add New Comment</Button>
                  </Link>
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
