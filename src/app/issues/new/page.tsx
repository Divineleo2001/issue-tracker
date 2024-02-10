"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useForm, Controller } from "react-hook-form";
import SimpleMdeReact from "react-simplemde-editor";
import "easymde/dist/easymde.min.css";
import { useRouter } from "next/navigation";
import axios from "axios";

interface IssueForm {
  title: string;
  description: string;
}

const NewIssuePage = () => {

  const router = useRouter();
  const { register, control, handleSubmit } = useForm<IssueForm>();

  return (
    <form
      className="max-w-lg mx-auto space-y-10"
      onSubmit={handleSubmit(async (data) => {
        
        await axios.post("/api/issues", data);
        router.push('/issues');
       
      })}
    >
      <Input className="mt-10" placeholder="Title" {...register("title")} />
      <Textarea placeholder="Description" {...register("description")} />

      {/* <Controller
        name="description"
        control={control}
        render={({ field }) => (
          <SimpleMdeReact placeholder="Description" {...field} />
        )}
      /> */}

      <Button>Submit New Issue</Button>
    </form>
  );
};

export default NewIssuePage;
