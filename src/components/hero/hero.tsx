"use client";
import React from "react";
import Image from "next/image";
import { ContainerScroll } from "../ui/container-scroll-animation";
import talezImageMobile from "../../../public/images/brandbird.png"
import talezImageDesktop from "../../../public/images/talez.png"


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
          src={talezImageDesktop}
          alt="talez desktop"
          height={720}
          width={1400}
          className="rounded-2xl object-cover h-full hidden md:block"
          draggable={false}
        />
        <Image
          src={talezImageMobile}
          alt="talez mobile"
          height={720}
          width={1400}
          className="rounded-2xl object-cover h-full block md:hidden"
          draggable={false}
        />
      </ContainerScroll>
    </div>
  );
}
