import { useContract } from '@starknet-react/core'
import type { Contract } from 'starknet'
import { useMemo } from 'react'
import { CONTRACT_ADDRESS, CONTRACT_ABI } from '@/config/contract'

export function useStarknetContract() {
  const { contract } = useContract({
    address: CONTRACT_ADDRESS,
    abi: CONTRACT_ABI,
  })

  return useMemo(() => ({
    contract,
    fetchAnalysis: async (fromBlock: number, toBlock: number) => {
      if (!contract) return null;
      try {
        const result = await contract.get_analysis(fromBlock, toBlock);
        return result;
      } catch (error) {
        console.error('Error fetching analysis:', error);
        throw error;
      }
    },
    // Add more contract methods as needed
  }), [contract])
} 