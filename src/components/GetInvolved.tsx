"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import {
  Heart,
  Users,
  Phone,
  Megaphone,
  MapPin,
  Share2,
  DollarSign,
  Sparkles,
  Check,
  Star,
} from "lucide-react";

const volunteerOptions = [
  {
    icon: Phone,
    title: "Phone Banking",
    desc: "Call voters and spread the word from the comfort of your home.",
  },
  {
    icon: MapPin,
    title: "Door Knocking",
    desc: "Hit the streets and talk to voters face-to-face in your neighborhood.",
  },
  {
    icon: Megaphone,
    title: "Event Support",
    desc: "Help organize rallies, town halls, and community events.",
  },
  {
    icon: Share2,
    title: "Digital Outreach",
    desc: "Amplify Carmen's message on social media and online platforms.",
  },
];

const donationTiers = [
  { amount: 25, label: "Supporter", desc: "Help us print flyers and yard signs" },
  { amount: 50, label: "Champion", desc: "Fund a phone banking shift" },
  { amount: 100, label: "Builder", desc: "Sponsor a community canvass event" },
  { amount: 250, label: "Leader", desc: "Help fund a town hall meeting" },
  { amount: 500, label: "Trailblazer", desc: "Support our digital outreach" },
  { amount: 1000, label: "Visionary", desc: "Make a transformative investment" },
];

