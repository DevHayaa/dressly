import Home from "@/components/Home";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dressly | Premium Ladies Suits Store",
  description: "Discover elegant and sophisticated ladies suits at Dressly. Premium quality, perfect fit, and timeless style for the modern woman.",
  // other metadata
};

export default function HomePage() {
  return (
    <>
      <Home />
    </>
  );
}
