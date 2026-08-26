import {
  CalendarDays,
  ClipboardList,
  Stethoscope,
  Users,
} from "lucide-react";

const stats = [
  { label: "Total Patients", value: "128", icon: Users },
  { label: "Today's Appointments", value: "12", icon: CalendarDays },
  { label: "Pending Reports", value: "5", icon: ClipboardList },
  { label: "Consultations", value: "34", icon: Stethoscope },
];

export default function DoctorDashboard() {
  return (
    <>
      <h1 className="text-2xl font-semibold tracking-tight text-slate-800">
        Doctor Dashboard
      </h1>
      <p className="mt-1 text-sm text-slate-500">
        Overview of your practice at a glance.
      </p>

      <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {stats.map((stat) => {
          const Icon = stat.icon;

          return (
            <div
              key={stat.label}
              className="rounded-xl border border-slate-200 bg-white p-5"
            >
              <div className="flex items-center justify-between">
                <span className="text-[13px] font-medium text-slate-500">
                  {stat.label}
                </span>
                <Icon size={18} strokeWidth={1.8} className="text-teal-600" />
              </div>
              <p className="mt-3 text-2xl font-semibold text-slate-800">
                {stat.value}
              </p>
            </div>
          );
        })}
      </div>

      <section className="mt-8 rounded-xl border border-dashed border-slate-300 bg-white p-10 text-center">
        <h2 className="text-sm font-semibold text-slate-700">
          No recent activity
        </h2>
        <p className="mt-1 text-[13px] text-slate-500">
          Appointments and patient updates will appear here.
        </p>
      </section>
    </>
  );
}
