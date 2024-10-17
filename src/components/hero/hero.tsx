"use client";
import React from "react";
import Image from "next/image";
import { ContainerScroll } from "../ui/container-scroll-animation";
import talezImage from "../../../public/images/talez.png"

export function Hero() {
  return (
    <div className="flex flex-col overflow-hidden">
      <ContainerScroll
        titleComponent={
          <>
            <h1 className="text-4xl font-semibold text-muted">
              Unleash great products by <br />
              <span className="text-4xl md:text-[6rem] font-bold mt-1 leading-none">
                Writing Talez
              </span>
            </h1>
          </>
        }
      >
        <Image
          src={talezImage}
          alt="talez"
          height={720}
          width={1400}
          className="mx-auto rounded-2xl object-cover h-full"
          draggable={false}
        />
      </ContainerScroll>
    </div>
  );
}
