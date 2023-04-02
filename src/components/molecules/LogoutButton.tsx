"use client";

import { signIn, signOut } from "next-auth/react";
import { FC, useCallback, useState } from "react";
import { Button } from "../atoms";

type LogOutButtonProps = {};

export const LogOutButton: FC<LogOutButtonProps> = ({}) => {
  const [isProcessing, setIsProcessing] = useState<boolean>(false);

  const logoutUser = useCallback(async () => {
    setIsProcessing(true);
    try {
      await signOut();
    } catch (error) {
      // toast({
      //   title: "Error while logging out",
      //   message: "Please try again later",
      //   type: "error",
      // });
    } finally {
      setIsProcessing(false);
    }
  }, []);
  return (
    <Button onClick={logoutUser} isLoading={isProcessing}>
      LogOut
    </Button>
  );
};
