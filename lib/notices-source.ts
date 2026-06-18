import { notices as fallbackNotices } from "@/lib/site";

/**
 * 공지사항 데이터 소스.
 *
 * ── 구글 시트로 공지를 관리하는 방법 ─────────────────────────────
 * 1) 구글 시트를 하나 만들고 첫 줄(머리글)을 다음과 같이 둡니다:
 *        A열: 제목   |   B열: 날짜   |   C열: 내용
 *    (둘째 줄부터 실제 공지 입력)
 * 2) 구글 시트 메뉴에서  파일 → 공유 → 웹에 게시  →
 *    "쉼표로 구분된 값(.csv)" 형식으로 게시하면 URL이 나옵니다.
 *      예) https://docs.google.com/spreadsheets/d/e/2PACX-xxxx/pub?gid=0&single=true&output=csv
 * 3) 그 URL을 아래 SHEET_CSV_URL 에 붙여넣으면 끝.
 *    → 이후 직원이 시트만 고치면 홈페이지 공지에 자동 반영(재빌드 불필요).
 *
 * ※ SHEET_CSV_URL 이 비어 있으면, 아래 기본 공지(lib/site.ts)를 그대로 사용합니다.
 *   (시트를 아직 안 만들었어도 사이트는 정상 동작)
 * ───────────────────────────────────────────────────────────────
 */
const SHEET_CSV_URL =
  "https://docs.google.com/spreadsheets/d/e/2PACX-1vRsNHn1xXfppRmPpcA1R3cAEbw4eGcbM1DGMS7ehDVSBEPc_CrsVwJTVN-CKaLfogMOK6cOC6hoZvdh/pub?output=csv";

export type Notice = { id: number; title: string; date: string; body: string };

const FALLBACK: Notice[] = fallbackNotices.map((n) => ({
  id: n.id,
  title: n.title,
  date: n.date,
  body: n.body,
}));

/** 따옴표·쉼표·줄바꿈이 섞인 CSV를 안전하게 파싱 */
function parseCSV(text: string): string[][] {
  const rows: string[][] = [];
  let row: string[] = [];
  let field = "";
  let inQuotes = false;

  for (let i = 0; i < text.length; i++) {
    const c = text[i];
    if (inQuotes) {
      if (c === '"') {
        if (text[i + 1] === '"') {
          field += '"';
          i++;
        } else {
          inQuotes = false;
        }
      } else {
        field += c;
      }
    } else {
      if (c === '"') inQuotes = true;
      else if (c === ",") {
        row.push(field);
        field = "";
      } else if (c === "\n") {
        row.push(field);
        rows.push(row);
        row = [];
        field = "";
      } else if (c !== "\r") {
        field += c;
      }
    }
  }
  if (field.length || row.length) {
    row.push(field);
    rows.push(row);
  }
  return rows;
}

/**
 * 공지 목록을 가져온다.
 * - 시트 URL이 설정돼 있으면 구글 시트에서, 아니면(또는 실패 시) 기본 공지를 반환.
 */
export async function fetchNotices(): Promise<Notice[]> {
  if (!SHEET_CSV_URL) return FALLBACK;
  try {
    const res = await fetch(SHEET_CSV_URL, { cache: "no-store" });
    if (!res.ok) return FALLBACK;
    const text = await res.text();
    const rows = parseCSV(text).filter((r) => r.some((c) => c.trim() !== ""));
    const data = rows
      .slice(1) // 첫 줄(머리글: 제목/날짜/내용) 제외
      .map((r, i) => ({
        id: i + 1,
        title: (r[0] ?? "").trim(),
        date: (r[1] ?? "").trim(),
        body: (r[2] ?? "").trim(),
      }))
      .filter((n) => n.title !== "");
    return data.length ? data : FALLBACK;
  } catch {
    return FALLBACK;
  }
}
