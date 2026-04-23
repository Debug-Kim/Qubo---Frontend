import type { Metadata } from "next";
import ContactForm from "@/components/sections/ContactForm";

export const metadata: Metadata = {
  title: "Contact — QUBO LLC",
  description:
    "Engage QUBO LLC for institutional partnerships, capital allocation discussions, and technology licensing. We work selectively with qualified counterparties.",
};

export default function ContactPage() {
  return <ContactForm />;
}
