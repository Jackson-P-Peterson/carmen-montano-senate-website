"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  CheckCircle2,
  XCircle,
  ArrowRight,
} from "lucide-react";

const comparisons = [
  {
    issue: "Affordable Housing",
    carmen: "Lifelong advocate for tenant protections and affordable development",
    others: "Career politicians who have watched housing costs explode on their watch",
  },
  {
    issue: "Public Safety",
    carmen: "Smart-on-crime approach: strong enforcement AND prevention programs",
    others: "All talk, no results — crime persists while they collect lobbyist checks",
  },
  {
    issue: "Cost of Living",
    carmen: "Fights for tax relief for working families and small business support",
    others: "Support tax increases that burden the middle class",
  },
  {
    issue: "Education",
    carmen: "Proven education advocate who has worked in our schools and colleges",
    others: "Rubber-stamp bureaucrats disconnected from our classrooms",
  },
  {
    issue: "Accountability",
    carmen: "Transparent, community-driven leadership with nothing to hide",
    others: "Fail to report lobbyist meetings and oppose pay-for-performance",
  },
];

export default function WhyCarmen() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="relative py-24 lg:py-32 bg-gradient-to-b from-white to-navy-50/50 overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gold-300 to-transparent" />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-crimson-50 text-crimson-700 text-sm font-semibold tracking-wide uppercase mb-4">
            The Choice Is Clear
          </span>
          <h2 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold text-navy-800 mb-6">
            Why <span className="text-gold-500">Carmen?</span>
          </h2>
          <div className="w-24 h-1 bg-gold-500 mx-auto rounded-full mb-6" />
          <p className="text-lg text-navy-600 max-w-3xl mx-auto">
            While career politicians and insiders play games in Sacramento, 
            Carmen Montano has been in our communities doing the real work. 
            The contrast couldn&apos;t be more clear.
          </p>
        </motion.div>

        {/* Comparison Table */}
        <div className="space-y-4">
          {/* Header Row */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.4 }}
            className="hidden md:grid md:grid-cols-3 gap-4 px-6 pb-4"
          >
            <div className="text-sm font-bold text-navy-500 uppercase tracking-wider">
              The Issue
            </div>
            <div className="text-sm font-bold text-gold-600 uppercase tracking-wider flex items-center gap-2">
              <CheckCircle2 size={16} /> Carmen Montano
            </div>
            <div className="text-sm font-bold text-navy-400 uppercase tracking-wider flex items-center gap-2">
              <XCircle size={16} /> The Status Quo
            </div>
          </motion.div>

          {comparisons.map((row, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.1 + i * 0.08 }}
              className="grid md:grid-cols-3 gap-4 p-6 rounded-2xl bg-white border border-navy-100 hover:shadow-lg hover:border-gold-200 transition-all duration-300"
            >
              <div>
                <div className="font-heading text-lg font-bold text-navy-800">
                  {row.issue}
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                <p className="text-sm text-navy-700 leading-relaxed">
                  {row.carmen}
                </p>
              </div>
              <div className="flex items-start gap-3">
                <XCircle className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" />
                <p className="text-sm text-navy-500 leading-relaxed">
                  {row.others}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-12 text-center"
        >
          <a
            href="#volunteer"
            className="inline-flex items-center gap-2 px-8 py-4 bg-navy-800 text-white rounded-full font-bold text-lg hover:bg-navy-900 transition-colors shadow-lg hover:shadow-xl"
          >
            Stand With Carmen
            <ArrowRight size={18} />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
