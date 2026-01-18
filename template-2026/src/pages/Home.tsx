import { Link } from 'react-router';
import styles from './Home.module.scss';

export default function Home() {
  return (
    <main className={styles.container}>
      <h1 className={styles.title}>Template 2026</h1>
      <p className={styles.description}>React 19 + TypeScript + Vite 7</p>
      <Link to="/todos" className={styles.link}>
        Todo List 바로가기
      </Link>
    </main>
  );
}
