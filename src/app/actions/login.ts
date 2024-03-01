"use server";
import axios from "axios";
import { formLogin } from "../login/Login";
import { cookieLogin } from "./cookieLogin";
import { cookies } from "next/headers";
import { redirect } from 'next/navigation'



export const LoginUser = async (values: formLogin) => {

  try {
    const response = await axios.post("http://backend-server:8080/api/authenticate", {
      username: values.username,
      password: values.password,
      rememberMe: values.rememberMe,
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
