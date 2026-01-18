import { Routes, Route } from 'react-router';
import Home from './pages/Home';
import TodoListPage from './pages/TodoListPage';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/todos" element={<TodoListPage />} />
    </Routes>
  );
}
