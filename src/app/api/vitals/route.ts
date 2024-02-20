import { createVitalSchema } from "@/app/utils/ValidationSchema";
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
  const validation = createVitalSchema.safeParse(body);
  if (!validation.success)
    return NextResponse.json(validation.error.errors, {
      status: 400,
    });

  const LoC = validation.data.LoC as LevelOfConsciousness;
  const airwayStatus = validation.data.airwayStatus as AirwayStatus;
  const breathingStatus = validation.data.breathingStatus as BreathingStatus;
  const pulseRateQuality = validation.data.pulseRateQuality as PulseQuality;

  if (!Object.values(LevelOfConsciousness).includes(LoC)) {
    return NextResponse.json(
      { error: "Invalid Level of Consciousness" },
      {
        status: 400,
      }
    );
  }
  if (!Object.values(AirwayStatus).includes(airwayStatus)) {
    return NextResponse.json(
      { error: "Invalid Airway Status" },
      {
        status: 400,
      }
    );
  }
  if (!Object.values(BreathingStatus).includes(breathingStatus)) {
    return NextResponse.json(
      { error: "Invalid Breathing Status" },
      {
        status: 400,
      }
    );
  }
  if (!Object.values(PulseQuality).includes(pulseRateQuality)) {
    return NextResponse.json(
      { error: "Invalid Pulse quality" },
      {
        status: 400,
      }
    );
  }

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
