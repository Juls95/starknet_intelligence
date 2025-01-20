import { constants } from 'starknet';

export const CONTRACT_ADDRESS = process.env.NEXT_PUBLIC_CONTRACT_ADDRESS as `0x${string}` || '0x0443c105a308b9a5f4b756b102ab566c4ae2077f3482ba90ed642c191e8df00f';
export const CONTRACT_CLASS_HASH = "0x04c3633c0ea8600ec62d8d990b957992c112bb66a5f1723d645831fb008e6a97";
export const CONTRACT_NETWORK = constants.NetworkName.SN_SEPOLIA;

export const CONTRACT_ABI = [
  {
    name: "get_analysis",
    type: "function",
    inputs: [
      { name: "from_block", type: "felt" },
      { name: "to_block", type: "felt" }
    ],
    outputs: [{ name: "analysis", type: "felt" }]
  },
  {
    name: "create_market",
    type: "function",
    inputs: [
      { name: "description", type: "felt" },
      { name: "end_time", type: "felt" }
    ],
    outputs: [{ name: "market_id", type: "felt" }]
  },
  {
    name: "place_bet",
    type: "function",
    inputs: [
      { name: "market_id", type: "felt" },
      { name: "prediction", type: "felt" },
      { name: "amount", type: "felt" }
    ],
    outputs: []
  }
] as const; 