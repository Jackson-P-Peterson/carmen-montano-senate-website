"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Issues", href: "#issues" },
  { label: "Endorsements", href: "#endorsements" },
  { label: "Events", href: "#events" },
  { label: "Get Involved", href: "#volunteer" },
  { label: "Contact", href: "#contact" },
];

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      // Track active section
      const sections = navLinks.map((link) => link.href.replace("#", ""));
      for (const section of sections.reverse()) {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 120) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? "bg-white/95 backdrop-blur-md shadow-lg border-b border-gold-100"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <a href="#" className="flex items-center gap-3 group">
              <div className="relative">
                <div
                  className={`w-11 h-11 rounded-full flex items-center justify-center font-heading font-bold text-lg transition-all duration-300 ${
                    isScrolled
                      ? "bg-navy-800 text-white"
                      : "bg-white text-navy-800"
                  } group-hover:scale-110`}
                >
                  CM
                </div>
                <div className="absolute -bottom-0.5 -right-0.5 w-3 h-3 bg-gold-500 rounded-full" />
              </div>
              <div className="hidden sm:block">
                <div
                  className={`font-heading font-bold text-lg leading-tight transition-colors duration-300 ${
                    isScrolled ? "text-navy-800" : "text-white"
                  }`}
                >
                  Carmen Montano
                </div>
                <div
                  className={`text-xs tracking-widest uppercase transition-colors duration-300 ${
                    isScrolled ? "text-gold-600" : "text-gold-300"
                  }`}
                >
                  For State Senate
                </div>
              </div>
            </a>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className={`relative px-4 py-2 text-sm font-medium tracking-wide rounded-full transition-all duration-300 ${
                    activeSection === link.href.replace("#", "")
                      ? isScrolled
                        ? "text-gold-600"
                        : "text-gold-300"
                      : isScrolled
                      ? "text-navy-700 hover:text-navy-900 hover:bg-navy-50"
                      : "text-white/80 hover:text-white hover:bg-white/10"
                  }`}
                >
                  {link.label}
                  {activeSection === link.href.replace("#", "") && (
                    <motion.div
                      layoutId="activeNav"
                      className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-1 bg-gold-500 rounded-full"
                      transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    />
                  )}
                </a>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="hidden lg:flex items-center gap-3">
              <a
                href="#volunteer"
                className={`px-5 py-2.5 text-sm font-semibold rounded-full border-2 transition-all duration-300 ${
                  isScrolled
                    ? "border-navy-800 text-navy-800 hover:bg-navy-800 hover:text-white"
                    : "border-white text-white hover:bg-white hover:text-navy-800"
                }`}
              >
                Volunteer
              </a>
              <a
                href="#donate"
                className="px-5 py-2.5 text-sm font-bold rounded-full bg-gold-500 text-white hover:bg-gold-600 hover:shadow-lg hover:shadow-gold-500/30 transform hover:scale-105"
              >
                Donate Now
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileOpen(!isMobileOpen)}
              className={`lg:hidden p-2 rounded-lg transition-colors ${
                isScrolled
                  ? "text-navy-800 hover:bg-navy-50"
                  : "text-white hover:bg-white/10"
              }`}
              aria-label="Toggle menu"
            >
              {isMobileOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 lg:hidden"
          >
            <div
              className="absolute inset-0 bg-navy-900/60 backdrop-blur-sm"
              onClick={() => setIsMobileOpen(false)}
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="absolute right-0 top-0 bottom-0 w-80 bg-white shadow-2xl"
            >
              <div className="p-6 pt-24">
                <div className="space-y-1">
                  {navLinks.map((link, i) => (
                    <motion.a
                      key={link.href}
                      href={link.href}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.05 }}
                      onClick={() => setIsMobileOpen(false)}
                      className="block px-4 py-3 text-lg font-medium text-navy-800 hover:text-gold-600 hover:bg-gold-50 rounded-xl transition-colors"
                    >
                      {link.label}
                    </motion.a>
                  ))}
                </div>
                <div className="mt-8 space-y-3">
                  <a
                    href="#volunteer"
                    onClick={() => setIsMobileOpen(false)}
                    className="block w-full text-center px-6 py-3 text-base font-semibold rounded-full border-2 border-navy-800 text-navy-800 hover:bg-navy-800 hover:text-white transition-all"
                  >
                    Volunteer
                  </a>
                  <a
                    href="#donate"
                    onClick={() => setIsMobileOpen(false)}
                    className="block w-full text-center px-6 py-3 text-base font-bold rounded-full bg-gold-500 text-white hover:bg-gold-600 transition-all"
                  >
                    Donate Now
                  </a>
                </div>
                <div className="mt-8 pt-6 border-t border-navy-100">
                  <p className="text-sm text-navy-500 text-center">
                    Paid for by Carmen Montano for Senate 2026
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
