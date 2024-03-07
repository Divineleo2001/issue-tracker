"use client";

import React from "react";
// import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";
// import { Textarea } from "@/components/ui/textarea";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import axios from "axios";
import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  createFormCommentSchema,
  createCommentSchema,
} from "@/app/utils/ValidationSchema";
import { z } from "zod";
// import ErrorComponent from "@/components/Errors/ErrorComponent";
// import Spinner from "@/components/Spinner";
import ErrorComponent from "@/components/Errors/ErrorComponent";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import Spinner from "@/components/Spinner";

export type CommentForm = z.infer<typeof createCommentSchema>;

export const NewPatientIssue = ({ id }: { id:number }) => {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CommentForm>({
    resolver: zodResolver(createFormCommentSchema),
  });
  const [error, setError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  // const onSubmit = async (data: CommentForm) => {
  //   console.log(data);
  //   try {
  //     setIsSubmitting(true);
  //     data.patientId = parseInt(data.patientId?.toString());
  //     await axios.post("/api/comments", data);
  //     router.push(`/patients/${params.patientId}/viewcomments`);
  //   } catch (error) {
  //     setIsSubmitting(false);
  //     setError(`An error occurred while submitting the form. ${error}`);
  //   }
  //   console.log(error);
  // };
  return (
    <>
      <div className=" ">
        <form className="space-y-3">
          <ErrorComponent alertTitle="Name" message={errors.comment?.message} />

          <ErrorComponent alertTitle="Issue" message={errors.comment?.message} />
          <Textarea
            className=""
            placeholder="Please provide Comments"
            {...register("comment")}
          />

          <Input
            value={id}
            {...register("patientId")}
            readOnly
            placeholder="Patient ID"
          />

          <Button className="w-40" type="submit">
            Submit
            {isSubmitting && <Spinner />}
          </Button>
        </form>
      </div>
    </>
  );
};

export default NewPatientIssue;
