import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import UseStateDemo from './hooks/UseStateDemo.jsx';
import UseEffectDemo from './hooks/UseEffectDemo'; // أضف هذا الاستيراد
import UseRefDemo from './hooks/UseRefDemo'; // الاستيراد الجديد
import UseContextDemo from './hooks/UseContextDemo';




function App() {
    return (
        <BrowserRouter>
            <nav style={{ display: 'flex', gap: '1rem', padding: '1rem', backgroundColor: '#f0f0f0' }}>
                <Link to="/">Home</Link>
                <Link to="/use-state">useState</Link>
                <Link to="/use-effect">useEffect</Link>
                <Link to="/use-ref">useRef</Link>
                <Link to="/UseContextDemo">useContext</Link>



            </nav>

            <Routes>
                <Route path="/" element={<h2 style={{ padding: '1rem' }}>Choose a Hook from above 👆</h2>} />
                <Route path="/use-state" element={<UseStateDemo />} />
                <Route path="/use-effect" element={<UseEffectDemo />} />
                <Route path="/use-ref" element={<UseRefDemo />} />
                <Route path="/UseContextDemo" element={<UseContextDemo />} />



            </Routes>
        </BrowserRouter>
    );
}

export default App;
