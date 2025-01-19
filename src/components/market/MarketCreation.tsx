'use client';

import { useDecisionMarket } from '@/hooks/useDecisionMarket';
import { useAccount } from '@starknet-react/core';
import { Button } from '../button';

export function MarketCreation() {
  const { address } = useAccount();
  const { createMarket } = useDecisionMarket();

  const handleCreateMarket = async () => {
    if (!address) {
      alert("Please connect your wallet first");
      return;
    }

    try {
      const result = await createMarket(
        "Test AI Decision Market",
        Math.floor(Date.now() / 1000) + 86400 // 24 hours from now
      );
      console.log("Market created:", result);
      // You could add a success notification here
    } catch (error) {
      console.error("Failed to create market:", error);
      // You could add an error notification here
    }
  };

  return (
    <div className="mt-6">
      <Button
        onClick={handleCreateMarket}
        disabled={!address}
        variant="primary"
      >
        Create New Market
      </Button>
    </div>
  );
} 