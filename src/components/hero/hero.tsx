"use client";
import React from "react";
import Image from "next/image";
import { ContainerScroll } from "../ui/container-scroll-animation";
import talezImageDesktop from "../../../public/images/talez.png";
import { SparklesCore } from "../ui/sparkles";

export function Hero() {
  return (
    <>
      <div className="hidden flex-col overflow-hidden xl:block">
        <ContainerScroll
          titleComponent={
            <>
              <h1 className="text-4xl font-semibold text-white">
                Unleash great products by <br />
                <span className="text-4xl md:text-[6rem] font-bold mt-1 leading-none">
                  writing <span className="text-primary">talez</span>
                </span>
              </h1>
            </>
          }
        >
          <Image
            src={talezImageDesktop}
            alt="talez desktop"
            height={720}
            width={1400}
            className="rounded-2xl object-cover h-full"
            draggable={false}
          />
        </ContainerScroll>
      </div>
      <div className="block xl:hidden">
        <div className="h-[40rem] px-8 w-full bg-black flex flex-col items-center justify-center overflow-hidden rounded-md">
          <h1 className="md:text-7xl text-5xl lg:text-9xl font-bold text-center text-primary relative z-20">
            Talez
          </h1>
          <div className="w-[40rem] h-40 relative">
            <div className="text-center text-accent">
              Unleash great products by writing talez
            </div>
            {/* Gradients */}
            <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-cyan-500 to-transparent h-[2px] w-3/4 blur-sm" />
            <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-pink-100 to-transparent h-px w-3/4" />
            <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-pink-700-500 to-transparent h-[5px] w-1/4 blur-sm" />
            <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-pink-500 to-transparent h-px w-1/4" />

            {/* Core component */}
            <SparklesCore
              background="transparent"
              minSize={0.4}
              maxSize={1}
              particleDensity={2000}
              className="w-full h-full absolute -top-16"
              particleColor="#BE2A71"
            />

            {/* Radial Gradient to prevent sharp edges */}
            <div className="absolute inset-0 w-full h-full bg-black [mask-image:radial-gradient(350px_200px_at_top,transparent_20%,white)]"></div>
          </div>
        </div>
      </div>
    </>
  );
}
