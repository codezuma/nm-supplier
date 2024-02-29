"use client";

import {
  PropsWithChildren,
  createContext,
  useContext,
  useEffect,
  useId,
  useRef,
  useState,
} from "react";
import { usePathname } from "next/navigation";
import { motion, MotionConfig, useReducedMotion } from "framer-motion";
import { GridPattern } from "./GridPattern";
import Footer from "./footer";
import Navbar from "./navbar";

const RootLayoutContext = createContext({});

function RootLayoutInner({ children }: PropsWithChildren) {
  let panelId = useId();
  let [expanded, setExpanded] = useState(false);
  let openRef = useRef();
  let closeRef = useRef();
  let navRef = useRef();
  let shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    function onClick(event: any) {
      if (event.target.closest("a")?.href === window.location.href) {
        setExpanded(false);
      }
    }

    window.addEventListener("click", onClick);

    return () => {
      window.removeEventListener("click", onClick);
    };
  }, []);

  return (
    <MotionConfig transition={shouldReduceMotion ? { duration: 0 } : undefined}>
      <motion.div
        layout
        style={{ borderTopLeftRadius: 40, borderTopRightRadius: 40 }}
        className="relative flex  flex-auto overflow-hidden bg-white "
      >
        <motion.div
          layout
          className="relative isolate flex w-full flex-col pt-36"
        >
          <GridPattern
            className="absolute inset-x-0 -top-14 -z-10 h-[1000px] w-full fill-neutral-50 stroke-neutral-950/5 [mask-image:linear-gradient(to_bottom_left,white_40%,transparent_50%)]"
            yOffset={-96}
            interactive
          />
          <Navbar />

          <main className="w-full flex-auto">{children}</main>

          <Footer />
        </motion.div>
      </motion.div>
    </MotionConfig>
  );
}

export function RootLayout({ children }: PropsWithChildren) {
  let pathname = usePathname();
  let [logoHovered, setLogoHovered] = useState(false);

  return (
    <RootLayoutContext.Provider value={{ logoHovered, setLogoHovered }}>
      <RootLayoutInner key={pathname}>{children}</RootLayoutInner>
    </RootLayoutContext.Provider>
  );
}
