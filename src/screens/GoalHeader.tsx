import { Pencil } from "lucide-react";
import { ScreenHeader, Segmented } from "@/components/ui";
import { useStore } from "@/state/store";

export function GoalHeader() {
  const { state, dispatch } = useStore();
  const view = state.goalView === "timeline" ? "timeline" : "insights";
  return (
    <div className="space-y-1 pb-4">
      <ScreenHeader
        title="Goal"
        subtitle={state.goal?.reason}
        right={
          <button
            onClick={() => dispatch({ type: "goalView", view: "setup" })}
            className="mt-1 inline-flex h-9 items-center gap-1.5 rounded-full bg-white px-3 text-[13px] font-semibold text-navy ring-1 ring-black/5 hover:bg-navy/5"
          >
            <Pencil className="size-3.5" />
            Edit
          </button>
        }
      />
      <div className="px-5">
        <Segmented
          value={view}
          onChange={(v) => dispatch({ type: "goalView", view: v })}
          options={[
            { value: "insights", label: "Insights" },
            { value: "timeline", label: "Timeline" },
          ]}
        />
      </div>
    </div>
  );
}
