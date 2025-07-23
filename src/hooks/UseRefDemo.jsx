import { useRef } from 'react';

function UseRefDemo() {
    const inputRef = useRef();

    const focusInput = () => {
        inputRef.current.focus();
    };

    return (
        <div style={{ padding: '1rem' }}>
            <h2>useRef Hook</h2>

            <input
                type="text"
                ref={inputRef}
                placeholder="Click the button to focus me"
                style={{ padding: '0.5rem', fontSize: '1rem' }}
            />

            <br /><br />

            <button onClick={focusInput}>Focus the input</button>
        </div>
    );
}

export default UseRefDemo;
