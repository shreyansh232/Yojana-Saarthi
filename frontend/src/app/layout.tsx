"use client";
import "@/styles/globals.css";
import { type Metadata } from "next";
import { I18nextProvider } from "react-i18next";
import i18n from "../utils/i18n"; // Adjust the path according to your project structure

// export const metadata: Metadata = {
//   title: "Financial Inclusion Platform",
//   description:
//     "Empowering financial inclusion across India with AI-powered solutions",
//   icons: [{ rel: "icon", url: "/favicon.ico" }],
// };

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className="bg-wheat" suppressHydrationWarning={true}>
      <I18nextProvider i18n={i18n}>
        <body>{children}</body>
      </I18nextProvider>
    </html>
  );
}
