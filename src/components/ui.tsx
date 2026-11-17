import { AnimatePresence, motion } from "motion/react";
import { ChevronLeft, X } from "lucide-react";
import { useId, type ButtonHTMLAttributes, type HTMLAttributes, type ReactNode } from "react";
import { CATEGORIES, type Category } from "@/data/persona";
import { ErrorIcon, InfoIcon, SuccessIcon, WarningIcon } from "./GelIcons";

export function cx(...parts: (string | false | null | undefined)[]) {
  return parts.filter(Boolean).join(" ");
}

/** Mirrors GEL Button looks: primary (red), hero (navy), their soft variants, and faint. */
type ButtonLook = "primary" | "hero" | "primarySoft" | "heroSoft" | "faint" | "link";

export function Button({
  variant = "primary",
  size = "md",
  className,
  children,
  ...rest
}: ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: ButtonLook;
  size?: "sm" | "md" | "lg";
}) {
  const looks: Record<ButtonLook, string> = {
    primary: "border-hero bg-hero text-white hover:bg-hero-hover hover:border-hero-hover",
    hero: "border-navy bg-navy text-white hover:bg-navy-hover hover:border-navy-hover",
    primarySoft: "border-hero bg-white text-ink hover:bg-hero-faint",
    heroSoft: "border-navy bg-white text-ink hover:bg-navy-faint",
    faint: "border-line-strong bg-canvas text-muted hover:bg-white",
    link: "border-transparent text-hero hover:underline",
  };
  // GEL sizes: medium 36px / 4px, large 42px / 5px, xlarge 48px / 6px
  const sizes = {
    sm: "h-9 px-3 text-[14px] rounded-[4px]",
    md: "h-[42px] px-4 text-[15px] rounded-[5px]",
    lg: "h-12 px-5 text-[16px] rounded-[6px]",
  };
  return (
    <button
      className={cx(
        "inline-flex items-center justify-center gap-2 border font-medium transition-[background,border-color] duration-300 disabled:pointer-events-none disabled:opacity-50",
        looks[variant],
        sizes[size],
        className,
      )}
      {...rest}
    >
      {children}
    </button>
  );
}

export const cardClass = "rounded-xl border border-line bg-white";

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
      <h2 className="text-[16px] font-bold text-navy">{children}</h2>
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
    <header className="flex items-start justify-between gap-3 px-5 pt-4 pb-4">
      <div className="flex min-w-0 items-start gap-2">
        {onBack && (
          <button
            onClick={onBack}
            className="-ml-2 grid size-9 place-items-center rounded-full text-navy hover:bg-navy-faint"
            aria-label="Back"
          >
            <ChevronLeft className="size-5" />
          </button>
        )}
        <div className="min-w-0">
          <h1 className="font-brand text-[28px] leading-[1.15] text-navy">{title}</h1>
          {subtitle && <p className="mt-1 text-[14px] text-muted">{subtitle}</p>}
        </div>
      </div>
      {right}
    </header>
  );
}

/** GEL ButtonGroup: joined hero buttons, selected one filled. */
export function Segmented<T extends string>({
  value,
  options,
  onChange,
  label,
}: {
  value: T;
  options: { value: T; label: string }[];
  onChange: (v: T) => void;
  label?: string;
}) {
  return (
    <div className="flex" role="radiogroup" aria-label={label}>
      {options.map((o) => {
        const active = o.value === value;
        return (
          <button
            key={o.value}
            role="radio"
            aria-checked={active}
            onClick={() => onChange(o.value)}
            className={cx(
              "h-10 flex-1 border border-navy text-[14.5px] transition-colors duration-300 first:rounded-l-[5px] last:rounded-r-[5px] not-first:border-l-0",
              active ? "bg-navy text-white" : "bg-white text-ink hover:bg-navy-faint",
            )}
          >
            {o.label}
          </button>
        );
      })}
    </div>
  );
}

