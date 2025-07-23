# React Hooks Guide 🧠

This project is a simple educational React app built with [Vite](https://vitejs.dev/) to demonstrate the usage of different React Hooks.  
Each hook has its own dedicated page with a basic explanation and interactive example.

---

## ✅ Implemented Hooks

### 1. `UseStateDemo.jsx`

Demonstrates the usage of the `useState` Hook:

- Initializes a state variable called `message` with the default value `"Hello"`.
- Displays the current `message` on the screen.
- Includes an input field that updates the message in real-time as the user types.
- Uses `setMessage()` to update the state.
- React re-renders the component whenever the state changes.

This example helps beginners understand how to manage and update local component state.

---

### 2. `UseEffectDemo.jsx`

Demonstrates the usage of the `useEffect` Hook to handle side effects:

- Uses two state variables: `count` and `message`.
- Every time the `count` changes, `useEffect` runs and updates the `message`.
- The dependency array `[count]` ensures the effect runs **only** when `count` changes.
- A button increases the counter, and the updated message reflects how many times the user clicked.

This example introduces the concept of side effects and explains how to run logic after renders or state changes — similar to lifecycle methods in class components.

---

## 🛠 Getting Started

To run this project locally:

```bash
# Install dependencies
npm install

# Start the development server
npm run dev
