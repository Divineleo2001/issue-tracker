"use server";
import axios from "axios";
import { cookies } from "next/headers";
import { ComorbidityForm } from "../../patients/_components/(new)/newcommorbidities/new-patient-commorbidity";

export const ComorbidityData = async (values: ComorbidityForm) => {
  const comorbidityUrl = process.env.BACKEND_URL + "/api/comorbidities";
  const authToken = cookies().get("accessToken")?.value;
  const bearerToken = `Bearer ${authToken}`;

  try {
    const response = await axios.post(
      comorbidityUrl,
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
    if (response.status === 201) {
      return console.log("Comorbidity added successfully");
    }
  } catch (error) {
    console.error("An error has occured:", error);
  }
};
