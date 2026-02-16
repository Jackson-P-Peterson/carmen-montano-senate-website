"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  Calendar,
  MapPin,
  Clock,
  ChevronRight,
  Megaphone,
  Newspaper,
} from "lucide-react";

const upcomingEvents = [
  {
    date: "MAR",
    day: "15",
    title: "Campaign Kickoff Rally",
    location: "Fremont, CA",
    time: "10:00 AM - 1:00 PM",
    type: "Rally",
    description:
      "Join Carmen as she officially launches her campaign for State Senate. Food, music, and community!",
    featured: true,
  },
  {
    date: "MAR",
    day: "22",
    title: "Town Hall: Housing & Cost of Living",
    location: "Hayward, CA",
    time: "6:00 PM - 8:00 PM",
    type: "Town Hall",
    description:
      "Hear Carmen's plan for affordable housing and ask questions about the issues that matter to you.",
    featured: false,
  },
  {
    date: "APR",
    day: "05",
    title: "Community Canvass Day",
    location: "Union City, CA",
    time: "9:00 AM - 12:00 PM",
    type: "Canvass",
    description:
      "Help spread the word! Join our volunteer team to knock doors and talk to voters.",
    featured: false,
  },
  {
    date: "APR",
    day: "12",
    title: "Fundraiser: Building Our Future",
    location: "Milpitas, CA",
    time: "5:00 PM - 7:30 PM",
    type: "Fundraiser",
    description:
      "An evening of community and conversation. Help fuel Carmen's campaign for State Senate.",
    featured: false,
  },
];

const newsUpdates = [
  {
    date: "February 2026",
    title: "Carmen Montano Announces State Senate Bid",
    excerpt:
      "Community leader Carmen Montano has officially filed to run for California State Senate District 10, pledging to fight for affordable housing, public safety, and quality education.",
    tag: "Campaign News",
  },
  {
    date: "February 2026",
    title: "Building a Grassroots Coalition in District 10",
    excerpt:
      "Carmen's campaign is building support across Fremont, Hayward, Union City, Milpitas, Newark, and San Jose — powered by everyday people who want change.",
    tag: "Movement",
  },
  {
    date: "February 2026",
    title: "Why This Race Matters for Working Families",
    excerpt:
      "With the Senate District 10 seat open, the stakes have never been higher. Carmen Montano is making the case that working families need a champion in Sacramento.",
    tag: "Issues",
  },
];

