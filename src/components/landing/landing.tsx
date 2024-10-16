import React from "react";
import Features from "../features/features";
import JoinTalez from "@/shared/components/join-talez";
import { Hero } from "../hero/hero";
import Story from "../story/story";
import Discover from "../discover/discover";

function Landing() {
  return (
    <>
      <Hero />
      <Features />
      <Story />
      <JoinTalez />
      <Discover />
    </>
  );
}

export default Landing;
