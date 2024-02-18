"use client";
import { z } from "zod";
import {
  createPatientSchema,
} from "@/app/utils/ValidationSchema";
import { NewPatientPage } from "./NewPatientPage";

export type PatientForm = z.infer<typeof createPatientSchema>;
export default NewPatientPage;
