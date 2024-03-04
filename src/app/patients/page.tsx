import React from "react";

import { cookies } from "next/headers";
import axios from "axios";
import PatientsPage from "./patients";
interface PatientData {
  id: number;
  regId: string;
  name: string;
  gender: string;
  age: number;
  user: {
    id: number;
    login: string | null; // Assuming login can be optional
    createdBy: string | null;
    createdDate: string | null;
    lastModifiedBy: string | null;
    lastModifiedDate: string | null;
  };
  createdBy: string;
  createdDate: string;
  login: string;
  lastModifiedBy: string;
  lastModifiedDate: string;
}

export const getPatients = async () => {
  const patientUrl = process.env.BACKEND_URL + "/api/patients";
  const authToken = cookies().get("accessToken")?.value;

  const bearerToken = `Bearer ${authToken}`;
  const patientsList = await axios.get(patientUrl, {
    headers: {
      Authorization: bearerToken,
    },
  });
  return patientsList;
};
export default async function PatientHome() {
  const initialData = await getPatients();
  console.log(initialData);
  return (
    <>
      <PatientsPage patients={initialData} />
    </>
  );
}


