# Coding Conventions

## 네이밍

| 대상 | 규칙 | 예시 |
|------|------|------|
| 컴포넌트 | PascalCase | `Button`, `TodoList` |
| 파일명 (컴포넌트) | PascalCase | `Button.tsx`, `TodoList.tsx` |
| 파일명 (유틸) | camelCase | `formatDate.ts` |
| 변수/함수 | camelCase | `isLoading`, `handleClick` |
| 상수 | UPPER_SNAKE_CASE | `MAX_COUNT`, `API_URL` |
| 타입/인터페이스 | PascalCase | `ButtonProps`, `User` |

## Import 순서

```tsx
// 1. 외부 라이브러리
import { useState } from 'react';
import { Link } from 'react-router';

// 2. 내부 컴포넌트/유틸
import Button from '@/components/ui/Button';
import { formatDate } from '@/utils/date';

// 3. 스타일
import styles from './Component.module.scss';
```

## 타입 정의

- Props 타입은 컴포넌트 파일 내에 정의
- 공유 타입은 `types/` 폴더에 정의
- `interface` 우선 사용, 유니온/인터섹션 필요시 `type` 사용
