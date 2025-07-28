"use client";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { useState } from "react";


export default function Home() {

  const [open, setOpen] = useState(false);

  const router = useRouter();
  const handleSignIn = () => {
    router.push("/sign-in");
  };

  const onclick = () => {
    setOpen(true);
    handleSignIn();

  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <Button onClick={onclick}>signin</Button>
    </div>
  );
}
