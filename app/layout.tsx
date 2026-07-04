import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";

const montSerrat = Montserrat({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "filho do caos",
  description: "reflexões e pensamentos moralmente questionáveis",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-br"
      className={`${montSerrat.style} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
