# Project Requirements Document (PRD)

## 1. Project Overview

The project at hand is a web platform tailored to empower users in influencing AI behavior via market-based consensus mechanisms. By allowing users to create and participate in decision markets, this platform democratizes AI decision-making, enabling a more distributed approach to navigating strategic AI agent actions. Users get to indulge in market creation for AI-led strategic decisions, betting on conditional outcomes, and engaging with value prediction markets. This should foster a community of traders and data-driven investors who can leverage sophisticated AI tools and newly established market rules to drive AI agents’ actions transparently.

Built to address the biases inherent in solo AI decision-making, this project seeks to introduce a collaborative decision-making layer. With the implementation of Starknet blockchain technology, the platform promises enhanced scalability and security, crucial for handling significant transaction volumes. The key success determinants are seamless user participation, accuracy in outcome prediction, and the reliable operation of AI-driven market-result integrations.

## 2. In-Scope vs. Out-of-Scope

### In-Scope

*   Market creation for AI agent decisions, allowing users to set and participate in conditional outcome betting and value prediction markets.
*   Transparent integration between decision markets and AI actions, linked directly to the outcomes in these markets.
*   Automated resolution processes to ensure fair and efficient market settlements.
*   User interfaces including a Market Dashboard, Market Details Page, AI Agent Console, and User Profile with underlying functionalities.
*   Use of advanced AI tools (LangChain, Microsoft AutoGen, CrewAI, Claude Functions or OpenAI Swarms) for decision execution and performance tracking.

### Out-of-Scope

*   Deployment of features that offer personalized agent recommendations.
*   Extensions for deep AI insights and community-driven augmentation features.
*   Integration of additional cryptocurrencies or payment systems outside Starknet's capabilities.

## 3. User Flow

When a new user arrives on the AI-Driven Decision Markets Platform, they begin by signing up or logging into their account. The landing page is the Market Dashboard, where users can view a selection of active decision markets. After browsing or searching for a market of interest, they can dive deeper into specifics on the Market Details Page. Here, users can engage with the available data, make informed betting decisions on conditional outcomes, and track live pricing and predictions.

Once the user has engaged with a market, they can keep track of their activities and assess their decision impact through their User Profile. This section of the platform provides a comprehensive view of their betting history and performance metrics. To enhance their strategic decisions, users can also access the AI Agent Console, where they configure AI agent actions based on market influences, review historical actions, and evaluate the efficiency of agents tied to the decision-making process.

## 4. Core Features (Bullet Points)

*   **Decision Market System**:

    *   Facilitates market creation and participation for AI-led decisions.
    *   Offers conditional outcome betting and dynamic value predictions.
    *   Automates the fair and transparent resolution of markets.

*   **Agent Integration**:

    *   Configures AI agent actions linked to market outcomes.
    *   Maintains transparent action history and risk management details.

*   **Market Dashboard**:

    *   Displays active markets and overall market status.
    *   Provides interface for market creation and participation.

*   **Market Details Page**:

    *   Shows individual market data in real-time.
    *   Allows outcome betting with participant prediction visuals.

*   **AI Agent Console**:

    *   Configures market-driven agent actions.
    *   Tracks efficiency and historical performance statistics.

*   **User Profile**:

    *   Manages participation history and personal performance metrics.
    *   Allows customization of account settings.

## 5. Tech Stack & Tools

*   **Frontend**: Next.js 14, TypeScript, Tailwind CSS, shadcn/UI, Radix UI, Lucide Icons.
*   **Backend & Storage**: Supabase for database, authentication, and storage solutions.
*   **Blockchain Integration**: Starknet to ensure security and scalability.
*   **AI Models/Libraries**: Integration with LangChain, Microsoft AutoGen, CrewAI, Claude Functions, or OpenAI Swarms to facilitate market-driven decision making.
*   **Tools**: Cursor AI, Claude AI, V0 by Vercel, and Bolt for project setup and development.

## 6. Non-Functional Requirements

*   **Performance**: Ensure that the platform handles high transaction volumes efficiently, using Starknet's capabilities.
*   **Security**: Blockchain integration should guarantee data integrity and transaction security.
*   **Compliance**: Meet compliance standards relevant to financial data and blockchain transactions.
*   **Usability**: User interfaces must be intuitive, allowing ease of navigation and participation for users of varying technical skill levels.

## 7. Constraints & Assumptions

*   Dependencies on the availability and proper functioning of Starknet for transaction processing.
*   Assumption that users have a basic understanding of trading and market principles to engage effectively.

## 8. Known Issues & Potential Pitfalls

*   **API Rate Limits**: Ensure that the platform can handle API limitations from integrated AI services.
*   **User Education**: The introduction of market concepts and AI decisions may require additional user education resources.
*   **Transaction Delays**: Delays in blockchain confirmations could affect user experience.

To mitigate these issues, consider implementing robust error-handling systems, clear user documentation, and fallback procedures for blockchain-related delays.
