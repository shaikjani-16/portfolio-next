"use client";

import { motion } from "framer-motion";
import React from "react";
import { AuroraBackground } from "./ui/aurora-background";
import "./typewriter.css";
import { TypewriterEffectSmooth } from "./ui/typewriter-effect";
import { TextGenerateEffect } from "./ui/text-generate-effect";
export function AuroraBackgroundDemo() {
    const words = [
        {
          text: "Hi",
        },
        {
          text: ",",
        },
        {
          text: " I",
        },
        {
          text: " am",
        },
        {
          text: "Shaik Mahaboob Jani.",
          className: "text-blue-500 dark:text-blue-500",
        },
      ];
    const text1="Full Stack Developer";
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
        
        <TypewriterEffectSmooth words={words} />
        <TextGenerateEffect words={text1}/>
      </motion.div>
    </AuroraBackground>
  );
}
