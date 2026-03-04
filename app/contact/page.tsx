import type { Metadata } from "next";
import ClientContact from "./ClientContact";

export const metadata: Metadata = {
  title: "Let's Talk"
};

export default function Contact() {
  return <ClientContact />;
}
