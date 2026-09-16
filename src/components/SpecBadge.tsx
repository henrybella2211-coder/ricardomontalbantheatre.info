type SpecBadgeProps = {
  children: React.ReactNode;
  variant?: "teal" | "amber";
  className?: string;
};

export default function SpecBadge({
  children,
  variant = "teal",
  className = "",
}: SpecBadgeProps) {
  const styles =
    variant === "amber"
      ? "bg-amber/15 text-amber-ink border-amber/40"
      : "bg-teal/10 text-teal border-teal/30";

  return (
    <span
      className={`inline-flex items-center rounded-none border px-2 py-0.5 font-mono text-xs font-medium tracking-tight ${styles} ${className}`}
    >
      {children}
    </span>
  );
}
