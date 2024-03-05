"use client";
import React, { useState } from "react";
import { z } from "zod";
import { createDisabilitiesSchema } from "../utils/ValidationSchema";
//import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
//import axios from "axios";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

export type DisabilityForm = z.infer<typeof createDisabilitiesSchema>;
const DisabilityPage = () => {
  //const router = useRouter();
  const [error, setError] = useState("");
  const [submitting, setIsSubmitting] = useState(false);

  const form = useForm<DisabilityForm>({
    resolver: zodResolver(createDisabilitiesSchema),
    defaultValues: {
      name: "",
      description: "",
    },
  });

  const onSubmit = (data: DisabilityForm) => {
    console.log(data);
    // try {
    //   setIsSubmitting(true);
    //   axios.post("/api/disability", data);
    //   router.push("/disability");
    // } catch {
    //   setIsSubmitting(false);
    //   setError(`An unexpected error ${error}`);
    // }
    // console.log(error);
  };

  return (
    <div className="">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="sapce-y-3">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>disability name:</FormLabel>
                <FormControl>
                  <Input placeholder="disability name" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="description"
            render={({ field }) => (
              <FormItem>
                <FormLabel>description:</FormLabel>
                <FormControl>
                  <Textarea placeholder="description" {...field} />
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

export default DisabilityPage;