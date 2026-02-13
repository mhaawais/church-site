import type { Metadata } from "next";
import EventsContent from "@/components/events-content";

export const metadata: Metadata = {
  title: "Events",
  description:
    "Join Apostle Victor Okonkwo for worship services, Bible studies, prayer nights, and special events — in person or online.",
};

export default function EventsPage() {
  return <EventsContent />;
}
