"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  GraduationCap,
  Users,
  Heart,
  Building2,
  Award,
  HandHeart,
} from "lucide-react";

const milestones = [
  {
    icon: GraduationCap,
    year: "Education",
    title: "Community College Advocate",
    desc: "Champion for accessible, affordable education across the East Bay",
  },
  {
    icon: Users,
    year: "Leadership",
    title: "Community Organizer",
    desc: "Over two decades of grassroots leadership serving working families",
  },
  {
    icon: Heart,
    year: "Service",
    title: "Nonprofit Leader",
    desc: "Dedicated career in public service and community development",
  },
  {
    icon: Building2,
    year: "Housing",
    title: "Housing Advocate",
    desc: "Fighting for affordable housing and tenant protections",
  },
];

const values = [
  {
    icon: Award,
    title: "Integrity",
    desc: "Transparent leadership rooted in accountability to the communities we serve.",
  },
  {
    icon: HandHeart,
    title: "Compassion",
    desc: "Every policy decision starts with the question: how does this help working families?",
  },
  {
    icon: Users,
    title: "Unity",
    desc: "Bridging diverse communities together to build a stronger District 10.",
  },
];

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="relative py-24 lg:py-32 bg-white overflow-hidden">
      {/* Background accents */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gold-50 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-navy-50 rounded-full blur-[80px] translate-y-1/2 -translate-x-1/2" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 lg:mb-20"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-gold-50 text-gold-700 text-sm font-semibold tracking-wide uppercase mb-4">
            Meet Carmen
          </span>
          <h2 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold text-navy-800 mb-6">
            A Lifelong Champion for{" "}
            <span className="text-gold-500">Working Families</span>
          </h2>
          <div className="w-24 h-1 bg-gold-500 mx-auto rounded-full mb-6" />
          <p className="text-lg text-navy-600 max-w-3xl mx-auto leading-relaxed">
            Carmen Montano has spent over 20 years fighting for the communities of 
            the East Bay and South Bay. From education to housing to public safety, 
            she has dedicated her life to making sure every family has a fair shot.
          </p>
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-16 items-start mb-20">
          {/* Story */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="prose prose-lg max-w-none">
              <div className="relative pl-6 border-l-4 border-gold-500">
                <p className="text-navy-700 leading-relaxed mb-6">
                  Carmen Montano grew up understanding the struggles of working families. 
                  As a Latina leader in one of California&apos;s most diverse regions, she has 
                  built bridges across communities — from Fremont to Hayward, from Union 
                  City to Milpitas, and throughout San Jose.
                </p>
                <p className="text-navy-700 leading-relaxed mb-6">
                  Her career in public service and community organizing has given her a 
                  front-row seat to the challenges our neighborhoods face: skyrocketing 
                  housing costs, underfunded schools, rising crime, and a cost of living 
                  that pushes families to the breaking point.
                </p>
                <p className="text-navy-700 leading-relaxed">
                  Carmen isn&apos;t running for State Senate to build a political career — 
                  she&apos;s running because she knows the people of District 10 deserve a 
                  senator who has walked in their shoes, who has organized alongside them, 
                  and who will fight for them in Sacramento every single day.
                </p>
              </div>
            </div>

            {/* Quote */}
            <motion.blockquote
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="mt-10 relative"
            >
              <div className="absolute -top-4 -left-2 text-7xl font-heading text-gold-200 leading-none">
                &ldquo;
              </div>
              <div className="bg-gradient-to-br from-navy-800 to-navy-900 rounded-2xl p-8 text-white relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-gold-500/10 rounded-full blur-[40px]" />
                <p className="relative z-10 text-lg italic leading-relaxed mb-4">
                  Our community doesn&apos;t need more politicians who make promises 
                  from Sacramento. We need a senator who has been in the trenches, 
                  who knows our neighborhoods, and who will never stop fighting 
                  for the families of District 10.
                </p>
                <footer className="relative z-10 flex items-center gap-3 mt-4">
                  <div className="w-10 h-10 rounded-full bg-gold-500 flex items-center justify-center text-sm font-bold">
                    CM
                  </div>
                  <div>
                    <cite className="font-semibold not-italic">
                      Carmen Montano
                    </cite>
                    <p className="text-sm text-navy-300">
                      Candidate for State Senate
                    </p>
                  </div>
                </footer>
              </div>
            </motion.blockquote>
          </motion.div>

          {/* Timeline / Milestones */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="space-y-6"
          >
            {milestones.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.4 + i * 0.1 }}
                className="group relative flex gap-5 p-6 rounded-2xl bg-white border border-navy-100 shadow-sm hover:shadow-lg hover:border-gold-200 transition-all duration-300"
              >
                <div className="flex-shrink-0">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-navy-800 to-navy-700 flex items-center justify-center text-gold-400 group-hover:from-gold-500 group-hover:to-gold-600 group-hover:text-white transition-all duration-300 shadow-md">
                    <item.icon size={24} />
                  </div>
                </div>
                <div>
                  <div className="text-xs font-bold text-gold-600 tracking-widest uppercase mb-1">
                    {item.year}
                  </div>
                  <h3 className="text-lg font-bold text-navy-800 mb-1">
                    {item.title}
                  </h3>
                  <p className="text-navy-600 text-sm leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            ))}

            {/* Photo placeholder */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.8 }}
              className="relative rounded-2xl overflow-hidden bg-gradient-to-br from-gold-100 to-gold-200 aspect-video flex items-center justify-center"
            >
              <div className="text-center p-8">
                <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-white/80 flex items-center justify-center">
                  <Heart className="w-8 h-8 text-gold-600" />
                </div>
                <p className="text-gold-800 font-medium">
                  Community event photo will go here
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Values Strip */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="grid md:grid-cols-3 gap-8"
        >
          {values.map((val, i) => (
            <div
              key={i}
              className="text-center p-8 rounded-2xl bg-gradient-to-b from-navy-50/50 to-white border border-navy-100/50 hover:shadow-lg transition-all duration-300 group"
            >
              <div className="w-16 h-16 mx-auto mb-5 rounded-2xl bg-gradient-to-br from-gold-400 to-gold-600 flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform duration-300">
                <val.icon size={28} />
              </div>
              <h3 className="font-heading text-xl font-bold text-navy-800 mb-3">
                {val.title}
              </h3>
              <p className="text-navy-600 text-sm leading-relaxed">
                {val.desc}
              </p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
