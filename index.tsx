import { createFileRoute } from "@tanstack/react-router";
import {
  Phone,
  MessageCircle,
  MapPin,
  Clock,
  Instagram,
  Star,
  ChefHat,
  Sparkles,
  Leaf,
  Award,
  Users,
  Heart,
  Menu,
  X,
} from "lucide-react";
import { useEffect, useState } from "react";
import heroImg from "@/assets/hero.jpg";
import cateringImg from "@/assets/catering.jpg";
import logoAsset from "@/assets/mirna-logo.jpeg.asset.json";
import mezzaAsset from "@/assets/mezza.jpg.asset.json";
import warakAsset from "@/assets/warak.jpg.asset.json";
import sambousekAsset from "@/assets/sambousek.jpg.asset.json";
import baklavaAsset from "@/assets/baklava.jpg.asset.json";
import cakeAsset from "@/assets/cake.jpg.asset.json";
import cookiesAsset from "@/assets/cookies.jpg.asset.json";
import koussaAsset from "@/assets/koussa.jpg.asset.json";
import kibbehAsset from "@/assets/kibbeh.jpg.asset.json";
import knafehAsset from "@/assets/knafeh.jpg.asset.json";
import seasonalAsset from "@/assets/seasonal.jpg.asset.json";

const mezzaImg = mezzaAsset.url;
const warakImg = warakAsset.url;
const sambousekImg = sambousekAsset.url;
const baklavaImg = baklavaAsset.url;
const cakeImg = cakeAsset.url;
const cookiesImg = cookiesAsset.url;
const koussaImg = koussaAsset.url;
const kibbehImg = kibbehAsset.url;
const knafehImg = knafehAsset.url;
const seasonalImg = seasonalAsset.url;

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Mirna Sweets & Food — Authentic Lebanese Flavors in Sidon" },
      {
        name: "description",
        content:
          "Homemade Lebanese dishes, traditional sweets, cakes and catering services in Sidon, Lebanon. Family-operated since 2016. Order via WhatsApp.",
      },
      { property: "og:title", content: "Mirna Sweets & Food — Authentic Lebanese Flavors" },
      {
        property: "og:description",
        content: "Homemade Lebanese meals, sweets and catering in Sidon, Lebanon.",
      },
      { property: "og:url", content: "/" },
      { property: "og:image", content: heroImg },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Restaurant",
          name: "Mirna Sweets & Food",
          servesCuisine: "Lebanese",
          priceRange: "$$",
          telephone: "+961 3 822 307",
          address: { "@type": "PostalAddress", addressLocality: "Sidon", addressCountry: "LB" },
          openingHours: "Mo-Su 09:00-23:00",
          aggregateRating: { "@type": "AggregateRating", ratingValue: "5.0", reviewCount: "120" },
        }),
      },
    ],
  }),
  component: Index,
});

const PHONE = "+961 3 822 307";
const WHATSAPP = "https://wa.me/9613822307";
const IG = "https://instagram.com/mirnasweetsandfood";

const PRODUCTS = [
  { name: "Lebanese Homemade Meals", desc: "Daily fresh dishes prepared with love.", img: kibbehImg },
  { name: "Mezza", desc: "Classic Lebanese starters and dips.", img: mezzaImg },
  { name: "Warak Enab", desc: "Hand-rolled stuffed grape leaves.", img: warakImg },
  { name: "Koussa Mahshi", desc: "Stuffed zucchini in tomato sauce.", img: koussaImg },
  { name: "Sambousek", desc: "Golden pastries with savory fillings.", img: sambousekImg },
  { name: "Cakes", desc: "Custom homemade cakes for any occasion.", img: cakeImg },
  { name: "Cookies & Maamoul", desc: "Traditional date and nut cookies.", img: cookiesImg },
  { name: "Arabic Sweets", desc: "Baklava, basbousa and more.", img: baklavaImg },
  { name: "Knafeh & Desserts", desc: "Warm cheese knafeh with syrup.", img: knafehImg },
  { name: "Seasonal Specials", desc: "Ramadan, Eid and holiday treats.", img: seasonalImg },
];

