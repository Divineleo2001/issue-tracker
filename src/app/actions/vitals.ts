"use server";
import { cookies } from "next/headers";
import axios from "axios";
import { VitalsForm } from "../patients/[patientId]/(new)/newvitals/new-patient-vitals";

export const VitalsData = async (values: VitalsForm) => {
  const vitalsUrl = process.env.BACKEND_URL + "/api/patient-vitals";
  const authToken = cookies().get("accessToken")?.value;
  const bearerToken = `Bearer ${authToken}`;

  try {
    const response = await axios.post(
      vitalsUrl,
      {
        loc: values.loc,
        patientId: values.patientId,
        airwayStatus: values.airwayStatus,
        breathingRate: values.breathingRate,
        breathingStatus: values.breathingStatus,
        pulseRate: values.pulseRate,
        pulseRateQuality: values.pulseRateQuality,
        systolicBloodPressure: values.systolicBloodPressure,
        diastolicBloodPressure: values.diastolicBloodPressure,
        spo2: values.spo2,
        temperature: values.temperature,
      },
      {
        headers: {
          Authorization: bearerToken,
        },
      }
    );
    if (response.status === 201) {
      return console.log("Vitals added successfully");
    }
  } catch (error) {
    console.error(error);
  }
};
