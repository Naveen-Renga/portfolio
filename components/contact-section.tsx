"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Mail, MessageCircle, Send, Instagram } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import emailjs from "@emailjs/browser"

export function ContactSection() {
  const ref = useRef(null)
  const formRef = useRef<HTMLFormElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [isLoading, setIsLoading] = useState(false)

  // Initialize EmailJS on component mount
  useEffect(() => {
    // CONFIGURATION: Add your EmailJS Public Key here
    // Get it from: https://dashboard.emailjs.com/admin/account
    const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
    if (!publicKey) {
      console.error("[v0] EmailJS Public Key is not configured. Please add NEXT_PUBLIC_EMAILJS_PUBLIC_KEY to your environment variables.")
    } else {
      emailjs.init(publicKey)
    }
  }, [])

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsLoading(true)

    try {
      // CONFIGURATION: Add your EmailJS Service ID and Template ID
      // Service ID: https://dashboard.emailjs.com/admin/services
      // Template ID: https://dashboard.emailjs.com/admin/templates
      const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID
      const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID
      const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY

      // Validate configuration
      if (!serviceId || !templateId || !publicKey) {
        console.error("[v0] EmailJS configuration missing")
        return
      }

      if (!formRef.current) {
        return
      }

      await emailjs.sendForm(serviceId, templateId, formRef.current)
      
      // Reset form
      if (formRef.current) {
        formRef.current.reset()
      }
    } catch (err) {
      console.error("[v0] EmailJS error:", err instanceof Error ? err.message : err)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <section id="contact" className="relative py-28 lg:py-40 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-neon-blue/10 rounded-full blur-[120px]" />
        <div className="absolute top-1/4 right-1/4 w-80 h-80 bg-neon-purple/10 rounded-full blur-[100px]" />
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
            Get in Touch
          </motion.span>
          <h2 className="mt-5 text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground text-balance tracking-tight leading-[1.1]">
            Let{"'"}s Build Something{" "}
            <span className="bg-gradient-to-r from-neon-blue to-neon-purple bg-clip-text text-transparent">
              Amazing
            </span>
          </h2>
          <p className="mt-6 text-lg lg:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Ready to start your next project? Reach out and let{"'"}s discuss how we can help
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="relative"
          >
            {/* Glow effect */}
            <div className="absolute -inset-2 bg-gradient-to-br from-neon-blue/30 via-neon-cyan/20 to-neon-purple/30 rounded-3xl blur-xl opacity-50" />

            {/* Form Card */}
            <div className="relative p-10 rounded-3xl bg-card/40 border border-border/40 backdrop-blur-xl">
              <form ref={formRef} onSubmit={handleSubmit} className="space-y-7">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Name
                    </label>
                    <Input
                      type="text"
                      name="name"
                      placeholder="Your Name"
                      required
                      className="bg-secondary/50 border-border/50 focus:border-neon-cyan focus:ring-neon-cyan/20"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Email
                    </label>
                    <Input
                      type="email"
                      name="email"
                      placeholder="your@email.com"
                      required
                      className="bg-secondary/50 border-border/50 focus:border-neon-cyan focus:ring-neon-cyan/20"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Subject
                  </label>
                  <Input
                    type="text"
                    name="subject"
                    placeholder="Project Inquiry"
                    required
                    className="bg-secondary/50 border-border/50 focus:border-neon-cyan focus:ring-neon-cyan/20"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Message
                  </label>
                  <Textarea
                    name="message"
                    placeholder="Tell us about your project..."
                    rows={5}
                    required
                    className="bg-secondary/50 border-border/50 focus:border-neon-cyan focus:ring-neon-cyan/20 resize-none"
                  />
                </div>
                <motion.div whileHover={!isLoading ? { scale: 1.02 } : {}} whileTap={!isLoading ? { scale: 0.98 } : {}}>
                  <Button
                    type="submit"
                    className="w-full bg-gradient-to-r from-neon-blue to-neon-cyan text-background font-semibold py-6 hover:shadow-[0_0_30px_rgba(0,200,255,0.5)] transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed"
                    disabled={isLoading}
                  >
                    {isLoading ? (
                      <span className="flex items-center gap-2">
                        <motion.div
                          animate={{ rotate: 360 }}
                          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                        >
                          <Send className="w-5 h-5" />
                        </motion.div>
                        Sending...
                      </span>
                    ) : (
                      <span className="flex items-center gap-2">
                        <Send className="w-5 h-5" />
                        Send Message
                      </span>
                    )}
                  </Button>
                </motion.div>
              </form>
            </div>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col justify-center space-y-10"
          >
            <div>
              <h3 className="text-2xl lg:text-3xl font-bold text-foreground mb-5 tracking-tight">
                Ready to Transform Your Ideas?
              </h3>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Whether you need a stunning website, a powerful SaaS platform, or a 
                complete digital transformation, we{"'"}re here to help. Get in touch 
                and let{"'"}s create something extraordinary together.
              </p>
            </div>

            {/* Contact Methods */}
            <div className="space-y-5">
              <motion.a
                href="mailto:nexvoratech26@gmail.com"
                className="group flex items-center gap-5 p-5 rounded-2xl bg-card/30 border border-border/40 backdrop-blur-md hover:border-neon-cyan/40 transition-all duration-300"
                whileHover={{ x: 10, transition: { duration: 0.2 } }}
              >
                <motion.div 
                  className="w-14 h-14 rounded-2xl bg-gradient-to-br from-neon-blue/20 to-neon-cyan/20 flex items-center justify-center"
                  whileHover={{ rotate: [0, -10, 10, 0], transition: { duration: 0.4 } }}
                >
                  <Mail className="w-6 h-6 text-neon-cyan" />
                </motion.div>
                <div>
                  <div className="text-sm text-muted-foreground font-medium">Email Us</div>
                  <div className="text-foreground font-semibold group-hover:text-neon-cyan transition-colors">
                    nexvoratech26@gmail.com
                  </div>
                </div>
              </motion.a>

              <motion.a
                href="https://wa.me/919962451303"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-5 p-5 rounded-2xl bg-card/30 border border-border/40 backdrop-blur-md hover:border-green-500/40 transition-all duration-300"
                whileHover={{ x: 10, transition: { duration: 0.2 } }}
              >
                <motion.div 
                  className="w-14 h-14 rounded-2xl bg-gradient-to-br from-green-500/20 to-green-600/20 flex items-center justify-center"
                  whileHover={{ rotate: [0, -10, 10, 0], transition: { duration: 0.4 } }}
                >
                  <MessageCircle className="w-6 h-6 text-green-500" />
                </motion.div>
                <div>
                  <div className="text-sm text-muted-foreground font-medium">WhatsApp</div>
                  <div className="text-foreground font-semibold group-hover:text-green-500 transition-colors">
                    +91 9962451303<br/>+91 6383454256
                  </div>
                </div>
              </motion.a>
            </div>

            {/* Social Links and Instagram */}
            <div className="space-y-5">
              <div className="flex gap-4">
                <motion.a
                  href="#"
                  className="px-6 py-3 rounded-xl bg-secondary/40 border border-border/40 text-muted-foreground hover:text-foreground hover:border-neon-cyan/40 transition-all duration-300 text-sm font-medium"
                  whileHover={{ y: -5, transition: { duration: 0.2 } }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.5 }}
                >
                  LinkedIn
                </motion.a>
              </div>

              {/* Instagram Section */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.7 }}
                className="flex flex-col gap-4"
              >
                <motion.a
                  href="https://www.instagram.com/nexvora_tech"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-4 px-6 py-3 rounded-xl bg-gradient-to-r from-pink-500/20 to-purple-500/20 border border-pink-500/40 text-muted-foreground hover:text-white transition-all duration-300"
                  whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
                >
                  <Instagram className="w-5 h-5 text-pink-500" />
                  <span className="font-medium text-sm">Follow Us on Instagram</span>
                </motion.a>

                {/* Instagram QR Code */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.6, delay: 0.8 }}
                  className="flex flex-col items-center gap-3 p-4 rounded-2xl bg-card/40 border border-border/40 backdrop-blur-md"
                >
                  <p className="text-xs text-muted-foreground font-medium uppercase tracking-wide">Scan to Follow</p>
                  <img
                    src="/instagram-qr.jpg"
                    alt="Instagram QR Code"
                    className="w-32 h-32 rounded-xl border border-border/40"
                  />
                </motion.div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
