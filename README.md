### 7. `UseCallbackDemo.jsx`

This component demonstrates how to use the `useCallback` Hook to memoize callback functions.

#### 🔹 What it does:
- Defines a button component that receives a callback function as a prop.
- Uses `useCallback` to memoize the `increment` function, so it only changes if dependencies change.
- This prevents unnecessary re-renders of child components that depend on the callback.
- Also includes another state toggle button to show that updating unrelated state doesn’t cause the memoized callback to recreate.

#### 💡 Why use `useCallback`:
- Improves performance by avoiding unnecessary re-creation of functions on every render.
- Helps optimize components, especially when passing callbacks to memoized children.
- Useful to prevent unwanted re-renders in complex component trees.

#### 📌 Example behavior:
- Clicking "Increment" increases the count.
- Clicking "Toggle Other State" changes unrelated state without causing the increment button to re-render unnecessarily (check console logs).

This example helps learners understand how to optimize function references in React components.
