
import React from "react";
import {
  MapPin,
  CalendarDays,
  Clock3,
  Navigation,
  ArrowDown,
  ExternalLink,
} from "lucide-react";

import venue from "./assets/masjid.png"


// Venue video — replace this when you find the video
const venueVideo =
  "https://www.youtube.com/embed/YOUR_VIDEO_ID";

// Shamsi Adisa Thomas (SAT) Mosque, Ikeja GRA
const venueMapUrl =
  "https://www.google.com/maps/search/?api=1&query=Shamsi+Adisa+Thomas+SAT+Mosque+Ikeja+GRA+Lagos";

const decorativeImage =
  "https://images.unsplash.com/photo-1603006905003-be475563bc59?auto=format&fit=crop&w=900&q=85";

function App() {
  return (
    <div className="min-h-screen bg-[#F5EBDD] text-[#35213F]">
      {/* Decorative background */}
      <div className="pointer-events-none fixed inset-0 z-0 opacity-[0.035]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,#5B286D_1px,transparent_1px)] bg-size-[28px_28px]" />
      </div>

      {/* Navigation */}
      <nav className="sticky top-0 z-50 border-b border-[#5B286D]/10 bg-[#F5EBDD]/90 backdrop-blur-md">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <a
            href="#home"
            className="font-serif text-xl font-semibold tracking-wide text-[#54265F]"
          >
            The Nikkah
          </a>

          <div className="hidden items-center gap-7 text-sm md:flex">
            <a href="#couple" className="transition hover:text-[#8B4A9B]">
              The Couple
            </a>

            <a href="#venue" className="transition hover:text-[#8B4A9B]">
              Venue
            </a>

            <a href="#dress-code" className="transition hover:text-[#8B4A9B]">
              Dress Code
            </a>
          </div>

          <a
            href="#venue"
            className="rounded-full bg-[#54265F] px-5 py-2.5 text-xs font-medium text-[#F8EFDF] transition hover:bg-[#6D3479]"
          >
            View Details
          </a>
        </div>
      </nav>

      {/* HERO */}
      <section id="home" className="relative overflow-hidden">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 py-16 lg:grid-cols-[0.85fr_1.15fr] lg:px-10 lg:py-24">
          {/* Hero text */}
          <div className="relative z-10 text-center lg:text-left">
            <p className="mb-5 text-sm font-medium uppercase tracking-[0.35em] text-[#8B4A9B]">
              Bismillah
            </p>

            <div className="mb-6 flex justify-center lg:justify-start">
              <div className="h-px w-16 bg-[#9A7A4F]" />
              <div className="mx-3 h-2 w-2 rotate-45 border border-[#9A7A4F]" />
              <div className="h-px w-16 bg-[#9A7A4F]" />
            </div>

            <h1 className="font-serif text-5xl leading-[1.05] text-[#48204F] sm:text-6xl lg:text-7xl">
              A New Chapter
              <span className="mt-2 block italic text-[#87518F]">
                Begins With Bismillah
              </span>
            </h1>

            <p className="mx-auto mt-7 max-w-xl text-base leading-7 text-[#67546A] lg:mx-0">
              With the blessings of our families, we joyfully invite you to
              witness and celebrate the Nikkah of
            </p>

            <div className="mt-8">
              <h2 className="font-serif text-[24px] font-semibold text-[#54265F] sm:text-4xl">
                Summayyah
                <span className="mx-3 font-light text-[#9A7A4F]">&</span>
                Ridwanullah
              </h2>
            </div>

            <div className="mt-8 flex flex-wrap justify-center gap-3 lg:justify-start">
              <div className="flex items-center gap-2 rounded-full border border-[#54265F]/15 bg-[#F9F1E5] px-4 py-2 text-sm">
                <CalendarDays size={16} className="text-[#87518F]" />
                Saturday, 19 December 2026
              </div>

              <div className="flex items-center gap-2 rounded-full border border-[#54265F]/15 bg-[#F9F1E5] px-4 py-2 text-sm">
                <Clock3 size={16} className="text-[#87518F]" />
                9:00 AM
              </div>
            </div>

            <a
              href="#couple"
              className="mt-9 inline-flex items-center gap-2 text-sm font-medium text-[#54265F]"
            >
              Explore the invitation
              <ArrowDown size={16} />
            </a>
          </div>

          {/* Video */}
          <div className="relative">
            <div className="absolute -inset-3 rounded-4xl border border-[#87518F]/20" />

            <div className="relative overflow-hidden rounded-3xl bg-[#54265F] p-2 shadow-2xl shadow-[#54265F]/15">
              <div className="aspect-video overflow-hidden rounded-2xl bg-black">
                <iframe
                  className="h-full w-full"
                  src={venueVideo}
                  title="Nikkah Venue Video"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            </div>

            <div className="absolute -bottom-5 -left-5 hidden rounded-2xl border border-[#9A7A4F]/30 bg-[#F5EBDD] px-5 py-4 shadow-lg sm:block">
              <p className="text-xs uppercase tracking-widest text-[#8B4A9B]">
                Our Special Day
              </p>
              <p className="mt-1 font-serif text-lg text-[#54265F]">
                بِسْمِ اللهِ
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="mx-auto flex max-w-4xl items-center justify-center gap-4 px-6">
        <div className="h-px flex-1 bg-[#9A7A4F]/30" />
        <div className="h-3 w-3 rotate-45 border border-[#9A7A4F]" />
        <div className="h-px flex-1 bg-[#9A7A4F]/30" />
      </div>

      {/* COUPLE & FAMILY */}
      <section id="couple" className="px-6 py-20 lg:py-28">
        <div className="mx-auto max-w-6xl">
          <div className="mx-auto mb-14 max-w-2xl text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#8B4A9B]">
              Two Families, One Beautiful Beginning
            </p>

            <h2 className="mt-4 font-serif text-4xl text-[#48204F] sm:text-5xl">
              The Couple & Their Families
            </h2>

            <p className="mt-5 leading-7 text-[#6E5B70]">
              With gratitude to Allah, two families come together in love,
              faith, and celebration.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            {/* Bride */}
            <div className="group relative overflow-hidden rounded-4xl border border-[#54265F]/10 bg-[#FAF3E8] p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-xl">
              <div className="absolute right-0 top-0 h-32 w-32 rounded-bl-full bg-[#87518F]/5" />

              <div className="relative">
                <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#9A7A4F]">
                  The Bride
                </p>

                <h3 className="mt-4 font-serif text-4xl text-[#54265F]">
                  Summayyah Olamide Akinsowon
                </h3>

                <div className="my-6 h-px w-16 bg-[#9A7A4F]" />

                <p className="text-sm uppercase tracking-wider text-[#8B4A9B]">
                  Daughter of
                </p>

                <p className="mt-2 font-serif text-xl text-[#3F2B43]">
                  Alhaji Tajuddin Akinsowon
                </p>

                <div className="mt-7 flex items-start gap-3">
                  <MapPin
                    size={19}
                    className="mt-0.5 shrink-0 text-[#87518F]"
                  />

                  <div>
                    <p className="text-xs uppercase tracking-wider text-[#8B4A9B]">
                      Family Origin
                    </p>
                    <p className="mt-1 text-[#665568]">
                      Obafemi Owode, Iro, Ogun State
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Groom */}
            <div className="group relative overflow-hidden rounded-4xl border border-[#54265F]/10 bg-[#FAF3E8] p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-xl">
              <div className="absolute right-0 top-0 h-32 w-32 rounded-bl-full bg-[#87518F]/5" />

              <div className="relative">
                <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#9A7A4F]">
                  The Groom
                </p>

                <h3 className="mt-4 font-serif text-4xl text-[#54265F]">
                  Ridwanullah Oluwatobiloba Awofeso
                </h3>

                <div className="my-6 h-px w-16 bg-[#9A7A4F]" />

                <p className="text-sm uppercase tracking-wider text-[#8B4A9B]">
                  Son of
                </p>

                <p className="mt-2 font-serif text-xl text-[#3F2B43]">
                  Alhaji Awofeso
                </p>

                <div className="mt-7 flex items-start gap-3">
                  <MapPin
                    size={19}
                    className="mt-0.5 shrink-0 text-[#87518F]"
                  />

                  <div>
                    <p className="text-xs uppercase tracking-wider text-[#8B4A9B]">
                      Family Origin
                    </p>
                    <p className="mt-1 text-[#665568]">
                      Sagamu Remo, Ogun State.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Quran quote */}
          <div className="mx-auto mt-12 max-w-3xl rounded-4xl border border-[#9A7A4F]/20 bg-[#54265F] px-8 py-10 text-center text-[#F8EFDF]">
            <p className="font-serif text-2xl leading-relaxed sm:text-3xl">
              “And among His signs is that He created for you spouses from among
              yourselves so that you may find tranquility in them.”
            </p>

            <p className="mt-5 text-xs uppercase tracking-[0.25em] text-[#DCC79F]">
              Qur'an 30:21
            </p>
          </div>
        </div>
      </section>

      {/* VENUE */}
      <section
        id="venue"
        className="border-y border-[#54265F]/10 bg-[#EEE0CF] px-6 py-20 lg:py-28"
      >
        <div className="mx-auto max-w-6xl">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            {/* Venue image */}
            <div className="relative">
              <div className="absolute -bottom-5 -right-5 h-full w-full rounded-4xl border border-[#87518F]/20" />

              <img
                src={venue}
                alt="Nikkah venue"
                className="relative aspect-4/3 w-full rounded-4xl object-cover shadow-xl"
              />
            </div>

            {/* Venue details */}
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#8B4A9B]">
                Where We Gather
              </p>

              <h2 className="mt-4 font-serif text-4xl text-[#48204F] sm:text-5xl">
                The Venue
              </h2>

              <p className="mt-5 leading-7 text-[#665568]">
                We would be honoured to have you join us at this beautiful venue
                as we begin this new chapter together.
              </p>

              <div className="mt-8 space-y-5">
                <div className="flex gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#54265F] text-[#F8EFDF]">
                    <MapPin size={19} />
                  </div>

                  <div>
                    <p className="font-semibold text-[#48204F]">
                      Shamsi Adisa Thomas (SAT) Mosque
                    </p>

                    <p className="mt-1 text-sm leading-6 text-[#6E5B70]">
                      Old Secretariat,
                      <br />
                      Ikeja GRA, Lagos, Nigeria
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#54265F] text-[#F8EFDF]">
                    <Clock3 size={19} />
                  </div>

                  <div>
                    <p className="font-semibold text-[#48204F]">
                      Ceremony Time
                    </p>

                    <p className="mt-1 text-sm text-[#6E5B70]">
                      Saturday, 19 December 2026 · 9:00 AM
                    </p>
                  </div>
                </div>
              </div>

              <a
                href={venueMapUrl}
                target="_blank"
                rel="noreferrer"
                className="mt-9 inline-flex items-center gap-2 rounded-full bg-[#54265F] px-6 py-3.5 text-sm font-medium text-[#F8EFDF] transition hover:bg-[#6D3479]"
              >
                <Navigation size={17} />
                Get Directions
                <ExternalLink size={14} />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* DRESS CODE */}
      <section id="dress-code" className="px-6 py-20 lg:py-28">
        <div className="mx-auto max-w-6xl">
          <div className="mx-auto mb-14 max-w-2xl text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#8B4A9B]">
              What to Wear
            </p>

            <h2 className="mt-4 font-serif text-4xl text-[#48204F] sm:text-5xl">
              Dress Code
            </h2>

            <p className="mt-5 leading-7 text-[#6E5B70]">
              Come dressed in your finest modest and elegant attire. Our
              preferred palette for the day is inspired by rich purple and warm
              cream.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {/* Modest Elegance */}
            <DressCard
              title="Modest Elegance"
              subtitle="For Everyone"
              description="Elegant, modest and occasion-appropriate outfits are warmly encouraged."
              image={decorativeImage}
            />

            {/* Purple */}
            <div className="relative overflow-hidden rounded-4xl bg-[#54265F] p-8 text-[#F8EFDF] shadow-xl">
              <div className="absolute -right-12 -top-12 h-40 w-40 rounded-full border border-[#F8EFDF]/10" />

              <div className="relative">
                <div className="mb-8 flex h-16 w-16 items-center justify-center rounded-full border border-[#DCC79F]/40 bg-[#6D3479]">
                  <div className="h-7 w-7 rounded-full bg-[#8B4A9B]" />
                </div>

                <p className="text-xs uppercase tracking-[0.25em] text-[#DCC79F]">
                  Colour Palette
                </p>

                <h3 className="mt-3 font-serif text-3xl">Rich Purple</h3>

                <p className="mt-4 text-sm leading-7 text-[#E8DCE9]">
                  Deep purple, plum, mauve and other sophisticated purple tones
                  are especially welcome.
                </p>
              </div>
            </div>

            {/* Cream */}
            <div className="relative overflow-hidden rounded-4xl border border-[#9A7A4F]/20 bg-[#F9F0E1] p-8 shadow-sm">
              <div className="mb-8 flex h-16 w-16 items-center justify-center rounded-full border border-[#9A7A4F]/30 bg-[#EFE0C7]">
                <div className="h-7 w-7 rounded-full bg-[#D8C19A]" />
              </div>

              <p className="text-xs uppercase tracking-[0.25em] text-[#8B4A9B]">
                Colour Palette
              </p>

              <h3 className="mt-3 font-serif text-3xl text-[#54265F]">
                Deep Cream
              </h3>

              <p className="mt-4 text-sm leading-7 text-[#6E5B70]">
                Cream, champagne, beige and warm neutral shades complement the
                theme beautifully.
              </p>
            </div>
          </div>

          <div className="mt-10 rounded-2xl border border-[#54265F]/10 bg-[#FAF3E8] p-6 text-center">
            <p className="text-sm text-[#665568]">
              <span className="font-semibold text-[#54265F]">Kindly note:</span>{" "}
              We encourage modest and respectful dressing suitable for a Nikkah
              ceremony.
            </p>
          </div>
        </div>
      </section>

      {/* FINAL INVITATION */}
      <section className="px-6 pb-20 pt-8">
        <div className="mx-auto max-w-5xl overflow-hidden rounded-[2.5rem] bg-[#54265F] px-6 py-16 text-center text-[#F8EFDF] sm:px-12">
          <p className="text-xs uppercase tracking-[0.35em] text-[#DCC79F]">
            With Love & Gratitude
          </p>

          <h2 className="mx-auto mt-5 max-w-3xl font-serif text-4xl leading-tight sm:text-5xl">
            Your presence would make our special day even more meaningful.
          </h2>

          <p className="mx-auto mt-6 max-w-xl leading-7 text-[#E7DAE8]">
            We look forward to celebrating this beautiful beginning with our
            families, friends and loved ones.
          </p>

          <div className="mt-9">
            <p className="font-serif text-3xl">
              Summayyah <span className="text-[#DCC79F]">&</span> Ridwanullah
            </p>

            <p className="mt-3 text-xs uppercase tracking-[0.3em] text-[#DCC79F]">
              19 · 12 · 2026
            </p>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-[#54265F]/10 px-6 py-8 text-center">
        <p className="font-serif text-lg text-[#54265F]">
          بِسْمِ اللهِ الرَّحْمٰنِ الرَّحِيْمِ
        </p>

        <p className="mt-2 text-xs text-[#806F82]">
          Made with love for a beautiful beginning.
        </p>
      </footer>
    </div>
  );
}

function DressCard({ title, subtitle, description, image }) {
  return (
    <div className="overflow-hidden rounded-4xl border border-[#54265F]/10 bg-[#FAF3E8] shadow-sm">
      <div className="h-52 overflow-hidden">
        <img
          src={image}
          alt=""
          className="h-full w-full object-cover transition duration-700 hover:scale-105"
        />
      </div>

      <div className="p-8">
        <p className="text-xs uppercase tracking-[0.25em] text-[#9A7A4F]">
          {subtitle}
        </p>

        <h3 className="mt-3 font-serif text-3xl text-[#54265F]">{title}</h3>

        <p className="mt-4 text-sm leading-7 text-[#6E5B70]">
          {description}
        </p>
      </div>
    </div>
  );
}

export default App;

