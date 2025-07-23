import { useEffect, useState } from 'react';

function UseEffectDemo() {
    const [count, setCount] = useState(0);
    const [message, setMessage] = useState('');

    // This will run every time `count` changes
    useEffect(() => {
        setMessage(`You clicked the button ${count} times`);
    }, [count]);

    return (
        <div style={{ padding: '1rem' }}>
            <h2>useEffect Hook</h2>
            <p>{message}</p>
            <button onClick={() => setCount(count + 1)}>Click me</button>
        </div>
    );
}

export default UseEffectDemo;
