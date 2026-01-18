# Template 2026

React 19 + TypeScript + Vite 7 프로젝트 템플릿

## 기술 스택

- React 19
- TypeScript 5.9
- Vite 7
- React Router 7
- SCSS Modules
- ESLint + Prettier

## 스크립트

```bash
npm run dev      # 개발 서버
npm run build    # 프로덕션 빌드
npm run preview  # 빌드 미리보기
npm run lint     # ESLint 실행
npm run format   # Prettier 포맷팅
```

## 프로젝트 구조

```
src/
├── components/           # 공유 컴포넌트
│   ├── ui/              # Button, Input, Modal 등 UI 컴포넌트
│   ├── layout/          # Header, Footer, Sidebar 등 레이아웃
│   └── form/            # TextField, SelectField 등 폼 컴포넌트
├── pages/               # 페이지 컴포넌트
│   └── [PageName]/
│       ├── components/  # 해당 페이지 전용 컴포넌트
│       ├── PageName.tsx
│       ├── PageName.module.scss
│       └── index.ts
├── styles/              # 전역 스타일
└── App.tsx              # 라우팅 설정
```

## 컴포넌트 배치 규칙

| 사용 범위 | 위치 |
|----------|------|
| 한 페이지에서만 사용 | `pages/[PageName]/components/` |
| 여러 페이지에서 공유 | `components/ui/`, `layout/`, `form/` |

## 컴포넌트 작성 규칙

### 폴더 구조

각 컴포넌트는 폴더로 구성:

```
Button/
├── Button.tsx
├── Button.module.scss
└── index.ts
```

### index.ts 작성

```typescript
// 기본 export
export { default } from './Button';

// 타입 export가 필요한 경우
export type { ButtonProps } from './Button';
```

### 스타일링

SCSS Modules 사용:

```tsx
import styles from './Button.module.scss';

<button className={styles.button}>Click</button>
```

## 라우팅

React Router 7 사용. `App.tsx`에서 라우트 정의:

```tsx
import { Routes, Route } from 'react-router';

<Routes>
  <Route path="/" element={<Home />} />
  <Route path="/todos" element={<TodoListPage />} />
</Routes>
```

페이지 간 이동:

```tsx
import { Link } from 'react-router';

<Link to="/todos">Todo List</Link>
```
