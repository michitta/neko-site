import type { Metadata } from "next";
import "./globals.scss";
import Header from "@/components/Header/Header.component";
import Footer from "@/components/Footer/Footer.component";

export const metadata: Metadata = {
  title: "Neko Launcher",
  description: "Лаунчер для проектов Minecraft",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
