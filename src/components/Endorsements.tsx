"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Quote, Star, Building, Users, Landmark } from "lucide-react";

const endorsementCategories = [
  {
    icon: Landmark,
    title: "Elected Officials",
    endorsements: [
      {
        quote:
          "Carmen Montano has the experience, the passion, and the vision to represent District 10 in the State Senate. She's a leader who delivers results.",
        name: "Endorsement Coming Soon",
        title: "Elected Official",
      },
    ],
  },
  {
    icon: Building,
    title: "Organizations",
    endorsements: [
      {
        quote:
          "We are proud to support a candidate who has fought for working families her entire career. Carmen Montano will be a strong voice in Sacramento.",
        name: "Endorsement Coming Soon",
        title: "Community Organization",
      },
    ],
  },
  {
    icon: Users,
    title: "Community Leaders",
    endorsements: [
      {
        quote:
          "Carmen knows our community because she IS our community. She's been on the front lines fighting for us for decades.",
        name: "Endorsement Coming Soon",
        title: "Community Leader",
      },
    ],
  },
];

const communityTestimonials = [
  {
    quote:
      "Carmen showed up for us when nobody else would. She fought for affordable housing in our neighborhood and won. That's the kind of senator we need.",
    name: "Community Member",
    location: "Fremont",
  },
  {
    quote:
      "As a small business owner in Hayward, I know Carmen will fight for our economy. She understands what working people go through every day.",
    name: "Small Business Owner",
    location: "Hayward",
  },
  {
    quote:
      "Carmen Montano is the real deal. She's not a career politician — she's a community leader who cares about people like us.",
    name: "Resident",
    location: "Union City",
  },
  {
    quote:
      "Education is the great equalizer. Carmen knows that, and she's been fighting for our schools and colleges for years. She has my full support.",
    name: "Educator",
    location: "Milpitas",
  },
];

export default function Endorsements() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="endorsements"
      className="relative py-24 lg:py-32 overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-navy-50/40 to-white" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-gold-50 text-gold-700 text-sm font-semibold tracking-wide uppercase mb-4">
            Endorsements
          </span>
          <h2 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold text-navy-800 mb-6">
            Who&apos;s Standing With{" "}
            <span className="text-gold-500">Carmen</span>
          </h2>
          <div className="w-24 h-1 bg-gold-500 mx-auto rounded-full mb-6" />
          <p className="text-lg text-navy-600 max-w-3xl mx-auto">
            Leaders across District 10 are joining the movement. From elected 
            officials to community organizations to everyday neighbors — the 
            support for Carmen Montano continues to grow.
          </p>
        </motion.div>

        {/* Endorsement Categories */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {endorsementCategories.map((cat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-white rounded-2xl border border-navy-100 shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden group"
            >
              <div className="p-6 bg-gradient-to-r from-navy-800 to-navy-700 text-white">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-gold-500/20 flex items-center justify-center">
                    <cat.icon size={20} className="text-gold-400" />
                  </div>
                  <h3 className="font-heading text-xl font-bold">
                    {cat.title}
                  </h3>
                </div>
              </div>
              {cat.endorsements.map((endorsement, j) => (
                <div key={j} className="p-6">
                  <div className="relative mb-4">
                    <Quote className="w-8 h-8 text-gold-200 absolute -top-1 -left-1" />
                    <p className="text-navy-700 italic leading-relaxed pl-6">
                      {endorsement.quote}
                    </p>
                  </div>
                  <div className="flex items-center gap-3 pt-4 border-t border-navy-100">
                    <div className="w-10 h-10 rounded-full bg-navy-100 flex items-center justify-center">
                      <Star className="w-4 h-4 text-gold-500" />
                    </div>
                    <div>
                      <p className="font-semibold text-navy-800 text-sm">
                        {endorsement.name}
                      </p>
                      <p className="text-xs text-navy-500">
                        {endorsement.title}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>
          ))}
        </div>

        {/* Call for Endorsements Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="bg-gradient-to-r from-gold-500 to-gold-600 rounded-3xl p-8 lg:p-12 text-white mb-20 relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-[60px]" />
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-gold-700/30 rounded-full blur-[40px]" />
          <div className="relative z-10 flex flex-col lg:flex-row items-center gap-8">
            <div className="flex-1 text-center lg:text-left">
              <h3 className="font-heading text-3xl lg:text-4xl font-bold mb-3">
                Want to Endorse Carmen?
              </h3>
              <p className="text-gold-100 text-lg max-w-xl">
                If you&apos;re a community leader, organization, or elected official 
                who shares Carmen&apos;s vision for District 10, we want to hear from you.
              </p>
            </div>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-white text-gold-700 rounded-full font-bold text-lg hover:bg-navy-800 hover:text-white transition-all duration-300 shadow-xl hover:shadow-2xl flex-shrink-0"
            >
              Submit an Endorsement
            </a>
          </div>
        </motion.div>

        {/* Community Testimonials */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <h3 className="font-heading text-2xl font-bold text-navy-800 text-center mb-10">
            Voices from the Community
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {communityTestimonials.map((testimonial, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.6 + i * 0.1 }}
                className="bg-white rounded-xl p-6 border border-navy-100 shadow-sm hover:shadow-lg transition-all duration-300"
              >
                <div className="flex gap-1 mb-3">
                  {[1, 2, 3, 4, 5].map((s) => (
                    <Star
                      key={s}
                      className="w-4 h-4 text-gold-400 fill-gold-400"
                    />
                  ))}
                </div>
                <p className="text-navy-700 text-sm italic leading-relaxed mb-4">
                  &ldquo;{testimonial.quote}&rdquo;
                </p>
                <div className="pt-3 border-t border-navy-50">
                  <p className="font-semibold text-navy-800 text-sm">
                    {testimonial.name}
                  </p>
                  <p className="text-xs text-gold-600">{testimonial.location}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
