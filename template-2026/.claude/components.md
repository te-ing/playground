# Component Patterns

## 폴더 구조

각 컴포넌트는 폴더로 구성:

```
Button/
├── Button.tsx
├── Button.module.scss
└── index.ts
```

## index.ts 작성

```typescript
// 기본 export
export { default } from './Button';

// 타입 export가 필요한 경우
export type { ButtonProps } from './Button';
```

## 스타일링

SCSS Modules 사용:

```tsx
import styles from './Button.module.scss';

<button className={styles.button}>Click</button>
```

## Props 타입 정의

```tsx
interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary';
  onClick?: () => void;
}

export default function Button({ children, variant = 'primary', onClick }: ButtonProps) {
  return (
    <button className={styles[variant]} onClick={onClick}>
      {children}
    </button>
  );
}
```
