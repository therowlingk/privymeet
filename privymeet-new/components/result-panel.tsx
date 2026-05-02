"use client";

import { MatchResult } from "@/lib/types";
import { CheckCircle2, ShieldCheck, Users } from "lucide-react";
import { motion } from "framer-motion";

type Props = {
  result: MatchResult | null;
  loading: boolean;
};

export function ResultPanel({ result, loading }: Props) {
  return (
    <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
      <div className="mb-4 flex items-center gap-3">
        <ShieldCheck className="h-5 w-5 text-emerald-300" />
        <h3 className="text-lg font-semibold text-white">Private match result</h3>
      </div>

      {loading ? (
        <motion.div
          initial={{ opacity: 0.4 }}
          animate={{ opacity: 1 }}
          transition={{ repeat: Infinity, repeatType: "reverse", duration: 0.8 }}
          className="rounded-2xl border border-cyan-400/20 bg-cyan-400/5 p-5 text-sm text-cyan-100"
        >
          Running private set intersection...
        </motion.div>
      ) : !result ? (
        <div className="rounded-2xl border border-white/10 bg-slate-950/60 p-5 text-sm text-white/50">
          No result yet. Select an event, import contacts, and run a private match.
        </div>
      ) : (
        <div className="space-y-4">
          <div className="rounded-2xl border border-emerald-400/20 bg-emerald-400/5 p-4">
            <div className="mb-2 flex items-center gap-2 text-emerald-200">
              <CheckCircle2 className="h-4 w-4" />
              <span className="font-medium">Match completed for {result.eventName}</span>
            </div>
            <p className="text-sm leading-6 text-emerald-100/80">
              {result.privacySummary}
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-3">
            <div className="rounded-2xl border border-white/10 bg-slate-950/60 p-4">
              <div className="text-sm text-white/50">Contacts scanned</div>
              <div className="mt-2 text-2xl font-semibold text-white">
                {result.totalInput}
              </div>
            </div>

            <div className="rounded-2xl border border-white/10 bg-slate-950/60 p-4">
              <div className="text-sm text-white/50">Private matches</div>
              <div className="mt-2 text-2xl font-semibold text-white">
                {result.totalMatches}
              </div>
            </div>

            <div className="rounded-2xl border border-white/10 bg-slate-950/60 p-4">
              <div className="flex items-center gap-2 text-sm text-white/50">
                <Users className="h-4 w-4" />
                Revealed outputs
              </div>
              <div className="mt-2 text-2xl font-semibold text-white">
                Matches only
              </div>
            </div>
          </div>

          <div className="rounded-2xl border border-white/10 bg-slate-950/60 p-4">
            <div className="mb-3 text-sm text-white/50">Matched contacts</div>
            {result.matched.length === 0 ? (
              <p className="text-sm text-white/50">No overlap found for this event.</p>
            ) : (
              <div className="flex flex-wrap gap-2">
                {result.matched.map((match) => (
                  <span
                    key={match}
                    className="rounded-full border border-cyan-400/20 bg-cyan-400/10 px-3 py-1 text-sm text-cyan-100"
                  >
                    {match}
                  </span>
                ))}
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}