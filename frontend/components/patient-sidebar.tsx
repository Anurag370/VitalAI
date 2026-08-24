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
    <aside className="flex h-screen w-[260px] shrink-0 flex-col border-r border-slate-200 bg-white">
      {/* Logo */}
      <div className="flex h-[72px] items-center gap-3 border-b border-slate-100 px-6">
        <div className="grid grid-cols-2 gap-1">
          <span className="h-2 w-2 rounded-full bg-teal-600" />
          <span className="h-2 w-2 rounded-full bg-teal-600" />
          <span className="h-2 w-2 rounded-full bg-teal-600" />
          <span className="h-2 w-2 rounded-full bg-teal-600" />
        </div>

        <h1 className="text-[20px] font-semibold text-slate-800">
          HealthAI
        </h1>
      </div>

      {/* Navigation */}
      <nav className="flex-1 space-y-1 px-4 py-5">
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
              className={`flex items-center gap-4 rounded-xl px-4 py-3 text-[15px] transition ${
                isActive
                  ? "bg-teal-50 text-teal-700"
                  : "text-slate-600 hover:bg-slate-50 hover:text-teal-700"
              }`}
            >
              <Icon size={19} />
              <span>{item.name}</span>
            </Link>
          );
        })}
      </nav>

      {/* Logout */}
      <div className="border-t border-slate-100 p-4">
        <Link
          href="/patient/under-progress?section=Logout"
          className="flex w-full items-center gap-4 rounded-xl px-4 py-3 text-[15px] text-red-500 transition hover:bg-red-50"
        >
          <LogOut size={19} />
          <span>Logout</span>
        </Link>
      </div>
    </aside>
  );
}