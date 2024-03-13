"use server";
import axios from "axios";
import { cookies } from "next/headers";
import { CommentForm } from "../patients/_components/(new)/newcomment/new-patient-comments";


export const CommentsData = async (values: CommentForm) => {
  const commentsUrl = process.env.BACKEND_URL + "/api/comments";
  const authToken = cookies().get("accessToken")?.value;
  const bearerToken = `Bearer ${authToken}`;

  try {
    const response = await axios.post(
      commentsUrl,
      {
        comment: values.comment,
        patientId: values.patientId,
      },
      {
        headers: {
          Authorization: bearerToken,
        },
      }
    );
    if (response.status === 201) {
      console.log("new comment is being added");
    }
  } catch (error) {
    console.error(error);
  }
};
