"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import axios from "axios";
import { useRouter } from "next/navigation";
import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { createFormPatientSchema, createPatientSchema } from "@/app/utils/ValidationSchema";
import ErrorComponent from "@/components/Errors/ErrorComponent";

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
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<PatientForm>({
    resolver: zodResolver(createFormPatientSchema),
  });
  return (
    <div className="max-w-lg mx-auto mt-10 ">
      <form
        className="flex flex-col gap-5"
        onSubmit={handleSubmit(
          // (data) => {
          //   data.age = parseInt(data.age);
          //   console.log(data);
          // }

          async (data) => {
            data.age = parseInt(data.age);
            await axios.post("/api/patients", data);
            router.push("/patients");
          }
        )}
      >
        <h1 className="text-center text-2xl ">New Patient</h1>

        {errors.firstName && (
          <ErrorComponent
            alertTitle="First Name"
            message={errors.firstName.message}
          />
        )}
        <Input placeholder="FirstName" {...register("firstName")} />

        {errors.lastName && (
          <ErrorComponent
            alertTitle="Last Name"
            message={errors.lastName.message}
          />
        )}
        <Input placeholder="LastName" {...register("lastName")} />

        {errors.email && (
          <ErrorComponent alertTitle="Email" message={errors.email.message} />
        )}
        <Input placeholder="Email" {...register("email")} />

        {errors.age && (
          <ErrorComponent alertTitle="Age" message={errors.age.message} />
        )}
        <Input placeholder="Age" type="number" {...register("age")} />

        {errors.mobileNumber && (
          <ErrorComponent
            alertTitle="Mobile Number"
            message={errors.mobileNumber.message}
          />
        )}
        <Input placeholder="Mobile Number" {...register("mobileNumber")} />

        {errors.remarks && (
          <ErrorComponent
            alertTitle="Remarks"
            message={errors.remarks.message}
          />
        )}
        <Textarea placeholder="Remarks" {...register("remarks")} />
        <Button>Add New Patient</Button>
      </form>
    </div>
  );
};

export default NewPatientPage;
