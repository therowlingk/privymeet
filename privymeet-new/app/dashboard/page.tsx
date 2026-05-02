"use client";

import { useMemo, useState } from "react";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { EventGrid } from "@/components/event-grid";
import { ContactImporter } from "@/components/contact-importer";
import { ResultPanel } from "@/components/result-panel";
import { WalletButton } from "@/components/wallet-button";
import { mockEvents } from "@/lib/mock-data";
import { EventItem, MatchResult } from "@/lib/types";
import { hashMany } from "@/lib/hash";
import { runPrivateSetIntersection } from "@/lib/arcium";
import { Shield, Zap } from "lucide-react";

export default function DashboardPage() {
  const [selectedEvent, setSelectedEvent] = useState<EventItem | null>(mockEvents[0]);
  const [contacts, setContacts] = useState<string[]>([]);
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<MatchResult | null>(null);

  const canRun = useMemo(() => {
    return !!selectedEvent && contacts.length > 0 && !loading;
  }, [selectedEvent, contacts, loading]);

  const handleRun = async () => {
    if (!selectedEvent || contacts.length === 0) return;

    setLoading(true);
    setResult(null);

    try {
      const hashes = await hashMany(contacts);

      const computed = await runPrivateSetIntersection({
        eventId: selectedEvent.id,
        eventName: selectedEvent.name,
        contactHashes: hashes,
        attendeeHashes: selectedEvent.attendeeHashes,
        originalContacts: contacts,
      });

      setResult(computed);
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen">
      <Navbar />

      <section className="mx-auto max-w-7xl px-6 py-12">
        <div className="mb-8 flex flex-col justify-between gap-6 rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl md:flex-row md:items-center">
          <div>
            <div className="mb-2 inline-flex items-center gap-2 rounded-full border border-emerald-400/20 bg-emerald-400/10 px-3 py-1 text-xs text-emerald-200">
              <Shield className="h-3.5 w-3.5" />
              Privacy-preserving event discovery
            </div>
            <h1 className="text-3xl font-semibold text-white">Dashboard</h1>
            <p className="mt-2 max-w-2xl text-sm leading-6 text-white/60">
              Select an event, import your contacts, and run a private overlap check.
              Only matches are revealed.
            </p>
          </div>

          <WalletButton />
        </div>

        <div className="space-y-6">
          <div>
            <h2 className="mb-4 text-xl font-semibold text-white">Choose event</h2>
            <EventGrid
              events={mockEvents}
              selectedEventId={selectedEvent?.id}
              onSelect={(event) => {
                setSelectedEvent(event);
                setResult(null);
              }}
            />
          </div>

          <div className="grid gap-6 lg:grid-cols-2">
            <ContactImporter contacts={contacts} setContacts={setContacts} />
            <ResultPanel result={result} loading={loading} />
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
            <div className="mb-3 flex items-center gap-3">
              <Zap className="h-5 w-5 text-violet-300" />
              <h3 className="text-lg font-semibold text-white">Run private match</h3>
            </div>

            <p className="mb-5 max-w-3xl text-sm leading-6 text-white/60">
              In the current demo, contacts are hashed locally in the browser and matched via a mock confidential-compute adapter.
              This adapter is intentionally structured to be replaced with Arcium client encryption and confidential computation flow.
            </p>

            <button
              disabled={!canRun}
              onClick={handleRun}
              className="rounded-full bg-gradient-to-r from-violet-500 to-cyan-400 px-6 py-3 text-sm font-semibold text-white transition disabled:cursor-not-allowed disabled:opacity-50"
            >
              {loading ? "Running..." : "Run Private Match"}
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}