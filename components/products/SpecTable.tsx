import ImageSlot from "@/components/ui/ImageSlot";
import { isSlotId } from "@/lib/imageManifest";
import type { SpecColumn, SpecTable as SpecTableType } from "@/lib/site";

type Props = { table: SpecTableType };

const LINE = "#32409A";
const wrapperStyle: React.CSSProperties = {
  borderTop: `2px solid ${LINE}`,
  borderBottom: `3px double ${LINE}`,
};
const theadStyle: React.CSSProperties = {
  borderBottom: `2px solid ${LINE}`,
};

/**
 * 제품 규격표.
 * - 표마다 dimension/quantity 컬럼이 가변 (예: W/L/T, ①②③④, O·D/I·D/L, H①/H②/L)
 * - commonValue 컬럼은 rowspan으로 한 셀
 * - alignRight 컬럼은 우측 정렬 (PACK/BOX)
 * - 모든 선 #32409A, 좌·우 외곽선 없음
 */
export default function SpecTable({ table }: Props) {
  const rowCount = table.rows.length;
  const dimCols = table.dimensionColumns;
  const qtyCols = table.quantityColumns;
  const allCols = [...dimCols, ...qtyCols];
  const hasImage = !!table.productImageSlot && isSlotId(table.productImageSlot);

  // 정적 클래스 (Tailwind JIT 안정성)
  const cell = "border border-[#32409A]";
  const firstCol = "border border-[#32409A] border-l-0";
  const lastCol = "border border-[#32409A] border-r-0";

  return (
    <section>
      <h3 className="text-[18px] font-bold text-ink-900 mb-3">
        {table.title}
      </h3>
      <div className="overflow-x-auto">
        <div style={wrapperStyle}>
          <table className="w-full border-collapse text-[12px] sm:text-[13px]">
            <thead style={theadStyle}>
              <tr className="text-ink-900">
                <th rowSpan={2} className={`${firstCol} py-2.5 px-2 font-semibold w-[44px]`}>
                  No.
                </th>
                <th rowSpan={2} className={`${cell} py-2.5 px-2 font-semibold w-[80px]`}>
                  규 격
                </th>
                <th colSpan={dimCols.length} className={`${cell} py-2.5 px-2 font-semibold`}>
                  치&nbsp;&nbsp;수
                </th>
                <th colSpan={qtyCols.length} className={`${cell} py-2.5 px-2 font-semibold`}>
                  수&nbsp;&nbsp;량
                </th>
                <th rowSpan={2} className={`${lastCol} py-2.5 px-2 font-semibold w-[160px] sm:w-[200px]`}>
                  제품 사진
                </th>
              </tr>
              <tr className="text-ink-900">
                {dimCols.map((c, i) => (
                  <th key={`dh-${i}`} className={`${cell} py-1.5 px-2 font-medium`}>
                    {c.label}
                  </th>
                ))}
                {qtyCols.map((c, i) => (
                  <th key={`qh-${i}`} className={`${cell} py-1.5 px-2 font-medium`}>
                    {c.label}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {table.rows.map((r, idx) => (
                <tr key={`${r.no}-${idx}`} className="text-ink-900 tabular-nums">
                  <td className={`${firstCol} py-1.5 px-2 text-center`}>{r.no}</td>
                  <td className={`${cell} py-1.5 px-2 text-center`}>{r.size}</td>
                  {allCols.map((col, ci) => (
                    <SpecCell
                      key={ci}
                      column={col}
                      value={r.values[ci] ?? ""}
                      rowIndex={idx}
                      rowCount={rowCount}
                      cellClass={cell}
                    />
                  ))}
                  {idx === 0 && hasImage ? (
                    // 사진 칸은 모든 행을 rowSpan. 사진이 행 높이를 강제로 늘리지 않도록
                    // 셀 높이에 맞춰 contain으로 들어가게 함 → 행 적은 표에서 마지막 칸
                    // 늘어짐(WebKit rowSpan 잔여높이 배분) 방지.
                    <td
                      rowSpan={rowCount}
                      className={`${lastCol} p-2 align-middle`}
                      style={{ height: 1 }}
                    >
                      <div className="flex h-full w-full flex-col items-center justify-center">
                        <div className="flex min-h-0 w-full max-w-[160px] flex-1 items-center justify-center">
                          <ImageSlot
                            id={table.productImageSlot as never}
                            rounded="md"
                            compact
                            fixedAspect={false}
                            fit="contain"
                            className="max-h-[150px]"
                            caption={`${table.title} 단독 컷`}
                          />
                        </div>
                        {table.productImageNote && (
                          <p className="mt-1 text-[10px] text-ink-400 text-center">
                            {table.productImageNote}
                          </p>
                        )}
                      </div>
                    </td>
                  ) : null}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}

function SpecCell({
  column,
  value,
  rowIndex,
  rowCount,
  cellClass,
}: {
  column: SpecColumn;
  value: string;
  rowIndex: number;
  rowCount: number;
  cellClass: string;
}) {
  const align = column.alignRight ? "text-right pr-3" : "text-center";
  if (column.commonValue !== undefined) {
    if (rowIndex !== 0) return null;
    return (
      <td
        rowSpan={rowCount}
        className={`${cellClass} py-1.5 px-2 align-middle text-center`}
      >
        {column.commonValue}
      </td>
    );
  }
  return <td className={`${cellClass} py-1.5 px-2 ${align}`}>{value}</td>;
}
