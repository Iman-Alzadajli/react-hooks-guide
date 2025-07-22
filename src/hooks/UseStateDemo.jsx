import { useState } from 'react';

function UseStateDemo() {
    const [message, setMessage] = useState("Hello");

    return (
        <div style={{ padding: '1rem' }}>
            <h2>useState – Simple Example</h2>

            <p>Current Message: <strong>{message}</strong></p>

            <input
                type="text"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Type something..."
            />
        </div>
    );
}

export default UseStateDemo;
