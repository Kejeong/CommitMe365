# CommitMe365

> 매일의 커밋이 1년을 만든다 — **CommitMe365**

CommitMe365는 **회사(CommitMe365)에서의 업무 기록과 개발 일지**, 그리고 **그동안 공부한 개발 지식**을 한곳에 정리하기 위해 만든 개인 개발 블로그 / 지식 아카이브 프로젝트입니다.

단순한 게시판이 아니라, 시간이 지나도 다시 찾아볼 수 있도록 **카테고리 · 태그 · 검색** 기반으로 정리되는 "나만의 기술 자산 데이터베이스"를 목표로 합니다.

---

## ✨ 주요 기능

- **업무 일지 (Work Log)** — CommitMe365 회사에서의 일별 업무 내용, 회고, 트러블슈팅 기록
- **개발 지식 아카이브 (Dev Notes)** — Frontend / Backend / Architecture / DevOps 등 카테고리별 학습 정리
- **에디터 기반 글쓰기** — 마크다운/리치 텍스트 작성, 카테고리·태그 분류
- **카테고리 & 토픽 필터링** — 사이드바에서 주제별로 빠르게 탐색
- **하이라이트 / 피드** — 메인 화면에 대표 글과 최신 글 노출
- **댓글 / 좋아요** — 글 단위 피드백 기록
- **회원 가입 / 로그인** — Spring Security 기반 인증

---

## 🛠 기술 스택

### Frontend (`frontEnd/`)
| 분류 | 기술 |
| --- | --- |
| Framework | **Nuxt 3** (Vue 3, SSR/SSG) |
| UI | **Vuetify 3**, `@mdi/font` |
| Style | Sass |
| Language | TypeScript |
| 구조 | Atomic Design (`components/atoms`, `components/organisms`) |

### Backend (`backEnd/`)
| 분류 | 기술 |
| --- | --- |
| Framework | **Spring Boot 3.4.3** |
| Language | **Java 21** |
| Build | Gradle |
| ORM | Spring Data JPA / Hibernate |
| DB | **PostgreSQL** |
| Security | Spring Security (인증/인가) |
| Validation | Spring Boot Starter Validation |
| Util | Lombok |

### Infra / Tooling
- Git / GitHub
- VS Code
- ERD: `backEnd/erd.vuerd.json` (vuerd)

---

## 📂 프로젝트 구조

```
CommitMe365/
├── frontEnd/                  # Nuxt 3 클라이언트
│   ├── app.vue
│   ├── pages/                 # 라우트 단위 페이지
│   │   ├── index.vue          # 메인 피드
│   │   ├── home.vue
│   │   ├── editor.vue         # 글쓰기 에디터
│   │   ├── signup.vue
│   │   └── post/[id].vue      # 게시글 상세
│   ├── components/
│   │   ├── atoms/             # AppButton, AppInput
│   │   └── organisms/         # AppNavbar, CategorySidebar, PostCard, WriteEditor ...
│   ├── layouts/
│   ├── composables/
│   ├── middleware/
│   ├── plugins/
│   ├── server/
│   └── nuxt.config.ts
│
└── backEnd/                   # Spring Boot 서버
    ├── build.gradle
    ├── api_specification.md   # API 명세
    ├── erd.vuerd.json         # ERD 다이어그램
    └── src/main/
        ├── java/com/commitme365/
        │   ├── CommitMe365Application.java
        │   ├── controller/    # AuthController ...
        │   ├── service/       # UserService ...
        │   ├── repository/    # UserRepository ...
        │   ├── entity/        # User, Article, Category, Comments, BaseTimeEntity ...
        │   ├── dto/           # SignupRequest, LoginRequest
        │   ├── security/      # CustomUserDetails(Service)
        │   └── config/        # SecurityConfig
        └── resources/
            └── application.properties
```

---

## 🚀 시작하기

### 사전 요구 사항
- **JDK 21**
- **Node.js 20+** & npm
- **PostgreSQL 14+** (로컬에서 `commitme365` DB 사용)
- Gradle (또는 Gradle Wrapper 추가 후 `./gradlew` 사용)

### 1. 데이터베이스 준비
```bash
# PostgreSQL 실행 (Homebrew 예시)
brew services start postgresql@17

# DB 생성
createdb commitme365
```

기본 접속 정보는 `backEnd/src/main/resources/application.properties` 에 정의되어 있습니다.
- URL: `jdbc:postgresql://localhost:5432/commitme365`
- User: `postgres` / Password: `1234`

> 비밀번호는 본인 환경에 맞게 수정하거나, 환경 변수로 분리해서 사용하세요.

### 2. 백엔드 실행
```bash
cd backEnd
gradle bootRun
# → http://localhost:8080
```

### 3. 프론트엔드 실행
```bash
cd frontEnd
npm install
npm run dev
# → http://localhost:3000
```

### 4. 프로덕션 빌드 (프론트)
```bash
cd frontEnd
npm run build
npm run preview
```

---

## 🔌 API 개요

자세한 명세는 [`backEnd/api_specification.md`](./backEnd/api_specification.md) 참고.

| Method | Endpoint | 설명 |
| --- | --- | --- |
| POST | `/api/auth/login` | 로그인, JWT 발급 |
| GET | `/api/posts` | 게시글 목록 (페이징/카테고리/태그 필터) |
| GET | `/api/posts/hero` | 메인 하이라이트 게시글 |
| GET | `/api/posts/{id}` | 게시글 상세 |
| POST | `/api/posts` | 게시글 작성 (인증 필요) |
| GET | `/api/posts/{id}/comments` | 댓글 목록 |
| POST | `/api/posts/{id}/comments` | 댓글 작성 |
| GET | `/api/categories` | 카테고리 / 인기 토픽 |

---

## 🗺 로드맵

- [ ] JWT 기반 로그인 / 인가 마무리
- [ ] 게시글 CRUD 전체 흐름 (작성/수정/삭제)
- [ ] 마크다운 에디터 + 코드 하이라이팅
- [ ] 태그 기반 검색 / 풀텍스트 검색
- [ ] 업무 일지 전용 캘린더 뷰
- [ ] "공부한 지식" 시리즈 / 북마크 기능
- [ ] 다크 모드
- [ ] 배포 (Frontend: Vercel/Netlify, Backend: Fly.io/Render)

---
