import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import UseStateDemo from './hooks/UseStateDemo.jsx';

function App() {
    return (
        <BrowserRouter>
            <nav style={{ display: 'flex', gap: '1rem', padding: '1rem', backgroundColor: '#f0f0f0' }}>
                <Link to="/">Home</Link>
                <Link to="/use-state">useState</Link>
            </nav>

            <Routes>
                <Route path="/" element={<h2 style={{ padding: '1rem' }}>Choose a Hook from above 👆</h2>} />
                <Route path="/use-state" element={<UseStateDemo />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
