import { useReducer } from 'react';

// 1. Reducer function
function counterReducer(state, action) {
  switch (action.type) {
    case 'increment':
      return { count: state.count + 1 };
    case 'decrement':
      return { count: state.count - 1 };
    case 'reset':
      return { count: 0 };
    default:
      return state;
  }
}

// 2. Component
function UseReducerDemo() {
  const [state, dispatch] = useReducer(counterReducer, { count: 0 });

  return (
    <div style={{ padding: '1rem' }}>
      <h2>useReducer Demo</h2>
      <p style={{ fontSize: '1.5rem' }}>Count: {state.count}</p>
      <button onClick={() => dispatch({ type: 'increment' })}>➕ Increment</button>{' '}
      <button onClick={() => dispatch({ type: 'decrement' })}>➖ Decrement</button>{' '}
      <button onClick={() => dispatch({ type: 'reset' })}>🔄 Reset</button>
    </div>
  );
}

export default UseReducerDemo;
