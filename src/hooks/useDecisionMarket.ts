import { useContract } from '@starknet-react/core';
import { CONTRACT_ADDRESS, CONTRACT_ABI, CONTRACT_NETWORK } from '@/config/contract';
import { useMemo } from 'react';
import { Provider, constants } from 'starknet';

export function useDecisionMarket() {
  const { contract } = useContract({
    address: CONTRACT_ADDRESS,
    abi: CONTRACT_ABI,
    provider: new Provider({ 
      sequencer: { 
        network: CONTRACT_NETWORK,
        baseUrl: 'https://alpha-sepolia.starknet.io'
      } 
    })
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