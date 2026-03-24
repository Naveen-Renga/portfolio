"use client"

import { motion } from "framer-motion"
import { ArrowRight, Sparkles } from "lucide-react"
import { ParticleField } from "./particle-field"

export function HeroSection() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-background">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-neon-blue/20 via-background to-background" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))] from-neon-purple/15 via-transparent to-transparent" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-neon-cyan/10 via-transparent to-transparent" />
      </div>

      {/* Particle effect */}
      <ParticleField />

      {/* Grid pattern overlay */}
      <div 
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                           linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }}
      />

      {/* Floating orbs */}
      <motion.div
        className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-neon-blue/20 blur-[120px]"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full bg-neon-purple/20 blur-[100px]"
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.4, 0.2, 0.4],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full bg-secondary/40 border border-border/40 backdrop-blur-md mb-10"
        >
          <motion.div
            animate={{ rotate: [0, 15, -15, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          >
            <Sparkles className="w-4 h-4 text-neon-cyan" />
          </motion.div>
          <span className="text-sm font-medium tracking-wide text-muted-foreground">
            Next-Gen Web Development
          </span>
        </motion.div>

        {/* Main heading */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tighter mb-8"
        >
          <span className="text-foreground">Nex</span>
          <span className="relative inline-block">
            <span className="bg-gradient-to-r from-neon-blue via-neon-cyan to-neon-purple bg-clip-text text-transparent">
              Vora
            </span>
            <motion.span
              className="absolute -inset-2 bg-gradient-to-r from-neon-blue via-neon-cyan to-neon-purple opacity-30 blur-3xl -z-10"
              animate={{ opacity: [0.2, 0.5, 0.2], scale: [1, 1.1, 1] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            />
          </span>
          <span className="text-foreground"> Tech</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
          className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-muted-foreground mb-14 max-w-2xl mx-auto text-balance leading-relaxed font-light"
        >
          Building Next-Generation Web Experiences
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col sm:flex-row items-center justify-center gap-5"
        >
          <motion.a
            href="#projects"
            className="group relative flex items-center gap-3 px-8 py-4 rounded-2xl bg-gradient-to-r from-neon-blue to-neon-cyan text-background font-semibold text-base tracking-wide overflow-hidden"
            whileHover={{ scale: 1.03, boxShadow: "0 0 40px rgba(0,200,255,0.5)" }}
            whileTap={{ scale: 0.97 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
          >
            <span className="relative z-10">View Projects</span>
            <ArrowRight className="w-5 h-5 relative z-10 group-hover:translate-x-1.5 transition-transform duration-300" />
            <motion.div 
              className="absolute inset-0 bg-gradient-to-r from-neon-cyan to-neon-blue opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            />
          </motion.a>
          <motion.a
            href="#contact"
            className="group flex items-center gap-2 px-8 py-4 rounded-2xl bg-secondary/30 border border-border/40 backdrop-blur-md text-foreground font-semibold text-base tracking-wide hover:bg-secondary/50 hover:border-neon-cyan/30 transition-all duration-300"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
          >
            Contact Us
          </motion.a>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
        >
          <motion.div
            className="w-6 h-10 rounded-full border-2 border-muted-foreground/30 flex justify-center p-2"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <motion.div className="w-1 h-2 rounded-full bg-neon-cyan" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
