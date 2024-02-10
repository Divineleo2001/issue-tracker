"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import axios from "axios";
import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { createIssueSchema } from "@/app/utils/ValidationSchema";
import { z } from "zod";
import ErrorComponent from "@/components/Errors/ErrorComponent";

type IssueForm = z.infer<typeof createIssueSchema>;

const NewIssuePage = () => {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IssueForm>({
    resolver: zodResolver(createIssueSchema),
  });
  const [error, setError] = useState(null);

  const onSubmit = async (data: IssueForm) => {
    try {
      await axios.post("/api/issues", data);
      router.push("/issues");
    } catch (error) {
      setError(error);
    }
  };

  return (
    <div className="max-w-lg mx-auto mt-10">
      <form className="flex flex-col gap-5" onSubmit={handleSubmit(onSubmit)}>
        <h1 className="text-center text-2xl mt-10">New Issue</h1>
        {errors.title && (
          <ErrorComponent alertTitle="Title" message={errors.title.message} />
        )}
        <Input className="" placeholder="Title" {...register("title")} />

        {errors.description && (
          <ErrorComponent
            alertTitle="Description"
            message={errors.description.message}
          />
        )}
        <Textarea placeholder="Description" {...register("description")} />

        <Button type="submit">Submit New Issue</Button>

        {error && <p className="text-red-500">{error.message}</p>}
      </form>
    </div>
  );
};

export default NewIssuePage;
