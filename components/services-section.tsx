"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Code, Layers, Palette, Building2 } from "lucide-react"

const services = [
  {
    icon: Code,
    title: "Web Application Development",
    description:
      "Custom web applications built with modern frameworks like React and Next.js, optimized for performance and scalability.",
    gradient: "from-neon-blue to-neon-cyan",
  },
  {
    icon: Layers,
    title: "SaaS Platforms",
    description:
      "End-to-end SaaS solutions with subscription management, multi-tenancy, and seamless user experiences.",
    gradient: "from-neon-cyan to-neon-purple",
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    description:
      "Beautiful, intuitive interfaces designed with user experience at the forefront, ensuring engagement and conversion.",
    gradient: "from-neon-purple to-neon-blue",
  },
  {
    icon: Building2,
    title: "Business Websites",
    description:
      "Professional business websites that establish your online presence with stunning design and SEO optimization.",
    gradient: "from-neon-blue via-neon-cyan to-neon-purple",
  },
]

export function ServicesSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="services" className="relative py-28 lg:py-40 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-neon-blue/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-neon-purple/10 rounded-full blur-[120px]" />
      </div>

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
            What We Do
          </motion.span>
          <h2 className="mt-5 text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground text-balance tracking-tight leading-[1.1]">
            Our{" "}
            <span className="bg-gradient-to-r from-neon-blue to-neon-purple bg-clip-text text-transparent">
              Services
            </span>
          </h2>
          <p className="mt-6 text-lg lg:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Comprehensive web development solutions tailored to your business needs
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.15 + index * 0.1, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ y: -12, transition: { duration: 0.3, ease: "easeOut" } }}
              className="group relative"
            >
              {/* Glow effect */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${service.gradient} rounded-3xl blur-xl opacity-0 group-hover:opacity-40 transition-opacity duration-500`}
              />

              {/* Card */}
              <div className="relative h-full p-7 lg:p-8 rounded-3xl bg-card/30 border border-border/40 backdrop-blur-xl hover:border-neon-cyan/40 transition-all duration-300">
                {/* Icon */}
                <motion.div
                  className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${service.gradient} p-[1.5px] mb-7`}
                  whileHover={{ rotate: [0, -5, 5, 0], transition: { duration: 0.4 } }}
                >
                  <div className="w-full h-full rounded-2xl bg-card flex items-center justify-center">
                    <service.icon className="w-6 h-6 text-neon-cyan" />
                  </div>
                </motion.div>

                <h3 className="text-xl font-semibold text-foreground mb-3 tracking-tight">
                  {service.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {service.description}
                </p>

                {/* Hover border glow */}
                <div
                  className={`absolute inset-0 rounded-3xl bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10 blur-sm`}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
