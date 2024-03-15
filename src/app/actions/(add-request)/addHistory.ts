"use server";
import axios from "axios";
import { cookies } from "next/headers";
import { createHistorySchema } from "../../utils/ValidationSchema";
import { z } from "zod";

export type HistoryForm = z.infer<typeof createHistorySchema>;

export const HistoryData = async (values: HistoryForm) => {
  const historyUrl = process.env.BACKEND_URL + "/api/histories";
  const authToken = cookies().get("accessToken")?.value;
  const bearerToken = `Bearer ${authToken}`;

  try {
    const response = await axios.post(
      historyUrl,
      {
        history: values.history,
        patientId: values.patientId,
      },
      {
        headers: {
          Authorization: bearerToken,
        },
      }
    );
    if (response.status === 200) {
      console.log("history added");
    }
  } catch (error) {
    console.error(error);
  }
};
