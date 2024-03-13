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
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import useMediaQuery from "@/hooks/use-media-query";
import { PatientComment } from "./(new)/newcomment/new-patient-comments";

export const AddDialogComments = ({ id }: { id: number }) => {
  const [open, setOpen] = React.useState(false);
  const [snap, setSnap] = React.useState<number | string | null>("410px");
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
            <PatientComment id={id} />
          </DialogContent>
        </Dialog>
      </>
    );
  }
  return (
    <>
      <Drawer open={open} onOpenChange={setOpen}
      snapPoints={["410px","500px",1]}
      activeSnapPoint={snap}
      setActiveSnapPoint={setSnap}>
        <DrawerTrigger asChild>
          <Button variant="outline">Add Comments</Button>
        </DrawerTrigger>
        <DrawerContent>
          <DrawerHeader className="text-left">
            <DrawerTitle>Edit profile</DrawerTitle>
            <DrawerDescription>Comments on Patient ID.{id}</DrawerDescription>
          </DrawerHeader>
          <div className="px-5">
            <PatientComment id={id} />
          </div>
          <DrawerClose asChild>
              <Button className="w-64 mx-5 mt-5" variant="outline">Cancel</Button>
          </DrawerClose>
        </DrawerContent>
      </Drawer>
    </>
  );
};
