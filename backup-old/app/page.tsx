import Link from "next/link";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Logo } from "@/components/logo";
import { ShieldCheck, Sparkles, Users, LockKeyhole } from "lucide-react";

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <Navbar />

      <section className="relative overflow-hidden">
        <div className="mx-auto max-w-7xl px-6 py-20 md:py-28">
          <div className="mx-auto max-w-3xl text-center">
            <div className="mb-6 flex justify-center">
              <div className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/70 backdrop-blur">
                Powered by Solana + Arcium
              </div>
            </div>

            <div className="mb-8 flex justify-center">
              <Logo />
            </div>

            <h1 className="text-4xl font-semibold tracking-tight text-white md:text-6xl">
              Private event networking, without exposing your contact list.
            </h1>

            <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-white/65 md:text-lg">
              PrivyMeet helps users discover which of their contacts are attending the same event,
              while revealing only matches. Non-matching contacts remain hidden, and the full event roster stays private.
            </p>

            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link
                href="/dashboard"
                className="rounded-full bg-gradient-to-r from-violet-500 to-cyan-400 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-cyan-500/10 transition hover:opacity-90"
              >
                Launch App
              </Link>
              <Link
                href="/how-it-works"
                className="rounded-full border border-white/10 bg-white/5 px-6 py-3 text-sm font-medium text-white/85 transition hover:bg-white/10"
              >
                How it works
              </Link>
            </div>
          </div>

          <div className="mt-20 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {[
              {
                icon: ShieldCheck,
                title: "Private by design",
                body: "Only the overlap is revealed. All non-matches stay hidden.",
              },
              {
                icon: Users,
                title: "Better event UX",
                body: "Discover relevant people you already know before or during an event.",
              },
              {
                icon: LockKeyhole,
                title: "Roster protection",
                body: "The event organizer does not need to reveal the full attendee list.",
              },
              {
                icon: Sparkles,
                title: "Arcium-ready architecture",
                body: "Designed to map private matching into confidential computation flows.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl"
              >
                <item.icon className="mb-4 h-6 w-6 text-cyan-300" />
                <h3 className="text-lg font-semibold text-white">{item.title}</h3>
                <p className="mt-2 text-sm leading-6 text-white/60">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}