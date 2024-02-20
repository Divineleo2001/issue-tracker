import React from "react";
import prisma from "@/../prisma/client";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import ViewCommentTable from "../viewcomments/ViewCommentTable";

const ViewPatientDetails = async ({
  params,
}: {
  params: { patientId: number };
}) => {
  const patient = await prisma.patient.findMany({
    where: {
      id: parseInt(params.patientId?.toString()),
    },
    include: {
      vitals: true,
      comments: true,
    },
  });
  const comments = await prisma.comment.findMany({
    where: {
      patientId: parseInt(params.patientId?.toString()),
    },
    include: {
      patient: true,
    },
  });

  const patientName = `${patient[0].firstName} ${patient[0].lastName}`;

  return (
    <div className="p-1">
      <Button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        <Link href="/patients">Back</Link>
      </Button>

      <div className="p-10">
        <h1 className="text-2xl font-bold">Patient Info</h1>
        <p className="text-3xl">{patientName}</p>
        <p>
          <strong>Gender:</strong> {patient[0].gender}
        </p>
        <p>
          <strong>Age:</strong> {patient[0].age}
        </p>
        <p>
          <strong>Mobile Number:</strong> {patient[0].mobileNumber}
        </p>
        <p>
          <strong>Remarks:</strong> {patient[0].remarks}
        </p>

        <div>
          <Accordion type="single" collapsible>
            <AccordionItem value="item-1">
              <AccordionTrigger>
                <h1 className="text-2xl font-bold">Vitals</h1>
              </AccordionTrigger>

              <AccordionContent>
                <div className="flex flex-col  gap-5">
                  {patient[0].vitals.map((vital, index) => (
                    <div key={index} className="p-4 border rounded-md">
                      <p>
                        <strong>Level Of Consciousness:</strong> {vital.LoC}
                      </p>
                      <p>
                        <strong>Airway Status:</strong> {vital.airwayStatus}
                      </p>
                      <p>
                        <strong>Breathing Rate:</strong> {vital.breathingRate}
                      </p>
                      <p>
                        <strong>Breathing Status:</strong>{" "}
                        {vital.breathingStatus}
                      </p>
                      <p>
                        <strong>Pulse Rate:</strong> {vital.pulseRate}
                      </p>
                      <p>
                        <strong>Pulse Rate Quality:</strong>{" "}
                        {vital.pulseRateQuality}
                      </p>
                      <p>
                        <strong>Systolic Blood Pressure:</strong>{" "}
                        {vital.systolicBloodPressure}
                      </p>
                      <p>
                        <strong>Diastolic Blood Pressure:</strong>{" "}
                        {vital.diastolicBloodPressure}
                      </p>
                      <p>
                        <strong>SpO2:</strong> {vital.spo2}
                      </p>
                      <p>
                        <strong>Temperature:</strong> {vital.temperature}
                      </p>
                      <p>
                        <strong>Time Taken:</strong>{" "}
                        {new Date(vital.createdAt).toLocaleString()}
                      </p>
                    </div>
                  ))}
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
        <div>
          <Accordion type="single" collapsible>
            <AccordionItem value="item-1">
              <AccordionTrigger>
                <h1 className="text-2xl font-bold">Dissabilities</h1>
              </AccordionTrigger>

              <AccordionContent>
                <div>
                  <p>
                    Visual Impairment: Some patients may experience partial or
                    complete loss of vision, which can significantly impact
                    their daily activities and require specialized support and
                    accommodations.
                  </p>
                  <p>
                    Mobility Impairment: Disabilities affecting mobility, such
                    as paralysis, limb amputation, or conditions like multiple
                    sclerosis, can limit a patient's ability to move
                    independently and may require assistive devices or
                    modifications to their environment.
                  </p>
                  <p>
                    Hearing Loss: Patients with hearing impairments may face
                    challenges in communication and require accommodations such
                    as sign language interpreters, captioning, or hearing aids.
                  </p>
                  <p>
                    Intellectual Disabilities: Individuals with intellectual
                    disabilities may have limitations in cognitive functioning,
                    adaptive behavior, and social skills, requiring personalized
                    support and interventions to enhance their quality of life
                    and independence.
                  </p>
                  <p>
                    Mental Health Disorders: Conditions like depression,
                    anxiety, schizophrenia, or bipolar disorder can impact a
                    patient's emotional well-being and functioning,
                    necessitating comprehensive treatment plans and support
                    services.
                  </p>
                  <p>
                    Chronic Pain: Patients with chronic pain conditions, such as
                    fibromyalgia, arthritis, or neuropathy, experience
                    persistent discomfort that can affect their mobility, mood,
                    and overall quality of life, often requiring multimodal
                    approaches to pain management.
                  </p>
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
        <div>
          <Accordion type="single" collapsible>
            <AccordionItem value="item-1">
              <AccordionTrigger>
                <h1 className="text-2xl font-bold">Commorbidities</h1>
              </AccordionTrigger>

              <AccordionContent>
                <ViewCommentTable comments={comments} />
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
        <div>
          <Accordion type="single" collapsible>
            <AccordionItem value="item-1">
              <AccordionTrigger>
                <h1 className="text-2xl font-bold">Comments</h1>
              </AccordionTrigger>

              <AccordionContent>
                <ViewCommentTable comments={comments} />
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </div>
  );
};

export default ViewPatientDetails;
