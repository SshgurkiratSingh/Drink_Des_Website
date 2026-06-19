# DrinkDes Website Portal

DrinkDes Website Portal is a web application designed to act as the user-facing interface for a smart, IoT-enabled drink dispensing system. Built using Next.js 13, Prisma, and Tailwind CSS, this portal allows users to manage their accounts, link RFID or NFC tags for dispenser hardware identification, monitor their hydration and calorie intake, manage their digital wallets, and view their purchase history.

## Table of Contents

- Overview
- Features
- Tech Stack
- Directory Structure
- Environment Variables
- Getting Started
  - Prerequisites
  - Installation
  - Database Setup
  - Running the Server
- Database Schema Overview
- Scripts

## Overview

The portal serves as a central hub for users of the DrinkDes dispenser system. It bridges the gap between hardware transactions and user management. When a user interacts with the physical dispenser using a linked RFID or NFC tag, the system processes transactions, updates the user's balance, and logs purchase histories. Through this website, users can view available drink items, top up their balance, verify their nutrition stats, and configure their personal details.

## Features

- User Authentication: Secure sign-in and registration powered by NextAuth.js. Supports email and password credentials (using bcrypt hashing) as well as Google and GitHub OAuth providers.
- User Profiles: Management of physical statistics such as weight, height, date of birth, gender, and personalized daily calorie targets.
- Wallet and Balance Management: Integrated balance system allowing users to add funds, redeem promo/coupon codes, and view a history of wallet top-ups.
- Product Catalog: A directory of available drinks and items showing pricing, category, availability, and calorie counts.
- Purchase History: Detailed tracking of user purchases including item specifics, sizes, prices, purchase locations, and corresponding calorie counts.
- Hardware Integration: Field for linking a unique RFID or NFC tag identifier (`tagUniqNum`) to pair the user's account with physical dispensing units.

## Tech Stack

### Frontend
- Framework: Next.js 13 (using the App Router structure)
- Styling: Tailwind CSS and DaisyUI
- Icons: React Icons
- State Management: Zustand
- Form Handling: React Hook Form
- Feedback: React Hot Toast

### Backend and Database
- Runtime Environment: Node.js
- Database API: Next.js Route Handlers
- ORM: Prisma Client
- Database: MongoDB
- Authentication: NextAuth.js (with Prisma adapter)

## Directory Structure

```text
Drink_Des_Website/
├── app/                  # Next.js 13 App Router pages, layouts, and components
│   ├── actions/          # Server actions for retrieving user data and items
│   ├── addMoney/         # Wallet balance update page
│   ├── api/              # API routes (registration, updating profile, items, history)
│   ├── components/       # Reusable React components (modals, inputs, layout containers)
│   ├── favourite/        # Page for user's bookmarked drink items
│   ├── Fitness-detail/   # Personal body details configuration page
│   ├── item/             # Detail view of individual items
│   ├── Profile/          # User profile management page
│   ├── purchase-history/ # Logs of all purchases made by the user
│   ├── globals.css       # Tailwind directives and global styles
│   ├── layout.tsx        # Root layout configuration
│   └── page.tsx          # Homepage displaying the drink directory catalog
├── pages/
│   └── api/
│       └── auth/         # NextAuth.js configuration
├── prisma/
│   └── schema.prisma     # Prisma schema defining MongoDB database models
├── public/               # Static assets (images, logos)
├── package.json          # Dependency and script configuration
├── tailwind.config.js    # Tailwind CSS layout configuration
└── tsconfig.json         # TypeScript configuration
```

## Environment Variables

To run this project, you need to set up the following environment variables in a `.env` file at the root of the project:

```env
# MongoDB connection string
DATABASE_URL="mongodb+srv://username:password@cluster.mongodb.net/database"

# NextAuth configuration
NEXTAUTH_SECRET="your-nextauth-secret-key"

# GitHub OAuth credentials
GITHUB_ID="your-github-client-id"
GITHUB_SECRET="your-github-client-secret"

# Google OAuth credentials
GOOGLE_CLIENT_ID="your-google-client-id"
GOOGLE_CLIENT_SECRET="your-google-client-secret"
```

## Getting Started

### Prerequisites

Ensure you have the following installed on your local environment:
- Node.js (version 18 or later is recommended)
- npm (Node Package Manager)
- A running MongoDB instance or a MongoDB Atlas cluster URI

### Installation

1. Navigate to the project root directory.
2. Install the required dependencies:
   ```bash
   npm install
   ```

### Database Setup

1. Configure your `.env` file as described in the Environment Variables section.
2. Generate the Prisma Client:
   ```bash
   npx prisma generate
   ```
3. Push the database schema structure to your MongoDB database:
   ```bash
   npx prisma db push
   ```

### Running the Server

To start the development server, execute:
```bash
npm run dev
```
Open http://localhost:3000 in your browser to view the application.

## Database Schema Overview

The database schema, managed via Prisma, is designed around MongoDB and consists of the following key models:

- User: Represents website accounts. Tracks standard auth fields along with body statistics (weight, height, date of birth, gender), balance, current calorie tracking, and the unique RFID/NFC tag number (`tagUniqNum`).
- Account: Handles federated OAuth credentials linked to user profiles.
- Item: Represents the product inventory (drinks). Stores title, pricing, calories, current availability count, categories, and purchase metrics.
- PurchaseHistory: Logs records of items purchased by users. Fields track sizes, total prices, purchase times, calorie intake, and dispenser location.
- AddMoneyHistory: Stores history of user account top-ups. Includes payment status, method, transaction ID, and amount loaded.
- couponCode: Manages promo or top-up codes, storing values and whether they have been redeemed.

## Scripts

The following npm scripts are defined in the `package.json` file:

- `npm run dev`: Starts the Next.js development server.
- `npm run build`: Generates the optimized production build of the Next.js application.
- `npm run start`: Generates the Prisma client and builds the application for production.
- `npm run lint`: Analyzes the codebase using ESLint to check for code quality and syntax issues.
