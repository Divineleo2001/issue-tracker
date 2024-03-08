"use client"
import React, { useState } from "react";
import { createComorbiditiesSchema } from "../../../../utils/ValidationSchema";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import axios from "axios";
import { z } from "zod";
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

export type ComorbidityForm = z.infer<typeof createComorbiditiesSchema>;
export const Comorbiditypage = () => {
  //const router = useRouter();
  const [error, setError] = useState("");
  const [IsSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<ComorbidityForm>({
    resolver: zodResolver(createComorbiditiesSchema),
    defaultValues: {
      name: "",
      description: "",
    },
  });
  const onSubmit = (data: ComorbidityForm) => {
    console.log(data);
    
  };

  return (
    <div className="">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-3">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Comorbidity Name:</FormLabel>
                <FormControl>
                  <Input placeholder="comorbidity name" {...field} />
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
                <FormLabel>Description:</FormLabel>
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

export default Comorbiditypage;
