import React from "react";

function Discover() {
  return (
    <section className="py-28 px-4 bg-background">
      <div className="flex flex-col gap-2 justify-center items-center w-full">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
            Discover us on...
          </h2>
          <p className="mt-1.5 text-lg text-muted sm:mt-2">
            Here’s where Talez and I are mostly active with couple of other
            nerds.
          </p>
        </div>
        <div className="flex gap-8 items-center justify-center text-xl text-white font-semibold tracking-tight text-left px-4 w-1/2">
          <a href="https://peerlist.io/shrey_">Peerlist</a>
          <a href="https://x.com/hello_talez">Twitter</a>
        </div>
      </div>
    </section>
  );
}

export default Discover;
