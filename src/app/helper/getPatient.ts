import { cookies } from "next/headers";
import axios from "axios";

export const getPatients = async () => {
  const patientUrl = process.env.BACKEND_URL + "/api/patients";
  const authToken = "eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJhZG1pbiIsImV4cCI6MTcxMTYwNjM2MCwiYXV0aCI6IlJPTEVfQURNSU4gUk9MRV9VU0VSIiwiaWF0IjoxNzExNTE5OTYwfQ.EsIzdi3Ri6IhcNzR9qlnwsIVl20fsv5dUnfSpVwYKOepnWvOW3LG6ttEZwhIPEiIuaEgdCwhtxQyWQNLWL5kAg"

  const bearerToken = `Bearer ${authToken}`;
  const response = await axios.get(patientUrl, {
    headers: {
      Authorization: bearerToken,
    },
  });
  const patientsList = response.data
  return patientsList;
};