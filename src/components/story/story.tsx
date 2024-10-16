import React from "react";
import { Cover } from "../ui/cover";

function Story() {
  return (
    <section className="py-28 bg-background">
      <div className="flex flex-col gap-2 justify-center items-center w-full">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
            A classic tale for why <Cover>Talez!</Cover>
          </h2>
        </div>
        <div className="text-xl font-semibold tracking-tight text-left px-4 w-1/2">
          Talez started as an anime plot generator (because who doesn’t love a
          good plot twist?), but it soon leveled up into something far more
          powerful. While working at a fast-paced startup, I realized the real
          drama wasn’t in anime but in managing endless business requirements
          with no clear documentation. Features took forever to build, and
          product managers were left scrambling, often missing key details.
          <br />
          <br />
          Enter Talez 2.0: your app&apos;s brain. It speeds up requirement
          gathering while AI takes over the tedious task of generating and
          maintaining GitHub issues. No more missing details, no more
          delays—Talez has it all covered, leaving your product engineers free
          to focus on what matters most.
        </div>
      </div>
    </section>
  );
}

export default Story;
