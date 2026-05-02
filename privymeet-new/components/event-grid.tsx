"use client";

import { EventItem } from "@/lib/types";
import { CalendarDays, MapPin } from "lucide-react";
import { cn } from "@/lib/utils";

type Props = {
  events: EventItem[];
  selectedEventId?: string;
  onSelect: (event: EventItem) => void;
};

export function EventGrid({ events, selectedEventId, onSelect }: Props) {
  return (
    <div className="grid gap-4 md:grid-cols-3">
      {events.map((event) => {
        const active = selectedEventId === event.id;

        return (
          <button
            key={event.id}
            onClick={() => onSelect(event)}
            className={cn(
              "group rounded-3xl border p-5 text-left transition",
              "bg-white/5 backdrop-blur-xl hover:bg-white/10",
              active
                ? "border-cyan-400/60 ring-1 ring-cyan-400/40"
                : "border-white/10"
            )}
          >
            <div
              className={cn(
                "mb-4 rounded-2xl border border-white/10 bg-gradient-to-br p-4",
                event.banner
              )}
            >
              <div className="text-sm text-white/60">Featured Event</div>
              <div className="mt-2 text-xl font-semibold text-white">
                {event.name}
              </div>
            </div>

            <p className="mb-4 text-sm leading-6 text-white/65">
              {event.description}
            </p>

            <div className="space-y-2 text-sm text-white/60">
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4" />
                <span>{event.location}</span>
              </div>
              <div className="flex items-center gap-2">
                <CalendarDays className="h-4 w-4" />
                <span>{event.date}</span>
              </div>
            </div>
          </button>
        );
      })}
    </div>
  );
}