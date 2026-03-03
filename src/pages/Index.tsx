import { Link } from "react-router-dom";
import { motion, useScroll, useTransform } from "framer-motion";
import { ChevronDown, Star, Shield, Leaf, PawPrint, Home, CheckCircle, Droplets, Layers, Sofa, Wind, Sparkles, ArrowRight, Package, Award, BadgeCheck, ShieldCheck } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";
import CountUp from "@/components/CountUp";
import heroImage from "@/assets/hero-home.jpg";
import { useRef } from "react";

const stats = [
  { value: 300, suffix: "+", label: "Verified Five-Star Reviews" },
  { value: 20, suffix: "+", label: "Years of Proven Performance" },
  { value: 60, suffix: "–90", label: "Minute Emergency Response" },
  { value: 100, suffix: "%", label: "Outcome Verified on Every Job" },
];

const promiseItems = [
  { icon: CheckCircle, title: "Outcome Verified", desc: "Every job confirmed with measurable results" },
  { icon: Leaf, title: "Biodegradable Materials", desc: "Safe for residents, pets & indoor environments" },
  { icon: Shield, title: "Standards-Driven", desc: "Every technician follows The Salem Standard" },
];

const credentials = [
  "IICRC Certified Firm",
  "Fully Licensed & Insured",
  "300+ Reviews — Google · Yelp · Angie's List",
  "Est. 2003",
  "Biodegradable & Pet Safe",
];

const serviceCategories = [
  { icon: Droplets, title: "Restoration & Environmental Services", desc: "Water damage restoration, mold remediation, indoor air quality assessment.", link: "/services" },
  { icon: Layers, title: "Flooring & Surface Preservation", desc: "Carpet, tile, grout, natural stone, and hardwood surface care.", link: "/services" },
  { icon: Sofa, title: "Furniture & Interior Asset Care", desc: "Upholstery, mattress sanitization, and leather conditioning.", link: "/services" },
  { icon: Wind, title: "Air System & Environmental Hygiene", desc: "Air duct, vent system, and dryer vent maintenance.", link: "/services" },
  { icon: Sparkles, title: "Specialty & Protective Services", desc: "Odor removal, stain treatment, fabric protection, post-construction reset.", link: "/services" },
  { icon: Package, title: "Move-In / Move-Out Property Reset", desc: "Complete property restoration for transitions and turnovers.", link: "/services" },
];

const testimonials = [
  { text: "Salem Steamer handled our water damage restoration with absolute professionalism. The results were flawless — you'd never know anything happened.", location: "McLean, VA", avatar: "https://i.pravatar.cc/60?img=1" },
  { text: "Their process is transparent and the results are measurable. From assessment to final report, every step was communicated clearly.", location: "Great Falls, VA", avatar: "https://i.pravatar.cc/60?img=5" },
  { text: "The public adjuster they provided saved us thousands on our insurance claim. Truly a professional experience from start to finish.", location: "Potomac, MD", avatar: "https://i.pravatar.cc/60?img=8" },
  { text: "Outstanding mold remediation work. The third-party lab report gave us complete peace of mind that our home was safe.", location: "Arlington, VA", avatar: "https://i.pravatar.cc/60?img=12" },
  { text: "From the first phone call to final walkthrough, the professionalism was extraordinary. Our carpets look brand new.", location: "Bethesda, MD", avatar: "https://i.pravatar.cc/60?img=15" },
  { text: "Their emergency response time was incredible. Within 90 minutes they had a full team on-site managing our water damage situation.", location: "McLean, VA", avatar: "https://i.pravatar.cc/60?img=25" },
  { text: "We've used Salem Steamer for multiple properties. Consistent, reliable, and always verified results. Highly recommend.", location: "Washington, DC", avatar: "https://i.pravatar.cc/60?img=20" },
  { text: "The IICRC-certified process gave us confidence from day one. Every step was documented and verified.", location: "Great Falls, VA", avatar: "https://i.pravatar.cc/60?img=33" },
];

const activeCities = ["McLean", "Great Falls", "Potomac"];
const expandingCities = ["Arlington", "Bethesda"];

