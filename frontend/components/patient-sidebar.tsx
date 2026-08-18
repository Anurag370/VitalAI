"use client";

import {
  Activity,
  Bell,
  CalendarDays,
  ClipboardList,
  FileText,
  HeartPulse,
  Home,
  LogOut,
  Settings,
  Stethoscope,
  User,
} from "lucide-react";

const navigationItems = [
  { label: "Dashboard", icon: Home, active: true },
  { label: "My Profile", icon: User },
  { label: "Health Profile", icon: HeartPulse },
  { label: "Medical History", icon: ClipboardList },
  { label: "Health Metrics", icon: Activity },
  { label: "Documents", icon: FileText },
  { label: "Doctor Appointments", icon: CalendarDays },
  { label: "AI Health Assistant", icon: Stethoscope },
  { label: "Notifications", icon: Bell },
  { label: "Settings", icon: Settings },
];

export default function PatientSidebar() {
  return (
    <aside className="flex h-screen w-[240px] shrink-0 flex-col border-r border-slate-200 bg-white">
      {/* Logo */}
      <div className="flex h-[72px] items-center border-b border-slate-100 px-6">
        <div className="flex items-center gap-3">
          <div className="grid grid-cols-2 gap-1">
            <span className="h-2 w-2 rounded-full bg-teal-600" />
            <span className="h-2 w-2 rounded-full bg-teal-600" />
            <span className="h-2 w-2 rounded-full bg-teal-600" />
            <span className="h-2 w-2 rounded-full bg-teal-600" />
          </div>

          <span className="text-lg font-semibold text-slate-800">
            HealthAI
          </span>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 px-4 py-5">
        <div className="space-y-1">
          {navigationItems.map((item) => {
            const Icon = item.icon;

            return (
              <button
                key={item.label}
                type="button"
                className={`flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-left transition-colors ${
                  item.active
                    ? "bg-teal-50 text-teal-700"
                    : "text-slate-600 hover:bg-slate-50 hover:text-teal-700"
                }`}
              >
                <Icon size={18} strokeWidth={1.8} />

                <span className="text-sm font-medium">
                  {item.label}
                </span>
              </button>
            );
          })}
        </div>
      </nav>

      {/* Logout */}
      <div className="border-t border-slate-100 px-4 py-4">
        <button
          type="button"
          className="flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-red-500 transition-colors hover:bg-red-50"
        >
          <LogOut size={18} strokeWidth={1.8} />

          <span className="text-sm font-medium">
            Logout
          </span>
        </button>
      </div>
    </aside>
  );
}