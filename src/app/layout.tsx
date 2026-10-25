import type { Metadata } from "next";
import "./globals.css";
export const metadata: Metadata = {
  title: "Failure Passport | TRACEFORGE",
  description: "Engineering knowledge reuse for industrial reliability. Capture failures, evidence, repairs and lessons learned.",
};
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}