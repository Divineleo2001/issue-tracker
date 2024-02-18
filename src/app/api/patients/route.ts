import { NextRequest, NextResponse } from "next/server";
import prisma from "@/../prisma/client";
import { createPatientSchema } from "@/app/utils/ValidationSchema";
import { PatientStatus } from "@prisma/client";

export async function POST(request: NextRequest) {
  const body = await request.json();
  const validation = createPatientSchema.safeParse(body);
  if (!validation.success)
    return NextResponse.json(validation.error.errors, {
      status: 400,
    });

    const status = validation.data.status as PatientStatus;
    if (!Object.values(PatientStatus).includes(status)) {
    return NextResponse.json({ error: 'Invalid status' }, {
      status: 400,
    });
  }
    const newPatient = await prisma.patient.create({
      data: {
        ...validation.data,
        status,
      }
        
    })
    
    return NextResponse.json(newPatient, {
        status: 201
    })
}
