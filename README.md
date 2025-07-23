### 6. `UseMemoDemo.jsx`

This component demonstrates how to use the `useMemo` Hook to optimize expensive calculations.

#### 🔹 What it does:
- Defines an expensive calculation function that simulates a heavy computation.
- Uses `useMemo` to memoize the result of the calculation based on the `number` state.
- Includes an input field to change the `number`.
- Includes a button to trigger a re-render without changing `number`.
- Shows that the expensive calculation runs only when `number` changes, not on every render.

#### 💡 Why use `useMemo`:
- Optimizes performance by avoiding expensive recalculations on every render.
- Useful when you have costly computations that depend on specific values.
- Helps keep UI responsive by caching results until dependencies change.

#### 📌 Example behavior:
- Changing the number triggers the calculation and updates the displayed result.
- Clicking the "Re-render" button increases a counter but does NOT re-run the expensive calculation.
- You can see in the console log when the calculation actually runs.

This example helps learners understand memoization and performance optimization in React.
