import { createDisabilitiesSchema } from "@/app/utils/ValidationSchema";
import { NextRequest, NextResponse } from "next/server";
import prisma from "@/../prisma/client";

export async function POST(request:NextRequest){
    const body= await request.json();

    const validation=createDisabilitiesSchema.safeParse(body);

    if(!validation.success)
    {
        return NextResponse.json(validation.error.format(),{
            status:400,
        });
    }

    const Disability=await prisma.disabilities.create({
        data:validation.data,
    })

    return NextResponse.json(Disability,{
        status:201
    })
}