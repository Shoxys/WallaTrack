import { useMemo, useState } from "react";
import { ChevronRight, Copy } from "lucide-react";
import {
  Button,
  Card,
  CategoryIcon,
  Pill,
  ScreenHeader,
  SectionTitle,
  Segmented,
} from "@/components/ui";
import { WestpacLogo } from "@/components/Brand";
import { PayIcon } from "@/components/GelIcons";
import { TxnRow } from "@/components/TxnRow";
import { PERSONA } from "@/data/persona";
import { fmtLongDay, fmtMoney } from "@/engine/engine";
import { usePending, useStore, useTransactions } from "@/state/store";

type Filter = "all" | "in" | "out";

export function AccountScreen() {
  const { state, dispatch } = useStore();
  const txns = useTransactions();
  const pending = usePending();
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
        <div className="relative overflow-hidden rounded-2xl bg-hero p-5 text-white">
          <WestpacLogo
            className="pointer-events-none absolute -right-12 -bottom-6 h-[150px] w-auto opacity-[0.14]"
            color="#ffffff"
            title={null}
          />
          <p className="text-[15px] font-bold">{PERSONA.account.name}</p>
          <p className="mt-4 text-[12px] text-white/70">Available balance</p>
          <p className="text-[34px] leading-none font-bold tabular">{fmtMoney(state.savedCents)}</p>
          <div className="mt-5 flex items-center justify-between text-[13px]">
            <div className="flex gap-5">
              <div>
                <p className="text-[11px] text-white/65">BSB</p>
                <p className="font-bold tabular">{PERSONA.account.bsb}</p>
              </div>
              <div>
                <p className="text-[11px] text-white/65">Account</p>
                <p className="font-bold tabular">{PERSONA.account.number}</p>
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
          <PayIcon className="size-5" />
          Pay
        </Button>

        <section className="space-y-3">
          <SectionTitle>History</SectionTitle>
          <Segmented<Filter>
            label="Filter transactions"
            value={filter}
            onChange={setFilter}
            options={[
              { value: "all", label: "All" },
              { value: "in", label: "Money in" },
              { value: "out", label: "Money out" },
            ]}
          />
          <div className="space-y-4">
            {filter !== "in" && pending.length > 0 && (
              <div>
                <p className="mb-1.5 px-1 text-[13px] text-muted">Pending approval</p>
                <Card className="divide-y divide-line overflow-hidden">
                  {pending.map((p) => (
                    <button
                      key={p.id}
                      onClick={() => dispatch({ type: "startCheck", purchase: p })}
                      className="flex w-full items-center gap-3 px-4 py-3 text-left hover:bg-canvas-faint"
                    >
                      <CategoryIcon category={p.category} />
                      <div className="min-w-0 flex-1">
                        <p className="truncate text-[15px] font-medium">{p.merchant}</p>
                        <Pill tone="warn" className="mt-0.5 h-5 text-[12px]">
                          Pending
                        </Pill>
                      </div>
                      <span className="text-[15px] font-bold text-muted tabular">
                        {fmtMoney(-p.amountCents, { sign: true })}
                      </span>
                      <ChevronRight className="size-4 text-muted" />
                    </button>
                  ))}
                </Card>
              </div>
            )}
            {groups.map(([day, list]) => (
              <div key={day}>
                <p className="mb-1.5 px-1 text-[13px] text-muted">
                  {day === 0 ? `Today · ${fmtLongDay(day)}` : fmtLongDay(day)}
                </p>
                <Card className="divide-y divide-line px-4 py-1">
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
