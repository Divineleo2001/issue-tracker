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
import Comorbiditypage from "./(new)/newcommorbidities/new-patient-commorbidity";
import CommorbidityIcon from "@/components/ui/Icons/CommorbidityIcon";


export const AddDialogComorbidities = () => {
  const [open, setOpen] = React.useState(false);
  const [snap, setSnap] = React.useState<number | string | null>("500px");
  const isDesktop = useMediaQuery("(min-width:768px)");
  if (isDesktop) {
    return (
      <>
        <Dialog open={open} onOpenChange={setOpen}>
          <DialogTrigger asChild>
            <Button variant="default" className="shadow-md">
              
              <CommorbidityIcon />
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[600px] sm:max-h-[800px] overflow-y-scroll">
            <DialogHeader>
              <DialogTitle>Add Comorbidities</DialogTitle>
              <DialogDescription>Comorbidities:</DialogDescription>
            </DialogHeader>
            <Comorbiditypage />
          </DialogContent>
        </Dialog>
      </>
    );
  }
  return (
    <>
      <Drawer
        open={open}
        onOpenChange={setOpen}
        snapPoints={["500px", "500px",1]}
        activeSnapPoint={snap}
        setActiveSnapPoint={setSnap}
      >
        <DrawerTrigger asChild>
          <Button variant="default">
            <CommorbidityIcon />
          </Button>
        </DrawerTrigger>
        <DrawerContent>
          <DrawerHeader className="text-left">
            <DrawerTitle>Add Comorbidities</DrawerTitle>
            <DrawerDescription>Comorbidities:</DrawerDescription>
          </DrawerHeader>
          <div className="p-5">
            <Comorbiditypage />
          </div>

          <DrawerClose asChild>
              <Button className="m-5" variant="outline">Cancel</Button>
          </DrawerClose>
        </DrawerContent>
      </Drawer>
    </>
  );
};
