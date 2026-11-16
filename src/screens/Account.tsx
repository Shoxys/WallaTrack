import { useMemo, useState } from "react";
import { CircleDollarSign, Copy } from "lucide-react";
import { Button, Card, ScreenHeader, Segmented } from "@/components/ui";
import { TxnRow } from "@/components/TxnRow";
import { PERSONA } from "@/data/persona";
import { fmtLongDay, fmtMoney } from "@/engine/engine";
import { useStore, useTransactions } from "@/state/store";

type Filter = "all" | "in" | "out";

export function AccountScreen() {
  const { state, dispatch } = useStore();
  const txns = useTransactions();
  const [filter, setFilter] = useState<Filter>("all");

  const groups = useMemo(() => {
    const shown = txns.filter((t) =>
      filter === "all" ? true : filter === "in" ? t.amountCents > 0 : t.amountCents < 0,
    );
    const map = new Map<number, typeof shown>();
    shown.forEach((t) => map.set(t.day, [...(map.get(t.day) ?? []), t]));
    return [...map.entries()].sort((a, b) => b[0] - a[0]);
  }, [txns, filter]);

  return (
    <div className="pb-8">
      <ScreenHeader title="Account" />
      <div className="space-y-5 px-5">
        <div className="relative overflow-hidden rounded-[26px] bg-[linear-gradient(135deg,#E3241B_0%,#B8120C_60%,#8E0D08_100%)] p-5 text-white shadow-[0_14px_30px_-12px_rgb(218_23_16/0.55)]">
          <svg
            className="absolute -top-6 -right-10 h-48 w-48 opacity-[0.12]"
            viewBox="0 0 100 100"
            aria-hidden="true"
          >
            <circle cx="50" cy="50" r="48" fill="none" stroke="white" strokeWidth="14" />
            <circle cx="50" cy="50" r="22" fill="none" stroke="white" strokeWidth="10" />
          </svg>
          <p className="text-[13px] font-semibold text-white/80">{PERSONA.account.name}</p>
          <p className="mt-4 text-[12px] text-white/70">Available balance</p>
          <p className="text-[34px] leading-none font-extrabold tracking-[-0.03em] tabular">
            {fmtMoney(state.savedCents)}
          </p>
          <div className="mt-5 flex items-center justify-between text-[13px]">
            <div className="flex gap-5">
              <div>
                <p className="text-[11px] text-white/65">BSB</p>
                <p className="font-semibold tabular">{PERSONA.account.bsb}</p>
              </div>
              <div>
                <p className="text-[11px] text-white/65">Account</p>
                <p className="font-semibold tabular">{PERSONA.account.number}</p>
              </div>
            </div>
            <span
              className="grid size-8 place-items-center rounded-full bg-white/15"
              aria-hidden="true"
            >
              <Copy className="size-3.5" />
            </span>
          </div>
        </div>

        <Button
          className="w-full"
          size="lg"
          onClick={() => dispatch({ type: "navigate", tab: "pay" })}
        >
          <CircleDollarSign className="size-5" />
          Pay
        </Button>

        <section className="space-y-3">
          <div className="flex items-center justify-between px-1">
            <h2 className="text-[17px] font-bold tracking-[-0.01em]">History</h2>
          </div>
          <Segmented<Filter>
            value={filter}
            onChange={setFilter}
            options={[
              { value: "all", label: "All" },
              { value: "in", label: "Money in" },
              { value: "out", label: "Money out" },
            ]}
          />
          <div className="space-y-4">
            {groups.map(([day, list]) => (
              <div key={day}>
                <p className="mb-1.5 px-1 text-[12.5px] font-semibold text-muted">
                  {day === 0 ? `Today · ${fmtLongDay(day)}` : fmtLongDay(day)}
                </p>
                <Card className="divide-y divide-black/[0.05] px-4 py-1">
                  {list.map((t) => (
                    <TxnRow key={t.id} txn={t} fresh={state.addedTxns.some((a) => a.id === t.id)} />
                  ))}
                </Card>
              </div>
            ))}
            {groups.length === 0 && (
              <p className="py-8 text-center text-[13px] text-muted">Nothing here yet.</p>
            )}
          </div>
        </section>
      </div>
    </div>
  );
}
