"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X } from "lucide-react"

const navLinks = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#services", label: "Services" },
  { href: "#projects", label: "Projects" },
  { href: "#github", label: "GitHub" },
  { href: "#team", label: "Team" },
  { href: "#tech", label: "Tech Stack" },
  { href: "#contact", label: "Contact" },
]

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/80 backdrop-blur-xl border-b border-border/50"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
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

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-10">
            {navLinks.map((link) => (
              <motion.a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors relative group tracking-wide"
                whileHover={{ y: -2 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                {link.label}
                <span className="absolute -bottom-1.5 left-0 w-0 h-0.5 bg-gradient-to-r from-neon-blue to-neon-cyan group-hover:w-full transition-all duration-300" />
              </motion.a>
            ))}
          </div>

          {/* CTA Button */}
          <motion.a
            href="#contact"
            className="hidden md:flex px-5 py-2.5 rounded-xl bg-gradient-to-r from-neon-blue to-neon-cyan text-background font-semibold text-sm tracking-wide hover:shadow-[0_0_25px_rgba(0,200,255,0.5)] transition-shadow duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
          >
            Get in Touch
          </motion.a>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-foreground"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-background/95 backdrop-blur-xl border-b border-border/50"
          >
            <div className="px-4 py-4 space-y-4">
              {navLinks.map((link) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  className="block text-muted-foreground hover:text-foreground transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                  whileHover={{ x: 10 }}
                >
                  {link.label}
                </motion.a>
              ))}
              <a
                href="#contact"
                className="block px-4 py-2 rounded-lg bg-gradient-to-r from-neon-blue to-neon-cyan text-background font-medium text-sm text-center"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Get in Touch
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}
