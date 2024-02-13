"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import axios from "axios";
import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { createFormIssueSchema, createIssueSchema } from "@/app/utils/ValidationSchema";
import { z } from "zod";
import ErrorComponent from "@/components/Errors/ErrorComponent";
import Spinner from "@/components/Spinner";

const NewPatientIssue = ({ params }: { params: { patientId: number } }) => {
  const router = useRouter()
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: zodResolver(createFormIssueSchema)
  })
  // const [error, setError]

  
  return <div>My post {params.patientId}</div>;
};

export default NewPatientIssue;
