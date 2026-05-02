import { EventItem } from "./types";

export const mockEvents: EventItem[] = [
  {
    id: "solana-breakpoint",
    name: "Solana Breakpoint Side Event",
    location: "Singapore",
    date: "2026-06-18",
    description:
      "A curated builder meetup for founders, developers, and ecosystem operators.",
    banner:
      "from-violet-600/30 via-fuchsia-500/20 to-cyan-500/20",
    attendeeHashes: [
      "ff8d9819fc0e12bf0d24892e45987e249a28dce836a85cad60e28eaaa8c6d976",
      "5ff860bf1190596c7188ab851db691f0f3169c453936e9e1eba2f9a47f7a0018",
      "e0d47ca1bc1eb62e650fc1fd660438c230e8f4b1f341cf1f5123370c5c1616e9",
    ],
  },
  {
    id: "zk-builders-night",
    name: "ZK Builders Night",
    location: "New York",
    date: "2026-07-09",
    description:
      "An invite-only evening for privacy, zero-knowledge, and infra teams.",
    banner:
      "from-cyan-500/30 via-blue-500/20 to-violet-500/20",
    attendeeHashes: [
      "7b34211350ff567970974e1e2b98d319a601969e74fd1a957bc889b8332d00eb",
      "d0574c4966d2c326193622feebc64991c5b59807ae68fa8255b26c79f4bf917a",
      "405340cd9ac94b08b93800aee3f0db2dd673256bc318987e51e177eb53cca1b2",
    ],
  },
  {
    id: "privacy-hack-lounge",
    name: "Privacy Hack Lounge",
    location: "Remote / Global",
    date: "2026-08-02",
    description:
      "A virtual networking and demo session for privacy-preserving application builders.",
    banner:
      "from-emerald-500/30 via-cyan-500/20 to-indigo-500/20",
    attendeeHashes: [
      "ff8d9819fc0e12bf0d24892e45987e249a28dce836a85cad60e28eaaa8c6d976",
      "7b34211350ff567970974e1e2b98d319a601969e74fd1a957bc889b8332d00eb",
      "405340cd9ac94b08b93800aee3f0db2dd673256bc318987e51e177eb53cca1b2",
    ],
  },
];