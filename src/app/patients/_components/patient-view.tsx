/**
 * This code was generated by v0 by Vercel.
 * @see https://v0.dev/t/exROoGtFTlU
 */
import { Button } from "@/components/ui/button";
import { CardHeader, CardContent, Card } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import {
  CameraIcon,
  FileIcon,
  FilePlusIcon,
  VideoIcon,
} from "@radix-ui/react-icons";
import Link from "next/link";

import AddDialogVitals from "./add-dialog-vitals";
import AddDialogHistory from "./add-dialog-history";

import { AddDialogComments } from "./add-dialog-comments";

export function PatientView({
  name,
  age,
  gender,
  regId,
  id,
}: {
  name: string;
  age: number;
  gender: string;
  regId: string;
  id: number;
}) {
  const patientName = name ? name : "No Name";
  const genderCheck = gender ? gender : "Gender Not Provided";

  return (
    <div className="">
      <Card key={regId} className=" mx-auto mt-10 ">
        <div className="">
          <div className="flex justify-between px-5 pt-5 gap-5">
            <div>
              <Button variant="outline" className="">

                {/* <Link href={`/patients/${regId}/view-patient-details`}>
                </Link> */}
                  View
              </Button>
            </div>
          </div>
          <CardHeader className="pb-3 flex justify-between items-center">
            <p className="font-semibold">{patientName}</p>
            <span className="text-xs bg-gray-200 text-gray-600 px-2 py-1 rounded-full">
              ID: {regId}
            </span>
          </CardHeader>
          <CardContent className="flex flex-col gap-2">
            <div className="grid grid-cols-1 gap-4">
              <div className="flex flex-col gap-1">
                <Label className="text-sm">Age</Label>
                <p>{age} years</p>
              </div>
              <div className="flex flex-col gap-1">
                <Label className="text-sm" htmlFor="gender">
                  Gender
                </Label>
                <p>{genderCheck}</p>
              </div>
              <div className="flex flex-col gap-1">
                <Label className="text-sm" htmlFor="status">
                  Status
                </Label>
                <span className="font-semibold text-green-500">Active</span>
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <div className="grid grid-cols-2 gap-2">
                <AddDialogVitals id={id} />
                <AddDialogComments id={id} />
                <AddDialogHistory id={id} />
              </div>
              <div className="flex gap-2 ">
                <Button className="p-4">
                  <CameraIcon className="h-6 w-6" />
                </Button>
                <Button>
                  <VideoIcon className="w-6 h-6" />
                </Button>
                <Button>
                  <FileIcon className="w-6 h-6" />
                </Button>
              </div>
            </div>
          </CardContent>
        </div>
      </Card>
    </div>
  );
}
