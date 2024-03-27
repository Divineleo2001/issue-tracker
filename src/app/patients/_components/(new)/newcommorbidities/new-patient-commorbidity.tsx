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
import { DialogClose } from "@/components/ui/dialog";
import { ComorbidityData } from "@/app/actions/(add-request)/addComorbidities";

export type ComorbidityForm = z.infer<typeof createComorbiditiesSchema>;
export const Comorbiditypage = () => {
  const form = useForm<ComorbidityForm>({
    resolver: zodResolver(createComorbiditiesSchema),
    defaultValues: {
      name: "",
      description: "",
    },
  });
  const onSubmit = async (values: ComorbidityForm) => {
    await ComorbidityData(values)
  };

  return (
    <div className="">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-3">
          <div>

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
          </div>
          <div className="mt-4">
            {!form.formState.isValid ? (
              <div>
                <Button type="submit" className="w-64">
                  {" "}
                  Save changes{" "}
                </Button>
              </div>
            ) : (
              <div>
                <DialogClose asChild>
                  <div>
                    <Button type="submit" className="w-64">
                      {" "}
                      Save changes{" "}
                    </Button>{" "}
                  </div>
                </DialogClose>
              </div>
            )}
          </div>
        </form>
      </Form>
    </div>
  );
};

export default Comorbiditypage;
