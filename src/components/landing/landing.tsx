import React from "react";
import Features from "../features/features";
import JoinTalez from "@/shared/components/join-talez";
import { Hero } from "../hero/hero";
import Story from "../story/story";
import Discover from "../discover/discover";
import HowToUse from "../features/how-to-use";

function Landing() {
  return (
    <>
      <Hero />
      <Story />
      <HowToUse />
      <Features />
      <JoinTalez />
      <Discover />
    </>
  );
}

export default Landing;
