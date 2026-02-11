import type { Metadata } from "next";
import AboutContent from "@/components/about-content";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn about Apostle Victor Okonkwo — his mission, ministry, and vision for the Church.",
};

export default function AboutPage() {
  return <AboutContent />;
}
