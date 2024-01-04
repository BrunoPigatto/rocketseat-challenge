import type { Metadata } from "next";
import { Saira } from "next/font/google";
import "./globals.css";
import LayoutClient from "./layout-client";

const saira = Saira({
  weight: ["300", "400", "500", "600"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Capputeeno",
  description: "E-commerce",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-br">
      <body className={saira.className}>
        <LayoutClient>{children}</LayoutClient>
      </body>
    </html>
  );
}
