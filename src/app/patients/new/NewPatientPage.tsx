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

} from "@/app/utils/ValidationSchema";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { NewPatientData } from "@/app/actions/addPatient";

export type PatientForm = z.infer<typeof createFormPatientSchema>;

export const NewPatientPage = () => {
  const router = useRouter();


  const form = useForm<PatientForm>({
    resolver: zodResolver(createFormPatientSchema),
    defaultValues: {
      name : "",
      regId : "0",
      age : "0",
      gender : "",
    },
  });

  // const onSubmit = (data: PatientForm) => {
  //   console.log(data);
  //   try {
  //     setIsSubmitting(true);
  //     axios.post("/api/patients", data);
  //     router.push("/patients");
  //   } catch (error) {
  //     setIsSubmitting(false);
  //     setError(`An unexpected error occurred: ${error}`);
  //   }
  //   console.log(error);
  // };

  const handleSubmit = async (values: PatientForm) => {
    await NewPatientData(values)
    router.push("/patients");
  }

  return (
    <div className="max-w-lg mx-auto mt-10 px-10 ">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-3">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Please provide the patient Name</FormLabel>
                <FormControl>
                  <Input placeholder="Name" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="age"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Age</FormLabel>
                <FormControl>
                  <Input placeholder="Age" type="number" {...field} />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="gender"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Gender </FormLabel>
                <FormControl>
                  <Input placeholder="Gender" {...field} />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="regId"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Unique Registration ID </FormLabel>
                <FormControl>
                  <Input placeholder="Registration ID" type="number" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
         
          <Button type="submit">Submit</Button>
        </form>
      </Form>
    </div>
  );
};
