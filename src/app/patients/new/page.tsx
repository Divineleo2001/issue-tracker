"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import axios from "axios";
import { useRouter } from "next/navigation";
import React from "react";
import { useForm } from "react-hook-form";

interface PatientForm {
  firstName: string;
  lastName: string;
  email: string;
  age: number;
  mobileNumber: string;
  remarks: string;
}

const NewPatientPage = () => {
  const router = useRouter();

  const { register, control, handleSubmit } = useForm<PatientForm>();
  return (
    <div>
      <form
        className="max-w-lg mx-auto space-y-10"
        onSubmit={handleSubmit(
          //   (data) => {
          //     data.age = parseInt(data.age);
          //     console.log(data);
          //   }

          async (data) => {
            data.age = parseInt(data.age);
            await axios.post("/api/patients", data);
            router.push("/patients");
          }
        )}
      >
        <h1 className="text-center text-2xl mt-10">New Patient</h1>
        <Input
          className="mt-10"
          placeholder="FirstName"
          {...register("firstName")}
        />
        <Input
          className="mt-10"
          placeholder="LastName"
          {...register("lastName")}
        />
        <Input className="mt-10" placeholder="Email" {...register("email")} />
        <Input
          className="mt-10"
          placeholder="Age"
          type="number"
          {...register("age")}
        />
        <Input
          className="mt-10"
          placeholder="Mobile Number"
          {...register("mobileNumber")}
        />
        <Textarea
          className="mt-10"
          placeholder="Remarks"
          {...register("remarks")}
        />
        <Button>Add New Patient</Button>
      </form>
    </div>
  );
};

export default NewPatientPage;
