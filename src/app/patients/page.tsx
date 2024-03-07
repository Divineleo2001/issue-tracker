import React from "react";

import { cookies } from "next/headers";
import axios from "axios";
import PatientsPage from "./patients";
import { getPatients } from "../helper/getPatient";

export default async function PatientHome() {
  const initialData = await getPatients();
  

  return (
    <>
      <PatientsPage patients={initialData} />
    </>
  );
}


