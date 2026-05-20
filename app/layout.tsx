import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Prompt Cost Leak Scanner – Find Expensive Prompts Draining Your AI Budget",
  description: "Scan your OpenAI usage logs to identify prompts with poor cost/value ratio. Stop wasting money on inefficient AI prompts."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="c0b1d4fd-10e6-40f3-af25-fe9d091637ee"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] min-h-screen">{children}</body>
    </html>
  );
}
