"use client";

import { Heart, Facebook, Twitter, Instagram, ArrowUp } from "lucide-react";

const footerLinks = {
  campaign: [
    { label: "About Carmen", href: "#about" },
    { label: "Issues & Platform", href: "#issues" },
    { label: "Endorsements", href: "#endorsements" },
    { label: "Events", href: "#events" },
  ],
  action: [
    { label: "Volunteer", href: "#volunteer" },
    { label: "Donate", href: "#donate" },
    { label: "Contact Us", href: "#contact" },
    { label: "Host an Event", href: "#contact" },
  ],
  legal: [
    { label: "Privacy Policy", href: "#" },
    { label: "Terms of Service", href: "#" },
    { label: "Accessibility", href: "#" },
    { label: "FEC Disclosures", href: "#" },
  ],
};

export default function Footer() {
  return (
    <footer className="relative bg-gradient-to-b from-navy-900 to-navy-950 text-white">
      {/* Gold divider */}
      <div className="h-1 bg-gradient-to-r from-gold-600 via-gold-400 to-gold-600" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer */}
        <div className="py-16 grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-full bg-white text-navy-800 flex items-center justify-center font-heading font-bold text-lg">
                CM
              </div>
              <div>
                <div className="font-heading font-bold text-xl">
                  Carmen Montano
                </div>
                <div className="text-xs tracking-widest uppercase text-gold-400">
                  For State Senate 2026
                </div>
              </div>
            </div>
            <p className="text-navy-300 text-sm leading-relaxed mb-6">
              A community leader running to represent the families of Senate 
              District 10. Together, we can build a better future for our 
              neighborhoods.
            </p>
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
                  className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center text-navy-300 hover:bg-gold-500 hover:text-white transition-all duration-300"
                >
                  <social.icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Campaign Links */}
          <div>
            <h4 className="font-heading font-bold text-white mb-5 text-sm tracking-widest uppercase">
              Campaign
            </h4>
            <ul className="space-y-3">
              {footerLinks.campaign.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-navy-300 hover:text-gold-400 text-sm transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Action Links */}
          <div>
            <h4 className="font-heading font-bold text-white mb-5 text-sm tracking-widest uppercase">
              Take Action
            </h4>
            <ul className="space-y-3">
              {footerLinks.action.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-navy-300 hover:text-gold-400 text-sm transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal / Quick Donate */}
          <div>
            <h4 className="font-heading font-bold text-white mb-5 text-sm tracking-widest uppercase">
              Quick Donate
            </h4>
            <div className="grid grid-cols-3 gap-2 mb-6">
              {[25, 50, 100, 250, 500, 1000].map((amount) => (
                <a
                  key={amount}
                  href="#donate"
                  className="text-center py-2 rounded-lg bg-white/10 text-sm font-semibold text-navy-200 hover:bg-gold-500 hover:text-white transition-all"
                >
                  ${amount}
                </a>
              ))}
            </div>
            <a
              href="#donate"
              className="block w-full text-center py-3 bg-gold-500 text-white rounded-lg font-bold hover:bg-gold-600 transition-colors"
            >
              Donate Now
            </a>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-6 border-t border-white/10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="text-center md:text-left">
              <p className="text-xs text-navy-400 leading-relaxed">
                Paid for by Carmen Montano for Senate 2026. FPPC ID #{" "}
                <span className="text-navy-300">[Pending]</span>
              </p>
              <p className="text-xs text-navy-500 mt-1">
                © {new Date().getFullYear()} Carmen Montano for Senate 2026. 
                All rights reserved.
              </p>
            </div>
            <div className="flex items-center gap-4">
              <div className="flex gap-3">
                {footerLinks.legal.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    className="text-xs text-navy-400 hover:text-gold-400 transition-colors"
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Disclaimer */}
        <div className="pb-8">
          <p className="text-[10px] text-navy-500 text-center leading-relaxed max-w-4xl mx-auto">
            Contributions to Carmen Montano for Senate 2026 are not deductible as 
            charitable contributions for federal income tax purposes. California law 
            requires political committees to report the name, mailing address, 
            occupation, and employer for each individual whose contributions aggregate 
            $100 or more in a calendar year. Corporate contributions are prohibited 
            under California law.
          </p>
        </div>
      </div>

      {/* Back to Top */}
      <a
        href="#"
        className="fixed bottom-6 right-6 w-12 h-12 bg-gold-500 text-white rounded-full flex items-center justify-center shadow-lg hover:bg-gold-600 hover:shadow-xl transition-all z-40 group"
        aria-label="Back to top"
      >
        <ArrowUp size={20} className="group-hover:-translate-y-0.5 transition-transform" />
      </a>

      {/* Made with love */}
      <div className="pb-4 text-center">
        <p className="text-[10px] text-navy-600 flex items-center justify-center gap-1">
          Built with <Heart size={10} className="text-crimson-500 fill-crimson-500" /> for the communities of District 10
        </p>
      </div>
    </footer>
  );
}
