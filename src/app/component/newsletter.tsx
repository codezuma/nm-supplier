"use client";
import React from "react";
import { BackgroundBeams } from "./ui/background-beams";
import Container from "./shared/container";
import { Button } from "./ui/moving-border";

export function Newsletter() {
  return (
    <Container className="mt-20">
      <div className="h-auto w-full py-12 px-12  bg-neutral-100 relative flex flex-col items-start justify-center antialiased">
        <div className=" p-4">
          <h1 className="relative z-10 text-lg md:text-6xl  bg-clip-text text-transparent bg-gradient-to-b from-neutral-600 to-neutral-950  text-center font-sans font-bold">
            Have a Project in mind?
          </h1>
          <p></p>
          <p className="text-neutral-500 max-w-lg  my-2 text-xl mt-4  relative z-10">
            Get in touch with us today.
          </p>
          <Button className="cursor-pointer" borderRadius="1.2">
            Contact us
          </Button>
        </div>
        <BackgroundBeams />
      </div>
    </Container>
  );
}
