"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { z } from "zod";
import {
  createFormVitalsSchema,
  createVitalsSchema,
} from "@/app/utils/ValidationSchema";
import { useRouter } from "next/navigation";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import axios from "axios";
import Link from "next/link";

type VitalsForm = z.infer<typeof createVitalsSchema>;

const NewPatientVitals = ({ params }: { params: { patientId: number } }) => {
  const router = useRouter();
  const [error, setError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const Vitalform = useForm<VitalsForm>({
    resolver: zodResolver(createFormVitalsSchema),
    defaultValues: {
      patientId: params.patientId,
      LoC: "OPEN",
      airwayStatus: "OPEN",
      breathingRate: 0,
      breathingStatus: "NORMAL",
      pulseRate: 0,
      pulseRateQuality: "REGULAR",
      systolicBloodPressure: 0,
      diastolicBloodPressure: 0,
      spo2: 0,
      temperature: 0,
    },
  });

  const onSubmit = (data: VitalsForm) => {
    try {
      setIsSubmitting(true);
      const formattedData: VitalsForm = {
        ...data,
        patientId: Number(data.patientId),
        breathingRate: Number(data.breathingRate),
        pulseRate: Number(data.pulseRate),
        systolicBloodPressure: Number(data.systolicBloodPressure),
        diastolicBloodPressure: Number(data.diastolicBloodPressure),
        spo2: Number(data.spo2),
        temperature: Number(data.temperature),
      };
      axios.post("/api/vitals", formattedData);
      router.push(`/patients`);
    } catch (error) {
      setIsSubmitting(false);
      setError(`An unexpected error occurred: ${error}`);
    }
  };

  return (
    <div className="max-w-lg md:max-w-3xl mx-auto mt-10 px-10">
      {/* level of Consciousness */}
      <Button>
        <Link href="/patients">Back</Link>
      </Button>
      <h1 className="text-2xl p-3">Vitals of Patient ID.{params.patientId}</h1>
      <Form {...Vitalform}>
        <form onSubmit={Vitalform.handleSubmit(onSubmit)} className="space-y-3">
          <div className="hidden">
            <FormField
              control={Vitalform.control}
              name="patientId"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Patient ID</FormLabel>
                  <FormControl>
                    <Input
                      placeholder={params.patientId.toString()}
                      readOnly
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <div className="md:flex md:gap-2">
            <div className="md:flex-1">
              <FormField
                control={Vitalform.control}
                name="LoC"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Level Of Consciousness</FormLabel>
                    <Select
                      onValueChange={field.onChange}
                      //   defaultValue={}
                    >
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Select the consciousness level" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="VERBAL">Verbal</SelectItem>
                        <SelectItem value="ALERT">Alert</SelectItem>
                        <SelectItem value="PAIN">Pain</SelectItem>
                        <SelectItem value="UNRESPONSIVE">
                          Unresponsive
                        </SelectItem>
                      </SelectContent>
                    </Select>
                  </FormItem>
                )}
              />
            </div>
            <div className="md:flex-1">
              {/* Airway Status  */}
              <FormField
                control={Vitalform.control}
                name="airwayStatus"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Airway Status</FormLabel>
                    <Select
                      onValueChange={field.onChange}
                      //   defaultValue={}
                    >
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Select the Airway status of the patient" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="OPEN">OPEN</SelectItem>
                        <SelectItem value="PARTIALLY_BLOCKED">
                          PARTIALLY_BLOCKED
                        </SelectItem>
                        <SelectItem value="COMPLETELY_BLOCKED">
                          COMPLETELY_BLOCKED
                        </SelectItem>
                      </SelectContent>
                    </Select>
                  </FormItem>
                )}
              />
            </div>
          </div>
          <h1 className="font-light text-sm">Lung Related Info</h1>
          <div className="md:flex md:gap-2">
            <div className="md:flex-1">
              {/* Breathing Status */}
              <FormField
                control={Vitalform.control}
                name="breathingStatus"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Breathing Status</FormLabel>
                    <Select
                      onValueChange={field.onChange}
                      //   defaultValue={}
                    >
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Select the Breathing Status of the patient" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="NORMAL">NORMAL</SelectItem>
                        <SelectItem value="SHALLOW">SHALLOW</SelectItem>
                        <SelectItem value="LABORED">LABORED</SelectItem>
                        <SelectItem value="ABSENT">ABSENT</SelectItem>
                      </SelectContent>
                    </Select>
                  </FormItem>
                )}
              />
            </div>
            <div className="md:flex-1">
              {/* Breathing Rate */}
              <FormField
                control={Vitalform.control}
                name="breathingRate"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Breathing Rate</FormLabel>
                    <FormControl>
                      <Input placeholder="" type="number" {...field} />
                    </FormControl>

                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
          </div>

          <h1 className="text-sm font-light">Heart related Info</h1>
          <div className="md:flex md:gap-2">
            <div className="md:flex-1">
              {/* Pulse Quality */}
              <FormField
                control={Vitalform.control}
                name="pulseRateQuality"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Pulse Rate Quality</FormLabel>
                    <Select
                      onValueChange={field.onChange}
                      //   defaultValue={}
                    >
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Select the Breathing Status of the patient" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="REGULAR">REGULAR</SelectItem>
                        <SelectItem value="IRREGULAR">IRREGULAR</SelectItem>
                        <SelectItem value="ABSENT">ABSENT</SelectItem>
                      </SelectContent>
                    </Select>
                  </FormItem>
                )}
              />
            </div>
            <div className="md:flex-1">
              {/* Pulse Rate */}
              <FormField
                control={Vitalform.control}
                name="pulseRate"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Pulse Rate / Beats per Minute</FormLabel>
                    <FormControl>
                      <Input placeholder="" type="number" {...field} />
                    </FormControl>

                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
          </div>

          {/* Systolic Blood Pressure */}
          {/* Diastolic Blood Pressure */}
          <div>
            <h2 className="text-xl font-semibold">Blood Pressure </h2>
            <div className="flex gap-2">
              <div className="flex-1">
                <FormField
                  control={Vitalform.control}
                  name="systolicBloodPressure"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Systolic</FormLabel>
                      <FormControl>
                        <Input placeholder="" {...field} />
                      </FormControl>

                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <div className="flex-1">
                <FormField
                  control={Vitalform.control}
                  name="diastolicBloodPressure"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Diastolic</FormLabel>
                      <FormControl>
                        <Input placeholder="" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
            </div>
          </div>

          <div className="md:flex md:gap-2">
            {/* SpO2 */}
            <div className="md:flex-1">
              <FormField
                control={Vitalform.control}
                name="spo2"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>SPO2</FormLabel>
                    <FormControl>
                      <Input placeholder="" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <div className="md:flex-1">
              {/* Temperature */}
              <FormField
                control={Vitalform.control}
                name="temperature"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Temperature</FormLabel>
                    <FormControl>
                      <Input placeholder="" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
          </div>

          <Button type="submit">Submit</Button>
        </form>
      </Form>

      {/* Submit */}
    </div>
  );
};

export default NewPatientVitals;