export default function GetInvolved() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [selectedAmount, setSelectedAmount] = useState(100);
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleVolunteerSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
    setTimeout(() => setFormSubmitted(false), 3000);
  };

  return (
    <>
      {/* Volunteer Section */}
      <section
        id="volunteer"
        className="relative py-24 lg:py-32 bg-gradient-to-b from-white to-navy-50/30 overflow-hidden"
      >
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gold-300 to-transparent" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-navy-800 text-gold-400 text-sm font-semibold tracking-wide uppercase mb-4">
              Get Involved
            </span>
            <h2 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold text-navy-800 mb-6">
              Join the{" "}
              <span className="text-gold-500">Movement</span>
            </h2>
            <div className="w-24 h-1 bg-gold-500 mx-auto rounded-full mb-6" />
            <p className="text-lg text-navy-600 max-w-3xl mx-auto">
              This campaign is powered by people, not special interests. 
              Whether you have an hour or a whole weekend, your time can 
              make the difference.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Volunteer Options */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="grid sm:grid-cols-2 gap-4 mb-8">
                {volunteerOptions.map((opt, i) => (
                  <div
                    key={i}
                    className="group p-5 rounded-2xl bg-white border border-navy-100 hover:border-gold-300 hover:shadow-lg transition-all duration-300"
                  >
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-navy-800 to-navy-700 flex items-center justify-center text-gold-400 mb-4 group-hover:from-gold-500 group-hover:to-gold-600 group-hover:text-white transition-all duration-300">
                      <opt.icon size={22} />
                    </div>
                    <h4 className="font-bold text-navy-800 mb-1">{opt.title}</h4>
                    <p className="text-sm text-navy-600">{opt.desc}</p>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Volunteer Signup Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <div className="bg-white rounded-3xl border border-navy-100 shadow-xl p-8 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-gold-100/50 rounded-full blur-[40px]" />
                <div className="relative z-10">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 rounded-xl bg-gold-500 flex items-center justify-center">
                      <Users className="w-5 h-5 text-white" />
                    </div>
                    <h3 className="font-heading text-2xl font-bold text-navy-800">
                      Sign Up to Volunteer
                    </h3>
                  </div>

                  {formSubmitted ? (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="text-center py-12"
                    >
                      <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-green-100 flex items-center justify-center">
                        <Check className="w-8 h-8 text-green-600" />
                      </div>
                      <h4 className="font-heading text-xl font-bold text-navy-800 mb-2">
                        Thank You!
                      </h4>
                      <p className="text-navy-600">
                        We&apos;ll be in touch soon with volunteer opportunities.
                      </p>
                    </motion.div>
                  ) : (
                    <form onSubmit={handleVolunteerSubmit} className="space-y-4">
                      <div className="grid sm:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium text-navy-700 mb-1">
                            First Name
                          </label>
                          <input
                            type="text"
                            required
                            className="w-full px-4 py-3 rounded-xl border border-navy-200 text-navy-800 focus:ring-2 focus:ring-gold-500 focus:border-transparent transition-all text-sm"
                            placeholder="First name"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-navy-700 mb-1">
                            Last Name
                          </label>
                          <input
                            type="text"
                            required
                            className="w-full px-4 py-3 rounded-xl border border-navy-200 text-navy-800 focus:ring-2 focus:ring-gold-500 focus:border-transparent transition-all text-sm"
                            placeholder="Last name"
                          />
                        </div>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-navy-700 mb-1">
                          Email
                        </label>
                        <input
                          type="email"
                          required
                          className="w-full px-4 py-3 rounded-xl border border-navy-200 text-navy-800 focus:ring-2 focus:ring-gold-500 focus:border-transparent transition-all text-sm"
                          placeholder="your@email.com"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-navy-700 mb-1">
                          Phone (for text updates)
                        </label>
                        <input
                          type="tel"
                          className="w-full px-4 py-3 rounded-xl border border-navy-200 text-navy-800 focus:ring-2 focus:ring-gold-500 focus:border-transparent transition-all text-sm"
                          placeholder="(555) 555-5555"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-navy-700 mb-1">
                          Zip Code
                        </label>
                        <input
                          type="text"
                          className="w-full px-4 py-3 rounded-xl border border-navy-200 text-navy-800 focus:ring-2 focus:ring-gold-500 focus:border-transparent transition-all text-sm"
                          placeholder="94536"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-navy-700 mb-2">
                          I&apos;m interested in:
                        </label>
                        <div className="flex flex-wrap gap-2">
                          {["Phone Banking", "Door Knocking", "Events", "Digital", "Anything!"].map(
                            (opt) => (
                              <label
                                key={opt}
                                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-navy-200 text-sm text-navy-700 hover:border-gold-400 hover:bg-gold-50 transition-all cursor-pointer"
                              >
                                <input type="checkbox" className="rounded text-gold-500 focus:ring-gold-500" />
                                {opt}
                              </label>
                            )
                          )}
                        </div>
                      </div>
                      <button
                        type="submit"
                        className="w-full px-6 py-4 bg-navy-800 text-white rounded-xl font-bold text-lg hover:bg-navy-900 transition-colors shadow-lg hover:shadow-xl"
                      >
                        Sign Me Up!
                      </button>
                      <p className="text-xs text-navy-400 text-center">
                        By signing up, you agree to receive campaign updates via email and text.
                      </p>
                    </form>
                  )}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Donate Section */}
      <section
        id="donate"
        className="relative py-24 lg:py-32 overflow-hidden"
      >
        {/* Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-navy-900 via-navy-800 to-navy-900" />
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='1' fill-rule='evenodd'%3E%3Cpath d='M0 20L20 0L40 20L20 40z'/%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
        <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-gold-500/5 rounded-full blur-[120px]" />

        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <motion.div
              animate={{ rotate: [0, 10, -10, 0] }}
              transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
              className="inline-block mb-4"
            >
              <Sparkles className="w-8 h-8 text-gold-400" />
            </motion.div>
            <h2 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
              Fuel the{" "}
              <span className="text-gold-400">Fight</span>
            </h2>
            <div className="w-24 h-1 bg-gold-500 mx-auto rounded-full mb-6" />
            <p className="text-lg text-navy-200 max-w-2xl mx-auto">
              Every dollar makes a difference. Your contribution helps Carmen 
              reach more voters, organize more events, and fight for the 
              families of District 10.
            </p>
          </motion.div>

          {/* Donation Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white rounded-3xl shadow-2xl overflow-hidden"
          >
            <div className="p-8 lg:p-12">
              {/* Amount Selection */}
              <div className="mb-8">
                <h3 className="font-heading text-2xl font-bold text-navy-800 mb-6 text-center">
                  Choose Your Contribution
                </h3>
                <div className="grid grid-cols-3 sm:grid-cols-6 gap-3">
                  {donationTiers.map((tier) => (
                    <button
                      key={tier.amount}
                      onClick={() => setSelectedAmount(tier.amount)}
                      className={`relative p-4 rounded-xl border-2 transition-all duration-300 text-center ${
                        selectedAmount === tier.amount
                          ? "border-gold-500 bg-gold-50 shadow-lg scale-105"
                          : "border-navy-100 hover:border-gold-300 hover:bg-gold-50/50"
                      }`}
                    >
                      {selectedAmount === tier.amount && (
                        <motion.div
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          className="absolute -top-2 -right-2 w-5 h-5 bg-gold-500 rounded-full flex items-center justify-center"
                        >
                          <Check size={12} className="text-white" />
                        </motion.div>
                      )}
                      <div className="font-heading text-xl font-bold text-navy-800">
                        ${tier.amount}
                      </div>
                      <div className="text-xs text-gold-600 font-medium mt-1">
                        {tier.label}
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Selected tier info */}
              <div className="text-center mb-8 p-4 rounded-xl bg-navy-50">
                <p className="text-navy-600">
                  <span className="font-bold text-navy-800">
                    ${selectedAmount}
                  </span>{" "}
                  &mdash;{" "}
                  {donationTiers.find((t) => t.amount === selectedAmount)?.desc}
                </p>
              </div>

              {/* Custom Amount */}
              <div className="flex items-center gap-4 mb-8">
                <div className="flex-1 h-px bg-navy-200" />
                <span className="text-sm text-navy-500 font-medium">
                  or enter a custom amount
                </span>
                <div className="flex-1 h-px bg-navy-200" />
              </div>

              <div className="max-w-xs mx-auto mb-8">
                <div className="relative">
                  <DollarSign className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-navy-400" />
                  <input
                    type="number"
                    placeholder="Custom amount"
                    className="w-full pl-10 pr-4 py-4 rounded-xl border-2 border-navy-200 text-center text-xl font-bold text-navy-800 focus:ring-2 focus:ring-gold-500 focus:border-gold-500 transition-all"
                    onChange={(e) => {
                      const val = parseInt(e.target.value);
                      if (val > 0) setSelectedAmount(val);
                    }}
                  />
                </div>
              </div>

              {/* Donate Button */}
              <div className="text-center">
                <button className="group relative inline-flex items-center justify-center gap-3 px-12 py-5 bg-gradient-to-r from-gold-500 to-gold-600 text-white rounded-full font-bold text-xl overflow-hidden transition-all duration-300 hover:shadow-2xl hover:shadow-gold-500/30 hover:scale-105 animate-pulse-glow">
                  <div className="absolute inset-0 bg-gradient-to-r from-gold-600 to-gold-700 opacity-0 group-hover:opacity-100 transition-opacity" />
                  <span className="relative z-10 flex items-center gap-3">
                    <Heart className="w-5 h-5" />
                    Contribute ${selectedAmount}
                  </span>
                </button>
              </div>

              {/* Trust Indicators */}
              <div className="mt-8 flex flex-wrap justify-center gap-6 text-xs text-navy-400">
                <span className="flex items-center gap-1">
                  <Star className="w-3 h-3 text-gold-500" /> Secure & Encrypted
                </span>
                <span className="flex items-center gap-1">
                  <Star className="w-3 h-3 text-gold-500" /> FEC Compliant
                </span>
                <span className="flex items-center gap-1">
                  <Star className="w-3 h-3 text-gold-500" /> Tax Records Provided
                </span>
              </div>
            </div>

            {/* Footer */}
            <div className="bg-navy-50 px-8 py-5">
              <p className="text-xs text-navy-500 text-center leading-relaxed">
                Contributions are not tax-deductible for federal income tax purposes. 
                Paid for by Carmen Montano for Senate 2026. California law requires 
                political committees to report the name, mailing address, occupation, 
                and employer for each individual whose contributions aggregate $100 or 
                more in a calendar year.
              </p>
            </div>
          </motion.div>

          {/* Recurring */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mt-12 text-center"
          >
            <p className="text-navy-300 mb-3 text-sm">
              Want to make an even bigger impact?
            </p>
            <a
              href="#donate"
              className="inline-flex items-center gap-2 px-6 py-3 border-2 border-gold-500/50 text-gold-400 rounded-full font-semibold hover:bg-gold-500/10 transition-all"
            >
              <Heart size={16} />
              Set Up Monthly Giving
            </a>
          </motion.div>
        </div>
      </section>
    </>
  );
}
