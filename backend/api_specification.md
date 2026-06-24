# CommitMe365 API Specification (v1.0)

현재 구현된 Nuxt 3 프론트엔드 화면의 데이터 요구사항을 바탕으로 설계된 API 명세서입니다. 이 명세서는 백엔드(Spring Boot) 개발 시 참고 자료로 활용됩니다.

## 1. Authentication (인증)

### [POST] /api/auth/login
로그인을 수행하고 액세스 토큰을 발급받습니다.
- **Request Body**:
  ```json
  {
    "email": "user@example.com",
    "password": "password123"
  }
  ```
- **Response (200 OK)**:
  ```json
  {
    "accessToken": "jwt_token_here",
    "user": {
      "id": 1,
      "email": "user@example.com",
      "name": "Alex River",
      "avatar": "https://..."
    }
  }
  ```

---

## 2. Posts (게시글)

### [GET] /api/posts
메인 피드용 게시글 목록을 조회합니다. (페이징 및 필터링 포함)
- **Query Parameters**:
  - `page`: 페이지 번호 (default: 0)
  - `size`: 페이지 당 개수 (default: 10)
  - `category`: 특정 카테고리 필터링 (optional)
  - `topic`: 특정 태그 필터링 (optional)
- **Response (200 OK)**:
  ```json
  {
    "content": [
      {
        "id": 1,
        "title": "Architecting for Resilience...",
        "excerpt": "Stability in complex systems...",
        "author": "Alex River",
        "authorImage": "https://...",
        "date": "2026-04-09",
        "category": "Architecture",
        "image": "https://...",
        "likes": 124
      }
    ],
    "totalPages": 5,
    "totalElements": 48
  }
  ```

### [GET] /api/posts/hero
메인 피드 최상단에 노출할 하이라이트 게시글을 조회합니다.
- **Response (200 OK)**:
  ```json
  {
    "id": 10,
    "title": "The AI Revolution...",
    "excerpt": "Dive deep into the shifting paradigms...",
    "image": "https://...",
    "authorName": "Elena Rodriguez",
    "authorImage": "https://...",
    "date": "Oct 24",
    "readTime": "8 min"
  }
  ```

### [GET] /api/posts/{id}
게시글 상세 내용을 조회합니다.
- **Response (200 OK)**:
  ```json
  {
    "id": 1,
    "title": "Architecting for Resilience...",
    "content": "<h2>Introduction...</h2><p>Full content HTML...</p>",
    "excerpt": "...",
    "author": "Alex River",
    "authorImage": "https://...",
    "date": "Oct 22, 2026",
    "readTime": "12 min",
    "category": "Architecture",
    "tags": ["systems", "resilience"],
    "likes": "2.4k"
  }
  ```

### [POST] /api/posts
새로운 게시글을 작성합니다.
- **Request Body**:
  ```json
  {
    "title": "New Post Title",
    "content": "Post content in Markdown or HTML",
    "category": "Technology",
    "tags": ["vue", "nuxt"],
    "status": "PUBLISHED" 
  }
  ```
- **Response (201 Created)**: Created post object or ID.

### [GET] /api/posts/{id}/comments
특정 게시글의 댓글 목록을 조회합니다. (페이징 포함)
- **Query Parameters**:
  - `page`: 페이지 번호 (default: 0)
  - `size`: 페이지 당 개수 (default: 10)
- **Response (200 OK)**:
  ```json
  {
    "content": [
      {
        "id": 1,
        "author": "Sarah Chen",
        "authorImage": "https://...",
        "date": "2 hours ago",
        "content": "Great insight on the circuit breaker pattern..."
      }
    ],
    "totalPages": 2,
    "totalElements": 18,
    "last": false
  }
  ```

### [POST] /api/posts/{id}/comments
특정 게시글에 새로운 댓글을 작성합니다.
- **Request Body**:
  ```json
  {
    "content": "This is a new comment."
  }
  ```
- **Response (201 Created)**:
  ```json
  {
    "id": 3,
    "author": "Current User",
    "authorImage": "https://...",
    "date": "Just now",
    "content": "This is a new comment."
  }
  ```

---

## 3. Categories & Meta (메타 데이터)

### [GET] /api/categories
사이드바 및 필터에 사용할 카테고리 및 인기 토픽 목록을 조회합니다.
- **Response (200 OK)**:
  ```json
  {
    "menuItems": [
      { "title": "For You", "icon": "mdi-star-outline", "to": "/" },
      { "title": "Trending", "icon": "mdi-trending-up", "to": "/trending" }
    ],
    "topics": ["Frontend", "Backend", "DevOps", "Architecture"]
  }
  ```

---

## 🚀 Backend Implementation Notes (Spring Boot)
1. **Security**: Spring Security와 JWT를 사용하여 `/api/posts` (POST) 등 쓰기 권한이 필요한 엔드포인트를 보호해야 합니다.
2. **JPA Entity**: `User`, `Post`, `Category` 엔터티를 구성하고, Post-User는 ManyToOne 관계를 맺습니다.
3. **Validation**: 게시글 작성 시 제목(최대 100자), 내용(필수) 등의 유효성 검사를 적용합니다.
