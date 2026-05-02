"use client";

import { useMemo, useState } from "react";
import Papa from "papaparse";
import { Upload, ClipboardList, Trash2 } from "lucide-react";

type Props = {
  contacts: string[];
  setContacts: (contacts: string[]) => void;
};

export function ContactImporter({ contacts, setContacts }: Props) {
  const [input, setInput] = useState("");

  const parsedContacts = useMemo(() => {
    return input
      .split(/\r?\n|,|;/)
      .map((v) => v.trim())
      .filter(Boolean);
  }, [input]);

  const handleAdd = () => {
    const merged = Array.from(new Set([...contacts, ...parsedContacts]));
    setContacts(merged);
    setInput("");
  };

  const handleCsv = (file: File) => {
    Papa.parse<string[]>(file, {
      complete: (results) => {
        const flattened = results.data.flat().map((v) => String(v || "").trim());
        const valid = flattened.filter(Boolean);
        const merged = Array.from(new Set([...contacts, ...valid]));
        setContacts(merged);
      },
    });
  };

  return (
    <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
      <div className="mb-4 flex items-center gap-3">
        <ClipboardList className="h-5 w-5 text-cyan-300" />
        <h3 className="text-lg font-semibold text-white">Import contacts</h3>
      </div>

      <p className="mb-4 text-sm leading-6 text-white/60">
        Paste emails, usernames, or phone numbers. Inputs are normalized and hashed in the client before matching.
      </p>

      <textarea
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="alice@example.com, bob@example.com, +1 555 123 4567"
        className="min-h-[140px] w-full rounded-2xl border border-white/10 bg-slate-950/80 p-4 text-sm text-white outline-none placeholder:text-white/30"
      />

      <div className="mt-4 flex flex-wrap gap-3">
        <button
          onClick={handleAdd}
          className="rounded-full bg-gradient-to-r from-violet-500 to-cyan-400 px-5 py-2.5 text-sm font-semibold text-white transition hover:opacity-90"
        >
          Add contacts
        </button>

        <label className="cursor-pointer rounded-full border border-white/10 px-5 py-2.5 text-sm font-medium text-white/80 hover:bg-white/5">
          <span className="inline-flex items-center gap-2">
            <Upload className="h-4 w-4" />
            Upload CSV
          </span>
          <input
            type="file"
            accept=".csv"
            hidden
            onChange={(e) => {
              const file = e.target.files?.[0];
              if (file) handleCsv(file);
            }}
          />
        </label>

        <button
          onClick={() => setContacts([])}
          className="rounded-full border border-red-400/20 bg-red-400/10 px-5 py-2.5 text-sm font-medium text-red-200 hover:bg-red-400/15"
        >
          <span className="inline-flex items-center gap-2">
            <Trash2 className="h-4 w-4" />
            Clear list
          </span>
        </button>
      </div>

      <div className="mt-5 rounded-2xl border border-white/10 bg-slate-950/60 p-4">
        <div className="mb-2 text-sm text-white/50">
          Current contact entries: {contacts.length}
        </div>
        <div className="flex max-h-44 flex-wrap gap-2 overflow-y-auto">
          {contacts.length === 0 ? (
            <span className="text-sm text-white/35">No contacts added yet.</span>
          ) : (
            contacts.map((contact) => (
              <span
                key={contact}
                className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/75"
              >
                {contact}
              </span>
            ))
          )}
        </div>
      </div>
    </div>
  );
}