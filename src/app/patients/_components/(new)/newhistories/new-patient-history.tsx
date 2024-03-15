import { createHistorySchema } from "@/app/utils/ValidationSchema";
import { Button } from "@/components/ui/button";
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
import { zodResolver } from "@hookform/resolvers/zod";
import React from "react";
import { useForm } from "react-hook-form";
import { DialogClose } from "@/components/ui/dialog";
import { HistoryData, HistoryForm } from "@/app/actions/(add-request)/addHistory";

export const HistoryPage = ({ id }: { id: number }) => {
  const form = useForm<HistoryForm>({
    resolver: zodResolver(createHistorySchema),
    defaultValues: {
      history: "",
      patientId: id,
    },
  });

  const onSubmit = async (values: HistoryForm) => {
  const formattedValues: HistoryForm = { ...values, patientId: Number(values.patientId)};
    console.log(formattedValues);
    await HistoryData(formattedValues);
  }

  return (
    <div className="">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-3">
          <FormField
            control={form.control}
            name="history"
            render={({ field }) => (
              <FormItem>
                <FormLabel> History:</FormLabel>
                <FormControl>
                  <Textarea placeholder="history" {...field} />
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
                    <Input {...field} />
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
