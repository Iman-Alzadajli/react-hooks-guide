### 4. `UseContextDemo.jsx`

This component demonstrates how to use the `useContext` Hook to share data between components without prop drilling.

#### 🔹 What it does:
- It defines a `UserContext` using `React.createContext()`.
- A parent component (`UseContextDemo`) provides a value using `<UserContext.Provider>`.
- A nested child component (`UserProfile`) consumes that value using `useContext(UserContext)`.

#### 💡 Why use `useContext`:
- It allows components to **access shared state or values directly** without passing them manually through props at each level.
- Commonly used for:
  - User authentication
  - Themes (dark/light)
  - Language/locale settings
  - Global app settings

#### 📌 Key behavior:
- The context value is available to all components inside the provider.
- Any component can "subscribe" to the context using `useContext()`.
- No need to pass data manually through multiple nested components.

---

This example helps learners understand **React's context system** and how to avoid "prop drilling" by using `useContext`.

