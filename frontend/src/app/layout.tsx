import "@/styles/globals.css";
import { type Metadata } from "next";

export const metadata: Metadata = {
  title: "Financial Inclusion Platform",
  description: "Empowering financial inclusion across India with AI-powered solutions",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className="bg-wheat">
      <body>{children}</body>
    </html>
  );
}
