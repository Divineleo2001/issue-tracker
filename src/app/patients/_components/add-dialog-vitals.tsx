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
import NewPatientVitals from "./(new)/newvitals/new-patient-vitals";

const AddDialogVitals = ({ id }: { id: number }) => {
  const [open, setOpen] = React.useState(false);
  const isDesktop = useMediaQuery("(min-width: 768px)");
  if (isDesktop) {
    return (
      <>
        <Dialog open={open} onOpenChange={setOpen}>
          <DialogTrigger asChild>
            <Button variant="outline">Add Vitals</Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[600px] sm:max-h-[800px] overflow-y-scroll">
            <DialogHeader>
              <DialogTitle>Add Vitals</DialogTitle>
              <DialogDescription>Vitals of Patient ID.{id}</DialogDescription>
            </DialogHeader>
            <NewPatientVitals id={id} />
          </DialogContent>
        </Dialog>
      </>
    );
  }
  return (
    <>
      <Drawer open={open} onOpenChange={setOpen}>
        <DrawerTrigger asChild>
          <Button variant="outline">Add Vitals</Button>
        </DrawerTrigger>
        <DrawerContent>
          <DrawerHeader className="text-left">
            <DrawerTitle>Edit profile</DrawerTitle>
            <DrawerDescription>Vitals of Patient ID.{id}</DrawerDescription>
          </DrawerHeader>
          <div className="overflow-x-scroll  px-5 pt-2 pb-2">
            <NewPatientVitals id={id} />
          </div>

          <DrawerFooter>
            <DrawerClose asChild>

              <Button className="w-64 mx-5 mt-5" variant="outline">Cancel</Button>
            </DrawerClose>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default AddDialogVitals;
