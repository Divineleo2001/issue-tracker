import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";

import { PatientView } from "./_components/patient-view";
import { patientDataSchema } from "../utils/ValidationSchema";
import { z } from "zod";
import { useQuery } from "@tanstack/react-query";

const PatientsPage = (props) => {
    // const {data } = useQuery({
    //     queryKey : ["patients"],
    //     queryFn : 
    // })


  return (
    <div className="overflow-x-auto">
      <h1 className="text-4xl font-semibold text-center">Patients</h1>
      <div className="max-w-7xl mx-auto">
        <Link href="/patients/new">
          <div className="flex justify-end mr-10">
            <Button variant="default" className="ml-10 mt-10 shadow-md">
              New patient
            </Button>
          </div>
        </Link>
      </div>
      <div className="flex-col max-w-md mx-auto md:max-w-none sm:grid sm:grid-cols-2 lg:max-w-7xl lg:mx-auto lg:grid-cols-3 px-5 gap-5">
        <div className="">
          <PatientView
            name="akanksh"
            age={21}
            gender="male"
            regId="1234"
            id={12}
            // Fix: Convert regId to string
          />
        </div>
      </div>
    </div>
  );
};

export default PatientsPage;
