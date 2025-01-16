import { RpcProvider } from 'starknet';

export class StarknetDataFetcher {
    private provider: RpcProvider;

    constructor() {
        this.provider = new RpcProvider({
            nodeUrl: process.env.NEXT_PUBLIC_RPC_URL || 'https://alpha-mainnet.starknet.io'
        });
    }

    async connectWallet() {
        try {
            const wallet = await window.starknet?.enable();
            return !!wallet;
        } catch (error) {
            console.error('Wallet connection error:', error);
            return false;
        }
    }

    async fetchTransactionData(fromBlock: number, toBlock: number) {
        try {
            const transactions = await this.provider.getBlockWithTxs(fromBlock);
            return transactions;
        } catch (error) {
            console.error('Error fetching transactions:', error);
            throw error;
        }
    }
} 