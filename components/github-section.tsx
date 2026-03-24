"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"

export function GithubSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="github" className="relative py-28 lg:py-40 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/10 to-background" />

      {/* Animated bg grid effect */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: `radial-gradient(circle at 1px 1px, currentColor 1px, transparent 0)`,
        backgroundSize: '40px 40px',
      }} />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-20"
        >
          <motion.span
            className="inline-block text-sm font-semibold text-neon-cyan uppercase tracking-[0.2em]"
            initial={{ opacity: 0, y: 10 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Open Source
          </motion.span>
          <h2 className="mt-5 text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground text-balance tracking-tight leading-[1.1]">
            GitHub{" "}
            <span className="bg-gradient-to-r from-neon-blue to-neon-purple bg-clip-text text-transparent">
              Projects
            </span>
          </h2>
          <p className="mt-6 text-lg lg:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Explore my coding projects including web development, Flask applications, AI experiments, and startup projects
          </p>
        </motion.div>

        {/* GitHub Card */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-2xl mx-auto"
        >
          <motion.div
            whileHover={{ y: -8, transition: { duration: 0.3, ease: "easeOut" } }}
            className="group relative"
          >
            {/* Glow effect */}
            <div className="absolute -inset-2 bg-gradient-to-r from-neon-blue via-neon-cyan to-neon-purple rounded-3xl blur-xl opacity-0 group-hover:opacity-40 transition-opacity duration-500" />

            {/* Card */}
            <div className="relative overflow-hidden rounded-3xl bg-card/40 border border-border/40 backdrop-blur-xl p-10 sm:p-12">
              {/* Decorative gradient orbs */}
              <div className="absolute -top-20 -right-20 w-40 h-40 bg-neon-blue/10 rounded-full blur-3xl" />
              <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-neon-purple/10 rounded-full blur-3xl" />

              <div className="relative flex flex-col items-center text-center gap-8">
                {/* GitHub Icon */}
                <motion.div
                  className="relative"
                  animate={{ rotate: [0, 5, -5, 0] }}
                  transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-neon-blue to-neon-purple rounded-2xl blur-lg opacity-40 group-hover:opacity-60 transition-opacity duration-300" />
                  <div className="relative w-20 h-20 bg-card/80 border border-border/50 rounded-2xl flex items-center justify-center backdrop-blur-sm">
                    <svg
                      viewBox="0 0 24 24"
                      className="w-10 h-10 text-foreground group-hover:text-neon-cyan transition-colors duration-300"
                      fill="currentColor"
                    >
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                    </svg>
                  </div>
                </motion.div>

                {/* Profile Info */}
                <div>
                  <h3 className="text-2xl sm:text-3xl font-bold text-foreground mb-2 tracking-tight">
                    Naveen-Renga
                  </h3>
                  <p className="text-muted-foreground text-sm sm:text-base leading-relaxed max-w-md">
                    Check out my GitHub profile where I share my coding projects, collaborate on open source, and build innovative solutions.
                  </p>
                </div>

                {/* Stats badges */}
                <div className="flex flex-wrap justify-center gap-3">
                  {["Web Development", "Flask Apps", "AI Experiments", "Startup Projects"].map((tag) => (
                    <motion.span
                      key={tag}
                      className="px-4 py-2 text-xs sm:text-sm rounded-full bg-secondary/40 text-muted-foreground border border-border/40 font-medium"
                      whileHover={{ scale: 1.05, borderColor: "rgba(0,200,255,0.3)" }}
                    >
                      {tag}
                    </motion.span>
                  ))}
                </div>

                {/* CTA Button */}
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button
                    asChild
                    size="lg"
                    className="bg-gradient-to-r from-neon-blue to-neon-cyan text-background font-semibold px-8 py-6 text-base hover:shadow-[0_0_40px_rgba(0,200,255,0.5)] transition-shadow duration-300 rounded-xl"
                  >
                    <a href="https://github.com/Naveen-Renga" target="_blank" rel="noopener noreferrer">
                      <svg
                        viewBox="0 0 24 24"
                        className="w-5 h-5 mr-2"
                        fill="currentColor"
                      >
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                      </svg>
                      View My GitHub Profile
                      <ExternalLink className="w-4 h-4 ml-2" />
                    </a>
                  </Button>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
