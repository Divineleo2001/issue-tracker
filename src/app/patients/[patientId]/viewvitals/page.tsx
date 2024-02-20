import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";
import prisma from "@/../prisma/client";
import ViewVitalTable from "./ViewVitalTable";


const ViewPatientVital = async({params}: {params: {patientId: number}}) => {
    const vitals = await prisma.vitals.findMany({
        where: {
            patientId: parseInt(params.patientId?.toString()),
        },
        include: {
            patient: true,
        },
    
    })

    console.log(vitals)
    
    const patientName = `${vitals[0].patient.firstName} ${vitals[0].patient.lastName}`;
    
    return (
        <div className="max-w-6xl  mx-auto p-10">
        <Link href="/patients">
            <Button>Back</Button>
        </Link>
        <Link href={`/patients/${params.patientId}/newvital`}>
            <div className="flex justify-end m-3">
            <Button className="">Add new Vital</Button>
            </div>
        </Link>
        <h1 className="text-3xl font-bold py-4">{patientName} Vitals</h1>
        
        <div className="md:grid md:grid-cols-2 md:gap-4">
            {vitals.map((vital) => (
                <ViewVitalTable vitals={vital} />
            ))}
        </div>
    
        
        </div>
    );
}

export default ViewPatientVital;