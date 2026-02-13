import type { Metadata } from "next";
import BooksContent from "@/components/books-content";

export const metadata: Metadata = {
  title: "Books",
  description:
    "Explore the Grace Revelations series by Apostle Victor Okonkwo — books on servant leadership, church unity, and Kingdom-centered vision.",
};

export default function BooksPage() {
  return <BooksContent />;
}
