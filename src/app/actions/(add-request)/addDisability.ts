"use server";
import { cookies } from "next/headers";
import { DisabilityForm } from "../../patients/_components/(new)/newdisabilities/new-patient-disability";
import axios from "axios";


export const DisabilityData = async (values: DisabilityForm) => {
  const disabilityUrl = process.env.BACKEND_URL + "/api/disabilities";
  const authToken = cookies().get("accessToken")?.value;
  const bearerToken = `Bearer ${authToken}`;

  try {
    const response = await axios.post(
      disabilityUrl,
      {
        name: values.name,
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
