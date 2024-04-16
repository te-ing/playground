import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './page/home';
import { Login } from './page/login';
import { Test } from './page/test/Test';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route path="login" element={<Login />} />
        <Route path="test" element={<Test />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
