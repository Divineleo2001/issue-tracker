import { HistoryForm } from "@/app/actions/history";
import { createHistorySchema } from "@/app/utils/ValidationSchema";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { zodResolver } from "@hookform/resolvers/zod";
import React from "react";
import { useForm } from "react-hook-form";

export const HistoryPage = ({id}:{id:number}) => {
  const form = useForm<HistoryForm>({
    resolver: zodResolver(createHistorySchema),
    defaultValues: {
      history: "",
      patientId:id,
    },
  });

  return (
    <div className="">
      <Form {...form}>
        <form className="space-y-3">
            <FormField
            control={form.control}
            name="history"
            render={({field})=>(
                <FormItem>
                    <FormLabel> History </FormLabel>
                        <FormControl>
                            <Textarea placeholder="history"{...field}/>
                        </FormControl>
                  <FormMessage/>
                </FormItem>
            )}
            />
            <FormField
            control={form.control}
            name="patientId"
            render={({field})=>(
                <FormItem>
                    <FormLabel>Patient ID:</FormLabel>
                    <FormControl>
                        <Input {...field}/>
                    </FormControl>
                    <FormMessage/>
                </FormItem>
            )}
            />
        </form>
      </Form>
    </div>
  );
};
