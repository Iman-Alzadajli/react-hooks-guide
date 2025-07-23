import { useState, useCallback } from 'react';

function Button({ handleClick, children }) {
    console.log(`Rendering button: ${children}`);
    return (
        <button onClick={handleClick} style={{ margin: '0.5rem', padding: '0.5rem 1rem' }}>
            {children}
        </button>
    );
}

function UseCallbackDemo() {
    const [count, setCount] = useState(0);
    const [otherState, setOtherState] = useState(false);

    // useCallback يحفظ الدالة ويعيد إنشائها فقط إذا تغيرت التبعيات
    const increment = useCallback(() => {
        setCount((c) => c + 1);
    }, []);

    return (
        <div style={{ padding: '1rem' }}>
            <h2>useCallback Demo</h2>
            <p>Count: {count}</p>

            <Button handleClick={increment}>Increment</Button>

            <button onClick={() => setOtherState((s) => !s)}>
                Toggle Other State (does not re-render Increment button)
            </button>
        </div>
    );
}

export default UseCallbackDemo;
