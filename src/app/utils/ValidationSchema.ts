import { z } from "zod";

export const createIssueSchema = z.object({
  title: z.string().min(1, "Title Is required").max(255),
  description: z.string().min(1, "Description Is required"),
  patientId: z.number().min(1, "Patient ID Is required"),
});

export const createFormIssueSchema = z.object({
  title: z.string().min(1, "Title Is required").max(255),
  description: z.string().min(1, "Description Is required"),
  patientId: z
    .string()
    .min(1, "Patient ID Is required")
    .refine((value) => !isNaN(Number(value)), {
      message: "Patient ID must be a number",
    }),
});

export const createFormPatientSchema = z.object({
  firstName: z.string().min(2).max(255),
  lastName: z.string().min(2).max(255),
  email: z.string().email(),
  age: z.string().regex(/^\d+$/),
  mobileNumber: z.string().min(10, "The number must be of 10 digits").max(20),
  remarks: z.string().min(1),
});

export const createPatientSchema = z.object({
  firstName: z.string().min(2).max(255),
  lastName: z.string().min(2).max(255),
  email: z.string().email(),
  age: z.number().min(1).max(150),
  mobileNumber: z.string().min(10).max(20),
  remarks: z.string().min(1),
});
