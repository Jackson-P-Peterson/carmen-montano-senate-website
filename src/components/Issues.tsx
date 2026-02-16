"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import {
  Home,
  Shield,
  GraduationCap,
  DollarSign,
  TreePine,
  Stethoscope,
  Users,
  Briefcase,
  ChevronRight,
} from "lucide-react";

const issues = [
  {
    id: "housing",
    icon: Home,
    title: "Affordable Housing",
    tagline: "A Home for Every Family",
    color: "from-blue-500 to-blue-700",
    summary:
      "Carmen will fight to increase affordable housing production, strengthen tenant protections, and make homeownership achievable for working families in District 10.",
    points: [
      "Accelerate affordable housing development across Fremont, Hayward, Union City, and Milpitas",
      "Strengthen renter protections against displacement and unfair rent hikes",
      "Create first-time homebuyer assistance programs for middle-class families",
      "Hold developers accountable to community benefit agreements",
      "Address the root causes of homelessness with housing-first solutions",
    ],
  },
  {
    id: "safety",
    icon: Shield,
    title: "Public Safety",
    tagline: "Safer Neighborhoods for All",
    color: "from-red-500 to-red-700",
    summary:
      "Every family deserves to feel safe. Carmen supports smart-on-crime policies that keep our communities protected while investing in prevention and mental health resources.",
    points: [
      "Fund community policing and neighborhood safety programs",
      "Invest in mental health crisis response teams",
      "Support gun violence prevention and intervention programs",
      "Address retail theft and property crime with targeted enforcement",
      "Expand youth mentorship and after-school programs to prevent crime",
    ],
  },
  {
    id: "education",
    icon: GraduationCap,
    title: "Quality Education",
    tagline: "World-Class Schools for Every Child",
    color: "from-purple-500 to-purple-700",
    summary:
      "As a longtime education advocate, Carmen will fight to fully fund our public schools, expand access to higher education, and ensure every student has the tools to succeed.",
    points: [
      "Increase per-pupil funding for K-12 public schools",
      "Expand access to community college and vocational training",
      "Recruit and retain quality teachers with competitive salaries",
      "Invest in STEM education and career technical programs",
      "Support multilingual and culturally responsive education",
    ],
  },
  {
    id: "economy",
    icon: DollarSign,
    title: "Economic Opportunity",
    tagline: "An Economy That Works for Everyone",
    color: "from-green-500 to-green-700",
    summary:
      "Carmen will fight for an economy where hard work pays off — with good jobs, fair wages, support for small businesses, and real relief from the soaring cost of living.",
    points: [
      "Support small businesses with tax relief and access to capital",
      "Fight for living wages and strong worker protections",
      "Attract and retain quality jobs in technology, healthcare, and green energy",
      "Lower the cost of living through targeted tax relief for working families",
      "Invest in workforce development and job training programs",
    ],
  },
  {
    id: "environment",
    icon: TreePine,
    title: "Climate & Environment",
    tagline: "A Sustainable Future for Our Children",
    color: "from-emerald-500 to-emerald-700",
    summary:
      "District 10 deserves clean air, clean water, and a state government that takes climate change seriously — while creating green jobs and protecting vulnerable communities.",
    points: [
      "Accelerate California's transition to 100% clean energy",
      "Invest in green infrastructure and sustainable transportation",
      "Protect air quality and address environmental justice in frontline communities",
      "Support water conservation and drought resilience",
      "Create green jobs and support clean energy workforce training",
    ],
  },
  {
    id: "healthcare",
    icon: Stethoscope,
    title: "Healthcare Access",
    tagline: "Health Is a Right, Not a Privilege",
    color: "from-teal-500 to-teal-700",
    summary:
      "Carmen believes every Californian deserves access to quality, affordable healthcare — including mental health services, reproductive care, and prescription drug affordability.",
    points: [
      "Expand access to affordable healthcare for all Californians",
      "Increase mental health services and substance abuse treatment",
      "Protect reproductive rights and healthcare access",
      "Lower prescription drug costs through state negotiation",
      "Invest in community health centers across District 10",
    ],
  },
  {
    id: "community",
    icon: Users,
    title: "Immigrant Rights",
    tagline: "Protecting Our Diverse Communities",
    color: "from-amber-500 to-amber-700",
    summary:
      "As a leader in one of California's most diverse districts, Carmen will defend immigrant communities and ensure everyone — regardless of background — can thrive.",
    points: [
      "Defend California's sanctuary state protections",
      "Expand legal aid and immigration services",
      "Protect DACA recipients and mixed-status families",
      "Combat discrimination and hate crimes with stronger enforcement",
      "Ensure language access to government services for all communities",
    ],
  },
  {
    id: "jobs",
    icon: Briefcase,
    title: "Labor & Workers",
    tagline: "Standing Up for Working People",
    color: "from-orange-500 to-orange-700",
    summary:
      "Carmen has always stood with workers. She'll bring that fight to Sacramento — protecting labor rights, expanding benefits, and ensuring dignity in every workplace.",
    points: [
      "Protect and expand collective bargaining rights",
      "Fight wage theft and workplace safety violations",
      "Ensure paid family leave and sick days for all workers",
      "Support domestic workers and gig economy protections",
      "Invest in apprenticeship and trade union programs",
    ],
  },
];

