import { MatchResult } from "./types";

type PrivateMatchParams = {
  eventId: string;
  eventName: string;
  contactHashes: string[];
  attendeeHashes: string[];
  originalContacts: string[];
};

export async function runPrivateSetIntersectionMock({
  eventId,
  eventName,
  contactHashes,
  attendeeHashes,
  originalContacts,
}: PrivateMatchParams): Promise<MatchResult> {
  await new Promise((resolve) => setTimeout(resolve, 1600));

  const attendeeSet = new Set(attendeeHashes);

  const matched = contactHashes
    .map((hash, index) => ({
      hash,
      original: originalContacts[index],
    }))
    .filter((item) => attendeeSet.has(item.hash))
    .map((item) => item.original);

  return {
    matched,
    totalInput: originalContacts.length,
    totalMatches: matched.length,
    eventId,
    eventName,
    privacySummary:
      "Only intersection is revealed. Non-matching contacts and the full attendee roster remain hidden.",
  };
}

export async function runPrivateSetIntersection(params: PrivateMatchParams) {
  return runPrivateSetIntersectionMock(params);
}