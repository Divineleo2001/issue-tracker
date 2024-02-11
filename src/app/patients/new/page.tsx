"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import axios from "axios";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import {
  createFormPatientSchema,
  createPatientSchema,
} from "@/app/utils/ValidationSchema";
import ErrorComponent from "@/components/Errors/ErrorComponent";
import Spinner from "@/components/Spinner";

type PatientForm = z.infer<typeof createPatientSchema>;
// interface PatientForm {
//   firstName: string;
//   lastName: string;
//   email: string;
//   age: number;
//   mobileNumber: string;
//   remarks: string;
// }
const NewPatientPage = () => {
  const router = useRouter();
  const [error, setError] = useState("");
  const [IsSubmitting, setIsSubmitting] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<PatientForm>({
    resolver: zodResolver(createFormPatientSchema),
  });

  const onSubmit = async (data: PatientForm) => {
    try {
      setIsSubmitting(true);
      data.age = parseInt(data.age?.toString());

      await axios.post("/api/patients", data);
      router.push("/patients");
    } catch (error) {
      setIsSubmitting(false);
      setError("An unexpected error occurred");
    }
  };
  return (
    <div className="max-w-lg mx-auto mt-10 ">
      <form className="flex flex-col gap-5" onSubmit={handleSubmit(onSubmit)}>
        <h1 className="text-center text-2xl ">New Patient</h1>

        <ErrorComponent
          alertTitle="First Name"
          message={errors.firstName?.message}
        />

        <Input placeholder="FirstName" {...register("firstName")} />

        <ErrorComponent
          alertTitle="Last Name"
          message={errors.lastName?.message}
        />

        <Input placeholder="LastName" {...register("lastName")} />

        <ErrorComponent alertTitle="Email" message={errors.email?.message} />

        <Input placeholder="Email" {...register("email")} />

        <ErrorComponent alertTitle="Age" message={errors.age?.message} />

        <Input placeholder="Age" type="number" {...register("age")} />

        {errors.mobileNumber && (
          <ErrorComponent
            alertTitle="Mobile Number"
            message={errors.mobileNumber.message}
          />
        )}
        <Input placeholder="Mobile Number" {...register("mobileNumber")} />

        <ErrorComponent
          alertTitle="Remarks"
          message={errors.remarks?.message}
        />

        <Textarea placeholder="Remarks" {...register("remarks")} />
        <Button disabled={IsSubmitting}>
          Add New Patient
          {IsSubmitting && <Spinner />}
        </Button>
      </form>
    </div>
  );
};

export default NewPatientPage;
