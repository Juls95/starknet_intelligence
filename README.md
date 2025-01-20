# Starknet AI Decision Markets

A decentralized platform for AI decision-making and analysis built on Starknet. This project aims to address biases in solo AI decision-making through collaborative market mechanisms.

## Features

- **Wallet Integration**: Connect with Argent X or Braavos wallets
- **Real-time Analysis**: Get instant AI decision analysis
- **Market Creation**: Create and participate in decision markets
- **Secure Transactions**: Built on Starknet's Layer 2 solution
- **Advanced Analytics**: Leverage machine learning for market insights

## Prerequisites

Before you begin, ensure you have installed:
- Node.js (v16 or higher)
- npm or yarn
- A Starknet wallet (Argent X or Braavos)

## Installation

1. Clone the repository:
```bash
git clone https://github.com/Juls95/starknet_intelligence.git
cd starknet_intelligence
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Set up environment variables:
Create a `.env.local` file in the root directory with:
```env
NEXT_PUBLIC_CONTRACT_ADDRESS=0x0443c105a308b9a5f4b756b102ab566c4ae2077f3482ba90ed642c191e8df00f
NEXT_PUBLIC_STARKNET_NETWORK=sepolia
NEXT_PUBLIC_RPC_URL=https://alpha-sepolia.starknet.io
```

4. Start the development server:
```bash
npm run dev
# or
yarn dev
```

## Usage

1. **Connect Wallet**
   - Click "Connect Wallet" in the header
   - Choose between Argent X or Braavos
   - Approve the connection request

2. **Create Markets**
   - Once connected, use the "Create Market" button
   - Set market parameters (description, end time)
   - Confirm the transaction in your wallet

3. **Analyze Decisions**
   - Use the Analysis Display component
   - View real-time AI decision data
   - Track market performance

## Smart Contracts

The smart contracts for this project are available at:
[https://github.com/Juls95/starknet_contract.git](https://github.com/Juls95/starknet_contract.git)

## Technical Stack

- **Frontend**: Next.js, React, TailwindCSS
- **Blockchain**: Starknet, Cairo
- **Wallet Integration**: @starknet-react/core
- **UI Components**: Lucide React, Headless UI
- **Styling**: TailwindCSS, CSS Modules

## Network Information

This project runs on Starknet's Sepolia testnet. Make sure your wallet is configured for Sepolia:
- Network: Sepolia Testnet
- RPC URL: https://alpha-sepolia.starknet.io
- Chain ID: 0x534e5f5345504f4c4941

## Development

To contribute to the project:

1. Fork the repository
2. Create a feature branch
```bash
git checkout -b feature/your-feature-name
```
3. Commit your changes
```bash
git commit -m 'Add some feature'
```
4. Push to the branch
```bash
git push origin feature/your-feature-name
```
5. Create a Pull Request

## Testing

Run the test suite:
```bash
npm run test
# or
yarn test
```

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Contact

- GitHub: [@Juls95](https://github.com/Juls95)
- Project Link: [https://github.com/Juls95/starknet_intelligence](https://github.com/Juls95/starknet_intelligence)

## Acknowledgments

- Starknet Foundation
- OpenZeppelin
- StarkWare
