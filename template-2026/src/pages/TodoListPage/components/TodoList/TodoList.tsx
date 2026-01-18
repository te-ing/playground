import TodoCard, { type Todo } from '../TodoCard';
import styles from './TodoList.module.scss';

interface TodoListProps {
  todos: Todo[];
  onToggle: (id: number) => void;
}

export default function TodoList({ todos, onToggle }: TodoListProps) {
  if (todos.length === 0) {
    return <p className={styles.empty}>할 일이 없습니다.</p>;
  }

  return (
    <ul className={styles.list}>
      {todos.map((todo) => (
        <li key={todo.id}>
          <TodoCard todo={todo} onToggle={onToggle} />
        </li>
      ))}
    </ul>
  );
}
