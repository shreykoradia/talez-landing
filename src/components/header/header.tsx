import JoinTalez from "@/shared/components/join-talez";
import React from "react";

function Header() {
  return (
    <div className="flex justify-between items-center p-4 w-full max-xl:!bg-black">
      <div>
        <h2 className="text-2xl font-semibold text-primary">Talez</h2>
        <p className="text-muted text-xs font-medium">a brain for your apps</p>
      </div>
      <JoinTalez />
    </div>
  );
}

export default Header;
