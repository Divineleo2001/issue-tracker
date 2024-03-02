import { createComorbiditiesSchema } from "@/app/utils/ValidationSchema";
import { NextRequest, NextResponse } from "next/server";
import prisma from "@/../prisma/client";

export async function POST(request: NextRequest){
    const body= await request.json();
    const validation=createComorbiditiesSchema.safeParse(body);
    if(!validation.success)
    {
        return NextResponse.json(validation.error.format(),{
            status:400,
        });

    }

    const Comorbidity=await prisma.comorbidities.create({
        data:validation.data,
    })

    return NextResponse.json(Comorbidity,{
        status:201
    })
}