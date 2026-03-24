"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Code2, Palette, TrendingUp } from "lucide-react"

const teamMembers = [
  {
    name: "Naveen",
    role: "Full-Stack Developer",
    description: "Focused on building modern web applications and scalable systems using modern technologies.",
    icon: Code2,
    gradient: "from-neon-blue to-neon-cyan",
  },
  {
    name: "Venki",
    role: "Full-Stack Developer",
    description: "Specializes in responsive UI design and smooth interactive user experiences.",
    icon: Palette,
    gradient: "from-neon-cyan to-neon-purple",
  },
  {
    name: "Selvan",
    role: "Marketing & Business Development",
    description: "Handles client communication, marketing strategies, and business growth.",
    icon: TrendingUp,
    gradient: "from-neon-purple to-neon-blue",
  },
]

export function TeamSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="team" className="relative py-28 lg:py-40 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/10 to-background" />

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
            Our Team
          </motion.span>
          <h2 className="mt-5 text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground text-balance tracking-tight leading-[1.1]">
            Meet the Team Behind{" "}
            <span className="bg-gradient-to-r from-neon-blue to-neon-purple bg-clip-text text-transparent">
              NexVora
            </span>
          </h2>
          <p className="mt-6 text-lg lg:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            A passionate team dedicated to delivering exceptional digital experiences
          </p>
        </motion.div>

        {/* Team Grid */}
        <div className="grid md:grid-cols-3 gap-8 lg:gap-10">
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.15 + index * 0.15, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ y: -10, transition: { duration: 0.3, ease: "easeOut" } }}
              className="group relative"
            >
              {/* Glow effect */}
              <div
                className={`absolute -inset-2 bg-gradient-to-r ${member.gradient} rounded-3xl blur-xl opacity-0 group-hover:opacity-50 transition-opacity duration-500`}
              />

              {/* Card */}
              <div className="relative h-full overflow-hidden rounded-3xl bg-card/40 border border-border/40 backdrop-blur-xl p-10 flex flex-col items-center text-center">
                {/* Avatar placeholder with icon */}
                <motion.div 
                  className={`w-28 h-28 rounded-full bg-gradient-to-br ${member.gradient} p-[2.5px] mb-7`}
                  whileHover={{ scale: 1.05, rotate: [0, -5, 5, 0] }}
                  transition={{ duration: 0.4 }}
                >
                  <div className="w-full h-full rounded-full bg-card flex items-center justify-center">
                    <member.icon className="w-12 h-12 text-neon-cyan" />
                  </div>
                </motion.div>

                {/* Name */}
                <h3 className="text-2xl font-semibold text-foreground mb-2 tracking-tight">
                  {member.name}
                </h3>

                {/* Role */}
                <p className={`text-sm font-semibold bg-gradient-to-r ${member.gradient} bg-clip-text text-transparent mb-5 uppercase tracking-wider`}>
                  {member.role}
                </p>

                {/* Description */}
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {member.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