/** GEL Tabs, "material" look: dividers between tabs and a 4px primary underline. */
export function Tabs<T extends string>({
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
    <div className="flex border-y border-line bg-white" role="tablist">
      {options.map((o) => {
        const active = o.value === value;
        return (
          <button
            key={o.value}
            role="tab"
            aria-selected={active}
            onClick={() => onChange(o.value)}
            className={cx(
              "relative h-12 flex-1 border-r border-line text-[16px] transition-colors last:border-r-0",
              active ? "text-ink" : "text-muted hover:bg-canvas",
            )}
          >
            {o.label}
            {active && (
              <motion.span
                layoutId={`tab-${id}`}
                className="absolute inset-x-0 -bottom-px h-1 bg-hero"
                transition={{ type: "spring", stiffness: 500, damping: 40 }}
              />
            )}
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
  const { icon: Icon, color, tint } = CATEGORIES[category];
  const dims = { sm: "size-8", md: "size-10", lg: "size-12" }[size];
  const icon = { sm: "size-4", md: "size-5", lg: "size-6" }[size];
  return (
    <span
      className={cx("grid shrink-0 place-items-center rounded-full", dims)}
      style={{ background: tint, color }}
    >
      <Icon className={icon} />
    </span>
  );
}

/** GEL soft pill Badge. */
export function Pill({
  tone = "neutral",
  children,
  className,
}: {
  tone?: "neutral" | "good" | "bad" | "warn" | "info" | "navy";
  children: ReactNode;
  className?: string;
}) {
  const tones = {
    neutral: "border-line bg-canvas-faint text-muted",
    good: "border-success/60 bg-success-tint text-success",
    bad: "border-danger/60 bg-danger-tint text-danger",
    warn: "border-amber/60 bg-amber-tint text-amber",
    info: "border-info/60 bg-info-tint text-info",
    navy: "border-navy bg-navy text-white",
  };
  return (
    <span
      className={cx(
        "inline-flex h-6 items-center gap-1 rounded-full border px-2 text-[12.5px] font-medium whitespace-nowrap",
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
    <p className="flex gap-2 px-1 text-[12px] leading-snug text-muted">
      <InfoIcon className="mt-px size-4 shrink-0 text-info" />
      <span>{children}</span>
    </p>
  );
}

const ALERT_LOOKS = {
  info: { cls: "border-info/40 bg-info-tint text-info", Icon: InfoIcon },
  success: { cls: "border-success/40 bg-success-tint text-success", Icon: SuccessIcon },
  warning: { cls: "border-amber/40 bg-amber-tint text-amber", Icon: WarningIcon },
  danger: { cls: "border-danger/40 bg-danger-tint text-danger", Icon: ErrorIcon },
};

/** GEL Alert, box mode: reserved colours, top and bottom rule, leading icon. */
export function Alert({
  look = "info",
  heading,
  children,
  className,
  onClose,
}: {
  look?: keyof typeof ALERT_LOOKS;
  heading?: ReactNode;
  children: ReactNode;
  className?: string;
  onClose?: () => void;
}) {
  const { cls, Icon } = ALERT_LOOKS[look];
  return (
    <div
      role={look === "danger" ? "alert" : "status"}
      className={cx(
        "relative flex gap-2.5 border-y px-3.5 py-3",
        cls,
        onClose && "pr-10",
        className,
      )}
    >
      <Icon className="mt-px size-5 shrink-0" />
      <div className="min-w-0 text-[13.5px] leading-snug">
        {heading && <p className="mb-0.5 text-[14.5px] font-bold">{heading}</p>}
        {children}
      </div>
      {onClose && (
        <button
          onClick={onClose}
          className="absolute top-2 right-2 grid size-8 place-items-center rounded-full hover:bg-black/5"
          aria-label="Dismiss"
        >
          <X className="size-4" />
        </button>
      )}
    </div>
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
            className="absolute inset-0 bg-navy-deep/50"
            onClick={onClose}
            aria-label="Close"
          />
          <motion.div
            role="dialog"
            aria-label={label}
            className={cx(
              "relative flex flex-col rounded-t-2xl bg-canvas shadow-[0_-8px_30px_rgb(19_15_72/0.25)]",
              tall ? "max-h-[calc(100%-24px)]" : "max-h-[calc(100%-56px)]",
            )}
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            exit={{ y: "100%" }}
            transition={{ type: "spring", stiffness: 380, damping: 38 }}
          >
            <div className="mx-auto mt-2.5 h-1 w-10 shrink-0 rounded-full bg-line-strong/50" />
            <button
              onClick={onClose}
              className="absolute top-3 right-3 z-10 grid size-9 place-items-center rounded-full border border-line bg-white text-navy hover:bg-navy-faint"
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

/** GEL ProgressBar, skinny look: bordered white track with a hero bar. */
export function ProgressBar({
  value,
  className,
  barClass = "bg-navy",
  trackClass = "border border-line bg-white p-px",
}: {
  value: number;
  className?: string;
  barClass?: string;
  trackClass?: string;
}) {
  return (
    <div className={cx("h-2.5 overflow-hidden rounded-full", trackClass, className)}>
      <motion.div
        className={cx("h-full rounded-full", barClass)}
        initial={false}
        animate={{ width: `${Math.max(0, Math.min(1, value)) * 100}%` }}
        transition={{ type: "spring", stiffness: 120, damping: 22 }}
      />
    </div>
  );
}
