"use client";

import Image from "next/image";
import { useState } from "react";
import {
  Menu,
  X,
  Shield,
  Home,
  GraduationCap,
  Car,
  Wallet,
  ChevronRight,
  CheckCircle2,
  MapPin,
  ArrowUpRight,
  Star,
  Sparkles,
} from "lucide-react";

const navLinks = [
  { label: "District", href: "#district" },
  { label: "Priorities", href: "#priorities" },
  { label: "About", href: "#about" },
  { label: "Get Involved", href: "#action" },
];

const districtPhotos = [
  {
    city: "San Jose",
    image: "images/district-sanjose.jpg",
    caption: "Innovation and opportunity",
  },
  {
    city: "Fremont",
    image: "images/district-fremont.jpg",
    caption: "Families and neighborhoods",
  },
  {
    city: "Hayward",
    image: "images/district-hayward.jpg",
    caption: "Working-class strength",
  },
  {
    city: "Union City",
    image: "images/district-unioncity.jpg",
    caption: "Community-first values",
  },
  {
    city: "Milpitas",
    image: "images/district-milpitas.jpg",
    caption: "Local leadership that delivers",
  },
];

const priorities = [
  {
    icon: Shield,
    title: "Public Safety",
    body: "Fully implement voter-backed reforms with real funding, prevention, and accountability.",
  },
  {
    icon: Home,
    title: "Affordable Housing",
    body: "Scale practical housing solutions and keep working families in the communities they built.",
  },
  {
    icon: GraduationCap,
    title: "Education",
    body: "Strengthen literacy and math outcomes and support teachers and students.",
  },
  {
    icon: Wallet,
    title: "Cost of Living",
    body: "Fight for household affordability, fair insurance relief, and middle-class stability.",
  },
  {
    icon: Car,
    title: "Mobility",
    body: "Expand practical congestion and transit solutions for daily commuters.",
  },
];

const stats = [
  { value: "1M+", label: "District 10 residents" },
  { value: "20+", label: "Years in public service" },
  { value: "5", label: "Core SD-10 city hubs" },
  { value: "2026", label: "Critical open-seat election" },
];

const donationLevels = [25, 50, 100, 250, 500, 1000];

