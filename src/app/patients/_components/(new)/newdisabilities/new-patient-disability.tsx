"use client";
import React from "react";
import { z } from "zod";
import { createDisabilitiesSchema } from "../../../../utils/ValidationSchema";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { DialogClose } from "@/components/ui/dialog";
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
import { DisabilitData } from "@/app/actions/disabilities";

export type DisabilityForm = z.infer<typeof createDisabilitiesSchema>;
export const DisabilityPage = () => {


  const form = useForm<DisabilityForm>({
    resolver: zodResolver(createDisabilitiesSchema),
    defaultValues: {
      name: "",
      description: "",
    },
  });

  const onSubmit = async(data: DisabilityForm) => {
    console.log(data);
    await DisabilitData(data);
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
                  <FormLabel>Disability Name:</FormLabel>
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
                <Button type="submit" className="w-full">
                  {" "}
                  Save changes{" "}
                </Button>
              </div>
            ) : (
                <div>
                  <DialogClose asChild>
                    <div>
                      <Button type="submit" className="w-full">
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

export default DisabilityPage;
