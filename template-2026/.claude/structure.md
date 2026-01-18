# Project Structure

## 폴더 구조

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

## 컴포넌트 배치 원칙

| 사용 범위 | 위치 |
|----------|------|
| 한 페이지에서만 사용 | `pages/[PageName]/components/` |
| 여러 페이지에서 공유 | `components/ui/`, `layout/`, `form/` |

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
