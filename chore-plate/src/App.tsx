import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import InfinityScroll from './pages/InfinityScroll';
import Home from './pages/Home';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="*" element={<Home />} />
        <Route path="scroll" element={<InfinityScroll />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
