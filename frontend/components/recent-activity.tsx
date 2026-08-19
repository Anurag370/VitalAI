import {
  FileBarChart,
  FileText,
  ScanLine,
} from "lucide-react";

const activities = [
  {
    title: "Blood Test Report",
    date: "Uploaded on DD/MM/YYYY",
    icon: FileBarChart,
  },
  {
    title: "Prescription",
    date: "Uploaded on DD/MM/YYYY",
    icon: FileText,
  },
  {
    title: "Chest X-Ray",
    date: "Uploaded on DD/MM/YYYY",
    icon: ScanLine,
  },
];

export default function RecentActivity() {
  return (
    <div className="flex h-full min-h-[330px] flex-col rounded-2xl border border-slate-100 bg-white p-6 shadow-[0_3px_16px_rgba(15,23,42,0.04)]">
      <div className="flex items-center justify-between">
        <h2 className="text-[14px] font-semibold text-slate-900">
          Recent Activity
        </h2>

        <button className="text-[10px] font-medium text-teal-600 hover:text-teal-700">
          View All
        </button>
      </div>

      <div className="mt-7 flex flex-1 flex-col justify-between pb-4">
        {activities.map((activity) => {
          const Icon = activity.icon;

          return (
            <div
              key={activity.title}
              className="flex items-center gap-4"
            >
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-slate-50 text-teal-600">
                <Icon size={17} strokeWidth={1.7} />
              </div>

              <div>
                <p className="text-[11px] font-semibold text-slate-800">
                  {activity.title}
                </p>

                <p className="mt-1 text-[9px] text-slate-500">
                  {activity.date}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}