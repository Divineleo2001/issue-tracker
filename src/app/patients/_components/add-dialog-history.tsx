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
import { HistoryPage } from "./(new)/newhistories/new-patient-history";

const AddDialogHistory = ({ id }: { id: number }) => {
  const [open, setOpen] = React.useState(false);
  const [snap, setSnap] = React.useState<number | string | null>("410px");
  const isDesktop = useMediaQuery("(min-width: 768px)");
  if (isDesktop) {
    return (
      <>
        <div className="">

        </div>
        <Dialog open={open} onOpenChange={setOpen}>
          <DialogTrigger asChild>
            <Button variant="outline">Add History</Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[600px] sm:max-h-[800px] overflow-y-scroll">
            <DialogHeader>
              <DialogTitle>Add History</DialogTitle>
              <DialogDescription>History of Patient ID.{id}</DialogDescription>
            </DialogHeader>
            <HistoryPage id={id} />
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
        snapPoints={["410px","500px",1]}
        activeSnapPoint={snap}
        setActiveSnapPoint={setSnap}
      >
        <DrawerTrigger asChild>
          <Button variant="outline">Add History</Button>
        </DrawerTrigger>
        <DrawerContent>
          <DrawerHeader className="text-left">
            <DrawerTitle>History:</DrawerTitle>
            <DrawerDescription>History of Patient ID.{id}</DrawerDescription>
          </DrawerHeader>
          <div className="px-5">
            <HistoryPage id={id} />
          </div>

          <DrawerClose asChild>
              <Button className="w-64 mx-5 mt-5" variant="outline">Cancel</Button>
          </DrawerClose>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default AddDialogHistory;
