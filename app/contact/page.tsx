import type { Metadata } from "next";
import ContactContent from "@/components/contact-content";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with Apostle Victor Okonkwo — send a message, prayer request, or inquiry through our contact form.",
};

export default function ContactPage() {
  return <ContactContent />;
}
