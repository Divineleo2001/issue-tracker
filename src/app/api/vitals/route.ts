import { createVitalsSchema } from "@/app/utils/ValidationSchema";
import { NextRequest, NextResponse } from "next/server";
import prisma from "@/../prisma/client";
import {
  LevelOfConsciousness,
  AirwayStatus,
  BreathingStatus,
  PulseQuality,
} from "@prisma/client";

export async function POST(request: NextRequest) {
  const body = await request.json();
  const validation = createVitalsSchema.safeParse(body);
  if (!validation.success)
    return NextResponse.json(validation.error.errors, {
      status: 400,
    });

  const LoC = validation.data.LoC as LevelOfConsciousness;
  const airwayStatus = validation.data.airwayStatus as AirwayStatus;
  const breathingStatus = validation.data.breathingStatus as BreathingStatus;
  const pulseRateQuality = validation.data.pulseRateQuality as PulseQuality;

  const newPatientVital = await prisma?.vitals.create({
    data: {
      ...validation.data,
      LoC,
      airwayStatus,
      breathingStatus,
      pulseRateQuality,
    },
  });

  return NextResponse.json(newPatientVital, {
    status: 201,
  });
}
