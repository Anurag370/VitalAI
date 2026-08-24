import {
  CalendarPlus,
  FilePlus2,
  HeartPulse,
  Link2,
  MessageCircle,
} from "lucide-react";

const actions = [
  {
    label: "Upload Report",
    icon: FilePlus2,
  },
  {
    label: "Book Appointment",
    icon: CalendarPlus,
  },
  {
    label: "Health Metrics",
    icon: HeartPulse,
  },
  {
    label: "AI Health Assistant",
    icon: MessageCircle,
  },
  {
    label: "View Prescriptions",
    icon: Link2,
  },
];

export default function QuickActions() {
  return (
    <div className="rounded-2xl border border-slate-100 bg-white p-6 shadow-[0_3px_16px_rgba(15,23,42,0.04)]">
      <h2 className="text-[14px] font-semibold text-slate-900">
        Quick Actions
      </h2>

      <div className="mt-5 grid grid-cols-5 gap-4">
        {actions.map((action) => {
          const Icon = action.icon;

          return (
            <button
              key={action.label}
              type="button"
              className="flex h-16 items-center gap-3 rounded-xl border border-slate-100 px-4 text-left transition hover:border-teal-100 hover:bg-teal-50/40"
            >
              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-violet-50 text-violet-600">
                <Icon size={16} strokeWidth={1.7} />
              </div>

              <span className="text-[10px] font-medium text-slate-700">
                {action.label}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
}