import { AnimatePresence, motion } from "motion/react";
import { ChevronLeft, Info, X } from "lucide-react";
import { useId, type ButtonHTMLAttributes, type HTMLAttributes, type ReactNode } from "react";
import { CATEGORIES, type Category } from "@/data/persona";

export function cx(...parts: (string | false | null | undefined)[]) {
  return parts.filter(Boolean).join(" ");
}

type ButtonVariant = "primary" | "hero" | "outline" | "ghost" | "soft";

export function Button({
  variant = "primary",
  size = "md",
  className,
  children,
  ...rest
}: ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: ButtonVariant;
  size?: "sm" | "md" | "lg";
}) {
  const variants: Record<ButtonVariant, string> = {
    primary: "bg-navy text-white hover:bg-navy-deep active:bg-navy-deep",
    hero: "bg-hero text-white hover:bg-hero-deep active:bg-hero-deep",
    outline:
      "bg-white text-navy ring-1 ring-inset ring-navy/25 hover:ring-navy/50 hover:bg-navy/[0.03]",
    ghost: "text-navy hover:bg-navy/5",
    soft: "bg-navy/[0.06] text-navy hover:bg-navy/10",
  };
  const sizes = {
    sm: "h-9 px-3.5 text-[13px] rounded-xl",
    md: "h-12 px-5 text-[15px] rounded-2xl",
    lg: "h-14 px-6 text-base rounded-2xl",
  };
  return (
    <button
      className={cx(
        "inline-flex items-center justify-center gap-2 font-semibold transition-colors duration-150 outline-none focus-visible:ring-2 focus-visible:ring-hero focus-visible:ring-offset-2 disabled:opacity-40",
        variants[variant],
        sizes[size],
        className,
      )}
      {...rest}
    >
      {children}
    </button>
  );
}

export const cardClass =
  "rounded-[22px] bg-white ring-1 ring-black/[0.05] shadow-[0_1px_2px_rgb(24_27_37/0.04)]";

export function Card({ className, children, ...rest }: HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={cx(cardClass, className)} {...rest}>
      {children}
    </div>
  );
}

export function SectionTitle({
  children,
  action,
  className,
}: {
  children: ReactNode;
  action?: ReactNode;
  className?: string;
}) {
  return (
    <div className={cx("flex items-end justify-between px-1", className)}>
      <h2 className="text-[15px] font-bold tracking-[-0.01em] text-ink">{children}</h2>
      {action}
    </div>
  );
}

export function ScreenHeader({
  title,
  subtitle,
  onBack,
  right,
}: {
  title: string;
  subtitle?: ReactNode;
  onBack?: () => void;
  right?: ReactNode;
}) {
  return (
    <header className="flex items-start justify-between gap-3 px-5 pt-2 pb-4">
      <div className="flex min-w-0 items-start gap-2">
        {onBack && (
          <button
            onClick={onBack}
            className="-ml-2 mt-0.5 grid size-9 place-items-center rounded-full text-navy hover:bg-navy/5"
            aria-label="Back"
          >
            <ChevronLeft className="size-5" />
          </button>
        )}
        <div className="min-w-0">
          <h1 className="text-[26px] leading-tight font-extrabold tracking-[-0.025em] text-ink">
            {title}
          </h1>
          {subtitle && <p className="mt-0.5 text-[13px] text-muted">{subtitle}</p>}
        </div>
      </div>
      {right}
    </header>
  );
}

export function Segmented<T extends string>({
  value,
  options,
  onChange,
}: {
  value: T;
  options: { value: T; label: string }[];
  onChange: (v: T) => void;
}) {
  const id = useId();
  return (
    <div
      className="relative grid grid-flow-col auto-cols-fr rounded-2xl bg-navy/[0.06] p-1"
      role="tablist"
    >
      {options.map((o) => {
        const active = o.value === value;
        return (
          <button
            key={o.value}
            role="tab"
            aria-selected={active}
            onClick={() => onChange(o.value)}
            className={cx(
              "relative h-9 rounded-xl text-[14px] font-semibold transition-colors",
              active ? "text-navy" : "text-muted hover:text-ink",
            )}
          >
            {active && (
              <motion.span
                layoutId={`segmented-${id}`}
                className="absolute inset-0 rounded-xl bg-white shadow-[0_1px_3px_rgb(24_27_37/0.12)]"
                transition={{ type: "spring", stiffness: 500, damping: 38 }}
              />
            )}
            <span className="relative">{o.label}</span>
          </button>
        );
      })}
    </div>
  );
}

