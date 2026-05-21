import type { ReactNode } from "react";
import type { LucideIcon } from "lucide-react";
import { Info, AlertTriangle, CheckCircle2, XCircle } from "lucide-react";

type Tone = "info" | "warning" | "success" | "danger";

interface AlertProps {
  tone?: Tone;
  title: string;
  children?: ReactNode;
  action?: ReactNode;
}

const TONE: Record<
  Tone,
  { bg: string; border: string; icon: LucideIcon; iconColor: string }
> = {
  info: {
    bg: "bg-[#EFF6FF]",
    border: "border-[#BFDBFE]",
    icon: Info,
    iconColor: "text-[#1D4ED8]",
  },
  warning: {
    bg: "bg-[#FFFBEB]",
    border: "border-[#FCD34D]",
    icon: AlertTriangle,
    iconColor: "text-[#92400E]",
  },
  success: {
    bg: "bg-[#ECFDF5]",
    border: "border-[#6EE7B7]",
    icon: CheckCircle2,
    iconColor: "text-[#047857]",
  },
  danger: {
    bg: "bg-[#FEF2F2]",
    border: "border-[#FCA5A5]",
    icon: XCircle,
    iconColor: "text-[#B91C1C]",
  },
};

export default function Alert({
  tone = "info",
  title,
  children,
  action,
}: AlertProps) {
  const { bg, border, icon: Icon, iconColor } = TONE[tone];
  return (
    <div
      role="status"
      className={["flex items-start gap-3 p-4 rounded-sm border", bg, border].join(" ")}
    >
      <Icon className={`w-4 h-4 mt-0.5 shrink-0 ${iconColor}`} strokeWidth={2} />
      <div className="flex-1 min-w-0">
        <div className="font-brand text-label font-medium text-text-body leading-snug">
          {title}
        </div>
        {children ? (
          <div className="text-small text-text-muted mt-1 leading-snug">{children}</div>
        ) : null}
      </div>
      {action ? <div className="shrink-0">{action}</div> : null}
    </div>
  );
}
