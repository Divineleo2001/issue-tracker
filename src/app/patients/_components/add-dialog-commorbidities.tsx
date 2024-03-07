"use client";
import * as React from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import useMediaQuery from "@/hooks/use-media-query";
import Comorbiditypage from "../[patientId]/(new)/newcommorbidities/new-patient-commorbidity";

export const AddDialogComorbidities = () => {
  const [open, setOpen] = React.useState(false);
  const isDesktop = useMediaQuery("(min-width:768px)");
  if (isDesktop) {
    return (
      <>
        <Dialog open={open} onOpenChange={setOpen}>
          <DialogTrigger asChild>
            <Button variant="outline">Add Comorbidities</Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[600px] sm:max-h-[800px] overflow-y-scroll">
            <DialogHeader>
              <DialogTitle>Add Comorbidities</DialogTitle>
              <DialogDescription>Comorbidities:</DialogDescription>
            </DialogHeader>
            <Comorbiditypage/>
          </DialogContent>
        </Dialog>
      </>
    );
  }
  return (
    <>
      <Drawer open={open} onOpenChange={setOpen}>
        <DrawerTrigger asChild>
          <Button variant="outline">Add Comorbidities</Button>
        </DrawerTrigger>
        <DrawerContent>
          <DrawerHeader className="text-left">
            <DrawerTitle>Add Comorbidities</DrawerTitle>
            <DrawerDescription>Comorbidities:</DrawerDescription>
          </DrawerHeader>
          <div className="overflow-x-scroll pr-20 pl-10">
            
               <Comorbiditypage/>
              
            </div>
          <DrawerFooter className="pt-1 px-10">
            <DrawerClose asChild>
              <Button variant="outline">Cancel</Button>
            </DrawerClose>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
};
