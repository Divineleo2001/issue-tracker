import { z } from "zod";

export const createVitalSchema = z.object({
  patientId: z.number(),
  LoC: z.string(),
  airwayStatus: z.string(),
  breathingRate: z.number(),
  breathingStatus: z.string(),
  pulseRate: z.number(),
  pulseRateQuality: z.string(),
  systolicBloodPressure: z.number(),
  diastolicBloodPressure: z.number(),
  spo2: z.number(),
  temperature: z.number(),
});

export const createCommentSchema = z.object({
  doctorName: z.string().min(2, "Doctor Name Is required"),
  patientId: z.number().min(1, "Patient ID Is required"),
  comment: z
    .string()
    .min(1, "comment Is required")
    .max(500, "comment must be less than 500 characters"),
});

export const createFormCommentSchema = z.object({
  doctorName: z.string().min(2, "Doctor Name Is required"),
  patientId: z
    .string()
    .min(1, "Patient ID Is required")
    .refine((value) => !isNaN(Number(value)), {
      message: "Patient ID must be a number",
    }),
  comment: z
    .string()
    .min(1, "comment Is required")
    .max(500, "comment must be less than 500 characters"),
});

export const createFormPatientSchema = z.object({
  firstName: z.string().min(2).max(255),
  lastName: z.string().min(2).max(255),
  email: z.string().email(),
  status: z.string(),
  gender: z.string(),
  age: z
    .string()
    .transform((val) => parseInt(val))
    .refine((value) => !isNaN(value), {
      message: "Age must be a number",
    }),
  mobileNumber: z.string().min(10, "The number must be of 10 digits").max(20),
  remarks: z.string().min(1),
});

export const createPatientSchema = z.object({
  firstName: z.string().min(2).max(255),
  lastName: z.string().min(2).max(255),
  email: z.string().email(),
  status: z.string(),
  age: z.number().min(1).max(150),
  gender: z.string(),
  mobileNumber: z.string().min(10).max(20),
  remarks: z.string().min(1),
});
