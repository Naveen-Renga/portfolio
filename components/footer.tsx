"use client"

import { motion } from "framer-motion"

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="relative py-12 border-t border-border/30">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-secondary/20 to-transparent" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <motion.a
            href="#home"
            className="flex items-center gap-2"
            whileHover={{ scale: 1.05 }}
          >
            <div className="relative h-8 w-8">
              <div className="absolute inset-0 rounded-lg bg-gradient-to-br from-neon-blue via-neon-cyan to-neon-purple opacity-80" />
              <div className="absolute inset-[2px] rounded-md bg-background flex items-center justify-center">
                <span className="text-sm font-bold bg-gradient-to-r from-neon-blue to-neon-cyan bg-clip-text text-transparent">
                  NV
                </span>
              </div>
            </div>
            <span className="text-lg font-bold text-foreground">
              Nex<span className="text-neon-cyan">Vora</span>
            </span>
          </motion.a>

          {/* Copyright */}
          <p className="text-sm text-muted-foreground">
            &copy; {currentYear} NexVora Tech. All rights reserved.
          </p>

          {/* Links */}
          <div className="flex items-center gap-6">
            {["Privacy", "Terms", "Contact"].map((link) => (
              <motion.a
                key={link}
                href={link === "Contact" ? "#contact" : "#"}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                whileHover={{ y: -2 }}
              >
                {link}
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
