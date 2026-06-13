import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Docker Cost Leak Detector – Find Hidden Container Waste",
  description: "Scan your Docker environments to find zombie containers, oversized instances, and idle services draining your cloud budget."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="23e96db0-7cc0-4898-9c98-a7d47a68084e"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">{children}</body>
    </html>
  );
}