export default function CampaignHomepage() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [selectedAmount, setSelectedAmount] = useState(100);

  return (
    <div className="min-h-screen bg-[#f5f7fc] text-slate-900">
      <header className="sticky top-0 z-50 border-b border-slate-200/70 bg-white/85 backdrop-blur-2xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
          <a href="#top" className="flex items-center gap-4">
            <div className="h-12 w-1.5 rounded-full bg-gradient-to-b from-sky-700 via-blue-800 to-amber-500 shadow-sm" />
            <div>
              <p className="font-serif text-2xl font-bold leading-none text-slate-900 sm:text-3xl">
                Carmen Montano
              </p>
              <p className="mt-1.5 text-[11px] font-semibold uppercase tracking-[0.18em] text-amber-600 sm:text-xs">
                State Senate District 10
              </p>
            </div>
          </a>

          <nav className="hidden items-center gap-7 lg:flex">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-semibold text-slate-700 transition hover:text-slate-950"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="hidden items-center gap-3 lg:flex">
            <a
              href="#action"
              className="rounded-full border border-slate-300 px-5 py-2.5 text-sm font-semibold text-slate-800 transition hover:border-slate-900 hover:text-slate-900"
            >
              Volunteer
            </a>
            <a
              href="#donate"
              className="rounded-full bg-gradient-to-r from-sky-700 to-blue-900 px-5 py-2.5 text-sm font-bold text-white shadow-md transition hover:opacity-95"
            >
              Donate
            </a>
          </div>

          <button
            onClick={() => setMobileOpen((value) => !value)}
            className="rounded-lg p-2 text-slate-700 lg:hidden"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {mobileOpen ? (
          <div className="border-t border-slate-200 bg-white px-4 py-4 lg:hidden">
            <div className="space-y-3">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="block rounded-lg px-3 py-2 text-sm font-semibold text-slate-800 hover:bg-slate-100"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        ) : null}
        <div className="h-1 w-full bg-gradient-to-r from-sky-700 via-blue-900 to-amber-500" />
      </header>

      <main id="top">
        <section className="relative isolate overflow-hidden bg-slate-950">
          <Image
            src="images/district-sanjose.jpg"
            alt="District 10"
            fill
            className="object-cover opacity-40"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950/90 via-slate-900/75 to-blue-950/65" />
          <div className="absolute -left-28 -top-28 h-80 w-80 rounded-full bg-sky-500/20 blur-3xl" />
          <div className="absolute -bottom-24 right-0 h-72 w-72 rounded-full bg-amber-400/20 blur-3xl" />

          <div className="relative mx-auto grid max-w-7xl gap-12 px-4 pb-16 pt-20 sm:px-6 lg:grid-cols-2 lg:items-center lg:px-8 lg:pb-20 lg:pt-24">
            <div>
              <p className="inline-flex items-center gap-2 rounded-full border border-amber-300/30 bg-amber-300/10 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.16em] text-amber-200">
                <Sparkles size={13} /> Official Campaign Website
              </p>
              <h1 className="mt-6 font-serif text-5xl font-bold leading-[1.04] text-white sm:text-6xl lg:text-7xl">
                Carmen Montano
                <span className="block text-sky-200">for State Senate</span>
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-relaxed text-slate-200">
                Practical leadership for District 10: safer neighborhoods, affordable housing,
                strong public schools, and economic stability for working families.
              </p>

              <div className="mt-9 flex flex-wrap gap-4">
                <a
                  href="#donate"
                  className="inline-flex items-center rounded-full bg-amber-500 px-7 py-3.5 text-base font-bold text-white shadow-xl transition hover:bg-amber-600"
                >
                  Donate
                </a>
                <a
                  href="#action"
                  className="inline-flex items-center rounded-full border border-white/30 px-7 py-3.5 text-base font-semibold text-white transition hover:bg-white/10"
                >
                  Join Team Carmen
                </a>
              </div>

              <div className="mt-8 flex flex-wrap items-center gap-5 text-sm text-slate-200">
                <span className="inline-flex items-center gap-2">
                  <CheckCircle2 size={16} className="text-emerald-400" /> Mayor of Milpitas
                </span>
                <span className="inline-flex items-center gap-2">
                  <CheckCircle2 size={16} className="text-emerald-400" /> First woman elected Mayor of Milpitas
                </span>
              </div>
            </div>

            <div className="relative">
              <div className="absolute -inset-4 rounded-[2.2rem] bg-sky-400/20 blur-2xl" />
              <div className="relative overflow-hidden rounded-[2rem] border border-white/25 bg-white/10 p-3 shadow-2xl backdrop-blur">
                <Image
                  src="images/carmen-portrait.jpeg"
                  alt="Carmen Montano"
                  width={831}
                  height={1244}
                  className="h-[560px] w-full rounded-[1.5rem] object-cover object-top"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto -mt-10 max-w-7xl px-4 sm:px-6 lg:px-8">
          <article className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-2xl">
            <div className="grid gap-0 md:grid-cols-5">
              <div className="relative h-52 md:col-span-2 md:h-full">
                <Image
                  src="images/district-fremont.jpg"
                  alt="Fremont"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-7 md:col-span-3 md:p-10">
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">District 10</p>
                <h2 className="mt-2 font-serif text-3xl font-bold text-slate-900 md:text-4xl">
                  One district. Many communities. One focused mission.
                </h2>
                <p className="mt-4 text-slate-600">
                  District 10 spans the East Bay and South Bay. This campaign is built to represent every neighborhood with accountability, competence, and results.
                </p>
                <a
                  href="#district"
                  className="mt-5 inline-flex items-center text-sm font-semibold text-slate-900 transition hover:text-slate-600"
                >
                  View district visuals
                  <ArrowUpRight size={15} className="ml-1" />
                </a>
              </div>
            </div>
          </article>
        </section>

        <section id="district" className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-sky-700">District 10 Visual Story</p>
              <h2 className="mt-2 font-serif text-4xl font-bold text-slate-900 sm:text-5xl">
                Communities Across SD-10
              </h2>
            </div>
            <p className="max-w-xl text-sm leading-relaxed text-slate-600">
              A modern campaign should look like the district it serves: diverse, energetic, and forward-looking.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-12 md:grid-rows-2">
            {districtPhotos.map((item, idx) => {
              const spanClass =
                idx === 0
                  ? "md:col-span-7 md:row-span-2"
                  : idx === 1 || idx === 2
                  ? "md:col-span-5"
                  : "md:col-span-6";

              return (
                <article
                  key={item.city}
                  className={`group relative overflow-hidden rounded-3xl border border-slate-200 bg-slate-900 shadow-md ${spanClass}`}
                >
                  <Image
                    src={item.image}
                    alt={item.city}
                    width={1600}
                    height={1000}
                    className="h-64 w-full object-cover transition duration-700 group-hover:scale-105 md:h-full"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-900/35 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-5">
                    <p className="inline-flex items-center gap-1 text-xs font-semibold uppercase tracking-[0.12em] text-amber-200">
                      <MapPin size={12} /> {item.city}
                    </p>
                    <p className="mt-1 text-sm text-slate-100">{item.caption}</p>
                  </div>
                </article>
              );
            })}
          </div>
        </section>

        <section id="vision" className="border-y border-slate-200 bg-white/90">
          <div className="mx-auto grid max-w-7xl gap-5 px-4 py-10 sm:px-6 md:grid-cols-2 lg:grid-cols-4 lg:px-8">
            {stats.map((stat) => (
              <article key={stat.label} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                <p className="font-serif text-4xl font-bold text-slate-900">{stat.value}</p>
                <p className="mt-2 text-sm font-medium text-slate-700">{stat.label}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="priorities" className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-sky-700">Core Priorities</p>
            <h2 className="mt-3 font-serif text-4xl font-bold text-slate-900 sm:text-5xl">
              Priorities for District 10
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-slate-600">
              Focused, measurable outcomes for families, students, seniors, and small businesses.
            </p>
          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {priorities.map((item) => (
              <article
                key={item.title}
                className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-sky-700/10 text-sky-700">
                  <item.icon size={22} />
                </div>
                <h3 className="text-xl font-bold text-slate-900">{item.title}</h3>
                <p className="mt-3 leading-relaxed text-slate-600">{item.body}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="about" className="relative overflow-hidden bg-slate-950 py-20 text-white">
          <Image
            src="images/district-unioncity.jpg"
            alt="Community in District 10"
            fill
            className="object-cover opacity-25"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950/90 via-slate-900/80 to-slate-900/75" />
          <div className="relative mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:items-center lg:px-8">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-amber-300">About Carmen</p>
              <h2 className="mt-3 font-serif text-4xl font-bold sm:text-5xl">Service Above Self</h2>
              <p className="mt-5 text-lg leading-relaxed text-slate-200">
                Carmen Montano is a third-generation Californian with deep Bay Area roots. She has served as School Board Trustee, City Councilmember, and Mayor of Milpitas.
              </p>
              <p className="mt-4 leading-relaxed text-slate-300">
                Her record reflects practical delivery: public safety investments, neighborhood improvements, fiscal discipline, and transit innovation.
              </p>
              <div className="mt-7 flex flex-wrap gap-3">
                {["Mayor of Milpitas", "Educator", "Neighborhood Advocate", "Proven Executive Leadership"].map(
                  (badge) => (
                    <span
                      key={badge}
                      className="rounded-full border border-white/30 bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.08em] text-white"
                    >
                      {badge}
                    </span>
                  )
                )}
              </div>
            </div>

            <div className="relative mx-auto max-w-md overflow-hidden rounded-3xl border border-white/20 bg-white/10 p-3 shadow-xl backdrop-blur">
              <Image
                src="images/carmen-portrait.jpeg"
                alt="Mayor Carmen Montano"
                width={831}
                height={1244}
                className="h-[520px] w-full rounded-[1.25rem] object-cover object-top"
              />
            </div>
          </div>
        </section>

        <section id="action" className="mx-auto grid max-w-7xl gap-8 px-4 py-20 sm:px-6 lg:grid-cols-2 lg:px-8">
          <article className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-sky-700">Volunteer</p>
            <h3 className="mt-2 font-serif text-3xl font-bold text-slate-900">Join Team Carmen</h3>
            <p className="mt-3 text-slate-600">
              Campaigns are won by direct voter contact. Join our team across Fremont, Hayward, Milpitas, Union City, and San Jose.
            </p>

            <form className="mt-7 space-y-4" onSubmit={(event) => event.preventDefault()}>
              <div className="grid gap-4 sm:grid-cols-2">
                <input
                  type="text"
                  placeholder="First name"
                  className="rounded-xl border border-slate-300 px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-sky-700"
                />
                <input
                  type="text"
                  placeholder="Last name"
                  className="rounded-xl border border-slate-300 px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-sky-700"
                />
              </div>
              <input
                type="email"
                placeholder="Email"
                className="w-full rounded-xl border border-slate-300 px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-sky-700"
              />
              <input
                type="tel"
                placeholder="Phone"
                className="w-full rounded-xl border border-slate-300 px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-sky-700"
              />
              <button className="inline-flex items-center rounded-full bg-gradient-to-r from-sky-700 to-blue-900 px-6 py-3 text-sm font-bold text-white shadow-md transition hover:opacity-95">
                Sign Up
                <ChevronRight size={16} className="ml-1" />
              </button>
            </form>
          </article>

          <article id="donate" className="rounded-3xl bg-gradient-to-br from-sky-900 via-blue-900 to-slate-950 p-8 text-white shadow-xl">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-amber-300">Donate</p>
            <h3 className="mt-2 font-serif text-3xl font-bold">Support the Campaign</h3>
            <p className="mt-3 text-slate-200">
              Your contribution supports voter outreach, field operations, and campaign communications across District 10.
            </p>

            <div className="mt-7 grid grid-cols-3 gap-3">
              {donationLevels.map((amount) => (
                <button
                  key={amount}
                  type="button"
                  onClick={() => setSelectedAmount(amount)}
                  className={`rounded-xl border px-3 py-3 text-sm font-bold transition ${
                    selectedAmount === amount
                      ? "border-amber-300 bg-amber-400/25 text-amber-100"
                      : "border-white/25 bg-white/5 text-white hover:bg-white/10"
                  }`}
                >
                  ${amount}
                </button>
              ))}
            </div>

            <div className="mt-6 rounded-xl bg-white/10 p-4 text-sm text-slate-100">
              Selected contribution: <span className="font-bold text-amber-200">${selectedAmount}</span>
            </div>

            <button
              type="button"
              className="mt-6 inline-flex items-center rounded-full bg-amber-500 px-7 py-3 text-sm font-bold text-white transition hover:bg-amber-600"
            >
              Contribute ${selectedAmount}
              <ChevronRight size={16} className="ml-1" />
            </button>

            <p className="mt-5 text-xs leading-relaxed text-slate-300">
              Paid for by Carmen Montano for Senate 2026. FPPC #1482732. Contributions are not tax deductible.
            </p>
          </article>
        </section>

        <section className="mx-auto max-w-7xl px-4 pb-20 sm:px-6 lg:px-8">
          <article className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm md:p-10">
            <div className="flex items-center gap-2 text-amber-500">
              <Star size={14} className="fill-amber-500" />
              <Star size={14} className="fill-amber-500" />
              <Star size={14} className="fill-amber-500" />
            </div>
            <p className="mt-4 text-xs font-bold uppercase tracking-[0.18em] text-slate-500">Official Statement</p>
            <h3 className="mt-3 max-w-3xl font-serif text-3xl font-bold text-slate-900 md:text-4xl">
              District 10 deserves accountable leadership that delivers practical outcomes.
            </h3>
            <p className="mt-5 max-w-3xl text-slate-600">
              This campaign is grounded in service, measurable results, and respect for every community in the district.
            </p>
            <a
              href="#action"
              className="mt-6 inline-flex items-center text-sm font-semibold text-slate-900 transition hover:text-slate-600"
            >
              Volunteer with the campaign
              <ArrowUpRight size={15} className="ml-1" />
            </a>
          </article>
        </section>
      </main>

      <footer className="border-t border-slate-200 bg-white py-8">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-4 text-center sm:px-6 lg:flex-row lg:px-8 lg:text-left">
          <p className="text-sm text-slate-600">Paid for by Carmen Montano for Senate 2026. FPPC #1482732.</p>
          <p className="text-xs text-slate-500">
            © {new Date().getFullYear()} Carmen Montano for State Senate District 10
          </p>
        </div>
      </footer>
    </div>
  );
}
