import React from "react";
import { HoverBorderGradient } from "@/components/ui/hover-border-gradient";

function JoinTalez() {
  return (
    <div className="flex justify-center items-center">
      <HoverBorderGradient
        containerClassName="rounded-full"
        as="button"
        className="bg-background text-primary flex items-center space-x-4"
      >
        <a href="https://talez-flames.vercel.app/signup" className="font-semibold">
          Join Talez
        </a>
      </HoverBorderGradient>
    </div>
  );
}

export default JoinTalez;
