import "./globals.css";
import type { Metadata } from "next";
import { AppWalletProvider } from "@/components/wallet-provider";

export const metadata: Metadata = {
  title: "PrivyMeet",
  description: "Private event networking on Solana, powered by Arcium.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <AppWalletProvider>{children}</AppWalletProvider>
      </body>
    </html>
  );
}