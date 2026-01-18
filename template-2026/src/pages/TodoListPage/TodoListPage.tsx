import { useState } from 'react';
import { Link } from 'react-router';
import TodoList from './components/TodoList';
import type { Todo } from './components/TodoCard';
import styles from './TodoListPage.module.scss';

const mockTodos: Todo[] = [
  { id: 1, title: 'React 19 학습하기', completed: false },
  { id: 2, title: 'TypeScript 타입 정리', completed: true },
  { id: 3, title: 'Vite 7 설정 확인', completed: false },
  { id: 4, title: 'SCSS 모듈 적용', completed: true },
  { id: 5, title: 'React Router 라우팅 구현', completed: false },
];

export default function TodoListPage() {
  const [todos, setTodos] = useState<Todo[]>(mockTodos);

  const handleToggle = (id: number) => {
    setTodos((prev) =>
      prev.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  return (
    <main className={styles.container}>
      <Link to="/" className={styles.backLink}>
        ← 홈으로
      </Link>
      <h1 className={styles.title}>Todo List</h1>
      <TodoList todos={todos} onToggle={handleToggle} />
    </main>
  );
}
