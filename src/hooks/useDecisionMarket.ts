import { useContract } from '@starknet-react/core';
import { CONTRACT_ADDRESS, CONTRACT_ABI } from '@/config/contract';
import { useMemo } from 'react';

export function useDecisionMarket() {
  const { contract } = useContract({
    address: CONTRACT_ADDRESS,
    abi: CONTRACT_ABI,
  });

  return useMemo(() => ({
    contract,
    createMarket: async (description: string, endTime: number) => {
      if (!contract) return null;
      try {
        const result = await contract.create_market(description, endTime);
        return result;
      } catch (error) {
        console.error("Error creating market:", error);
        throw error;
      }
    },
    placeBet: async (marketId: string, prediction: number, amount: string) => {
      if (!contract) return null;
      try {
        const result = await contract.place_bet(marketId, prediction, amount);
        return result;
      } catch (error) {
        console.error("Error placing bet:", error);
        throw error;
      }
    }
  }), [contract]);
} 