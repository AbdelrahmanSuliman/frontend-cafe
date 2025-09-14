import type { Metadata } from "next";
import { Lora, Raleway } from "next/font/google";
import "./globals.css";

const headerFont = Raleway({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

const bodyFont = Lora({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});
export const metadata: Metadata = {
  title: "Pour Café",
  description: "Cozy café",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />

      <body
        className={`${headerFont.variable} ${bodyFont.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
