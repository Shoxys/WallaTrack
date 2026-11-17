import { Pencil } from "lucide-react";
import { Button, ScreenHeader, Tabs } from "@/components/ui";
import { useStore } from "@/state/store";

export function GoalHeader() {
  const { state, dispatch } = useStore();
  const view = state.goalView === "timeline" ? "timeline" : "insights";
  return (
    <div className="pb-5">
      <ScreenHeader
        title="Goal"
        subtitle={state.goal?.reason}
        right={
          <Button
            variant="heroSoft"
            size="sm"
            className="mt-1"
            onClick={() => dispatch({ type: "goalView", view: "setup" })}
          >
            <Pencil className="size-3.5" />
            Edit
          </Button>
        }
      />
      <Tabs
        value={view}
        onChange={(v) => dispatch({ type: "goalView", view: v })}
        options={[
          { value: "insights", label: "Insights" },
          { value: "timeline", label: "Timeline" },
        ]}
      />
    </div>
  );
}
