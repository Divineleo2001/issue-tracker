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
import DisabilityPage from "./(new)/newdisabilities/new-patient-disability";
import DisabilityIcon from "@/components/ui/Icons/DisabilityIcon";

export const AddDialogDisabilities = () => {
  const [open, setOpen] = React.useState(false);
  const [snap, setSnap] = React.useState<number | string | null>("500px");
  const isDesktop = useMediaQuery("(min-width:768px)");

  if (isDesktop) {
    return (
      <>
        <Dialog open={open} onOpenChange={setOpen}>
          <DialogTrigger asChild>
            <Button variant="default">
              <DisabilityIcon />
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[600px] sm:max-h-[800px] overflow-y-scroll">
            <DialogHeader>
              <DialogTitle>Add Disabilities</DialogTitle>
              <DialogDescription>Disabilities:</DialogDescription>
            </DialogHeader>
            <DisabilityPage />
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
        snapPoints={["500px", "550px", 1]}
        activeSnapPoint={snap}
        setActiveSnapPoint={setSnap}
      >
        <DrawerTrigger asChild>
          <Button className=" shadow-md" variant="default">
            <DisabilityIcon />
          </Button>
        </DrawerTrigger>
        <DrawerContent>
          <DrawerHeader>
            <DrawerTitle>Add Disabilities</DrawerTitle>
            <DrawerDescription>Disabilities</DrawerDescription>
          </DrawerHeader>
          <div className="p-5">
            <DisabilityPage />
          </div>

          <DrawerClose asChild>
              <Button className="m-5" variant="outline">Cancel</Button>
          </DrawerClose>
        </DrawerContent>
      </Drawer>
    </>
  );
};
