"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"

const projects = [
  {
    title: "Gym Management System",
    description:
      "A modern web application for gyms to manage members, attendance, and payments efficiently with a clean dashboard interface.",
    tags: ["React", "Dashboard", "Web App"],
    gradient: "from-neon-blue to-neon-cyan",
    liveUrl: "https://gym-app-plum-six.vercel.app/",
    image: "/gym-management.jpg",
  },
  {
    title: "Salon Booking Website",
    description:
      "A modern salon appointment booking website that allows customers to schedule services easily with a responsive and user-friendly interface.",
    tags: ["React", "Booking System", "Responsive UI"],
    gradient: "from-neon-cyan to-neon-purple",
    liveUrl: "https://salon-project-0011.vercel.app/",
    image: "/salon-booking.jpg",
  },
]

export function ProjectsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="projects" className="relative py-28 lg:py-40 overflow-hidden">
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
            Our Work
          </motion.span>
          <h2 className="mt-5 text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground text-balance tracking-tight leading-[1.1]">
            Our{" "}
            <span className="bg-gradient-to-r from-neon-blue to-neon-purple bg-clip-text text-transparent">
              Projects
            </span>
          </h2>
          <p className="mt-6 text-lg lg:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Explore our latest work and see how we bring ideas to life
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8 lg:gap-10 max-w-4xl mx-auto">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.15 + index * 0.15, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ y: -10, transition: { duration: 0.3, ease: "easeOut" } }}
              className="group relative"
            >
              {/* Glow effect */}
              <div
                className={`absolute -inset-2 bg-gradient-to-r ${project.gradient} rounded-3xl blur-xl opacity-0 group-hover:opacity-50 transition-opacity duration-500`}
              />

              {/* Card */}
              <div className="relative overflow-hidden rounded-3xl bg-card/40 border border-border/40 backdrop-blur-xl">
                {/* Project Image */}
                <div className="relative h-52 overflow-hidden bg-gradient-to-br from-secondary to-card/50">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                  <motion.div 
                    className="absolute inset-0 bg-gradient-to-br from-neon-blue/0 to-neon-purple/0 group-hover:from-neon-blue/20 group-hover:to-neon-purple/20 transition-all duration-300"
                    animate={{ opacity: [0.5, 0.7, 0.5] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  />
                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-background/85 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <motion.div 
                      initial={{ scale: 0.8, opacity: 0 }}
                      whileInView={{ scale: 1, opacity: 1 }}
                      whileHover={{ scale: 1.05 }} 
                      whileTap={{ scale: 0.95 }}
                    >
                      <Button
                        asChild
                        size="lg"
                        className="bg-gradient-to-r from-neon-blue to-neon-cyan text-background font-semibold px-6 hover:shadow-[0_0_30px_rgba(0,200,255,0.5)] transition-shadow duration-300"
                      >
                        <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="w-4 h-4 mr-2" />
                          Live Demo
                        </a>
                      </Button>
                    </motion.div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-7">
                  <h3 className="text-xl font-semibold text-foreground mb-3 tracking-tight">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-5">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <motion.span
                        key={tag}
                        className="px-3 py-1.5 text-xs rounded-full bg-secondary/40 text-muted-foreground border border-border/40 font-medium"
                        whileHover={{ scale: 1.05, borderColor: "rgba(0,200,255,0.3)" }}
                      >
                        {tag}
                      </motion.span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
