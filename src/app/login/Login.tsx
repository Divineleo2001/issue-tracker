"use client";
import * as z from "zod";
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
import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { LoginUser } from "../actions/login";
import { useRouter } from "next/navigation";



const formSchema = z.object({
  username: z.string(),
  password: z.string().min(3),
  
});

export type formLogin = z.infer<typeof formSchema>;

const Login = () => {
  const router = useRouter()
  
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
      password: "",
     
    },
  });
  const handleSubmit = async (values: formLogin) => {
    await LoginUser(values);
    router.push("/patients")
  };
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Form {...form}>
        <form
        
          onSubmit={form.handleSubmit(handleSubmit)}
          className="max-w-md w-full flex flex-col gap-4"
        >
          <FormField
            control={form.control}
            name="username"
            render={({ field }) => {
              return (
                <FormItem>
                  <FormLabel>Username</FormLabel>
                  <FormControl>
                    <Input placeholder="username" type="text" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              );
            }}
          />

          <FormField
            control={form.control}
            name="password"
            render={({ field }) => {
              return (
                <FormItem>
                  <FormLabel>Password</FormLabel>
                  <FormControl>
                    <Input placeholder="Password" type="password" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              );
            }}
          />
          {/* <FormField
            control={form.control}
            name="rememberMe"
            render={({ field }) => {
              return (
                <FormItem>
                  <FormLabel>Remember me</FormLabel>
                  <FormControl>
                    <input type="checkbox" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              );
            }}
          /> */}
          <Button className="w-full">Submit</Button>
        </form>
      </Form>
    </main>
  );
};

export default Login;
