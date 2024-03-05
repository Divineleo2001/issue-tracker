"use server";
import axios from "axios";
import { PatientForm } from "../patients/new/NewPatientPage";
import { cookies } from "next/headers";

export const NewPatientData = async (values: PatientForm) => {
  const patientUrl = process.env.BACKEND_URL + "/api/patients";
  const authToken = cookies().get("accessToken")?.value;
  const bearerToken = `Bearer ${authToken}`;
  try {
    const response = await axios.post(
      patientUrl,
      {
        name: values.name,
        regId: values.regId,
        age: values.age,
        gender: values.gender,
      },
      {
        headers: {
          Authorization: bearerToken,
        },
      }
    );

    if (response.status === 200) {
      return console.log("Patient added successfully");
    }
  } catch (error) {
    console.error("An error occurred:", error);
  }
};
