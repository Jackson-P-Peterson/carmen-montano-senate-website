"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { MapPin, Users, Building2, GraduationCap, TreePine } from "lucide-react";

const communities = [
  {
    name: "Fremont",
    desc: "Tech hub with rich cultural diversity and thriving small businesses",
    icon: Building2,
  },
  {
    name: "Hayward",
    desc: "Working-class heart of the East Bay with strong community roots",
    icon: Users,
  },
  {
    name: "Union City",
    desc: "Family-oriented community seeking affordable housing solutions",
    icon: TreePine,
  },
  {
    name: "Milpitas",
    desc: "Growing city at the crossroads of innovation and opportunity",
    icon: Building2,
  },
  {
    name: "Newark",
    desc: "Close-knit community focused on education and safe neighborhoods",
    icon: GraduationCap,
  },
  {
    name: "North San Jose",
    desc: "Dynamic urban center demanding effective governance and accountability",
    icon: Building2,
  },
];

export default function DistrictMap() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="relative py-24 lg:py-32 bg-gradient-to-b from-navy-50/30 to-white overflow-hidden">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-gold-50 text-gold-700 text-sm font-semibold tracking-wide uppercase mb-4">
            Our District
          </span>
          <h2 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold text-navy-800 mb-6">
            Fighting for Every{" "}
            <span className="text-gold-500">Neighborhood</span>
          </h2>
          <div className="w-24 h-1 bg-gold-500 mx-auto rounded-full mb-6" />
          <p className="text-lg text-navy-600 max-w-3xl mx-auto">
            Senate District 10 is one of the most diverse and dynamic districts in 
            California. Carmen Montano will represent every community — from Fremont 
            to San Jose and everywhere in between.
          </p>
        </motion.div>

        {/* Communities Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {communities.map((community, i) => (
            <motion.div
              key={community.name}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="group relative p-6 rounded-2xl bg-white border border-navy-100 hover:border-gold-300 hover:shadow-xl transition-all duration-300"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-navy-800 to-navy-700 flex items-center justify-center text-gold-400 flex-shrink-0 group-hover:from-gold-500 group-hover:to-gold-600 group-hover:text-white transition-all duration-300">
                  <community.icon size={22} />
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <MapPin size={14} className="text-gold-500" />
                    <h3 className="font-heading text-xl font-bold text-navy-800">
                      {community.name}
                    </h3>
                  </div>
                  <p className="text-sm text-navy-600 leading-relaxed">
                    {community.desc}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* District Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-16 grid grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {[
            { value: "1M+", label: "Residents" },
            { value: "60%+", label: "Majority-Minority" },
            { value: "6", label: "Major Cities" },
            { value: "1", label: "United Community" },
          ].map((stat, i) => (
            <div
              key={i}
              className="text-center p-6 rounded-2xl bg-gradient-to-b from-navy-800 to-navy-900 text-white"
            >
              <div className="font-heading text-3xl lg:text-4xl font-bold text-gold-400 mb-2">
                {stat.value}
              </div>
              <div className="text-sm text-navy-200">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
