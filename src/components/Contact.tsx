"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  Check,
  Facebook,
  Twitter,
  Instagram,
} from "lucide-react";

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
  };

  return (
    <section
      id="contact"
      className="relative py-24 lg:py-32 bg-white overflow-hidden"
    >
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-navy-200 to-transparent" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-gold-50 rounded-full blur-[100px]" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-navy-800 text-gold-400 text-sm font-semibold tracking-wide uppercase mb-4">
            Get in Touch
          </span>
          <h2 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold text-navy-800 mb-6">
            Contact the{" "}
            <span className="text-gold-500">Campaign</span>
          </h2>
          <div className="w-24 h-1 bg-gold-500 mx-auto rounded-full mb-6" />
          <p className="text-lg text-navy-600 max-w-3xl mx-auto">
            Have questions? Want to host an event? Need help? 
            We&apos;re here and ready to connect.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-2 space-y-6"
          >
            {/* Info Cards */}
            <div className="space-y-4">
              <div className="flex items-start gap-4 p-5 rounded-2xl bg-navy-50/50 border border-navy-100">
                <div className="w-11 h-11 rounded-xl bg-navy-800 flex items-center justify-center flex-shrink-0">
                  <Mail className="w-5 h-5 text-gold-400" />
                </div>
                <div>
                  <h4 className="font-bold text-navy-800 mb-1">Email</h4>
                  <a
                    href="mailto:info@carmenmontano.com"
                    className="text-gold-600 hover:text-gold-700 text-sm"
                  >
                    info@carmenmontano.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4 p-5 rounded-2xl bg-navy-50/50 border border-navy-100">
                <div className="w-11 h-11 rounded-xl bg-navy-800 flex items-center justify-center flex-shrink-0">
                  <Phone className="w-5 h-5 text-gold-400" />
                </div>
                <div>
                  <h4 className="font-bold text-navy-800 mb-1">Phone</h4>
                  <a
                    href="tel:+15105551234"
                    className="text-gold-600 hover:text-gold-700 text-sm"
                  >
                    (510) 555-1234
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4 p-5 rounded-2xl bg-navy-50/50 border border-navy-100">
                <div className="w-11 h-11 rounded-xl bg-navy-800 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-5 h-5 text-gold-400" />
                </div>
                <div>
                  <h4 className="font-bold text-navy-800 mb-1">
                    Campaign Office
                  </h4>
                  <p className="text-sm text-navy-600">
                    Senate District 10
                    <br />
                    East Bay & South Bay, California
                  </p>
                </div>
              </div>
            </div>

            {/* Social Media */}
            <div className="p-6 rounded-2xl bg-gradient-to-br from-navy-800 to-navy-900 text-white">
              <h4 className="font-heading text-lg font-bold mb-4">
                Follow Carmen
              </h4>
              <div className="flex gap-3">
                {[
                  { icon: Facebook, label: "Facebook", href: "#" },
                  { icon: Twitter, label: "Twitter/X", href: "#" },
                  { icon: Instagram, label: "Instagram", href: "#" },
                ].map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    aria-label={social.label}
                    className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center text-gold-400 hover:bg-gold-500 hover:text-white transition-all duration-300"
                  >
                    <social.icon size={20} />
                  </a>
                ))}
              </div>
              <p className="text-navy-300 text-xs mt-4">
                @CarmenMontanoSD10
              </p>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="lg:col-span-3"
          >
            <div className="bg-white rounded-3xl border border-navy-100 shadow-xl p-8">
              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-16"
                >
                  <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-green-100 flex items-center justify-center">
                    <Check className="w-10 h-10 text-green-600" />
                  </div>
                  <h3 className="font-heading text-2xl font-bold text-navy-800 mb-3">
                    Message Sent!
                  </h3>
                  <p className="text-navy-600 max-w-sm mx-auto">
                    Thank you for reaching out. Our team will get back to you 
                    as soon as possible.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-medium text-navy-700 mb-1.5">
                        First Name *
                      </label>
                      <input
                        type="text"
                        required
                        className="w-full px-4 py-3 rounded-xl border border-navy-200 text-navy-800 focus:ring-2 focus:ring-gold-500 focus:border-transparent transition-all"
                        placeholder="First name"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-navy-700 mb-1.5">
                        Last Name *
                      </label>
                      <input
                        type="text"
                        required
                        className="w-full px-4 py-3 rounded-xl border border-navy-200 text-navy-800 focus:ring-2 focus:ring-gold-500 focus:border-transparent transition-all"
                        placeholder="Last name"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-navy-700 mb-1.5">
                      Email *
                    </label>
                    <input
                      type="email"
                      required
                      className="w-full px-4 py-3 rounded-xl border border-navy-200 text-navy-800 focus:ring-2 focus:ring-gold-500 focus:border-transparent transition-all"
                      placeholder="your@email.com"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-navy-700 mb-1.5">
                      Subject
                    </label>
                    <select className="w-full px-4 py-3 rounded-xl border border-navy-200 text-navy-800 focus:ring-2 focus:ring-gold-500 focus:border-transparent transition-all bg-white">
                      <option>General Inquiry</option>
                      <option>Volunteer Opportunities</option>
                      <option>Event Hosting</option>
                      <option>Endorsement</option>
                      <option>Media Request</option>
                      <option>Other</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-navy-700 mb-1.5">
                      Message *
                    </label>
                    <textarea
                      required
                      rows={5}
                      className="w-full px-4 py-3 rounded-xl border border-navy-200 text-navy-800 focus:ring-2 focus:ring-gold-500 focus:border-transparent transition-all resize-none"
                      placeholder="How can we help?"
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full inline-flex items-center justify-center gap-2 px-6 py-4 bg-navy-800 text-white rounded-xl font-bold text-lg hover:bg-navy-900 transition-all shadow-lg hover:shadow-xl"
                  >
                    <Send size={18} />
                    Send Message
                  </button>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
