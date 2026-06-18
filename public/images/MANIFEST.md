# 📷 현대화학 웹사이트 이미지 매뉴얼

이 문서는 사이트에 들어가는 **모든 이미지의 자리(슬롯)**에 대한 상세 안내서입니다.
**디자이너/마케터 시점**에서 한 장씩 따라가며 이미지를 채울 수 있도록 작성되었습니다.

> 코드 변경 없이 이 폴더(`public/images/`)에 정해진 파일명으로 이미지를 저장하기만 하면, 사이트가 자동으로 플레이스홀더에서 실제 이미지로 전환합니다.

---

## 목차

1. [이 시스템이 어떻게 동작하나요?](#1-이-시스템이-어떻게-동작하나요)
2. [가장 빠른 시작 — 5분 안에 첫 이미지 넣기](#2-가장-빠른-시작--5분-안에-첫-이미지-넣기)
3. [파일명 규칙 (매우 중요)](#3-파일명-규칙-매우-중요)
4. [지원 파일 형식과 최적 크기](#4-지원-파일-형식과-최적-크기)
5. [페이지별 슬롯 목록](#5-페이지별-슬롯-목록)
   - [홈](#홈-)
   - [회사소개](#회사소개)
   - [제품정보](#제품정보)
   - [기술&품질](#기술품질)
   - [공통 로고](#공통-로고)
6. [전체 슬롯 한눈에 보기 (체크리스트)](#6-전체-슬롯-한눈에-보기-체크리스트)
7. [작업 팁 — 이미지 준비/편집](#7-작업-팁--이미지-준비편집)
8. [자주 묻는 질문 / 트러블슈팅](#8-자주-묻는-질문--트러블슈팅)

---

## 1. 이 시스템이 어떻게 동작하나요?

사이트의 모든 이미지 자리에는 **고유한 슬롯 ID**가 부여되어 있습니다.
예: `home-hero`, `ceo-portrait`, `product-pvc`, `factory-equipment-1` …

### 동작 흐름

```
┌───────────────────────────────────────────┐
│ public/images/home-hero.jpg 가 있는가?    │
└─────────────┬─────────────────────────────┘
              │
        ┌─────┴─────┐
       있음          없음
        │             │
        ▼             ▼
   실제 이미지     플레이스홀더
   표시            (회색 박스 + 슬롯 ID + 크기 정보)
```

- **이미지가 없을 때**: 자리 크기 그대로 회색 박스가 나타나고, 그 안에 슬롯 ID, 권장 크기, 설명이 표시됩니다. 그래서 **어디에 무슨 이미지가 필요한지 한눈에 보입니다.**
- **이미지가 있을 때**: 박스가 자동으로 사라지고 실제 이미지가 표시됩니다.

### 슬롯 ID는 어디서 정의되나요?

`lib/imageManifest.ts` 파일에 모든 슬롯이 정의되어 있습니다.
**일반적으로 이 파일은 수정할 필요가 없습니다.**
새 이미지 슬롯을 추가하거나 권장 크기를 바꿔야 할 때만 개발자와 함께 수정하세요.

---

## 2. 가장 빠른 시작 — 5분 안에 첫 이미지 넣기

홈 메인 화면의 풀스크린 비주얼(`home-hero`)을 예시로 진행합니다.

### Step 1. 준비

- 추천 사진: 공장 설비/생산 라인이 보이는 가로 사진
- 권장 크기: **1920 × 1080px** (16:9)
- 형식: **JPG** 권장 (용량 ↓)

### Step 2. 파일명 정하기

| 슬롯 ID    | 저장 위치            | 파일명                                   |
| ---------- | -------------------- | ---------------------------------------- |
| `home-hero` | `public/images/` | **`home-hero.jpg`** |

### Step 3. 폴더에 넣기

탐색기에서 `claude-web/public/images/` 폴더를 열고, `home-hero.jpg`로 이름을 바꿔 드래그&드롭.

### Step 4. 확인

브라우저를 새로고침하면 끝. 회색 플레이스홀더가 사라지고 사진이 보이면 성공입니다.

> 개발 서버(`npm run dev`)가 켜져 있다면 저장 즉시 반영됩니다.

---

## 3. 파일명 규칙 (매우 중요)

이 시스템은 **파일명이 정확히 일치해야** 동작합니다.

| 항목           | 규칙                                                                 |
| -------------- | -------------------------------------------------------------------- |
| 위치           | 반드시 `public/images/` 직속 (하위 폴더 ❌)                          |
| 슬롯 ID        | `imageManifest.ts`에 정의된 ID와 정확히 일치 (대소문자 구분)          |
| 확장자         | 슬롯의 `ext` 필드 값 (대부분 `.jpg`, 로고는 `.png`)                  |
| 공백/한글     | ❌ 절대 금지 (`외경.jpg` ❌, `product-outer.jpg` ✅)                  |
| 대소문자       | 영문 소문자만 (`Home-Hero.jpg` ❌, `home-hero.jpg` ✅)                |

### 자주 하는 실수

| 잘못된 예                       | 올바른 예              |
| ------------------------------- | ---------------------- |
| `Home-Hero.jpg`                 | `home-hero.jpg`        |
| `home_hero.jpg`                 | `home-hero.jpg`        |
| `home-hero.JPG`                 | `home-hero.jpg`        |
| `public/images/home/hero.jpg`   | `public/images/home-hero.jpg` |
| `home-hero.png` (슬롯이 jpg)    | `home-hero.jpg`        |

> 슬롯의 정확한 확장자는 **5. 페이지별 슬롯 목록**의 "파일명" 컬럼에서 확인하세요.

---

## 4. 지원 파일 형식과 최적 크기

### 권장 형식

| 형식   | 추천 용도                              | 비고                         |
| ------ | -------------------------------------- | ---------------------------- |
| `.jpg` | 사진 (인물/풍경/공장/제품) — 대부분  | 용량 최적                    |
| `.png` | 로고, 투명 배경이 필요한 경우         | 용량이 큼                    |
| `.webp` | 모든 용도 (최신 권장)                | 용량 ↓ 화질 ↑ (자동 인식)    |

> WebP를 쓰려면 `imageManifest.ts`의 해당 슬롯에서 `ext: "webp"`로 바꿔주세요.

### 용량 가이드라인

| 용도                   | 권장 용량      |
| ---------------------- | -------------- |
| 풀스크린 히어로        | 300 KB ~ 1 MB  |
| 카드/그리드 썸네일     | 80 ~ 200 KB    |
| 로고                   | 10 ~ 50 KB     |

### 크기 가이드

이미지 슬롯의 권장 크기는 **그 위치에 표시되는 최대 해상도의 2배(@2x)** 정도로 준비하면 레티나 디스플레이에서도 선명합니다.

예시:
- 실제 표시 크기 600×400 → 원본 이미지 1200×800 권장

---

## 5. 페이지별 슬롯 목록

> **사용법**: 아래 표의 "파일명"을 그대로 복사해서 이미지 파일명을 바꾸고, `public/images/` 폴더에 저장하세요.

### 홈 (/)

홈 화면은 **풀스크린 미디어 한 장으로 끝나는 단일 화면**입니다 (스크롤 없음).
**사진** 또는 **영상** 어느 쪽이든 자동으로 인식합니다.

#### 옵션 A: 사진

| 슬롯 ID     | 파일 위치                  | 권장 크기   | 비율  |
| ----------- | -------------------------- | ----------- | ----- |
| `home-hero` | `public/images/home-hero.jpg` | 1920 × 1080 | 16:9  |

#### 옵션 B: 영상 (있으면 자동 우선 적용)

| 파일 위치                            | 권장 사양                                       |
| ------------------------------------ | ----------------------------------------------- |
| `public/videos/home-hero.mp4`        | H.264, 1920×1080, **음성 없음 또는 음소거**, 5~15초 루프, 5MB 이내 권장 |

#### 동작 우선순위

1. `public/videos/home-hero.mp4`가 있으면 → **자동 재생 / 무한 루프 / 음소거** 영상
2. 영상이 없고 `public/images/home-hero.jpg`가 있으면 → 사진
3. 둘 다 없으면 → 회색 플레이스홀더

📌 **팁**:
- 글자 오버레이가 없는 깔끔한 풀샷.
- 인물 위주보다는 **설비/라인/제품이 보이는 와이드 컷**이 어울립니다.
- 영상은 **반드시 음소거**된 짧은 루프로 (자동재생 정책상 음소거 필수).

---

### 회사소개

#### `/about/ceo` — CEO 인사말

| 슬롯 ID         | 파일명               | 권장 크기 | 비율 | 용도                  |
| --------------- | -------------------- | --------- | ---- | --------------------- |
| `ceo-portrait`  | `ceo-portrait.jpg`   | 480 × 600 | 4:5  | 대표 정장 인물 사진   |

📌 **팁**: 단색/단순 배경, 정장, 상반신, 약간의 미소가 신뢰감을 줍니다.

#### `/about/location` — 오시는 길

| 슬롯 ID             | 파일명                  | 권장 크기   | 비율   | 용도                |
| ------------------- | ----------------------- | ----------- | ------ | ------------------- |
| `location-building` | `location-building.jpg` | 600 × 400   | 3:2    | 본사 건물 외경     |
| `location-map`      | `location-map.jpg`      | 1280 × 500  | 와이드 | 약도 캡처/이미지   |

📌 **지도 임베드를 원하신다면** `location-map` 슬롯을 빼고, `app/about/location/page.tsx`에서 해당 `<ImageSlot>` 부분을 Naver/Google 지도 iframe 임베드 코드로 교체하세요.

#### `/about/certification` — 인증 및 특허

| 슬롯 ID         | 파일명             | 권장 크기 | 비율 | 용도                |
| --------------- | ------------------ | --------- | ---- | ------------------- |
| `cert-iso9001`  | `cert-iso9001.jpg` | 480 × 680 | 5:7  | ISO9001 인증서 스캔 |

**협력사 로고 (12개)** — 각 240×120 권장, 비율 자유 (배경 흰색 또는 투명 PNG)

| 슬롯 ID            | 파일명                   | 표시 회사               |
| ------------------ | ------------------------ | ----------------------- |
| `partner-logo-1`   | `partner-logo-1.png`     | Continental Contitech   |
| `partner-logo-2`   | `partner-logo-2.png`     | DAEHYUN                 |
| `partner-logo-3`   | `partner-logo-3.png`     | NITTA                   |
| `partner-logo-4`   | `partner-logo-4.png`     | fluiconnecto            |
| `partner-logo-5`   | `partner-logo-5.png`     | HyupShin Hydraulic      |
| `partner-logo-6`   | `partner-logo-6.png`     | (주)화승 R&A (HWASEUNG) |
| `partner-logo-7`   | `partner-logo-7.png`     | SENTEC                  |
| `partner-logo-8`   | `partner-logo-8.png`     | JUNJIN                  |
| `partner-logo-9`   | `partner-logo-9.png`     | TAEWON INDUSTRIAL       |
| `partner-logo-10`  | `partner-logo-10.png`    | 월드튜브                |
| `partner-logo-11`  | `partner-logo-11.png`    | daedong                 |
| `partner-logo-12`  | `partner-logo-12.png`    | Yungjin Enterprise      |

> **협력사 로고는 PNG 권장** (배경 투명 처리가 깔끔). JPG도 가능하지만 흰 배경이 보입니다.

---

### 제품정보 (3단계 + 규격표)

제품은 **3단계 트리** + 각 leaf 페이지 안의 **규격표(타입별)**로 구성됩니다.

```
제품정보 (/products)
├── 외경 CAP (/products/outer)
│   ├── PVC CAP (/products/outer/pvc)   ← 페이지 안에 표 3개 (꼭지/무꼭지/신형꼭지)
│   └── PE CAP  (/products/outer/pe)    ← 페이지 안에 표 3개 (Frange/육각/UT)
└── 내경 CAP (/products/inner)
    ├── 나사 TYPE   (/products/inner/screw)    ← 페이지 안에 표 5개 (GU/M/일반/UNF/PF)
    ├── DUST CAP   (/products/inner/dust)      ← 표 1개
    └── PIPE END CAP (/products/inner/pipe-end) ← 표 1개
```

페이지마다 **메인 사진**(상단 큰 사진) + **각 규격표 옆 작은 단독 사진**이 들어갑니다.

#### 페이지 메인 사진 (큰 사진, 800×500)

| 페이지                          | 슬롯 ID                  | 파일명                        |
| ------------------------------- | ------------------------ | ----------------------------- |
| `/products`                     | `product-all`            | `product-all.jpg`             |
| `/products/outer`               | `product-outer`          | `product-outer.jpg`           |
| `/products/outer/pvc`           | `product-outer-pvc`      | `product-outer-pvc.jpg`       |
| `/products/outer/pe`            | `product-outer-pe`       | `product-outer-pe.jpg`        |
| `/products/inner`               | `product-inner`          | `product-inner.jpg`           |
| `/products/inner/screw`         | `product-inner-screw`    | `product-inner-screw.jpg`     |
| `/products/inner/dust`          | `product-inner-dust`     | `product-inner-dust.jpg`      |
| `/products/inner/pipe-end`      | `product-inner-pipe-end` | `product-inner-pipe-end.jpg`  |

#### 규격표 옆 단독 사진 (작은 사진, 240×320, 3:4 세로컷)

각 규격표 우측 셀에 들어가는 단일 제품 사진입니다. L/W 치수 라벨이 함께 들어가도 좋습니다.

| 어느 표에 들어가는지              | 슬롯 ID                 | 파일명                        |
| --------------------------------- | ----------------------- | ----------------------------- |
| PVC CAP > 꼭지 TYPE               | `spec-pvc-tip`          | `spec-pvc-tip.jpg`            |
| PVC CAP > 무꼭지 TYPE             | `spec-pvc-no-tip`       | `spec-pvc-no-tip.jpg`         |
| PVC CAP > 신형 꼭지 TYPE          | `spec-pvc-tip-new`      | `spec-pvc-tip-new.jpg`        |
| PE CAP > Frange CAP               | `spec-pe-flange`        | `spec-pe-flange.jpg`          |
| PE CAP > 육각 CAP                 | `spec-pe-hex`           | `spec-pe-hex.jpg`             |
| PE CAP > UT TYPE                  | `spec-pe-ut`            | `spec-pe-ut.jpg`              |
| 나사 TYPE > GU                    | `spec-screw-gu`         | `spec-screw-gu.jpg`           |
| 나사 TYPE > M                     | `spec-screw-m`          | `spec-screw-m.jpg`            |
| 나사 TYPE > 일반                  | `spec-screw-general`    | `spec-screw-general.jpg`      |
| 나사 TYPE > UNF                   | `spec-screw-unf`        | `spec-screw-unf.jpg`          |
| 나사 TYPE > PF                    | `spec-screw-pf`         | `spec-screw-pf.jpg`           |
| DUST CAP                          | `spec-dust`             | `spec-dust.jpg`               |
| PIPE END CAP                      | `spec-pipe-end`         | `spec-pipe-end.jpg`           |

📌 **팁**:
- 페이지 메인 사진(`product-*`)은 여러 제품을 함께 보여주는 **그룹 컷**이 어울립니다.
- 규격표 옆 단독 사진(`spec-*`)은 **단일 모델의 깨끗한 단독 컷** (배경 흰색/회색)이 권장.
- 규격표 데이터는 `lib/site.ts`의 `productTree` 안의 `specs` 배열에서 직접 수정 가능합니다.

---

### 기술&품질

#### `/quality/process` — 품질 관리 공정 (측정 설비 4개)

권장 크기: **400 × 300** (4:3).

| 슬롯 ID      | 파일명           | 표시 설비          |
| ------------ | ---------------- | ------------------ |
| `measure-1`  | `measure-1.jpg`  | VERNIER CALIPERS   |
| `measure-2`  | `measure-2.jpg`  | PUSH & PULL GAGE   |
| `measure-3`  | `measure-3.jpg`  | RING GAGE          |
| `measure-4`  | `measure-4.jpg`  | PRECISION SCALE    |

#### `/quality/factory` — 공장현황 (제조 설비 6개)

권장 크기: **600 × 450** (4:3).

| 슬롯 ID                 | 파일명                      | 표시 설비                        |
| ----------------------- | --------------------------- | -------------------------------- |
| `factory-equipment-1`   | `factory-equipment-1.jpg`   | 사출성형기 170TON, 1대           |
| `factory-equipment-2`   | `factory-equipment-2.jpg`   | 사출성형기 170TON, 2대           |
| `factory-equipment-3`   | `factory-equipment-3.jpg`   | 사출성형기 170TON, 3대           |
| `factory-equipment-4`   | `factory-equipment-4.jpg`   | SOFT 자동조립기 10K              |
| `factory-equipment-5`   | `factory-equipment-5.jpg`   | SOFT 자동조립기 20K              |
| `factory-equipment-6`   | `factory-equipment-6.jpg`   | 검사기 10MT                      |

> 설비 라벨은 `app/quality/factory/page.tsx`의 `equipments` 배열에서 자유롭게 수정 가능.

#### `/quality/cases` — 제작 사례 (9 + 1)

| 슬롯 ID         | 파일명              | 권장 크기 |
| --------------- | ------------------- | --------- |
| `case-1` ~ `case-9` | `case-1.jpg` ~ `case-9.jpg` | 400 × 300 |
| `case-featured`     | `case-featured.jpg`         | 800 × 500 |

📌 **팁**: 사례 9개는 작은 그리드, `case-featured`는 하단의 큰 단일 컷 자리입니다.

---

### 공통 로고

| 슬롯 ID    | 파일명          | 권장 크기 | 형식 | 용도                      |
| ---------- | --------------- | --------- | ---- | ------------------------- |
| `logo-main` | `logo-main.png` | 240 × 240 | PNG  | 헤더/푸터 로고 대체 (선택) |

> 현재 헤더/푸터에는 **SVG로 로고를 직접 그려둔 상태**(`components/ui/Logo.tsx`)입니다.
> 실제 SVG/PNG 로고로 교체하시려면 두 가지 방법:
> 1. **간단**: `public/images/logo-main.png`을 저장하고 `Logo.tsx`에서 `<svg>` 대신 `<img src="/images/logo-main.png" />`로 교체
> 2. **권장**: SVG 파일을 받으면 `public/logo.svg`로 저장하고 `Logo.tsx`를 그 SVG를 사용하는 형태로 교체

---

## 6. 전체 슬롯 한눈에 보기 (체크리스트)

준비할 때 출력해서 ✅ 체크하며 사용하세요.

### 홈 (1개 — 사진 또는 영상)
- [ ] `images/home-hero.jpg` (1920×1080) **또는** `videos/home-hero.mp4` (영상) — 풀스크린 미디어

### 회사소개 (14개)
- [ ] `ceo-portrait.jpg` — 480×600 — 대표 사진
- [ ] `location-building.jpg` — 600×400 — 본사 건물
- [ ] `location-map.jpg` — 1280×500 — 약도
- [ ] `cert-iso9001.jpg` — 480×680 — ISO9001 인증서
- [ ] `partner-logo-1.png` ~ `partner-logo-12.png` — 240×120 — 협력사 로고 12개

### 제품정보 (21개)
**페이지 메인 사진 (8개, 800×500)**
- [ ] `product-all.jpg`
- [ ] `product-outer.jpg`
- [ ] `product-outer-pvc.jpg` — PVC CAP 페이지 메인
- [ ] `product-outer-pe.jpg` — PE CAP 페이지 메인
- [ ] `product-inner.jpg`
- [ ] `product-inner-screw.jpg`
- [ ] `product-inner-dust.jpg`
- [ ] `product-inner-pipe-end.jpg`

**규격표 옆 단독 사진 (13개, 240×320)**
- [ ] `spec-pvc-tip.jpg`
- [ ] `spec-pvc-no-tip.jpg`
- [ ] `spec-pvc-tip-new.jpg`
- [ ] `spec-pe-flange.jpg`
- [ ] `spec-pe-hex.jpg`
- [ ] `spec-pe-ut.jpg`
- [ ] `spec-screw-gu.jpg`
- [ ] `spec-screw-m.jpg`
- [ ] `spec-screw-general.jpg`
- [ ] `spec-screw-unf.jpg`
- [ ] `spec-screw-pf.jpg`
- [ ] `spec-dust.jpg`
- [ ] `spec-pipe-end.jpg`

### 기술&품질 (20개)
- [ ] `measure-1.jpg` ~ `measure-4.jpg` — 400×300 — 측정 설비 4개
- [ ] `factory-equipment-1.jpg` ~ `factory-equipment-6.jpg` — 600×450 — 제조 설비 6개
- [ ] `case-1.jpg` ~ `case-9.jpg` — 400×300 — 제작 사례 9개
- [ ] `case-featured.jpg` — 800×500 — 대표 사례

### 공통 (선택)
- [ ] `logo-main.png` — 240×240 — 로고 (SVG 사용 시 불필요)

**총 56개 슬롯** (홈 1 + 회사소개 14 + 제품 21 + 기술&품질 20)

---

## 7. 작업 팁 — 이미지 준비/편집

### 무료 / 쉬운 도구

| 도구            | 용도                                              |
| --------------- | ------------------------------------------------- |
| **Squoosh** (squoosh.app) | 브라우저에서 JPG/WebP 변환 + 용량 압축      |
| **TinyPNG** (tinypng.com) | PNG/JPG 자동 압축                         |
| **Photopea** (photopea.com) | 무료 웹 포토샵 (크롭/리사이즈)            |
| **Canva**       | 디자이너 없이 간단한 배너/조합 만들기            |
| **iLoveIMG**    | 일괄 리사이즈/포맷 변환                          |

### 추천 워크플로우

1. **원본 사진을 한 폴더에 모음** (이름 규칙 X, 일단 모으기만)
2. 각 사진을 보면서 어떤 슬롯에 들어갈지 결정 (위 체크리스트 활용)
3. **Squoosh / Photopea로 크롭** — 권장 비율(예: 3:2)에 맞춰 자르기
4. **권장 크기로 리사이즈** — 가로 픽셀 기준으로 맞춤
5. **JPG로 저장** (품질 80~85% 정도면 충분)
6. **파일명을 슬롯 ID로 변경** (예: `IMG_3421.jpg` → `factory-equipment-1.jpg`)
7. **`public/images/` 폴더에 저장**
8. 사이트 새로고침해서 확인

### 비율을 정확히 맞춰야 하나요?

- **권장 비율을 지키는 것이 가장 좋습니다.** 비율이 다르면 이미지가 잘리거나(`object-cover`), 빈 공간이 생깁니다.
- 슬롯이 4:3인데 16:9 사진을 넣으면 → 위아래가 잘립니다.
- 비율이 안 맞아도 표시는 되지만, 중요한 부분이 잘릴 수 있으니 미리 크롭하는 것이 좋습니다.

---

## 8. 자주 묻는 질문 / 트러블슈팅

### Q. 이미지를 넣었는데 안 보여요.

**체크리스트:**
1. 파일이 정확히 `public/images/` 폴더 직속에 있나요? (하위 폴더 X)
2. 파일명이 정확한가요? (대소문자, 하이픈/언더스코어 구분)
3. 확장자가 매니페스트의 `ext` 값과 일치하나요? (대부분 `.jpg`, 협력사 로고는 `.png`)
4. 개발 서버를 재시작했나요? (`npm run dev` 다시 실행)
5. 브라우저 캐시 비우기 (`Ctrl + Shift + R`)

### Q. 플레이스홀더(회색 박스)에서 슬롯 ID가 안 보여요.

화면이 너무 작거나 슬롯 자체가 작은 경우 라벨이 생략됩니다.
큰 화면(데스크탑)에서 보면 슬롯 ID가 표시됩니다.

### Q. 이미지 크기가 권장보다 작아도 되나요?

- 표시는 되지만 **흐릿하게 보일 수 있습니다**.
- 모니터 해상도가 높을수록 (특히 노트북 레티나, 4K) 큰 원본이 필요합니다.
- 권장 크기보다 **2배 큰 원본**을 추천합니다 (레티나 대응).

### Q. 한 슬롯에 여러 이미지를 슬라이드쇼로 넣고 싶어요.

이 시스템은 1슬롯 = 1이미지 구조입니다. 슬라이드쇼가 필요한 페이지가 있다면 별도 컴포넌트로 개발이 필요합니다. 개발자와 상의하세요.

### Q. 슬롯을 새로 추가하고 싶어요.

`lib/imageManifest.ts` 파일에 새 항목을 추가하고, 해당 위치의 페이지에 `<ImageSlot id="새-슬롯-id" />`를 넣으면 됩니다. 개발자가 함께 작업해야 합니다.

### Q. 이미지에 마우스 호버하면 어두워지게 하고 싶어요.

`<ImageSlot>` 컴포넌트의 `className` prop으로 추가 스타일 가능:
```tsx
<ImageSlot id="case-1" className="hover:brightness-75 transition" />
```

### Q. WebP 형식을 쓰고 싶어요.

매니페스트에서 해당 슬롯의 `ext`를 `"webp"`로 바꾸고, 파일을 `.webp` 확장자로 저장하세요.

---

## 부록 — 작업이 끝났는지 확인하는 방법

전체 작업이 끝났는지 확인하려면:

1. 사이트의 모든 페이지를 한 번씩 방문 (홈, /about/*, /products, /products/*, /quality/*, /contact/*)
2. **회색 박스(플레이스홀더)가 하나도 없으면** 완료
3. 플레이스홀더에는 슬롯 ID가 적혀 있으니, 빠진 슬롯을 바로 알아낼 수 있습니다

작업 도중 어떤 슬롯이 비어 있는지 정리하고 싶다면 위의 [6. 전체 슬롯 한눈에 보기](#6-전체-슬롯-한눈에-보기-체크리스트)를 인쇄해서 ✅ 체크해 가며 진행하세요.

---

문서 버전: 1.0 — 처음 생성됨
프로젝트: claude-web (현대화학 공식 웹사이트)
