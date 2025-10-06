# 🎊 모바일 청첩장 (Mobile Wedding Invitation)

React + TypeScript + Vite로 제작한 아름다운 모바일 청첩장입니다.

## 🚀 시작하기

### 1. 의존성 설치
```bash
npm install
```

### 2. 개발 서버 실행
```bash
npm run dev
```

### 3. 빌드
```bash
npm run build
```

## 📸 갤러리 이미지 추가하기

### 방법 1: 로컬 이미지 사용 (권장)

1. `public/images` 폴더에 사진을 추가하세요
2. 파일명을 다음과 같이 지정:
   - `photo1.jpg`
   - `photo2.jpg`
   - `photo3.jpg`
   - `photo4.jpg`
   - `photo5.jpg`
   - `photo6.jpg`

### 방법 2: URL 이미지 사용

`src/components/Gallery.tsx` 파일에서 이미지 URL을 변경:

```typescript
const images = [
  'https://your-image-url.com/photo1.jpg',
  'https://your-image-url.com/photo2.jpg',
  // ...
];
```

## ✏️ 정보 수정하기

### 신랑/신부 정보
📝 `src/components/MainCover.tsx` - 메인 화면
📝 `src/components/Footer.tsx` - 하단 정보

### 예식 정보
📝 `src/components/EventInfo.tsx`
- 날짜
- 시간
- 장소

### 오시는 길
📝 `src/components/Location.tsx`
- 주소
- 교통 정보
- 지도 링크 (카카오맵)

### 계좌번호
📝 `src/components/AccountInfo.tsx`
- 신랑측 계좌
- 신부측 계좌

## 🎨 색상 변경

`src/index.css` 파일에서 CSS 변수 수정:

```css
:root {
  --primary-color: #d4a574;    /* 메인 색상 (골드) */
  --secondary-color: #f5e6d3;  /* 보조 색상 (베이지) */
  --text-dark: #3d3d3d;        /* 진한 텍스트 */
  --text-light: #666;          /* 연한 텍스트 */
  --background: #fefdfb;       /* 배경색 */
}
```

## 📦 포함된 섹션

1. ✨ **메인 커버** - 신랑/신부 이름, 날짜
2. 📅 **예식 안내** - 날짜, 시간, 장소, 캘린더
3. 📸 **갤러리** - 사진 갤러리 (라이트박스)
4. 🗺️ **오시는 길** - 지도, 교통정보
5. 💝 **마음 전하실 곳** - 계좌번호 (복사 기능)
6. 👋 **푸터** - 감사 인사

## 🛠️ 기술 스택

- **React 19** - UI 프레임워크
- **TypeScript** - 타입 안정성
- **Vite** - 빠른 빌드 도구
- **Framer Motion** - 부드러운 애니메이션
- **React Icons** - 아이콘

## 📱 반응형 디자인

모바일 환경에 최적화되어 있으며, 다양한 화면 크기에서 잘 작동합니다.

## 🎉 배포하기

### Vercel 배포
```bash
npm install -g vercel
vercel
```

### Netlify 배포
```bash
npm run build
# dist 폴더를 Netlify에 업로드
```

## 📝 라이선스
포트폴리오용으로 만들어졌습니다.
깃허브 출처 남기고 사용해주세요
