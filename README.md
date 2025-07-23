### 5. `UseReducerDemo.jsx`

This component demonstrates how to use the `useReducer` Hook for managing more complex state logic.

#### 🔹 What it does:
- Defines a reducer function `counterReducer` that handles three action types: `'increment'`, `'decrement'`, and `'reset'`.
- Uses `useReducer` to manage the state object `{ count }`.
- Provides three buttons to dispatch actions that update the state accordingly.
- Shows the current count value on the screen.

#### 💡 Why use `useReducer`:
- Ideal for complex state management where multiple related state values and actions exist.
- Provides a clear and predictable way to update state based on action types.
- Often preferred over `useState` for non-trivial state logic or when state updates depend on previous state.

#### 📌 Example behavior:
- Clicking "Increment" increases the count by 1.
- Clicking "Decrement" decreases the count by 1.
- Clicking "Reset" sets the count back to 0.

This example helps learners understand how to organize state updates with reducer functions in React functional components.
