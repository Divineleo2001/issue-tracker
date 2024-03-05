import React from "react";

import { cookies } from "next/headers";
import axios from "axios";
import PatientsPage from "./patients";
export const getPatients = async () => {
  const patientUrl = process.env.BACKEND_URL + "/api/patients";
  const authToken = cookies().get("accessToken")?.value;

  const bearerToken = `Bearer ${authToken}`;
  const response = await axios.get(patientUrl, {
    headers: {
      Authorization: bearerToken,
    },
  });
  const patientsList = response.data
  return patientsList;
};
export default async function PatientHome() {
  const initialData = await getPatients();
  

  return (
    <>
      <PatientsPage patients={initialData} />
    </>
  );
}