export default function Issues() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [activeIssue, setActiveIssue] = useState(issues[0].id);

  const currentIssue = issues.find((i) => i.id === activeIssue) || issues[0];

  return (
    <section
      id="issues"
      className="relative py-24 lg:py-32 bg-gradient-to-b from-navy-50/30 to-white overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute top-20 right-0 w-[500px] h-[500px] bg-gold-100/40 rounded-full blur-[120px]" />
      <div className="absolute bottom-20 left-0 w-[400px] h-[400px] bg-navy-100/30 rounded-full blur-[100px]" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-navy-800 text-gold-400 text-sm font-semibold tracking-wide uppercase mb-4">
            The Platform
          </span>
          <h2 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold text-navy-800 mb-6">
            The Issues That{" "}
            <span className="text-gold-500">Matter Most</span>
          </h2>
          <div className="w-24 h-1 bg-gold-500 mx-auto rounded-full mb-6" />
          <p className="text-lg text-navy-600 max-w-3xl mx-auto">
            Carmen Montano has a bold, detailed plan to tackle the biggest 
            challenges facing families in Senate District 10. Here&apos;s where she stands.
          </p>
        </motion.div>

        {/* Issues Grid - Mobile Cards */}
        <div className="lg:hidden space-y-6">
          {issues.map((issue, i) => (
            <motion.div
              key={issue.id}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="bg-white rounded-2xl border border-navy-100 shadow-sm overflow-hidden"
            >
              <button
                onClick={() =>
                  setActiveIssue(
                    activeIssue === issue.id ? "" : issue.id
                  )
                }
                className="w-full flex items-center gap-4 p-6 text-left hover:bg-navy-50/50 transition-colors"
              >
                <div
                  className={`w-12 h-12 rounded-xl bg-gradient-to-br ${issue.color} flex items-center justify-center text-white flex-shrink-0`}
                >
                  <issue.icon size={22} />
                </div>
                <div className="flex-1">
                  <h3 className="font-bold text-navy-800 text-lg">
                    {issue.title}
                  </h3>
                  <p className="text-sm text-navy-500">{issue.tagline}</p>
                </div>
                <ChevronRight
                  className={`w-5 h-5 text-navy-400 transition-transform ${
                    activeIssue === issue.id ? "rotate-90" : ""
                  }`}
                />
              </button>
              {activeIssue === issue.id && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  className="px-6 pb-6"
                >
                  <p className="text-navy-600 mb-4">{issue.summary}</p>
                  <ul className="space-y-2">
                    {issue.points.map((point, j) => (
                      <li
                        key={j}
                        className="flex items-start gap-2 text-sm text-navy-700"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-gold-500 mt-2 flex-shrink-0" />
                        {point}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>

        {/* Issues - Desktop Interactive */}
        <div className="hidden lg:grid lg:grid-cols-12 gap-8">
          {/* Issue Tabs */}
          <div className="col-span-4 space-y-2">
            {issues.map((issue, i) => (
              <motion.button
                key={issue.id}
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                onClick={() => setActiveIssue(issue.id)}
                className={`w-full flex items-center gap-4 p-4 rounded-xl text-left transition-all duration-300 ${
                  activeIssue === issue.id
                    ? "bg-navy-800 text-white shadow-lg shadow-navy-800/20 scale-[1.02]"
                    : "bg-white text-navy-800 border border-navy-100 hover:border-gold-200 hover:shadow-md"
                }`}
              >
                <div
                  className={`w-11 h-11 rounded-lg flex items-center justify-center flex-shrink-0 transition-all ${
                    activeIssue === issue.id
                      ? "bg-gold-500 text-white"
                      : `bg-gradient-to-br ${issue.color} text-white`
                  }`}
                >
                  <issue.icon size={20} />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="font-bold text-base truncate">
                    {issue.title}
                  </h3>
                  <p
                    className={`text-xs truncate ${
                      activeIssue === issue.id
                        ? "text-navy-200"
                        : "text-navy-500"
                    }`}
                  >
                    {issue.tagline}
                  </p>
                </div>
                <ChevronRight
                  className={`w-4 h-4 flex-shrink-0 transition-all ${
                    activeIssue === issue.id
                      ? "text-gold-400 translate-x-1"
                      : "text-navy-300"
                  }`}
                />
              </motion.button>
            ))}
          </div>

          {/* Issue Detail */}
          <motion.div
            key={currentIssue.id}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4 }}
            className="col-span-8"
          >
            <div className="bg-white rounded-3xl border border-navy-100 shadow-xl overflow-hidden h-full">
              {/* Header */}
              <div
                className={`bg-gradient-to-r ${currentIssue.color} p-8 text-white`}
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-14 h-14 rounded-2xl bg-white/20 backdrop-blur-sm flex items-center justify-center">
                    <currentIssue.icon size={28} />
                  </div>
                  <div>
                    <h3 className="font-heading text-3xl font-bold">
                      {currentIssue.title}
                    </h3>
                    <p className="text-white/80 text-sm">
                      {currentIssue.tagline}
                    </p>
                  </div>
                </div>
                <p className="text-white/90 text-lg leading-relaxed">
                  {currentIssue.summary}
                </p>
              </div>

              {/* Points */}
              <div className="p-8">
                <h4 className="font-heading text-xl font-bold text-navy-800 mb-6">
                  Carmen&apos;s Plan:
                </h4>
                <ul className="space-y-4">
                  {currentIssue.points.map((point, j) => (
                    <motion.li
                      key={j}
                      initial={{ opacity: 0, x: 10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: j * 0.08 }}
                      className="flex items-start gap-4"
                    >
                      <div className="flex-shrink-0 w-7 h-7 rounded-full bg-gold-100 flex items-center justify-center mt-0.5">
                        <span className="text-gold-700 text-xs font-bold">
                          {j + 1}
                        </span>
                      </div>
                      <p className="text-navy-700 leading-relaxed">{point}</p>
                    </motion.li>
                  ))}
                </ul>

                {/* CTA */}
                <div className="mt-8 pt-6 border-t border-navy-100 flex flex-wrap gap-4">
                  <a
                    href="#volunteer"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-navy-800 text-white rounded-full font-semibold hover:bg-navy-900 transition-colors"
                  >
                    Join This Fight
                    <ChevronRight size={16} />
                  </a>
                  <a
                    href="#donate"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-gold-500 text-white rounded-full font-semibold hover:bg-gold-600 transition-colors"
                  >
                    Fund This Effort
                    <ChevronRight size={16} />
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