const WHY = [
  { icon: Heart, title: "Homemade Quality", desc: "Every dish made by hand in our kitchen." },
  { icon: Leaf, title: "Fresh Ingredients", desc: "Sourced daily from local Lebanese markets." },
  { icon: ChefHat, title: "Traditional Recipes", desc: "Authentic family recipes, passed down." },
  { icon: Award, title: "Trusted Since 2016", desc: "Years of loyal customers and 5★ reviews." },
  { icon: Users, title: "Catering Expertise", desc: "From intimate gatherings to weddings." },
  { icon: Sparkles, title: "Loved by Customers", desc: "Rated 5.0 on Google. Tasted by many." },
];

const GALLERY = [heroImg, baklavaImg, cateringImg, knafehImg, cakeImg, mezzaImg, warakImg, cookiesImg];

function Index() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navLinks = [
    { label: "About", href: "#about" },
    { label: "Menu", href: "#menu" },
    { label: "Catering", href: "#catering" },
    { label: "Gallery", href: "#gallery" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Nav */}
      <header
        className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
          scrolled ? "bg-background/90 backdrop-blur-md shadow-soft" : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-5 md:px-8 h-16 md:h-20 flex items-center justify-between">
          <a href="#top" className="flex items-center gap-3">
            <img
              src={logoAsset.url}
              alt="Mirna Sweets & Food"
              width={44}
              height={44}
              className="h-10 w-10 md:h-11 md:w-11 rounded-full object-cover bg-white shadow-soft"
            />
            <span className="font-display text-lg md:text-xl font-semibold tracking-tight hidden sm:inline">
              Mirna <span className="text-gradient-gold">Sweets & Food</span>
            </span>
          </a>
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((l) => (
              <a key={l.href} href={l.href} className="text-sm font-medium hover:text-gold-deep transition-colors">
                {l.label}
              </a>
            ))}
            <a
              href={WHATSAPP}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-medium text-primary-foreground shadow-gold transition-transform hover:scale-105"
              style={{ background: "var(--gradient-gold)" }}
            >
              <MessageCircle className="h-4 w-4" /> Order
            </a>
          </nav>
          <button
            className="md:hidden p-2 rounded-md text-foreground"
            onClick={() => setMenuOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
        {menuOpen && (
          <div className="md:hidden bg-background/95 backdrop-blur-md border-t border-border animate-fade-in">
            <div className="px-5 py-4 flex flex-col gap-3">
              {navLinks.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={() => setMenuOpen(false)}
                  className="py-2 text-base font-medium"
                >
                  {l.label}
                </a>
              ))}
              <a
                href={WHATSAPP}
                target="_blank"
                rel="noreferrer"
                className="mt-2 inline-flex items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-medium text-primary-foreground"
                style={{ background: "var(--gradient-gold)" }}
              >
                <MessageCircle className="h-4 w-4" /> Order on WhatsApp
              </a>
            </div>
          </div>
        )}
      </header>

      {/* Hero */}
      <section id="top" className="relative min-h-[100svh] flex items-center justify-center overflow-hidden">
        <img
          src={heroImg}
          alt="Assortment of Lebanese sweets and homemade dishes"
          width={1920}
          height={1080}
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/55 via-black/40 to-black/70" />
        <div className="relative z-10 max-w-3xl mx-auto px-6 text-center text-cream pt-24 pb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/30 backdrop-blur-sm text-xs uppercase tracking-[0.2em] animate-fade-in">
            <Sparkles className="h-3.5 w-3.5 text-gold" /> Family-Operated · Since 2016
          </div>
          <h1 className="mt-6 font-display text-5xl sm:text-6xl md:text-7xl font-medium leading-[1.05] animate-fade-up">
            Authentic Lebanese <br />
            Flavors Made <em className="text-gradient-gold not-italic">with Love</em>
          </h1>
          <p className="mt-6 text-base md:text-lg text-white/85 max-w-xl mx-auto animate-fade-up" style={{ animationDelay: "120ms" }}>
            Homemade Lebanese dishes, traditional sweets, cakes, and catering services in Sidon.
          </p>
          <div className="mt-9 flex flex-col sm:flex-row items-center justify-center gap-3 animate-fade-up" style={{ animationDelay: "240ms" }}>
            <a
              href={WHATSAPP}
              target="_blank"
              rel="noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full px-7 py-3.5 text-sm font-semibold text-primary-foreground shadow-gold transition-transform hover:scale-[1.03]"
              style={{ background: "var(--gradient-gold)" }}
            >
              <MessageCircle className="h-4 w-4" /> Order on WhatsApp
            </a>
            <a
              href="#menu"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full px-7 py-3.5 text-sm font-semibold border border-white/40 text-cream hover:bg-white/10 transition-colors"
            >
              View Menu
            </a>
          </div>
          <div className="mt-10 flex items-center justify-center gap-2 text-sm text-white/80 animate-fade-in">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="h-4 w-4 fill-gold text-gold" />
            ))}
            <span className="ml-2">5.0 · Loved by guests on Google</span>
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="py-24 md:py-32 bg-gradient-warm">
        <div className="max-w-5xl mx-auto px-6 grid md:grid-cols-2 gap-12 md:gap-16 items-center">
          <div className="relative aspect-[4/5] rounded-3xl overflow-hidden shadow-soft">
            <img src={knafehImg} alt="Knafeh dessert" loading="lazy" width={800} height={1000} className="h-full w-full object-cover" />
            <div className="absolute -bottom-6 -right-6 hidden md:flex items-center gap-3 bg-card border border-border rounded-2xl px-5 py-4 shadow-soft">
              <div className="text-3xl font-display text-gold-deep">9+</div>
              <div className="text-xs text-muted-foreground leading-tight">Years of<br />Lebanese tradition</div>
            </div>
          </div>
          <div>
            <p className="text-xs uppercase tracking-[0.25em] text-gold-deep font-medium">Our Story</p>
            <h2 className="mt-3 font-display text-4xl md:text-5xl font-medium leading-tight">
              A taste of home, <em className="text-gradient-gold not-italic">since 2016</em>
            </h2>
            <p className="mt-6 text-muted-foreground leading-relaxed">
              Founded in 2016, Mirna Sweets & Food brings authentic homemade Lebanese flavors to every
              table. From traditional sweets and desserts to fresh daily meals and catering services,
              every dish is prepared with passion, quality ingredients, and attention to detail.
            </p>
            <div className="mt-8 grid grid-cols-3 gap-4">
              {[
                { k: "9+", v: "Years" },
                { k: "5.0★", v: "Rating" },
                { k: "100%", v: "Homemade" },
              ].map((s) => (
                <div key={s.v} className="text-center p-4 rounded-2xl bg-card border border-border">
                  <div className="font-display text-2xl text-gold-deep">{s.k}</div>
                  <div className="text-xs text-muted-foreground mt-1">{s.v}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Menu / Products */}
      <section id="menu" className="py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-5 md:px-8">
          <div className="text-center max-w-2xl mx-auto">
            <p className="text-xs uppercase tracking-[0.25em] text-gold-deep font-medium">The Menu</p>
            <h2 className="mt-3 font-display text-4xl md:text-5xl font-medium leading-tight">
              Crafted with <em className="text-gradient-gold not-italic">tradition</em>
            </h2>
            <p className="mt-4 text-muted-foreground">
              From hearty Lebanese meals to delicate Arabic sweets — each one made fresh in our kitchen.
            </p>
          </div>
          <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {PRODUCTS.map((p) => (
              <article
                key={p.name}
                className="group relative overflow-hidden rounded-3xl bg-card border border-border shadow-soft transition-all duration-500 hover:-translate-y-1 hover:shadow-gold"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img
                    src={p.img}
                    alt={p.name}
                    loading="lazy"
                    width={800}
                    height={600}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-display text-xl font-semibold">{p.name}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{p.desc}</p>
                </div>
              </article>
            ))}
          </div>
          <div className="mt-12 text-center">
            <a
              href={WHATSAPP}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full px-7 py-3.5 text-sm font-semibold text-primary-foreground shadow-gold"
              style={{ background: "var(--gradient-gold)" }}
            >
              <MessageCircle className="h-4 w-4" /> Order via WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* Catering */}
      <section id="catering" className="relative py-24 md:py-32 overflow-hidden">
        <img src={cateringImg} alt="" aria-hidden loading="lazy" width={1400} height={900} className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-primary/85" />
        <div className="relative max-w-5xl mx-auto px-6 text-cream">
          <div className="max-w-2xl">
            <p className="text-xs uppercase tracking-[0.25em] text-gold font-medium">Catering Services</p>
            <h2 className="mt-3 font-display text-4xl md:text-5xl font-medium leading-tight">
              Make every gathering <em className="text-gradient-gold not-italic">unforgettable</em>
            </h2>
            <p className="mt-5 text-cream/85">
              From intimate family meals to grand weddings — we craft tailored catering packages that
              bring authentic Lebanese hospitality to your event.
            </p>
          </div>
          <div className="mt-12 grid grid-cols-2 md:grid-cols-5 gap-4">
            {["Weddings", "Birthdays", "Family Gatherings", "Corporate Events", "Special Occasions"].map(
              (c) => (
                <div
                  key={c}
                  className="rounded-2xl border border-white/20 bg-white/10 backdrop-blur-sm p-5 text-center text-sm font-medium hover:bg-white/15 transition-colors"
                >
                  {c}
                </div>
              ),
            )}
          </div>
          <div className="mt-10">
            <a
              href={WHATSAPP}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full px-7 py-3.5 text-sm font-semibold text-primary shadow-gold"
              style={{ background: "var(--gradient-gold)" }}
            >
              <MessageCircle className="h-4 w-4" /> Request a Custom Quote
            </a>
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section id="gallery" className="py-24 md:py-32 bg-gradient-warm">
        <div className="max-w-7xl mx-auto px-5 md:px-8">
          <div className="text-center max-w-2xl mx-auto">
            <p className="text-xs uppercase tracking-[0.25em] text-gold-deep font-medium">Gallery</p>
            <h2 className="mt-3 font-display text-4xl md:text-5xl font-medium leading-tight">
              A feast for the <em className="text-gradient-gold not-italic">eyes</em>
            </h2>
          </div>
          <div className="mt-14 grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
            {GALLERY.map((src, i) => (
              <div
                key={i}
                className={`relative overflow-hidden rounded-2xl ${i % 5 === 0 ? "md:row-span-2 aspect-square md:aspect-auto" : "aspect-square"}`}
              >
                <img
                  src={src}
                  alt="Mirna Sweets & Food creation"
                  loading="lazy"
                  width={800}
                  height={800}
                  className="h-full w-full object-cover transition-transform duration-700 hover:scale-110"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why */}
      <section className="py-24 md:py-32">
        <div className="max-w-6xl mx-auto px-5 md:px-8">
          <div className="text-center max-w-2xl mx-auto">
            <p className="text-xs uppercase tracking-[0.25em] text-gold-deep font-medium">Why Choose Us</p>
            <h2 className="mt-3 font-display text-4xl md:text-5xl font-medium leading-tight">
              Lebanese soul, in <em className="text-gradient-gold not-italic">every bite</em>
            </h2>
          </div>
          <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {WHY.map((f) => (
              <div key={f.title} className="p-7 rounded-3xl bg-card border border-border shadow-soft hover:shadow-gold transition-shadow">
                <div className="h-12 w-12 rounded-2xl grid place-items-center mb-5" style={{ background: "var(--gradient-gold)" }}>
                  <f.icon className="h-5 w-5 text-primary-foreground" />
                </div>
                <h3 className="font-display text-xl font-semibold">{f.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Instagram */}
      <section className="py-24 md:py-32">
        <div className="max-w-6xl mx-auto px-5 md:px-8 text-center">
          <p className="text-xs uppercase tracking-[0.25em] text-gold-deep font-medium">Instagram</p>
          <h2 className="mt-3 font-display text-4xl md:text-5xl font-medium leading-tight">
            Follow our daily <em className="text-gradient-gold not-italic">creations</em>
          </h2>
          <p className="mt-3 text-muted-foreground">@mirnasweetsandfood</p>
          <div className="mt-10 grid grid-cols-3 md:grid-cols-6 gap-2 md:gap-3">
            {[baklavaImg, cakeImg, knafehImg, mezzaImg, cookiesImg, seasonalImg].map((src, i) => (
              <a
                key={i}
                href={IG}
                target="_blank"
                rel="noreferrer"
                className="relative aspect-square overflow-hidden rounded-xl group"
              >
                <img src={src} alt="Instagram post" loading="lazy" width={400} height={400} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110" />
                <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/40 transition-colors grid place-items-center">
                  <Instagram className="h-6 w-6 text-cream opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
              </a>
            ))}
          </div>
          <a
            href={IG}
            target="_blank"
            rel="noreferrer"
            className="mt-10 inline-flex items-center gap-2 rounded-full px-7 py-3.5 text-sm font-semibold text-primary-foreground shadow-gold"
            style={{ background: "var(--gradient-gold)" }}
          >
            <Instagram className="h-4 w-4" /> Follow on Instagram
          </a>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-24 md:py-32 bg-gradient-warm">
        <div className="max-w-6xl mx-auto px-5 md:px-8">
          <div className="text-center max-w-2xl mx-auto">
            <p className="text-xs uppercase tracking-[0.25em] text-gold-deep font-medium">Get in Touch</p>
            <h2 className="mt-3 font-display text-4xl md:text-5xl font-medium leading-tight">
              Come taste the <em className="text-gradient-gold not-italic">tradition</em>
            </h2>
          </div>
          <div className="mt-14 grid lg:grid-cols-2 gap-10">
            <div className="space-y-5">
              {[
                { icon: Phone, label: "Phone", value: PHONE, href: `tel:+9613822307` },
                { icon: MessageCircle, label: "WhatsApp", value: "Chat with us now", href: WHATSAPP },
                { icon: Clock, label: "Open Daily", value: "9:00 AM — 11:00 PM" },
                { icon: MapPin, label: "Location", value: "Sidon (Saida), Lebanon" },
                { icon: Instagram, label: "Instagram", value: "@mirnasweetsandfood", href: IG },
              ].map((row) => {
                const Comp: any = row.href ? "a" : "div";
                return (
                  <Comp
                    key={row.label}
                    {...(row.href ? { href: row.href, target: "_blank", rel: "noreferrer" } : {})}
                    className="flex items-center gap-4 p-5 rounded-2xl bg-card border border-border shadow-soft hover:shadow-gold transition-shadow"
                  >
                    <div className="h-12 w-12 rounded-2xl grid place-items-center shrink-0" style={{ background: "var(--gradient-gold)" }}>
                      <row.icon className="h-5 w-5 text-primary-foreground" />
                    </div>
                    <div className="min-w-0">
                      <div className="text-xs uppercase tracking-wider text-muted-foreground">{row.label}</div>
                      <div className="font-medium truncate">{row.value}</div>
                    </div>
                  </Comp>
                );
              })}
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  const data = new FormData(e.currentTarget);
                  const msg = `Hello Mirna! I'm ${data.get("name")}.\n\n${data.get("message")}`;
                  window.open(`${WHATSAPP}?text=${encodeURIComponent(msg)}`, "_blank");
                }}
                className="p-6 rounded-2xl bg-card border border-border shadow-soft space-y-4"
              >
                <h3 className="font-display text-xl font-semibold">Send us a message</h3>
                <input name="name" required placeholder="Your name" className="w-full px-4 py-3 rounded-xl bg-secondary border border-border focus:outline-none focus:ring-2 focus:ring-gold text-sm" />
                <input name="phone" placeholder="Phone (optional)" className="w-full px-4 py-3 rounded-xl bg-secondary border border-border focus:outline-none focus:ring-2 focus:ring-gold text-sm" />
                <textarea name="message" required rows={4} placeholder="Tell us about your order or event…" className="w-full px-4 py-3 rounded-xl bg-secondary border border-border focus:outline-none focus:ring-2 focus:ring-gold text-sm resize-none" />
                <button type="submit" className="w-full inline-flex items-center justify-center gap-2 rounded-xl px-6 py-3 text-sm font-semibold text-primary-foreground shadow-gold" style={{ background: "var(--gradient-gold)" }}>
                  <MessageCircle className="h-4 w-4" /> Send via WhatsApp
                </button>
              </form>
            </div>
            <div className="rounded-3xl overflow-hidden border border-border shadow-soft min-h-[400px]">
              <iframe
                title="Mirna Sweets & Food location in Sidon, Lebanon"
                src="https://www.google.com/maps?q=Sidon,+Lebanon&output=embed"
                width="100%"
                height="100%"
                style={{ minHeight: 500, border: 0 }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-primary text-primary-foreground pt-16 pb-8">
        <div className="max-w-7xl mx-auto px-5 md:px-8 grid md:grid-cols-3 gap-10">
          <div>
            <div className="flex items-center gap-3">
              <img
                src={logoAsset.url}
                alt="Mirna Sweets & Food"
                width={48}
                height={48}
                className="h-12 w-12 rounded-full object-cover bg-white"
              />
              <div className="font-display text-2xl font-semibold">
                Mirna <span className="text-gradient-gold">Sweets & Food</span>
              </div>
            </div>
            <p className="mt-4 text-sm text-primary-foreground/70 leading-relaxed max-w-sm">
              Authentic Lebanese homemade meals, traditional sweets and catering services in Sidon since 2016.
            </p>
          </div>
          <div>
            <h4 className="font-display text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm text-primary-foreground/70">
              {navLinks.map((l) => (
                <li key={l.href}><a href={l.href} className="hover:text-gold transition-colors">{l.label}</a></li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-display text-lg mb-4">Contact</h4>
            <ul className="space-y-2 text-sm text-primary-foreground/70">
              <li className="flex items-center gap-2"><Phone className="h-4 w-4 text-gold" /><a href="tel:+9613822307" className="hover:text-gold">{PHONE}</a></li>
              <li className="flex items-center gap-2"><MapPin className="h-4 w-4 text-gold" /> Sidon, Lebanon</li>
              <li className="flex items-center gap-2"><Clock className="h-4 w-4 text-gold" /> Daily 9 AM – 11 PM</li>
              <li className="flex items-center gap-2"><Instagram className="h-4 w-4 text-gold" /> <a href={IG} target="_blank" rel="noreferrer" className="hover:text-gold">@mirnasweetsandfood</a></li>
            </ul>
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-5 md:px-8 mt-12 pt-6 border-t border-white/10 text-center text-xs text-primary-foreground/60">
          © {new Date().getFullYear()} Mirna Sweets & Food. All rights reserved.
        </div>
      </footer>

      {/* Floating WhatsApp */}
      <a
        href={WHATSAPP}
        target="_blank"
        rel="noreferrer"
        aria-label="Order on WhatsApp"
        className="fixed bottom-5 right-5 z-50 h-14 w-14 rounded-full grid place-items-center shadow-gold animate-float"
        style={{ background: "linear-gradient(135deg, #25D366, #128C7E)" }}
      >
        <MessageCircle className="h-6 w-6 text-white" />
      </a>
    </div>
  );
}
