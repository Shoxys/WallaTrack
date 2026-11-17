import { CATEGORIES, type Txn } from "@/data/persona";
import { fmtMoney } from "@/engine/engine";
import { CategoryIcon, cx } from "./ui";

export function TxnRow({ txn, fresh = false }: { txn: Txn; fresh?: boolean }) {
  const cat = CATEGORIES[txn.category];
  const income = txn.amountCents > 0;
  return (
    <div className="flex items-center gap-3 py-3">
      <CategoryIcon category={txn.category} />
      <div className="min-w-0 flex-1">
        <p className="truncate text-[15px] font-medium text-ink">{txn.merchant}</p>
        <p className="text-[13px] font-medium" style={{ color: cat.color }}>
          {cat.label}
          {fresh && <span className="text-success"> · Settled just now</span>}
        </p>
      </div>
      <span className={cx("text-[15px] font-bold tabular", income ? "text-success" : "text-ink")}>
        {fmtMoney(txn.amountCents, { sign: true })}
      </span>
    </div>
  );
}