export default function Events() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="events"
      className="relative py-24 lg:py-32 bg-white overflow-hidden"
    >
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-navy-200 to-transparent" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-crimson-50 text-crimson-700 text-sm font-semibold tracking-wide uppercase mb-4">
            Stay Connected
          </span>
          <h2 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold text-navy-800 mb-6">
            Events &{" "}
            <span className="text-gold-500">Campaign Updates</span>
          </h2>
          <div className="w-24 h-1 bg-gold-500 mx-auto rounded-full mb-6" />
          <p className="text-lg text-navy-600 max-w-3xl mx-auto">
            Be part of the movement. Attend an event, stay updated on campaign 
            news, and help us build momentum across District 10.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-12">
          {/* Events Column */}
          <div className="lg:col-span-3">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 rounded-xl bg-navy-800 flex items-center justify-center">
                <Calendar className="w-5 h-5 text-gold-400" />
              </div>
              <h3 className="font-heading text-2xl font-bold text-navy-800">
                Upcoming Events
              </h3>
            </div>

            <div className="space-y-4">
              {upcomingEvents.map((event, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                  className={`group flex gap-5 p-5 rounded-2xl border transition-all duration-300 cursor-pointer ${
                    event.featured
                      ? "bg-gradient-to-r from-navy-800 to-navy-700 text-white border-navy-600 shadow-lg hover:shadow-xl"
                      : "bg-white border-navy-100 hover:border-gold-200 hover:shadow-lg"
                  }`}
                >
                  {/* Date Badge */}
                  <div
                    className={`flex-shrink-0 w-16 text-center rounded-xl p-2 ${
                      event.featured
                        ? "bg-gold-500"
                        : "bg-navy-50 group-hover:bg-gold-50"
                    }`}
                  >
                    <div
                      className={`text-xs font-bold uppercase tracking-wider ${
                        event.featured ? "text-gold-100" : "text-gold-600"
                      }`}
                    >
                      {event.date}
                    </div>
                    <div
                      className={`text-2xl font-heading font-bold ${
                        event.featured ? "text-white" : "text-navy-800"
                      }`}
                    >
                      {event.day}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between gap-3">
                      <div>
                        <span
                          className={`inline-block px-2 py-0.5 rounded-full text-xs font-semibold mb-2 ${
                            event.featured
                              ? "bg-gold-500/30 text-gold-200"
                              : "bg-gold-50 text-gold-700"
                          }`}
                        >
                          {event.type}
                        </span>
                        <h4
                          className={`font-bold text-lg mb-1 ${
                            event.featured ? "text-white" : "text-navy-800"
                          }`}
                        >
                          {event.title}
                        </h4>
                      </div>
                      <ChevronRight
                        className={`w-5 h-5 flex-shrink-0 mt-1 transition-transform group-hover:translate-x-1 ${
                          event.featured ? "text-gold-300" : "text-navy-300"
                        }`}
                      />
                    </div>
                    <p
                      className={`text-sm mb-3 ${
                        event.featured ? "text-navy-200" : "text-navy-600"
                      }`}
                    >
                      {event.description}
                    </p>
                    <div className="flex flex-wrap gap-4 text-xs">
                      <span
                        className={`inline-flex items-center gap-1 ${
                          event.featured ? "text-navy-300" : "text-navy-500"
                        }`}
                      >
                        <MapPin size={12} /> {event.location}
                      </span>
                      <span
                        className={`inline-flex items-center gap-1 ${
                          event.featured ? "text-navy-300" : "text-navy-500"
                        }`}
                      >
                        <Clock size={12} /> {event.time}
                      </span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* RSVP CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="mt-8 text-center"
            >
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-6 py-3 bg-navy-800 text-white rounded-full font-semibold hover:bg-navy-900 transition-colors"
              >
                <Megaphone size={18} />
                RSVP to an Event
              </a>
            </motion.div>
          </div>

          {/* News Column */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 rounded-xl bg-gold-500 flex items-center justify-center">
                <Newspaper className="w-5 h-5 text-white" />
              </div>
              <h3 className="font-heading text-2xl font-bold text-navy-800">
                Campaign News
              </h3>
            </div>

            <div className="space-y-6">
              {newsUpdates.map((news, i) => (
                <motion.article
                  key={i}
                  initial={{ opacity: 0, x: 20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                  className="group p-5 rounded-2xl border border-navy-100 bg-white hover:shadow-lg hover:border-gold-200 transition-all duration-300 cursor-pointer"
                >
                  <div className="flex items-center gap-2 mb-3">
                    <span className="px-2 py-0.5 rounded-full bg-navy-800 text-gold-400 text-xs font-semibold">
                      {news.tag}
                    </span>
                    <span className="text-xs text-navy-400">{news.date}</span>
                  </div>
                  <h4 className="font-bold text-navy-800 mb-2 group-hover:text-gold-600 transition-colors">
                    {news.title}
                  </h4>
                  <p className="text-sm text-navy-600 leading-relaxed">
                    {news.excerpt}
                  </p>
                  <div className="mt-3 flex items-center gap-1 text-sm font-semibold text-gold-600 group-hover:text-gold-700">
                    Read more{" "}
                    <ChevronRight
                      size={14}
                      className="transition-transform group-hover:translate-x-1"
                    />
                  </div>
                </motion.article>
              ))}
            </div>

            {/* Email Signup */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="mt-8 p-6 rounded-2xl bg-gradient-to-br from-navy-800 to-navy-900 text-white"
            >
              <h4 className="font-heading text-lg font-bold mb-2">
                Get Campaign Updates
              </h4>
              <p className="text-navy-200 text-sm mb-4">
                Stay in the loop with the latest news and events.
              </p>
              <form className="space-y-3" onSubmit={(e) => e.preventDefault()}>
                <input
                  type="email"
                  placeholder="Your email address"
                  className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-navy-300 text-sm focus:outline-none focus:ring-2 focus:ring-gold-500 focus:border-transparent"
                />
                <button
                  type="submit"
                  className="w-full px-4 py-3 bg-gold-500 text-white rounded-xl font-semibold text-sm hover:bg-gold-600 transition-colors"
                >
                  Subscribe
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
