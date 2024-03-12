import React from "react";

import { cookies } from "next/headers";
import axios from "axios";
import PatientsPage from "./patients";
import { getPatients } from "../helper/getPatient";
import SignOut from "../SignOut";

export default async function PatientHome() {
  const initialData = await getPatients();
  

  return (
    <>
      <SignOut /> 
      <PatientsPage patients={initialData} />
    </>
  );
}


