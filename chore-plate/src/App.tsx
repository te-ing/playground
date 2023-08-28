import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import InfinityScroll from './pages/InfinityScroll';
import Home from './pages/Home';
import FromEntries from './pages/FromEntries';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="*" element={<Home />} />
        <Route path="scroll" element={<InfinityScroll />} />
        <Route path="fromEntries" element={<FromEntries />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