export function CategoryIcon({
  category,
  size = "md",
}: {
  category: Category;
  size?: "sm" | "md" | "lg";
}) {
  const c = CATEGORIES[category];
  const Icon = c.icon;
  const dims = { sm: "size-8 rounded-[10px]", md: "size-10 rounded-xl", lg: "size-12 rounded-2xl" }[
    size
  ];
  const icon = { sm: "size-4", md: "size-[18px]", lg: "size-5" }[size];
  return (
    <span
      className={cx("grid shrink-0 place-items-center", dims)}
      style={{ background: c.tint, color: c.color }}
    >
      <Icon className={icon} strokeWidth={2.2} />
    </span>
  );
}

export function Pill({
  tone = "neutral",
  children,
  className,
}: {
  tone?: "neutral" | "good" | "bad" | "warn" | "navy";
  children: ReactNode;
  className?: string;
}) {
  const tones = {
    neutral: "bg-navy/[0.06] text-muted",
    good: "bg-success-tint text-success",
    bad: "bg-danger-tint text-danger",
    warn: "bg-amber-tint text-amber",
    navy: "bg-navy text-white",
  };
  return (
    <span
      className={cx(
        "inline-flex h-6 items-center gap-1 rounded-full px-2.5 text-[12px] font-semibold whitespace-nowrap",
        tones[tone],
        className,
      )}
    >
      {children}
    </span>
  );
}

export function Notice({ children }: { children: ReactNode }) {
  return (
    <p className="flex gap-2 px-1 text-[11.5px] leading-snug text-faint">
      <Info className="mt-px size-3.5 shrink-0" />
      <span>{children}</span>
    </p>
  );
}

/** Bottom sheet scoped to the phone screen (absolute, not fixed). */
export function Sheet({
  open,
  onClose,
  children,
  label,
  tall = false,
}: {
  open: boolean;
  onClose: () => void;
  children: ReactNode;
  label: string;
  tall?: boolean;
}) {
  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="absolute inset-0 z-40 flex flex-col justify-end"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
        >
          <button
            className="absolute inset-0 bg-[#0d0b26]/45 backdrop-blur-[2px]"
            onClick={onClose}
            aria-label="Close"
          />
          <motion.div
            role="dialog"
            aria-label={label}
            className={cx(
              "relative flex flex-col rounded-t-[30px] bg-canvas shadow-[0_-12px_40px_rgb(13_11_38/0.25)]",
              tall ? "max-h-[calc(100%-24px)]" : "max-h-[calc(100%-56px)]",
            )}
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            exit={{ y: "100%" }}
            transition={{ type: "spring", stiffness: 380, damping: 38 }}
          >
            <div className="mx-auto mt-2.5 h-1 w-10 shrink-0 rounded-full bg-black/15" />
            <button
              onClick={onClose}
              className="absolute top-3 right-3 z-10 grid size-9 place-items-center rounded-full bg-white text-navy shadow-sm ring-1 ring-black/5 hover:bg-canvas"
              aria-label="Dismiss"
            >
              <X className="size-4.5" />
            </button>
            <div className="scrollbar-none min-h-0 flex-1 overflow-y-auto">{children}</div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export function ProgressBar({
  value,
  className,
  barClass = "bg-hero",
  trackClass = "bg-navy/10",
}: {
  value: number;
  className?: string;
  barClass?: string;
  trackClass?: string;
}) {
  return (
    <div className={cx("h-2 overflow-hidden rounded-full", trackClass, className)}>
      <motion.div
        className={cx("h-full rounded-full", barClass)}
        initial={false}
        animate={{ width: `${Math.max(0, Math.min(1, value)) * 100}%` }}
        transition={{ type: "spring", stiffness: 120, damping: 22 }}
      />
    </div>
  );
}
