# Local Habit Tracker

A client-side React application designed to track daily habits, calculate streaks dynamically, and persist data locally. This project serves as **Project 1** in a progressive frontend engineering roadmap, focusing heavily on component architecture, React state immutability, and derived state.

## 🛠 Tech Stack

*   **Framework:** [React 18](https://react.dev/)
*   **Build Tool:** [Vite](https://vitejs.dev/)
*   **Language:** [TypeScript](https://www.typescriptlang.org/)
*   **UI Library:** [Chakra UI](https://chakra-ui.com/) (Chosen for a rapid, CSS-free, accessible design system)
*   **Persistence:** Browser `localStorage`

---

## 🧠 Architectural Decisions

### 1. The Data Model (Time-Series over Counters)

Instead of storing a fragile `streak: 5` integer that breaks if a user misses a day without logging in, the app stores an array of timestamp strings (`completedDates`).

**Why?** This makes the data idempotent. Streaks can be recalculated dynamically based on the current date, ensuring accuracy regardless of when the user opens the app.

```typescript
type Habit = {
  id: string;
  title: string;
  createdAt: string;
  completedDates: string[]; // e.g., ["2026-06-12", "2026-06-13"]
};
```

### 2. Component Purity & State Management

The application strictly follows the **Single Responsibility Principle** and **unidirectional data flow**:

- **App.tsx**: The single source of truth. Manages the global habits state and handles persistence using `useEffect` with `localStorage`.

- **HabitForm.tsx**: A strictly controlled component. Manages its own temporary local text state and bubbles the payload up via the `onAdd` callback.

- **HabitList.tsx**: A pure presentation component responsible only for iterating over the habits data array and rendering habit items.

- **HabitCard.tsx**: Receives a single `Habit` object as a prop. Calculates derived state (such as the current streak) on the fly without maintaining redundant state variables.

### 3. Immutability Strictness

All state updates—including adding a habit and toggling completion dates—are performed using strict immutable update patterns. New array and object references are returned instead of mutating existing state, preventing common React rendering bugs and ensuring predictable state transitions.

---

# 🚀 Getting Started

## Prerequisites

- Node.js (v18 or higher)
- npm or pnpm

## Installation

### 1. Clone the repository and navigate into the project directory

```bash
git clone <your-repo-url>
cd habit-tracker
```

### 2. Install dependencies

```bash
npm install
```

### 3. Start the Vite development server

```bash
npm run dev
```

### 4. Open the application

Navigate to:

```text
http://localhost:5173
```

---

<FollowUp
  label="Ready to tackle the HabitForm?"
  query="I've added the README. Let's move back to Milestone 2: Here is my code for making the HabitForm a controlled component."
/>





