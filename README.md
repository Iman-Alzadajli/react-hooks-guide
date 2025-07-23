### 3. `UseRefDemo.jsx`

This component introduces the `useRef` Hook and how it can be used to directly access and manipulate DOM elements.

#### 🔹 What it does:
- It creates a reference using `useRef()` and assigns it to an `<input>` element.
- When the user clicks a button, it focuses the input programmatically via `inputRef.current.focus()`.

#### 💡 Why use `useRef`:
- It’s used to **access or modify DOM elements** without triggering a re-render.
- Common use cases:
  - Focus an input field
  - Control video/audio elements
  - Store previous values or timers
  - Avoid unnecessary renders (unlike `useState`)

#### 📌 Key behavior:
- `inputRef` stays consistent across renders.
- Changes to `inputRef.current` do **not** cause a re-render.
- It’s ideal for "direct interaction" with DOM nodes inside React functional components.

---

This hook helps learners understand how to handle non-render-related logic in React.
