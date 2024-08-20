"use client";

import React from "react";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Store, useStore } from "@tanstack/react-store";
import { Button } from "@/components/ui/button";

const messageState = new Store("Are you absolutely sure?");
const openState = new Store(false);
const confirmState = new Store(async () => {});

export const confirmation = (
  message: string,
  onConfirm: () => Promise<void>
) => {
  messageState.setState(() => message);
  confirmState.setState(() => onConfirm);
  openState.setState(() => true);
};

const Confirmation = () => {
  const message = useStore(messageState);
  const open = useStore(openState);
  const confirm = useStore(confirmState);

  return (
    <Dialog open={open}>
      <DialogContent className="w-fit-content flex flex-col items-center">
        <DialogHeader>
          <DialogTitle>{message}</DialogTitle>
        </DialogHeader>
        <DialogFooter className="sm:justify-start">
          <Button
            type="button"
            onClick={async () => {
              await confirm();
              openState.setState(() => false);
            }}
            variant="default"
          >
            Yes
          </Button>

          <Button
            onClick={() => {
              openState.setState(() => false);
            }}
            type="button"
            variant="secondary"
          >
            No
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
export default Confirmation;
