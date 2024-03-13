"use client";
import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  createFormCommentSchema,
  createCommentSchema,
} from "@/app/utils/ValidationSchema";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { CommentsData } from "@/app/actions/addComments";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { DialogClose } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export type CommentForm = z.infer<typeof createCommentSchema>;

export const PatientComment = ({ id }: { id: number }) => {
  const form = useForm<CommentForm>({
    resolver: zodResolver(createFormCommentSchema),
    defaultValues: {
      comment: "",
      patientId: id,
    }, 
  });

  const handleSubmit = async (values : CommentForm) => {
    const formattedValues: CommentForm = { ...values, patientId: Number(values.patientId)};
    console.log(formattedValues);
    await CommentsData(formattedValues);
  }

  return (
    <>
      <div>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-3">
            <div>
              <FormField
                control={form.control}
                name="comment"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Comments:</FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="comments"
                        {...field}
                        className="w-full h-32"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <div className="hidden">
                <FormField
                  control={form.control}
                  name="patientId"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Patient ID:</FormLabel>
                      <FormControl>
                        <Input  {...field} />
                      </FormControl>
                    </FormItem>
                  )}
                />
              </div>

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
    </>
  );
};

export default PatientComment;
