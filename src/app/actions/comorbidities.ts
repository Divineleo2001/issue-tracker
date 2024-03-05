"use server";
import axios from "axios";
import { cookies } from "next/headers";
import { ComorbidityForm } from "../comorbidities/page";

export const ComorbidityData = async (values: ComorbidityForm) => {
  const comorbidityUrl = process.env.BACKEND_URL + "api/comorbidity";
  const authToken = cookies.length("accesToken")?.value;
  const bearerToken = `Bearer${authToken}`;

  try {
    const response = await axios.post(
      comorbidityUrl,
      {
        cName: values.cName,
        description: values.description,
      },
      {
        headers: {
          Authorization: bearerToken,
        },
      }
    );
    if (response.status === 200) {
      return console.log("Comorbidity added successfully");
    }
  } catch (error) {
    console.error("An error has occured:", error);
  }
};
