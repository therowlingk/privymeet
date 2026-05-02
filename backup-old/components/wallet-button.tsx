"use client";

import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";

export function WalletButton() {
  return (
    <div className="[&_.wallet-adapter-button]:rounded-full [&_.wallet-adapter-button]:bg-white/10 [&_.wallet-adapter-button]:text-white [&_.wallet-adapter-button]:hover:bg-white/20">
      <WalletMultiButton />
    </div>
  );
}