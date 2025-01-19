// 1. First, install required dependencies in your Next.js project
// package.json additions:
{
  "dependencies": {
    "starknet": "^5.19.5",
    "get-starknet": "^3.0.1",
    "@starknet-react/core": "^1.0.4"
  }
}

// 2. Create a contract configuration file
// src/config/contract.ts
export const CONTRACT_ADDRESS = "YOUR_DEPLOYED_CONTRACT_ADDRESS";
export const CONTRACT_CLASS_HASH = "YOUR_CLASS_HASH";

// 3. Create a StarknetProvider wrapper
// src/components/providers/StarknetProvider.tsx
import { StarknetConfig, InjectedConnector } from '@starknet-react/core';

const connectors = [
  new InjectedConnector({ options: { id: 'braavos' }}),
  new InjectedConnector({ options: { id: 'argentX' }})
];

export function StarknetProvider({ children }: { children: React.ReactNode }) {
  return (
    <StarknetConfig connectors={connectors}>
      {children}
    </StarknetConfig>
  );
}

// 4. Create hooks for contract interaction
// src/hooks/useDecisionMarket.ts
import { useContract, useStarknetCall } from '@starknet-react/core';
import { CONTRACT_ADDRESS } from '../config/contract';
import { Abi } from 'starknet';

// Import your contract ABI
import ContractAbi from '../abi/decision_market.json';

export function useDecisionMarket() {
  const { contract } = useContract({
    address: CONTRACT_ADDRESS,
    abi: ContractAbi as Abi,
  });

  const createMarket = async (description: string, endTime: number) => {
    try {
      const result = await contract.invoke("create_market", [
        description,
        endTime
      ]);
      return result;
    } catch (error) {
      console.error("Error creating market:", error);
      throw error;
    }
  };

  const placeBet = async (marketId: string, prediction: number, amount: string) => {
    try {
      const result = await contract.invoke("place_bet", [
        marketId,
        prediction,
        amount
      ]);
      return result;
    } catch (error) {
      console.error("Error placing bet:", error);
      throw error;
    }
  };

  // Add more contract functions as needed

  return {
    contract,
    createMarket,
    placeBet,
  };
}

// 5. Example component using the contract
// src/components/MarketCreation.tsx
import { useDecisionMarket } from '../hooks/useDecisionMarket';
import { useAccount } from '@starknet-react/core';

export function MarketCreation() {
  const { account } = useAccount();
  const { createMarket } = useDecisionMarket();

  const handleCreateMarket = async (description: string, endTime: number) => {
    if (!account) {
      alert("Please connect your wallet first");
      return;
    }

    try {
      const result = await createMarket(description, endTime);
      console.log("Market created:", result);
      // Handle success (e.g., show notification, update UI)
    } catch (error) {
      console.error("Failed to create market:", error);
      // Handle error
    }
  };

  return (
    <div>
      {!account ? (
        <p>Please connect your wallet</p>
      ) : (
        // Your market creation form
        <button onClick={() => handleCreateMarket("Test Market", Date.now() + 86400000)}>
          Create Market
        </button>
      )}
    </div>
  );
}