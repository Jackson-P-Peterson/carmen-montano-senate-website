"use client";

import { motion } from "framer-motion";
import { ChevronDown, Star } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        {/* Gradient Background (replaces photo until one is provided) */}
        <div className="absolute inset-0 bg-gradient-to-br from-navy-900 via-navy-800 to-navy-700 animate-gradient" />

        {/* Overlay Pattern - subtle geometric */}
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />

        {/* Radial glow */}
        <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-gold-500/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-navy-500/20 rounded-full blur-[100px]" />

        {/* Bottom gradient fade */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 lg:py-40">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Content */}
          <div>
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-8"
            >
              <Star className="w-4 h-4 text-gold-400 fill-gold-400" />
              <span className="text-sm font-medium text-gold-200 tracking-wide">
                California State Senate &middot; District 10
              </span>
            </motion.div>

            {/* Main Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="font-heading text-5xl sm:text-6xl lg:text-7xl font-bold text-white leading-[1.05] mb-6"
            >
              A Voice for{" "}
              <span className="relative">
                <span className="relative z-10 text-gold-400">
                  Our Community
                </span>
                <motion.span
                  initial={{ width: 0 }}
                  animate={{ width: "100%" }}
                  transition={{ duration: 0.8, delay: 1 }}
                  className="absolute bottom-2 left-0 h-3 bg-gold-500/20 rounded-full"
                />
              </span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="text-lg sm:text-xl text-navy-100/90 max-w-xl mb-10 leading-relaxed"
            >
              Carmen Montano is running for State Senate to fight for affordable 
              housing, safer neighborhoods, quality education, and economic 
              opportunity for every family in District 10.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <a
                href="#donate"
                className="group relative inline-flex items-center justify-center px-8 py-4 text-lg font-bold rounded-full bg-gold-500 text-white overflow-hidden transition-all duration-300 hover:shadow-xl hover:shadow-gold-500/30 hover:scale-105"
              >
                <span className="relative z-10">Donate Today</span>
                <div className="absolute inset-0 bg-gradient-to-r from-gold-600 to-gold-500 opacity-0 group-hover:opacity-100 transition-opacity" />
              </a>
              <a
                href="#volunteer"
                className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold rounded-full border-2 border-white/30 text-white hover:bg-white hover:text-navy-800 transition-all duration-300"
              >
                Join Our Movement
              </a>
            </motion.div>

            {/* Quick Stats */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 1 }}
              className="mt-12 pt-8 border-t border-white/10 grid grid-cols-3 gap-6"
            >
              {[
                { number: "20+", label: "Years of Service" },
                { number: "SD-10", label: "Communities Strong" },
                { number: "2026", label: "Election Year" },
              ].map((stat, i) => (
                <div key={i} className="text-center sm:text-left">
                  <div className="text-2xl sm:text-3xl font-heading font-bold text-gold-400">
                    {stat.number}
                  </div>
                  <div className="text-xs sm:text-sm text-navy-200 mt-1">
                    {stat.label}
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right Side - Photo placeholder / Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="hidden lg:block relative"
          >
            <div className="relative">
              {/* Decorative frame */}
              <div className="absolute -inset-4 bg-gradient-to-br from-gold-500/20 to-transparent rounded-3xl" />
              <div className="absolute -inset-8 border-2 border-gold-500/10 rounded-3xl" />

              {/* Photo container */}
              <div className="relative w-full aspect-[3/4] rounded-2xl overflow-hidden bg-gradient-to-br from-navy-600 to-navy-800 shadow-2xl">
                {/* Placeholder with initials - replace with actual photo */}
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <div className="w-48 h-48 rounded-full bg-gradient-to-br from-gold-400 to-gold-600 flex items-center justify-center mb-6 shadow-xl">
                    <span className="font-heading text-6xl font-bold text-white">
                      CM
                    </span>
                  </div>
                  <p className="text-white/60 text-sm text-center px-8">
                    Campaign photo will go here
                  </p>
                </div>

                {/* Decorative elements */}
                <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-navy-900/80 to-transparent" />
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="bg-white/10 backdrop-blur-md rounded-xl p-4 border border-white/20">
                    <p className="font-heading text-white text-lg font-semibold">
                      Carmen Montano
                    </p>
                    <p className="text-gold-300 text-sm">
                      Candidate for State Senate, District 10
                    </p>
                  </div>
                </div>
              </div>

              {/* Floating accent */}
              <motion.div
                animate={{ y: [-5, 5, -5] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -right-6 top-12 bg-gold-500 text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg"
              >
                2026
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
      >
        <a
          href="#about"
          className="flex flex-col items-center gap-2 text-white/60 hover:text-white transition-colors"
        >
          <span className="text-xs tracking-widest uppercase">Learn More</span>
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <ChevronDown size={20} />
          </motion.div>
        </a>
      </motion.div>
    </section>
  );
}
