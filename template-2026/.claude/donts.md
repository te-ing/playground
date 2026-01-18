# Don'ts

## TypeScript

- `any` 타입 사용 금지 → `unknown` 사용 후 타입 가드
- `@ts-ignore` 사용 금지 → 타입 문제 해결
- non-null assertion (`!`) 남용 금지 → 옵셔널 체이닝 사용

## 스타일링

- inline style 사용 금지 → SCSS Modules 사용
- 전역 CSS 클래스 사용 금지 → 모듈 스코프 유지

## 컴포넌트

- 한 파일에 여러 컴포넌트 정의 금지 → 파일당 하나의 컴포넌트
- props drilling 3단계 이상 금지 → Context 또는 상태관리 도입
- useEffect 내 직접 API 호출 금지 → 커스텀 훅으로 분리

## 기타

- console.log 커밋 금지 → 디버깅 후 제거
- 주석 처리된 코드 커밋 금지 → 삭제
- 매직 넘버 사용 금지 → 상수로 정의
