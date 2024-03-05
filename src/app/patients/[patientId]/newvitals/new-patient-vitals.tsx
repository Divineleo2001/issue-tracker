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
import { VitalsData } from "@/app/actions/vitals";
import { DialogClose } from "@/components/ui/dialog";

export type VitalsForm = z.infer<typeof createVitalsSchema>;

const NewPatientVitals = ({ id }: { id: number }) => {
  const Vitalform = useForm<VitalsForm>({
    resolver: zodResolver(createFormVitalsSchema),
    defaultValues: {
      patientId: id,
      loc: "OPEN",
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

  const handleSubmit = async (data: VitalsForm) => {
    try {
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
      await VitalsData(formattedData);
      // console.log(data)
      if (Vitalform.formState.isSubmitted) {
        Vitalform.reset();
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className=" mx-auto ">
      {/* level of Consciousness */}
      <Form {...Vitalform}>
        <form
          onSubmit={Vitalform.handleSubmit(handleSubmit)}
          className="md:space-y-3"
        >
          <div className="">
            <FormField
              control={Vitalform.control}
              name="patientId"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Patient ID</FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <div className="md:flex md:gap-2">
            <div className="md:flex-1 ">
              <FormField
                control={Vitalform.control}
                name="loc"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Level Of Consciousness</FormLabel>
                    <Select
                      onValueChange={field.onChange}
                      //   defaultValue={}
                    >
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Select " />
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
                          <SelectValue placeholder="Select" />
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
                          <SelectValue placeholder="Select" />
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
                          <SelectValue placeholder="Select" />
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
          <div className="mt-4">
            {!Vitalform.formState.isValid ? (
              <Button type="submit" className="w-full">
                {" "}
                Save changes{" "}
              </Button>
            ) : (
              <DialogClose asChild>
                <Button type="submit" className="w-full">
                  {" "}
                  Save changes{" "}
                </Button>{" "}
              </DialogClose>
            )}
            {/* <Button type="submit">Submit</Button> */}
          </div>
        </form>
      </Form>

      {/* Submit */}
    </div>
  );
};

export default NewPatientVitals;
