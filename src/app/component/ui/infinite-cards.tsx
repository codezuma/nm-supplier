"use client";

import { Skeleton } from "@/components/ui/skeleton";
import { cn } from "@/lib/utils";
import React, { useEffect, useState } from "react";
import Container from "../shared/container";

export const Testimonials = ({
  items,
  direction = "left",
  speed = "normal",
  pauseOnHover = true,
  className,
}: {
  items: {
    quote: string;
    name: string;
    title: string;
  }[];
  direction?: "left" | "right";
  speed?: "fast" | "normal" | "slow";
  pauseOnHover?: boolean;
  className?: string;
}) => {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const scrollerRef = React.useRef<HTMLUListElement>(null);

  useEffect(() => {
    addAnimation();
  }, []);
  const [start, setStart] = useState(false);
  function addAnimation() {
    if (containerRef.current && scrollerRef.current) {
      const scrollerContent = Array.from(scrollerRef.current.children);

      scrollerContent.forEach((item) => {
        const duplicatedItem = item.cloneNode(true);
        if (scrollerRef.current) {
          scrollerRef.current.appendChild(duplicatedItem);
        }
      });

      getDirection();
      getSpeed();
      setStart(true);
    }
  }
  const getDirection = () => {
    if (containerRef.current) {
      if (direction === "left") {
        containerRef.current.style.setProperty(
          "--animation-direction",
          "forwards"
        );
      } else {
        containerRef.current.style.setProperty(
          "--animation-direction",
          "reverse"
        );
      }
    }
  };
  const getSpeed = () => {
    if (containerRef.current) {
      if (speed === "fast") {
        containerRef.current.style.setProperty("--animation-duration", "20s");
      } else if (speed === "normal") {
        containerRef.current.style.setProperty("--animation-duration", "40s");
      } else {
        containerRef.current.style.setProperty("--animation-duration", "80s");
      }
    }
  };
  return (
    <Container className="mt-20">
      <header className="max-w-2xl  mb-8 lg:mb-10">
        <h2 className="text-xl font-semibold md:text-3xl md:leading-tight text-gray-950 dark:text-white">
          What our clients say
        </h2>
      </header>
      <div
        ref={containerRef}
        className={cn(
          "scroller relative z-20   overflow-hidden  mx-auto ",
          className
        )}
      >
        <ul
          ref={scrollerRef}
          className={cn(
            " flex min-w-full shrink-0 gap-4 py-4 w-max flex-nowrap",
            start && "animate-scroll ",
            pauseOnHover && "hover:[animation-play-state:paused]"
          )}
        >
          {items.map((item, idx) => (
            <li
              className="w-[350px] max-w-full relative min-h-60 border  flex-shrink-0 border-slate-300 bg-white px-8 py-6 md:w-[450px]"
              key={item.name}
            >
              <blockquote>
                <div
                  aria-hidden="true"
                  className="user-select-none -z-1 pointer-events-none absolute -left-0.5 -top-0.5 h-[calc(100%_+_4px)] w-[calc(100%_+_4px)]"
                ></div>
                <span className=" relative z-20 text-sm leading-[1.6] text-gray-700 font-normal">
                  {item.quote}
                </span>
                <div className="z-20 bottom-3 absolute flex flex-row items-center">
                  <img
                    src={`https://randomuser.me/api/portraits/men/${
                      idx + 1
                    }.jpg`}
                    className="w-12 h-12 mr-4 rounded-full"
                    alt="Image"
                  />
                  <span className="flex flex-col gap-1">
                    <span className=" text-sm font-bold leading-[1.6] text-gray-800 ">
                      {item.name}
                    </span>
                    <span className=" text-sm leading-[1.6] text-gray-950 font-semibold">
                      {item.title}
                    </span>
                  </span>
                </div>
              </blockquote>
            </li>
          ))}
        </ul>
      </div>
    </Container>
  );
};