const Index = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const heroY = useTransform(scrollYProgress, [0, 1], ["0%", "40%"]);

  const stagger = {
    hidden: {},
    show: { transition: { staggerChildren: 0.08, delayChildren: 0.1 } },
  };
  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } },
  };

  return (
    <main>
      {/* Hero */}
      <section ref={heroRef} className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
        <motion.div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroImage})`, y: heroY }}
        />
        <div className="absolute inset-0" style={{ background: "linear-gradient(135deg, rgba(28,28,28,0.80) 0%, rgba(28,28,28,0.60) 50%, rgba(28,28,28,0.75) 100%)" }} />
        <motion.div
          className="relative z-10 text-center px-6 max-w-5xl"
          variants={stagger}
          initial="hidden"
          animate="show"
        >
          <motion.p variants={fadeUp} className="flex items-center justify-center gap-3 mb-6">
            <span className="block w-10 h-px" style={{ backgroundColor: "#E8611A" }} />
            <span className="font-body font-medium uppercase text-white/80" style={{ fontSize: "13px", letterSpacing: "0.25em" }}>
              Est. 2003 · McLean, Virginia
            </span>
          </motion.p>
          <motion.h1
            variants={fadeUp}
            className="font-display text-white leading-[1.1] text-balance"
            style={{ fontSize: "clamp(42px, 6vw, 76px)", textShadow: "0 2px 40px rgba(0,0,0,0.5)" }}
          >
            Restoration. Preservation. Protection.{" "}
            <span className="italic font-light">Done Right.</span>
          </motion.h1>
          <motion.p
            variants={fadeUp}
            className="mt-8 font-body max-w-[640px] mx-auto text-white/70"
            style={{ fontSize: "17px", lineHeight: 1.8, textShadow: "0 1px 20px rgba(0,0,0,0.6)" }}
          >
            Salem Steamer serves the McLean and Washington, DC metropolitan area — built on one principle: every property and every client deserves the highest standard of care. Whether you own a historic home, single-family residence, condominium, or commercial property, we treat your space with the utmost regard.
          </motion.p>
          <motion.p
            variants={fadeUp}
            className="mt-4 font-body max-w-[640px] mx-auto text-white/60"
            style={{ fontSize: "16px", lineHeight: 1.8, textShadow: "0 1px 20px rgba(0,0,0,0.6)" }}
          >
            We understand circumstances vary, and when needed, we offer accommodations with respect and discretion — without compromising the standard.
          </motion.p>
          <motion.div
            variants={fadeUp}
            className="mt-10 flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link to="/contact" className="btn-primary">Request Service</Link>
            <Link to="/method" className="btn-outline !text-white !border-white/50 hover:!bg-white hover:!text-foreground">Our Method</Link>
          </motion.div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <ChevronDown size={24} className="text-white/50 animate-bounce" />
        </motion.div>
      </section>

      {/* Credentials Badges */}
      <section className="bg-accent border-y border-border py-6">
        <div className="max-w-5xl mx-auto px-6 flex flex-wrap justify-center gap-4">
          {credentials.map((c) => (
            <span key={c} className="inline-flex items-center gap-2 text-foreground font-body text-sm">
              <span className="text-primary">✦</span> {c}
            </span>
          ))}
        </div>
      </section>

      {/* Our Promise Strip */}
      <section className="bg-background border-b border-border">
        <div className="max-w-5xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-3 gap-8">
          {promiseItems.map((item, i) => (
            <ScrollReveal key={item.title} delay={i * 0.1}>
              <div className="text-center">
                <item.icon size={28} className="text-primary mx-auto mb-3" strokeWidth={1.5} />
                <h3 className="font-display text-xl text-foreground mb-2">{item.title}</h3>
                <p className="text-muted-foreground text-sm">{item.desc}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* Trusted by Homeowners */}
      <section className="section-padding bg-background">
        <div className="max-w-4xl mx-auto text-center">
          <ScrollReveal>
            <p className="label-text text-primary mb-4">Our Promise</p>
            <h2 className="font-display text-4xl md:text-5xl text-foreground mb-4">Professional. Reliable. Verified.</h2>
            <p className="text-muted-foreground text-lg mb-8">Trusted by homeowners across the DC metropolitan area.</p>
            <div className="gold-divider mx-auto mb-10" />
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <p className="text-muted-foreground leading-[1.8] text-base md:text-lg mb-6">
              Salem Steamer serves the McLean and Washington, DC metropolitan area — built on one principle: every property and every client deserves the highest standard of care. Using the latest restoration technology, we restore 100% of your environment, leaving zero visible traces we were ever there.
            </p>
            <p className="text-muted-foreground leading-[1.8] text-base md:text-lg mb-6">
              We understand the trauma you are going through and will treat you and your family with the respect and concern you deserve. To make this difficult time easier, we provide two key advocates at no cost to you: a Public Adjuster to handle your insurance claim and a Third-Party Certified Lab to certify your environment is truly safe.
            </p>
            <p className="text-muted-foreground leading-[1.8] text-base md:text-lg">
              When you choose Salem Steamer, our results are so seamless and complete that the only thing we leave behind is your peace of mind.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.3}>
            <p className="text-primary font-display text-xl mt-8 italic">
              "A Salem Steamer job is not complete until the measurable outcome is verified."
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* By The Numbers */}
      <section className="section-padding bg-secondary">
        <div className="max-w-5xl mx-auto">
          <ScrollReveal>
            <p className="label-text text-primary mb-4 text-center">By The Numbers</p>
            <h2 className="font-display text-4xl md:text-5xl text-foreground text-center mb-16">Performance, Not Promises.</h2>
          </ScrollReveal>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
            {stats.map((s, i) => (
              <ScrollReveal key={s.label} delay={i * 0.1}>
                <div className="text-center">
                  <span className="font-display text-5xl md:text-7xl text-primary font-light block mb-3">
                    <CountUp target={s.value} suffix={s.suffix} />
                  </span>
                  <p className="text-muted-foreground text-sm font-body leading-snug">{s.label}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="section-padding bg-background">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal>
            <p className="label-text text-primary mb-4 text-center">What We Do</p>
            <h2 className="font-display text-4xl md:text-5xl text-foreground text-center mb-16">Our Services</h2>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {serviceCategories.map((s, i) => (
              <ScrollReveal key={s.title} delay={i * 0.08}>
                <div className="card-surface gold-border-top p-8 h-full card-hover group">
                  <s.icon size={32} className="text-primary mb-5" strokeWidth={1.5} />
                  <h3 className="font-display text-xl text-foreground mb-3">{s.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-5">{s.desc}</p>
                  <Link to={s.link} className="text-primary label-text hover:underline inline-flex items-center gap-1">
                    Learn More <ArrowRight size={14} />
                  </Link>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Environmental & Safety */}
      <section className="section-padding bg-accent">
        <div className="max-w-5xl mx-auto text-center">
          <ScrollReveal>
            <p className="label-text text-primary mb-4">Environmental Commitment</p>
            <h2 className="font-display text-3xl md:text-4xl text-foreground mb-6">Safe for Your Family. Safe for the Planet.</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto mb-12">
              All materials used are biodegradable and safe for residents, pets, and indoor environments. We are committed to responsible, health-conscious property care.
            </p>
          </ScrollReveal>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { emoji: "🌿", label: "Biodegradable" },
              { emoji: "🐾", label: "Pet Safe" },
              { emoji: "🏠", label: "Indoor Safe" },
              { emoji: "✅", label: "Outcome Verified" },
            ].map((item, i) => (
              <ScrollReveal key={item.label} delay={i * 0.1}>
                <div className="text-center">
                  <span className="text-4xl block mb-3">{item.emoji}</span>
                  <p className="text-foreground font-body font-medium text-sm">{item.label}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-padding bg-secondary overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal>
            <div className="flex justify-center gap-1 mb-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={18} className="text-primary fill-primary" />
              ))}
            </div>
            <h2 className="font-display text-4xl md:text-5xl text-foreground text-center mb-16">300+ Verified Five-Star Reviews</h2>
          </ScrollReveal>
          <div
            className="relative"
            style={{
              maskImage: "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
              WebkitMaskImage: "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
            }}
          >
            <div
              className="flex gap-6 hover:[animation-play-state:paused]"
              style={{
                animation: "testimonial-scroll 80s linear infinite",
                width: "max-content",
              }}
            >
              {[...testimonials, ...testimonials].map((t, i) => (
                <div
                  key={i}
                  className="card-surface p-8 flex-shrink-0 w-[340px] md:w-[380px]"
                >
                  <div className="flex items-center gap-4 mb-4">
                    <img
                      src={t.avatar}
                      alt="Verified client"
                      className="w-10 h-10 rounded-full object-cover"
                      loading="lazy"
                    />
                    <div>
                      <p className="text-foreground text-sm font-body font-medium">Verified Client</p>
                      <p className="label-text text-primary text-[10px]">{t.location}</p>
                    </div>
                  </div>
                  <div className="flex gap-1 mb-3">
                    {[...Array(5)].map((_, j) => (
                      <Star key={j} size={12} className="text-primary fill-primary" />
                    ))}
                  </div>
                  <p className="text-foreground text-sm leading-relaxed italic">"{t.text}"</p>
                  <p className="label-text text-primary/60 mt-4 text-[10px]">— Verified Google Review</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Expansion Ready */}
      <section className="py-20 px-6 md:px-12" style={{ backgroundColor: "#1C1C1C" }}>
        <div className="max-w-5xl mx-auto text-center">
          <ScrollReveal>
            <p className="label-text text-primary mb-4">Expansion Ready</p>
            <h2 className="font-display text-4xl md:text-5xl text-white mb-6">Built for McLean. Designed to Scale.</h2>
            <p className="text-white/60 max-w-2xl mx-auto mb-12 leading-relaxed">
              Currently serving McLean, Great Falls, and Potomac — with a platform architecture ready to expand to new cities, states, and eventually international markets.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <div className="flex flex-wrap justify-center gap-3">
              {activeCities.map((city) => (
                <span key={city} className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full font-body text-sm font-medium text-white" style={{ backgroundColor: "#E8611A" }}>
                  {city} <CheckCircle size={14} />
                </span>
              ))}
              {expandingCities.map((city) => (
                <span key={city} className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full font-body text-sm border border-white/20 text-white/50">
                  {city} — <span className="text-white/40 text-xs">Expanding Soon</span>
                </span>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Salem Standard Quote */}
      <section className="bg-primary py-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <ScrollReveal>
            <p className="font-display text-2xl md:text-4xl text-white italic leading-relaxed">
              "The Salem Standard is outcome-verified, behavior-disciplined, and reputation-protected."
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding text-center bg-secondary">
        <ScrollReveal>
          <h2 className="font-display text-3xl md:text-5xl text-foreground mb-6">
            Ready to Restore Your Property?
          </h2>
          <p className="text-muted-foreground mb-10 max-w-xl mx-auto">Contact our team for a consultation. Emergency response available 24/7.</p>
          <Link to="/contact" className="btn-primary">
            Request Service
          </Link>
        </ScrollReveal>
      </section>
    </main>
  );
};

export default Index;
