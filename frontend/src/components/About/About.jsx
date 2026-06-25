import React from "react";
import { Link } from "react-router-dom";
import {
  CheckCircle2,
  ArrowRight,
  FileSearch,
  Handshake,
  MapPin,
  ShieldCheck,
  Smartphone,
  UsersRound,
} from "lucide-react";

const focusAreas = [
  {
    icon: FileSearch,
    title: "Scheme Discovery",
    text: "Helping citizens find Central and State welfare schemes across education, healthcare, pensions, employment, agriculture, women empowerment, and digital services.",
  },
  {
    icon: Smartphone,
    title: "Digital Access",
    text: "Making public welfare information easier to understand and access through a simple website and mobile-first experience.",
  },
  {
    icon: ShieldCheck,
    title: "Transparent Support",
    text: "Reducing confusion and dependence on middlemen by guiding citizens through documents, online applications, and grievance assistance.",
  },
  {
    icon: MapPin,
    title: "Local SWO Network",
    text: "Building a Gram Panchayat-level Social Welfare Officer network for reliable doorstep guidance and rural digital inclusion.",
  },
];

const values = [
  "Equal access to government information",
  "Simple and reliable public welfare support",
  "Technology that serves common people",
  "Doorstep guidance for rural citizens",
];

const About = () => {
  return (
    <main className="bg-[#f6f8fc]">
      <section
        className="relative overflow-hidden bg-slate-950 px-4 py-16 text-white sm:px-6 lg:px-8"
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(99,102,241,0.28),transparent_34%),radial-gradient(circle_at_bottom_right,rgba(16,185,129,0.2),transparent_30%)]" />
        <div className="relative mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.9fr_1fr] lg:items-center">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.35em] text-indigo-200">
              About NagrikSarkar
            </p>
            <h1 className="mt-5 max-w-3xl text-3xl font-black leading-tight sm:text-4xl lg:text-5xl">
              Connecting citizens with government, digitally and transparently.
            </h1>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                to="/schemes/search"
                className="inline-flex min-h-12 items-center gap-3 rounded-[8px] bg-indigo-500 px-6 py-3 text-sm font-bold text-white shadow-sm transition hover:bg-indigo-600"
              >
                Explore Schemes
                <ArrowRight size={18} />
              </Link>
              <Link
                to="/contact"
                className="inline-flex min-h-12 items-center rounded-[8px] border border-white/30 px-6 py-3 text-sm font-bold text-white transition hover:border-white/60 hover:bg-white/10"
              >
                Contact Us
              </Link>
            </div>
          </div>

          <div className="space-y-5">
            {[
              ["One-step", "digital public welfare support"],
              ["Central & State", "government scheme guidance"],
              ["People-first", "transparent citizen assistance"],
            ].map(([title, text]) => (
              <div
                key={title}
                className="rounded-[8px] border border-white/10 bg-white/10 p-6 shadow-xl backdrop-blur-md"
              >
                <h2 className="text-2xl font-black text-indigo-100 sm:text-3xl">
                  {title}
                </h2>
                <p className="mt-2 text-base text-slate-100">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.35em] text-indigo-600">
              Who We Are
            </p>
            <h2 className="mt-5 max-w-2xl text-3xl font-black leading-tight text-slate-950 sm:text-4xl">
              A simple digital bridge between people and public services
            </h2>
          </div>

          <div className="space-y-7 text-base leading-8 text-slate-600 sm:text-lg">
            <p>
              NagrikSarkar is a people-first digital platform dedicated to
              empowering citizens through technology, transparency, and social
              welfare. Our mission is to bridge the gap between government
              services and common people by providing a simple, accessible, and
              reliable one-step digital solution for all public welfare needs.
            </p>
            <p>
              We believe that every citizen deserves equal access to
              information, opportunities, and government benefits. Through our
              website and mobile app, NagrikSarkar helps users discover,
              understand, and apply for various Central and State Government
              schemes related to education, healthcare, employment, pensions,
              agriculture, women empowerment, scholarships, digital services,
              and social welfare programs.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-[#f6f8fc] px-4 py-14 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.35em] text-emerald-600">
              SWO Initiative
            </p>
            <h2 className="mt-5 max-w-2xl text-3xl font-black leading-tight text-slate-950 sm:text-4xl">
              NagrikSarkar SWO Initiative
            </h2>
          </div>

          <div className="space-y-7 text-base leading-8 text-slate-600 sm:text-lg">
            <p>
              NagrikSarkar aims to place one dedicated Social Welfare Officer
              (SWO) in every Gram Panchayat of Bihar to ensure easy and
              transparent access to government services for every citizen. The
              SWO will act as a local digital support partner, helping people
              with government schemes, online applications, documents, welfare
              benefits, awareness programs, and grievance assistance.
            </p>
            <p>
              This initiative is focused on empowering rural citizens by
              providing reliable doorstep guidance, digital inclusion, and
              social welfare support without dependence on middlemen.
            </p>
          </div>
        </div>
      </section>

      <section className="px-4 pb-14 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mb-8 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.25em] text-indigo-600">
                What We Do
              </p>
              <h2 className="mt-3 text-3xl font-black text-slate-950">
                Practical support for public welfare access
              </h2>
            </div>
            <div className="inline-flex w-fit items-center gap-2 rounded-[8px] border border-emerald-200 bg-emerald-50 px-4 py-2 text-sm font-bold text-emerald-700">
              <UsersRound size={17} />
              Citizen-first platform
            </div>
          </div>

          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-4">
            {focusAreas.map(({ icon: Icon, title, text }) => (
              <article
                key={title}
                className="rounded-[8px] border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
              >
                <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-[8px] bg-indigo-50 text-indigo-700">
                  <Icon size={22} />
                </div>
                <h3 className="text-lg font-black text-slate-950">{title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-600">{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 pb-16 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-8 rounded-[8px] border border-slate-200 bg-white p-6 shadow-sm sm:p-8 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-[8px] bg-emerald-50 text-emerald-700">
              <Handshake size={24} />
            </div>
            <h2 className="text-3xl font-black text-slate-950">
              Built for trust, access, and social impact
            </h2>
            <p className="mt-4 text-base leading-8 text-slate-600">
              Our work is focused on empowering rural and urban citizens with
              reliable guidance, digital inclusion, and social welfare support.
            </p>
          </div>

          <div className="grid gap-3 sm:grid-cols-2">
            {values.map((value) => (
              <div
                key={value}
                className="flex items-start gap-3 rounded-[8px] border border-slate-100 bg-slate-50 p-4"
              >
                <CheckCircle2 className="mt-0.5 shrink-0 text-emerald-600" size={19} />
                <p className="text-sm font-semibold leading-6 text-slate-700">
                  {value}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default About;
