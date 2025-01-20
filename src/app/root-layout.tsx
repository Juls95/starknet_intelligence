'use client';

import type { Chain } from '@starknet-react/chains';
import { StarknetConfig, InjectedConnector } from '@starknet-react/core';
import { RpcProvider } from 'starknet';

const defaultProvider = new RpcProvider({ 
  nodeUrl: 'https://alpha-sepolia.starknet.io'
});

const chains: Chain[] = [
  {
    id: BigInt('0x534e5f5345504f4c4941'),
    name: 'Starknet Sepolia',
    network: 'sepolia',
    nativeCurrency: {
      name: 'Ethereum',
      symbol: 'ETH',
      decimals: 18,
      address: '0x049d36570d4e46f48e99674bd3fcc84644ddd6b96f7c741b1562b82f9e004dc7' as `0x${string}`
    },
    rpcUrls: {
      default: { http: ['https://alpha-sepolia.starknet.io'] },
      public: { http: ['https://alpha-sepolia.starknet.io'] }
    }
  }
];

const connectors = [
  new InjectedConnector({ options: { id: 'braavos' }}),
  new InjectedConnector({ options: { id: 'argentX' }})
];

export function RootLayoutWrapper({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <StarknetConfig 
      chains={chains}
      connectors={connectors}
      provider={() => defaultProvider}
      autoConnect
    >
      {children}
    </StarknetConfig>
  );
} 