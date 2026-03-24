"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Code2, Cpu, Globe, Zap } from "lucide-react"

const skills = [
  { icon: Code2, label: "Modern Frameworks", description: "React, Next.js, Vue" },
  { icon: Globe, label: "Full-Stack", description: "Node.js, APIs, Databases" },
  { icon: Cpu, label: "Performance", description: "Optimized & Scalable" },
  { icon: Zap, label: "Fast Delivery", description: "Agile Development" },
]

export function AboutSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="about" className="relative py-28 lg:py-40 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/20 to-background" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div ref={ref} className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            <motion.span 
              className="inline-block text-sm font-semibold text-neon-cyan uppercase tracking-[0.2em]"
              initial={{ opacity: 0, y: 10 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              About Us
            </motion.span>
            <h2 className="mt-5 text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground text-balance tracking-tight leading-[1.1]">
              We Build{" "}
              <span className="bg-gradient-to-r from-neon-blue to-neon-cyan bg-clip-text text-transparent">
                Digital Excellence
              </span>
            </h2>
            <p className="mt-8 text-lg lg:text-xl text-muted-foreground leading-relaxed">
              NexVora Tech is a cutting-edge web development studio dedicated to 
              crafting exceptional digital experiences. We combine innovative design 
              with powerful technology to deliver solutions that drive business growth.
            </p>
            <p className="mt-5 text-lg lg:text-xl text-muted-foreground leading-relaxed">
              Our team of expert developers and designers work collaboratively to 
              transform your vision into reality, ensuring every project exceeds 
              expectations with pixel-perfect execution.
            </p>

            {/* Stats */}
            <div className="mt-12 grid grid-cols-3 gap-4">
              {[
                { value: "3+", label: "Projects Built" },
                { value: "3", label: "Team Members" },
                { value: "Modern", label: "Tech Stack" },
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.4 + index * 0.1, ease: [0.16, 1, 0.3, 1] }}
                  whileHover={{ y: -5 }}
                  className="relative group cursor-default"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-neon-blue/10 to-neon-cyan/10 rounded-xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="relative flex flex-col items-center text-center p-4 rounded-xl bg-card/30 border border-border/30 hover:border-neon-cyan/40 transition-all duration-300">
                    <div className="text-2xl sm:text-3xl lg:text-4xl font-bold bg-gradient-to-r from-neon-blue to-neon-cyan bg-clip-text text-transparent leading-tight">
                      {stat.value}
                    </div>
                    <div className="text-xs sm:text-sm text-muted-foreground mt-2 font-medium leading-snug text-balance">
                      {stat.label}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Skills Grid */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="grid grid-cols-2 gap-5"
          >
            {skills.map((skill, index) => (
              <motion.div
                key={skill.label}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.35 + index * 0.1, ease: [0.16, 1, 0.3, 1] }}
                whileHover={{ y: -8, transition: { duration: 0.3 } }}
                className="group relative"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-neon-blue/20 to-neon-purple/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative p-7 rounded-2xl bg-card/40 border border-border/40 backdrop-blur-md hover:border-neon-cyan/50 transition-all duration-300 hover:bg-card/60">
                  <motion.div 
                    className="w-14 h-14 rounded-xl bg-gradient-to-br from-neon-blue/20 to-neon-cyan/20 flex items-center justify-center mb-5"
                    whileHover={{ rotate: [0, -10, 10, 0], transition: { duration: 0.5 } }}
                  >
                    <skill.icon className="w-7 h-7 text-neon-cyan" />
                  </motion.div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">
                    {skill.label}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {skill.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
