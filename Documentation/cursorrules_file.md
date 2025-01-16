# Cursor Rules for Project

## Project Overview

### Project Name: AI-Driven Decision Markets Platform

**Description:** A web platform enabling users to influence AI agent behavior by participating in decision markets. The platform integrates AI agents with market-based consensus mechanisms to facilitate strategic market creation and decision-making transparency via blockchain technology.

**Tech Stack:**

*   **Frontend:** Next.js 14, TypeScript, Tailwind CSS, shadcn/UI, Radix UI, Lucide Icons
*   **Backend & Storage:** Supabase, Starknet
*   **AI Integration:** LangChain, Microsoft AutoGen, CrewAI, Claude Functions, OpenAI Swarms

**Key Features:**

*   Market creation for AI-driven decisions
*   Conditional outcome betting
*   Transparent AI integration
*   Real-time market analytics

## Project Structure

### Root Directory:

Contains the main configuration files and documentation.

*   `README.md`: Introduction and setup instructions
*   `.gitignore`: Excluded files
*   `package.json`: Project metadata

### /frontend:

Contains all frontend-related code, including components, styles, and assets.

/components:

*   `MarketDashboard.js`: Renders the market dashboard
*   `MarketDetails.js`: Provides market specifics and betting options
*   `AgentConsole.js`: Configures AI agent actions
*   `UserProfile.js`: Displays user performance metrics

/assets:

*   `logo.png`: Project logo
*   `starknet_logo.png`: Starknet branding assets

/styles:

*   `global.css`: Global styles
*   `MarketDashboard.css`: Specific styles for the market dashboard

### /backend:

Contains all backend-related code, including API routes and database models.

/controllers:

*   `marketController.js`: Handles market logic
*   `userController.js`: Manages user data

/models:

*   `Market.js`: Defines market schema
*   `User.js`: User schema

/routes:

*   `marketRoutes.js`: API routes for market operations
*   `userRoutes.js`: API routes for user operations

### /config:

Configuration files for environment variables and application settings.

*   `config.js`: Database and blockchain settings
*   `.env`: Environment variables

### /tests:

Contains unit and integration tests for both frontend and backend.

*   `market.test.js`
*   `user.test.js`

## Development Guidelines

**Coding Standards:**

*   Follow AirBnB JavaScript style guide
*   Use TypeScript for type safety

**Component Organization:**

*   Organize React components by feature within the `/components` directory

## Cursor IDE Integration

**Setup Instructions:**

*   Clone repository
*   Install dependencies using `npm install`
*   Run frontend: `npm run dev`
*   Start backend: `npm run start`

**Key Commands:**

*   `npm test`: Run all tests
*   `npm run build`: Build the project for production

## Additional Context

**User Roles:**

*   **Trader:** Participates in markets
*   **Admin:** Manages platform settings

**Accessibility Considerations:**

*   Ensure all visual content adheres to WCAG 2.1 accessibility standards
*   Provide keyboard navigation support

This `.cursorrules` file serves as a dynamic guide for the Cursor IDE to appropriately set up, navigate, and maintain the project structure based on the specified requirements and outline.
