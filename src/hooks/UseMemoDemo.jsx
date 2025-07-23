import { useState, useMemo } from 'react';

function expensiveCalculation(num) {
    console.log('Calculating...');
    // محاكاة حساب معقد يستغرق وقت
    let result = 0;
    for (let i = 0; i < 100000000; i++) {
        result += num;
    }
    return result;
}

function UseMemoDemo() {
    const [number, setNumber] = useState(1);
    const [inc, setInc] = useState(0);

    const computed = useMemo(() => expensiveCalculation(number), [number]);

    return (
        <div style={{ padding: '1rem' }}>
            <h2>useMemo Demo</h2>

            <input
                type="number"
                value={number}
                onChange={(e) => setNumber(parseInt(e.target.value) || 0)}
                style={{ padding: '0.5rem', fontSize: '1rem' }}
            />

            <p>Computed Value: {computed}</p>

            <button onClick={() => setInc((i) => i + 1)}>Re-render: {inc}</button>
        </div>
    );
}

export default UseMemoDemo;
