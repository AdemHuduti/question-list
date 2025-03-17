# React + TypeScript + Vite Template

This template sets up a minimal React application with TypeScript, integrated with Vite for fast development, Hot Module Replacement (HMR), and some basic ESLint rules to maintain code quality.

## Features:
- **React** with **TypeScript** for a type-safe development experience.
- **Vite** for fast builds and HMR (Hot Module Replacement).
- Basic **ESLint** rules for ensuring clean and consistent code.


## Getting Started

Follow these steps to get the project up and running locally.

### 1. Install Dependencies
First, install the necessary dependencies by running the following command in your terminal:

```bash
npm install
```

### 2. Run the Development Server
After installation, you can start the development server. Navigate to http://localhost:3000 in your browser to view the app.

```bash
npm run dev
```

### Running Tests
This project includes tests to verify the functionality of the components and logic. To run the tests, execute the following command:

```bash
npm test
```


### Test Setup:

- The tests are set up with **Jest, testing-library/react and vitest** for testing the components and functionality.
- In real-world applications, I would use **Mock Service Worker (MSW)** to:
  - Mock API calls.
  - Simulate network requests in a more realistic way.
  - Handle server responses during testing for integration and unit tests.