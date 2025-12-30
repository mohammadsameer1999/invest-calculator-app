# Investment Calculator App

A React-based investment calculator that helps users calculate the future value of their investments with compound interest.

## Features

- Calculate investment growth over time
- Input initial investment amount
- Set annual investment contributions
- Configure expected annual return rate
- Specify investment duration
- Real-time calculation results
- Input validation

## Technologies Used

- React 19.0.0
- Vite (build tool)
- JavaScript/JSX
- CSS
- ESLint (code linting)

## Getting Started

### Prerequisites

- Node.js (version 14 or higher)
- npm or yarn package manager

### Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd invest-calculator-app
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open your browser and navigate to `http://localhost:5173` (or the port shown in your terminal)

## Available Scripts

- `npm run dev` - Start the development server
- `npm run build` - Build the app for production
- `npm run preview` - Preview the production build
- `npm run lint` - Run ESLint to check code quality

## How to Use

1. Enter your initial investment amount
2. Set your planned annual investment contribution
3. Input your expected annual return rate (as a percentage)
4. Specify the investment duration in years
5. View the calculated results showing investment growth over time

The app validates input and requires a duration of at least 1 year.

## Project Structure

```
src/
├── components/
│   ├── Header.jsx      # App header component
│   ├── UserInput.jsx   # Input form component
│   └── Results.jsx     # Results display component
├── util/
│   └── investment.js   # Investment calculation utilities
├── assets/             # Static assets
├── App.jsx            # Main app component
├── index.jsx          # React app entry point
└── index.css          # Global styles
```

## License

This project is private and not licensed for public use.