import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import InfinityScroll from './pages/InfinityScroll';
import Home from './pages/Home';
import FromEntries from './pages/FromEntries';
import DataHandling from './pages/DataHandling';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="*" element={<Home />} />
        <Route path="scroll" element={<InfinityScroll />} />
        <Route path="fromEntries" element={<FromEntries />} />
        <Route path="dataHandling" element={<DataHandling />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
