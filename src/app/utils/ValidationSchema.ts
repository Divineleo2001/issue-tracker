import { create } from "domain";
import { z } from "zod";

export const createVitalsSchema = z.object({
  id: z.number(),
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

export const createFormVitalsSchema = z.object({
  id: z.number(),
  LoC: z.string(),
  airwayStatus: z.string(),
  breathingRate: z
    .string()
    .min(1, "Breathing Rate Is required")
    .refine((value) => !isNaN(Number(value)), {
      message: "Breathing Rate must be a number",
    }),
  breathingStatus: z.string(),
  pulseRate: z
    .string()
    .min(1, "Pulse Rate Is required")
    .refine((value) => !isNaN(Number(value)), {
      message: "Pulse Rate must be a number",
    }),
  pulseRateQuality: z.string(),
  systolicBloodPressure: z
    .string()
    .min(1, "Systolic Blood Pressure Is required")
    .refine((value) => !isNaN(Number(value)), {
      message: "Systolic Blood Pressure must be a number",
    }),
  diastolicBloodPressure: z
    .string()
    .min(1, "Diastolic Blood Pressure Is required")
    .refine((value) => !isNaN(Number(value)), {
      message: "Diastolic Blood Pressure must be a number",
    }),
  spo2: z
    .string()
    .min(1, "SPO2 Is required")
    .refine((value) => !isNaN(Number(value)), {
      message: "SPO2 must be a number",
    }),
  temperature: z
    .string()
    .min(1, "Temperature Is required")
    .refine((value) => !isNaN(Number(value)), {
      message: "Temperature must be a number",
    }),
});

export const createCommentSchema = z.object({
  comment: z
    .string()
    .min(1, "comment Is required")
    .max(500, "comment must be less than 500 characters"),
  patientId: z.number().min(1, "Patient ID Is required"),
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
  name: z.string().nullable(),
  regId: z.string().refine((value) => !isNaN(Number(value)), {
    message: "Registration ID must be a number",
  }),
  age: z.string().refine((value) => !isNaN(Number(value)), {
    message: "Age must be a number",
  }),
  gender: z.string(),
});

export const patientDataSchema = z.object({
  id: z.number(),
  regId: z.string(),
  name: z.string(),
  gender: z.string(),
  age: z.number(),
  createdBy: z.string(),
  createdDate: z.date(),
  login: z.string(),
  lastModifiedBy: z.string(),
  lastModifiedDate: z.date(),
});

export const createComorbiditiesSchema = z.object({
  name: z.string().min(2).max(255),
  description: z.string(),
});

export const createDisabilitiesSchema = z.object({
  name: z.string().min(2).max(255),
  description: z.string(),
});

export const createHistorySchema = z.object({
  history: z.string(),
  patientId: z
    .string()
    .min(1, "Patient ID Is required")
    .refine((value) => !isNaN(Number(value)), {
      message: "Patient ID must be a number",
    }),
});
