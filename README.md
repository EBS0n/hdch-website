# 현대화학 웹사이트 (claude-web)

Figma 디자인 "클로드"를 기반으로 구현한 **현대화학** 공식 웹사이트입니다.

- **프레임워크**: Next.js 16 (App Router) + Tailwind CSS v4 + TypeScript
- **반응형**: 데스크탑 우선, 태블릿/모바일 자동 대응
- **이미지**: 슬롯 시스템 — 이미지가 없으면 자동으로 플레이스홀더 표시

## 시작하기

```bash
npm install
npm run dev
```

브라우저에서 [http://localhost:3000](http://localhost:3000) 에 접속.

## 폴더 구조

```
app/
  page.tsx                  홈
  about/
    ceo/                    CEO 인사말
    history/                회사 연혁
    certification/          인증 및 특허
    location/               오시는 길
  products/
    page.tsx                제품 전체보기
    [category]/             제품 카테고리 상세
  quality/
    process/                품질 관리 공정
    factory/                공장현황
    cases/                  제작 사례
  contact/
    quote/                  견적 문의
    faq/                    FAQ (목록 + 상세)
    notice/                 공지사항 (목록 + 상세)
  globals.css               전역 스타일/디자인 토큰
  layout.tsx                루트 레이아웃 (폰트, 메타데이터)

components/
  layout/
    Header.tsx              헤더 (다크/라이트 변형)
    Footer.tsx              푸터
    SideDrawer.tsx          햄버거 → 우측 사이드 메뉴
  ui/
    ImageSlot.tsx           이미지 슬롯 (자동 플레이스홀더)
    Container.tsx           최대 너비 컨테이너
    Logo.tsx                현대화학 로고 (SVG)
    PageTitle.tsx           페이지 제목

lib/
  site.ts                   사이트 공통 데이터 (회사 정보, 네비, 연혁, FAQ, 공지)
  imageManifest.ts          이미지 슬롯 정의

public/
  images/
    MANIFEST.md             📷 이미지 매뉴얼 (필독!)
```

## 이미지 넣기

`public/images/MANIFEST.md`에 매우 상세한 매뉴얼이 있습니다.
요약: 정해진 파일명(예: `home-hero.jpg`)으로 이미지를 `public/images/` 폴더에 저장하면 끝.

이미지 슬롯 총 44개:

- 홈 — 1개
- 회사소개 — 14개 (CEO 사진, 본사, 약도, 인증서, 협력사 로고 12개)
- 제품정보 — 9개 (전체 + 카테고리 8개)
- 기술&품질 — 20개 (측정 설비 4개, 제조 설비 6개, 제작 사례 9개 + 대표 1개)

## 디자인 토큰

`app/globals.css`의 `@theme` 블록에서 색상/폰트/브레이크포인트를 관리합니다.
주요 색상:
- `navy-800` (#1A3C8E) — 진한 네이비 (제목/강조)
- `navy-500` (#3C7BD9) — 밝은 블루
- `navy-50` (#F0F4FB) — 옅은 배경

## 빌드 & 배포

```bash
npm run build
npm start
```

## 라이센스

© 2026 현대화학 Co., Ltd. All rights reserved.
