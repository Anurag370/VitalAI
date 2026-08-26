"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
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

const menuItems = [
  {
    name: "Dashboard",
    href: "/patient",
    icon: Home,
  },
  {
    name: "My Profile",
    href: "/patient/profile",
    icon: User,
  },
  {
    name: "Health Profile",
    href: "/patient/under-progress?section=Health%20Profile",
    icon: HeartPulse,
  },
  {
    name: "Medical History",
    href: "/patient/under-progress?section=Medical%20History",
    icon: ClipboardList,
  },
  {
    name: "Health Metrics",
    href: "/patient/under-progress?section=Health%20Metrics",
    icon: Activity,
  },
  {
    name: "Documents",
    href: "/patient/under-progress?section=Documents",
    icon: FileText,
  },
  {
    name: "Doctor Appointments",
    href: "/patient/under-progress?section=Doctor%20Appointments",
    icon: CalendarDays,
  },
  {
    name: "AI Health Assistant",
    href: "/patient/under-progress?section=AI%20Health%20Assistant",
    icon: Stethoscope,
  },
  {
    name: "Notifications",
    href: "/patient/under-progress?section=Notifications",
    icon: Bell,
  },
  {
    name: "Settings",
    href: "/patient/under-progress?section=Settings",
    icon: Settings,
  },
];

export default function PatientSidebar() {
  const pathname = usePathname();

  return (
    <aside className="sticky top-0 flex h-screen w-[220px] shrink-0 flex-col border-r border-slate-200 bg-white">
      {/* Logo */}
      <div className="flex h-[72px] shrink-0 items-center border-b border-slate-100 px-5">
        <div className="flex items-center gap-3">
          <div className="grid grid-cols-2 gap-1">
            <span className="h-2 w-2 rounded-full bg-teal-600" />
            <span className="h-2 w-2 rounded-full bg-teal-600" />
            <span className="h-2 w-2 rounded-full bg-teal-600" />
            <span className="h-2 w-2 rounded-full bg-teal-600" />
          </div>

          <span className="text-lg font-semibold tracking-tight text-slate-800">
            HealthAI
          </span>
        </div>
      </div>

      {/* Navigation */}
      <nav className="min-h-0 flex-1 overflow-y-auto px-3 py-4">
        <div className="space-y-0.5">
          {menuItems.map((item) => {
            const Icon = item.icon;

            const isActive =
              item.href === "/patient"
                ? pathname === "/patient"
                : item.href === "/patient/profile"
                  ? pathname === "/patient/profile"
                  : pathname === "/patient/under-progress";

            return (
              <Link
                key={item.name}
                href={item.href}
                className={`flex w-full items-center gap-3 rounded-lg px-3 py-2 text-left transition-colors ${
                  isActive
                    ? "bg-teal-50 text-teal-700"
                    : "text-slate-600 hover:bg-slate-50 hover:text-teal-700"
                }`}
              >
                <Icon size={17} strokeWidth={1.8} className="shrink-0" />
                <span className="text-[13px] font-medium">{item.name}</span>
              </Link>
            );
          })}
        </div>
      </nav>

      {/* Logout */}
      <div className="mt-auto shrink-0 border-t border-slate-100 px-3 py-4">
        <Link
          href="/patient/under-progress?section=Logout"
          className="flex w-full items-center gap-3 rounded-lg px-3 py-2 text-red-500 transition-colors hover:bg-red-50"
        >
          <LogOut size={17} strokeWidth={1.8} className="shrink-0" />
          <span className="text-[13px] font-medium">Logout</span>
        </Link>
      </div>
    </aside>
  );
}