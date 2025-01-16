'use client';

import type { Chain } from '@starknet-react/chains';
import { StarknetConfig, InjectedConnector } from '@starknet-react/core';
import { RpcProvider } from 'starknet';

const chains: Chain[] = [
  {
    id: BigInt('0x534e5f474f45524c49'),
    name: 'Starknet Goerli',
    network: 'goerli-alpha',
    nativeCurrency: {
      name: 'Ethereum',
      symbol: 'ETH',
      decimals: 18,
      address: '0x049d36570d4e46f48e99674bd3fcc84644ddd6b96f7c741b1562b82f9e004dc7' as `0x${string}`
    },
    rpcUrls: {
      default: { http: ['https://alpha-mainnet.starknet.io'] },
      public: { http: ['https://alpha-mainnet.starknet.io'] }
    }
  }
];

const connectors = [
  new InjectedConnector({ options: { id: 'braavos' }}),
  new InjectedConnector({ options: { id: 'argentX' }}),
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
      autoConnect
      provider={() => new RpcProvider({ nodeUrl: 'https://alpha-mainnet.starknet.io' })}
    >
      {children}
    </StarknetConfig>
  );
} 