"use server";
import { cookies } from "next/headers";
import { DisabilityForm } from "../disabilities/page";
import axios from "axios";

export const DisabilitData = async (values: DisabilityForm) => {
  const disabilityUrl = process.env.BACKEND_URL + "api/disability";
  const authToken = cookies().get("accesToken")?.value;
  const bearerToken = `Bearer ${authToken}`;

  try {
    const response = await axios.post(
      disabilityUrl,
      {
        disabilityName: values.disabilityName,
        description: values.description,
      },
      {
        headers: {
          Authorization: bearerToken,
        },
      }
    );
    if (response.status === 200) {
      console.log("Disability added successfully");
    }
  } catch (error) {
    console.error("An error has occured", error);
  }
};
