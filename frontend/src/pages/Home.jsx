import { Stars } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import React, { useEffect } from "react";
import { FiArrowRight } from "react-icons/fi";
import {
  useMotionTemplate,
  useMotionValue,
  motion,
  animate,
} from "framer-motion";

import Navbar from "../components/home/Navbar";
import Hero from "../components/home/Hero";
import Features from "../components/home/Features";
import Footer from "../components/home/Footer";
import Pricing from "../components/home/Pricing";

const COLORS_TOP = ["#660000", "#20124d", "#274e13", "#4c1130", "#1E67C6", "#DD335C", "#274e13"];

export default function Home() {
  const color = useMotionValue(COLORS_TOP[0]);

  useEffect(() => {
    animate(color, COLORS_TOP, {
      ease: "easeInOut",
      duration: 35,
      repeat: Infinity,
      repeatType: "mirror",
    });
  }, []);

  const backgroundImage = useMotionTemplate`
  radial-gradient(
    100% 60% at 50% 0%,
    ${color} 0%,
    transparent 55%
  ),
  radial-gradient(
    125% 105% at 50% 0%,
    rgba(2, 6, 23, 1) 45%,
    ${color} 100%
  )
`;


  const border = useMotionTemplate`1px solid ${color}`;
  const boxShadow = useMotionTemplate`0px 4px 24px ${color}`;

  return (
    <>
      <motion.section
        style={{
          backgroundImage,
        }}
        className="relative grid min-h-screen place-content-center overflow-hidden bg-gray-950 px-4 py-24 text-gray-200"
      >
        {/* <img
          src="/logo.png"
          alt="ResuCurate logo"
          className="fixed top-6 left-6 z-50 h-65 w-65 object-contain"
        /> */}

        <Navbar />
        <Hero />
        <Features />
        <Pricing />
        <div className="absolute inset-0 z-0">
          <Canvas>
            <Stars radius={50} count={2500} factor={4} fade speed={2} />
          </Canvas>
        </div>
      </motion.section>
      <Footer />
    </>
  );
}
