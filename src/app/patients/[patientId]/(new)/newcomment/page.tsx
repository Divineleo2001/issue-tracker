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
import prisma from "@/../prisma/client";
import ErrorComponent from "@/components/Errors/ErrorComponent";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import Spinner from "@/components/Spinner";

const NewPatientIssue = ({ params }: { params: { patientId: number } }) => {
  type CommentForm = z.infer<typeof createCommentSchema>;
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

  const onSubmit = async (data: CommentForm) => {
    console.log(data);
    try {
      setIsSubmitting(true);
      data.patientId = parseInt(data.patientId?.toString());
      await axios.post("/api/comments", data);
      router.push(`/patients/${params.patientId}/viewcomments`);
    } catch (error) {
      setIsSubmitting(false);
      setError(`An error occurred while submitting the form. ${error}`);
    }
    console.log(error);
  };
  return (
    <>
      <Button className="mt-10 ml-10" onClick={() => router.push("/")}>Go Back to Home</Button>
      <div className="p-10 md:max-w-2xl mx-auto mt-10 ">
        <form className="flex flex-col gap-5" onSubmit={handleSubmit(onSubmit)}>
          <h1 className="font-semibold text-xl text-blue-500">
            Add a new Issue for the patient No. {params.patientId}
          </h1>
          <ErrorComponent alertTitle="Name" message={errors.comment?.message} />

          <Input placeholder="Name of the Doctor" {...register("comment")}/>

          <ErrorComponent alertTitle="Issue" message={errors.comment?.message} />
          <Textarea
            className=""
            placeholder="Please provide Comments"
            {...register("comment")}
          />

          <Input
            value={params.patientId}
            {...register("patientId")}
            readOnly
            placeholder="Patient ID"
          />

          <Button className="w-40" type="submit">
            Submit Comment
            {isSubmitting && <Spinner />}
          </Button>
        </form>
      </div>
    </>
  );
};

export default NewPatientIssue;
