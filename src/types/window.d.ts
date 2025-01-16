interface Window {
  starknet?: {
    enable: () => Promise<any>;
    isConnected: boolean;
  }
} 