import { HoverBorderGradient } from "@/components/ui/hover-border-gradient";
import React from "react";

function JoinTalez() {
  return (
    <div className="flex justify-center items-center">
      <HoverBorderGradient
        containerClassName="rounded-full"
        as="button"
        className="bg-background text-primary flex items-center space-x-4"
      >
        <a href="#" className="font-semibold">
          Join Talez
        </a>
      </HoverBorderGradient>
    </div>
  );
}

export default JoinTalez;
