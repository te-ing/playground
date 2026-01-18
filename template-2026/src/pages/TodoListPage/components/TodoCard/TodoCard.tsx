import styles from './TodoCard.module.scss';

export interface Todo {
  id: number;
  title: string;
  completed: boolean;
}

interface TodoCardProps {
  todo: Todo;
  onToggle: (id: number) => void;
}

export default function TodoCard({ todo, onToggle }: TodoCardProps) {
  return (
    <div
      className={`${styles.card} ${todo.completed ? styles.completed : ''}`}
      onClick={() => onToggle(todo.id)}
    >
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={() => onToggle(todo.id)}
        className={styles.checkbox}
      />
      <span className={styles.title}>{todo.title}</span>
    </div>
  );
}
