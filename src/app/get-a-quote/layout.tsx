import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Get a Quote",
  description:
    "Contact Deltive Engineering for product design, mechanical engineering, prototyping and manufacturing support.",
  alternates: {
    canonical: "/get-a-quote",
  },
};

export default function GetAQuoteLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
