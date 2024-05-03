"use client";

import { motion } from "framer-motion";
import React from "react";
import { AuroraBackground } from "./ui/aurora-background";
import "./typewriter.css";
export function AuroraBackgroundDemo() {
  return (
    <AuroraBackground style={{ width: "100vw", height: "100vh" }}>
      <motion.div
        initial={{ opacity: 0.0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="relative flex flex-col gap-4 items-center justify-center px-4"
      >
        <div className="typewriter">
  <h1 className="text-white">Hi, I am Shaik Mahaboob jani</h1>
</div>
      </motion.div>
    </AuroraBackground>
  );
}
