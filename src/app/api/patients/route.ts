import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import prisma from "@/../prisma/client";

const createPatientSchema = z.object({
  firstName: z.string().min(2).max(255),
  lastName: z.string().min(2).max(255),
  email: z.string().email(),
  age: z.number().min(1).max(150),
  mobileNumber: z
    .string()
    .min(10)
    .max(20),
  remarks: z.string().min(1),
});

export async function POST(request: NextRequest) {
  const body = await request.json();
  const validation = createPatientSchema.safeParse(body);
  if (!validation.success)
    return NextResponse.json(validation.error.errors, {
      status: 400,
    });
    const newPatient = await prisma.patient.create({
        data: {
            firstName: body.firstName,
            lastName: body.lastName,
            email: body.email,
            age: body.age,
            mobileNumber: body.mobileNumber,
            remarks: body.remarks
        }
    })
    
    return NextResponse.json(newPatient, {
        status: 201
    })
}
