import type { Metric } from "@/data/projects";

type Props = { metrics: Metric[]; label: string; columns?: 5 | 6 | 3 };

/** Row of metric cards. On small screens it becomes a horizontally scrollable single row. */
export function MetricCards({ metrics, label, columns = 5 }: Props) {
  return (
    <div className="metrics" data-cols={columns}>
      <ul role="list" className="metrics__track" aria-label={label} tabIndex={0}>
        {metrics.map((m, i) => (
          <li key={m.label} className="metrics__card" data-reveal style={{ ["--reveal-delay" as string]: i }}>
            <span className="metrics__value">{m.value}</span>
            <span className="metrics__label">{m.label}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
