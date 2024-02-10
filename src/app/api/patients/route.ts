import { NextRequest, NextResponse } from "next/server";
import prisma from "@/../prisma/client";
import { createPatientSchema } from "@/app/utils/ValidationSchema";

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
