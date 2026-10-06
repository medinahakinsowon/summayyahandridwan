
import React, {useState} from "react";
import { MapPin, CalendarDays, Heart, Play, X , Phone, Clock3, ExternalLink, Navigation} from "lucide-react";

import venue from "./assets/masjid.png"


// Venue video — replace this when you find the video
const venueVideo =
  "https://www.youtube.com/embed/tG8i2pHk7go?start=282&playsinline=1&rel=0";

// Shamsi Adisa Thomas (SAT) Mosque, Ikeja GRA
const venueMapUrl =
  "https://www.google.com/maps/search/?api=1&query=Shamsi+Adisa+Thomas+SAT+Mosque+Ikeja+GRA+Lagos";

const decorativeImage =
  "https://images.unsplash.com/photo-1603006905003-be475563bc59?auto=format&fit=crop&w=900&q=85";

function App() {
  const [showVideo, setShowVideo] = useState(false);

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
     <section className="relative min-h-[92vh] overflow-hidden bg-[#F5EBDD]">

  {/* Background decoration */}
  <div className="absolute inset-0 pointer-events-none">
    <div className="absolute -top-32 -left-32 w-72 h-72 rounded-full bg-purple-900/5 blur-3xl" />
    <div className="absolute -bottom-32 -right-32 w-80 h-80 rounded-full bg-purple-900/5 blur-3xl" />
  </div>

  <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 py-12 sm:py-16 lg:py-20">

    {/* Intro */}
    <div className="text-center mb-10 sm:mb-12">

      <p className="text-xs sm:text-sm tracking-[0.3em] uppercase text-purple-800 font-medium mb-4">
        Bismillahir Rahmanir Raheem
      </p>

      <div className="flex items-center justify-center gap-3 mb-5">
        <span className="w-10 sm:w-16 h-px bg-purple-400/60" />
        <span className="text-purple-700 text-lg">✦</span>
        <span className="w-10 sm:w-16 h-px bg-purple-400/60" />
      </div>

      <p className="text-sm sm:text-base text-gray-600 mb-3">
        You are cordially invited to
      </p>

      <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-purple-950 leading-tight">
        Nikkah Ceremony
      </h1>

      <p className="mt-4 text-2xl font-semibold sm:text-lg text-gray-600">
        Summayyah Olamide Akinsowon <br/>
        <span className="mx-2 text-purple-700">&</span><br/>
        Ridwanullah Oluwatobiloba Awofeso
      </p>
    </div>


    {/* HERO VIDEO / COVER */}
    <div className="relative max-w-6xl mx-auto">

      <div className="
        relative
        overflow-hidden
        rounded-2xl
        sm:rounded-3xl
        shadow-2xl
        border
        border-purple-900/20
        bg-purple-950
        aspect-[4/3]
        sm:aspect-video
      ">

        {!showVideo ? (

          /* =========================
             MOSQUE IMAGE COVER
          ========================== */
          <button
            type="button"
            onClick={() => setShowVideo(true)}
            className="group absolute inset-0 w-full h-full text-left"
            aria-label="Play venue video"
          >

            {/* Mosque image */}
            <img
              src={venue}
              alt="Shamsi Adisa Thomas Mosque, Ikeja"
              className="
                absolute
                inset-0
                w-full
                h-full
                object-cover
                transition
                duration-700
                group-hover:scale-105
              "
            />

            {/* Dark purple overlay */}
            <div className="
              absolute
              inset-0
              bg-purple-950/45
              group-hover:bg-purple-950/35
              transition
              duration-500
            " />

            {/* Bottom gradient */}
            <div className="
              absolute
              inset-x-0
              bottom-0
              h-1/2
              bg-gradient-to-t
              from-purple-950/80
              to-transparent
            " />

            {/* Play button */}
            <div className="
              absolute
              inset-0
              flex
              items-center
              justify-center
            ">

              <div className="
                flex
                items-center
                justify-center
                w-16
                h-16
                sm:w-20
                sm:h-20
                rounded-full
                bg-white/95
                text-purple-900
                shadow-2xl
                transition
                duration-300
                group-hover:scale-110
              ">

                <Play
                  size={30}
                  fill="currentColor"
                  className="ml-1 sm:w-8 sm:h-8"
                />

              </div>

            </div>


            {/* Video label */}
            <div className="
              absolute
              bottom-5
              left-5
              right-5
              sm:bottom-8
              sm:left-8
              sm:right-8
              text-white
            ">

              <p className="
                text-[10px]
                sm:text-xs
                uppercase
                tracking-[0.3em]
                text-white/80
                mb-2
              ">
                Our Venue
              </p>

              <h2 className="
                font-serif
                text-xl
                sm:text-2xl
                md:text-3xl
              ">
                Shamsi Adisa Thomas (SAT) Mosque
              </h2>

              <p className="text-sm sm:text-base text-white/80 mt-1">
                Ikeja GRA, Lagos
              </p>

            </div>

          </button>

        ) : (

          /* =========================
             YOUTUBE VIDEO
          ========================== */
          <iframe
            className="absolute inset-0 w-full h-full"
            src={venueVideo}
            title="Shamsi Adisa Thomas Mosque Venue Video"
            allow="
              accelerometer;
              autoplay;
              clipboard-write;
              encrypted-media;
              gyroscope;
              picture-in-picture;
              web-share
            "
            allowFullScreen
          />

        )}

      </div>

    </div>


    {/* Ceremony information below video */}
    <div className="
      mt-8
      sm:mt-10
      flex
      flex-col
      sm:flex-row
      items-center
      justify-center
      gap-4
      sm:gap-8
      text-center
    ">

      <div className="flex items-center gap-2 text-purple-900">
        <CalendarDays size={18} />

        <span className="text-sm sm:text-base">
          19th of December
        </span>
      </div>

      <span className="hidden sm:block text-purple-400">
        •
      </span>

      <div className="flex items-center gap-2 text-purple-900">
        <MapPin size={18} />

        <span className="text-sm sm:text-base">
          Shamsi Adisa Thomas (SAT) Mosque, Ikeja
        </span>
      </div>

    </div>


    {/* RSVP */}
    <div className="mt-7 flex flex-col items-center">

      <p className="
        text-xs
        uppercase
        tracking-[0.25em]
        text-gray-500
        mb-3
      ">
        RSVP
      </p>

      <div className="
        flex
        flex-col
        sm:flex-row
        items-center
        gap-2
        sm:gap-6
        text-sm
        sm:text-base
        text-purple-900
      ">

        <a
          href="tel:+2348063435674"
          className="flex items-center gap-2 hover:text-purple-600 transition"
        >
          <Phone size={16} />
          Aminat · 08063435674
        </a>

        <span className="hidden sm:block text-purple-300">
          |
        </span>

        <a
          href="tel:+2348061230091"
          className="flex items-center gap-2 hover:text-purple-600 transition"
        >
          <Phone size={16} />
          Saheed · 08061230091
        </a>

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
                  Alhaji Tajuddin Afolabi Akinsowon
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
                  Alhaji Adamson Olajide Awofeso
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

