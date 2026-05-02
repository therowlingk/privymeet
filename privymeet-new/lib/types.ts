export type EventItem = {
  id: string;
  name: string;
  location: string;
  date: string;
  description: string;
  attendeeHashes: string[];
  banner: string;
};

export type MatchResult = {
  matched: string[];
  totalInput: number;
  totalMatches: number;
  eventId: string;
  eventName: string;
  privacySummary: string;
};