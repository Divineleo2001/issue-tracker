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
import { NewPatientIssue } from "../[patientId]/(new)/newcomment/new-patient-comments";

export const AddDialogComments = ({ id }: { id: number }) => {
  const [open, setOpen] = React.useState(false);
  const isDesktop = useMediaQuery("(min-width:768px)");
  if (isDesktop) {
    return (
      <>
        <Dialog open={open} onOpenChange={setOpen}>
          <DialogTrigger asChild>
            <Button variant="outline">Add Comments</Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[600] sm:max-h-[800] overflow-y-scroll">
            <DialogHeader>
              <DialogTitle>Add Comments</DialogTitle>
              <DialogDescription>Comments on Patient ID.{id}</DialogDescription>
            </DialogHeader>
            <NewPatientIssue id={id} />
          </DialogContent>
        </Dialog>
      </>
    );
  }
  return (
    <>
      <Drawer open={open} onOpenChange={setOpen}>
        <DrawerTrigger asChild>
          <Button variant="outline">Add Comments</Button>
        </DrawerTrigger>
        <DrawerContent>
          <DrawerHeader className="text-left">
            <DrawerTitle>Edit profile</DrawerTitle>
            <DrawerDescription>Comments on Patient ID.{id}</DrawerDescription>
          </DrawerHeader>
          <div className="overflow-x-scroll pr-20 pl-10">
            <NewPatientIssue id={ id } />
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
