"use server";
import axios from "axios";
import { formLogin } from "../login/Login";
import { cookieLogin } from "./cookieLogin";
import { cookies } from "next/headers";


export const LoginUser = async (values: formLogin) => {
  const authenticateUrl = process.env.BACKEND_URL + "/api/authenticate";

  try {
    const response = await axios.post(authenticateUrl, {
      username: values.username,
      password: values.password,
    
    });
    await cookieLogin(response.data);

    const authToken = cookies().get("accessToken")?.value;
    return authToken;
  } catch (error) {
    // Handle axios errors here
    console.error("An error occurred:", error);
    // You can add custom error handling logic here
  }
};
