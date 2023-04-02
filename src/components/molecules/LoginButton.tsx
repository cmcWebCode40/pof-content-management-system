"use client";

import { signIn } from "next-auth/react";
import { FC, useCallback, useState } from "react";
import { Button } from "@/components/atoms";

type LoginButtonProps = {};

export const LoginButton: FC<LoginButtonProps> = ({}) => {
  const [isProcessing, setIsProcessing] = useState<boolean>(false);

  const loginWithGoogle = useCallback(async () => {
    setIsProcessing(true);
    try {
      await signIn("google");
    } catch (error) {
      // toast({
      //   title: "Error while logging in",
      //   message: "Please try again later",
      //   type: "error",
      // });
    } finally {
      setIsProcessing(false);
    }
  }, []);
  return (
    <Button onClick={loginWithGoogle} isLoading={isProcessing}>
      Login
    </Button>
  );
};
