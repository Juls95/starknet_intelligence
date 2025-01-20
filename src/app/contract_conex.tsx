import { connect } from "get-starknet";
import { Contract, Provider, constants } from "starknet";
import { CONTRACT_ABI, CONTRACT_ADDRESS } from "@/config/contract";

export async function connectWallet() {
  try {
    const starknet = await connect();
    
    if (!starknet) {
      throw new Error("Please install ArgentX, Braavos, or another Starknet wallet.");
    }

    await starknet.enable();
    return starknet;
  } catch (error) {
    console.error("Error connecting to Starknet wallet:", error);
    throw error;
  }
}

export async function getProvider() {
  return new Provider({ sequencer: { network: constants.NetworkName.SN_GOERLI } });
}

export async function createMarket(wallet: any, marketData: any) {
  try {
    const provider = await getProvider();
    const contract = new Contract(
      CONTRACT_ABI,
      CONTRACT_ADDRESS,
      provider
    );

    const response = await contract.createMarket(marketData);
    return response;
  } catch (error) {
    console.error("Error creating market:", error);
    throw error;
  }
}

// Add more Starknet-related functions as needed