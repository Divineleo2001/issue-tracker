"use server";
import axios from "axios";
import { formSignup } from "../signup/Singup";

export const SignupUser = async (values: formSignup) => {
  const signupUrl = process.env.BACKEND_URL + "/api/register";

  try {
    const response = await axios.post(signupUrl, {
      login: values.username,
      firstname: values.firstname,
      lastname: values.lastname,
      email: values.email,
      password: values.password,
    });
    if (response.status === 201) {
      console.log("Succesfully registered");
    }
  } catch (error) {
    console.error(error);
  }
};
