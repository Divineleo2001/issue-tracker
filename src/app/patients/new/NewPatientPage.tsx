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
import { createFormPatientSchema } from "@/app/utils/ValidationSchema";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from "@/components/ui/select";
import {
  Form,
  FormControl,

  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from "@/components/ui/form";
import { PatientForm } from "./page";

// interface PatientForm {
//   firstName: string;
//   lastName: string;
//   email: string;
//   age: number;
//   mobileNumber: string;
//   remarks: string;
// }
export const NewPatientPage = () => {
  const router = useRouter();
  const [error, setError] = useState("");
  const [IsSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<PatientForm>({
    resolver: zodResolver(createFormPatientSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      age: 0,
      mobileNumber: "",
      remarks: "",
    },
  });
  const formSchema = z.object({
    username: z.string().min(2, {
      message: "Username must be at least 2 characters.",
    }),
  });
  const form1 = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
    },
  });
  const {
    register, handleSubmit, formState: { errors },
  } = useForm<PatientForm>({
    resolver: zodResolver(createFormPatientSchema),
  });

  const onSubmit = async (data: PatientForm) => {
    console.log(data);
    try {
      setIsSubmitting(true);
      await axios.post("/api/patients", data);
      router.push("/patients");
    } catch (error) {
      setIsSubmitting(false);
      setError(`An unexpected error occurred: ${error}`);
    }
    console.log(error);
  };

  const onSubmitForm = (data: z.infer<typeof formSchema>) => {
    console.log(data);
  };
  return (
    <div className="max-w-lg mx-auto mt-10 px-10 ">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-3">
          <FormField
            control={form.control}
            name="firstName"
            render={({ field }) => (
              <FormItem>
                <FormLabel>First Name</FormLabel>
                <FormControl>
                  <Input placeholder="First Name" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )} />
          <FormField
            control={form.control}
            name="lastName"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Last Name</FormLabel>
                <FormControl>
                  <Input placeholder="LastName" {...field} />
                </FormControl>

                <FormMessage />
              </FormItem>
            )} />
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>E-mail </FormLabel>
                <FormControl>
                  <Input placeholder="E Mail" {...field} />
                </FormControl>

                <FormMessage />
              </FormItem>
            )} />
          <FormField
            control={form.control}
            name="age"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Age</FormLabel>
                <FormControl>
                  <Input placeholder="Age" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )} />
          <FormField
            control={form.control}
            name="mobileNumber"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Mobile Number</FormLabel>
                <FormControl>
                  <Input placeholder="Mobile Number" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )} />
          <FormField
            control={form.control}
            name="gender"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Gender</FormLabel>
                <Select onValueChange={field.onChange} defaultValue={field.value}>
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Select gender" />
                    </SelectTrigger>
                  </FormControl>

                  <SelectContent>
                    <SelectItem value="Male">Male</SelectItem>
                    <SelectItem value="Female">Female</SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )} />
          <FormField
            control={form.control}
            name="status"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Status</FormLabel>
                <Select onValueChange={field.onChange} defaultValue={field.value}>
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Select patient Status" />
                    </SelectTrigger>
                  </FormControl>

                  <SelectContent>
                    <SelectItem value="JOINED">JOINED</SelectItem>
                    <SelectItem value="CRITICAL">CRITICAL</SelectItem>
                    <SelectItem value="NON_CRITICAL">NON_CRITICAL</SelectItem>
                    <SelectItem value="TREATMENT_IN_PROGRESS">
                      TREATMENT_IN_PROGRESS
                    </SelectItem>
                    <SelectItem value="CLOSED">CLOSED</SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )} />
          <FormField
            control={form.control}
            name="remarks"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Remarks</FormLabel>
                <FormControl>
                  <Textarea placeholder="Remarks" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )} />
          <Button type="submit">Submit</Button>
        </form>
      </Form>
    </div>
  );
};
