"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Activity,
  Bell,
  CalendarDays,
  ClipboardList,
  Home,
  LogOut,
  Settings,
  User,
} from "lucide-react";

const navigationItems = [
  {
    label: "Dashboard",
    href: "/doctor",
    icon: Home,
  },
  {
    label: "My Profile",
    href: "/doctor/profile",
    icon: User,
  },
  {
    label: "Appointments",
    href: "/doctor/under-progress?section=Appointments",
    icon: CalendarDays,
  },
  {
    label: "Schedule",
    href: "/doctor/under-progress?section=Schedule",
    icon: CalendarDays,
  },
  {
    label: "Medical Reports",
    href: "/doctor/under-progress?section=Medical%20Reports",
    icon: ClipboardList,
  },
  {
    label: "Prescription",
    href: "/doctor/under-progress?section=Prescription",
    icon: Activity,
  },
  {
    label: "Notifications",
    href: "/doctor/under-progress?section=Notifications",
    icon: Bell,
  },
  {
    label: "Settings",
    href: "/doctor/under-progress?section=Settings",
    icon: Settings,
  },
];

export default function DoctorSidebar() {
  const pathname = usePathname();

  return (
    <aside className="sticky top-0 flex h-screen w-[220px] shrink-0 flex-col border-r border-slate-200 bg-white">
      {/* Logo */}
      <div className="flex h-[72px] shrink-0 items-center border-b border-slate-100 px-5">
        <div className="flex items-center gap-3">
          <div className="grid grid-cols-2 gap-1">
            <span className="h-2 w-2 rounded-full bg-purple-600" />
            <span className="h-2 w-2 rounded-full bg-purple-600" />
            <span className="h-2 w-2 rounded-full bg-purple-600" />
            <span className="h-2 w-2 rounded-full bg-purple-600" />
          </div>

          <span className="text-lg font-semibold tracking-tight text-slate-800">
            HealthAI
          </span>
        </div>
      </div>

      {/* Navigation */}
      <nav className="min-h-0 flex-1 overflow-y-auto px-3 py-4">
        <div className="space-y-0.5">
          {navigationItems.map((item) => {
            const Icon = item.icon;

            const isActive =
              item.href === "/doctor"
                ? pathname === "/doctor"
                : item.href === "/doctor/profile"
                  ? pathname === "/doctor/profile"
                  : pathname === "/doctor/under-progress";

            return (
              <Link
                key={item.label}
                href={item.href}
                className={`flex w-full items-center gap-3 rounded-lg px-3 py-2 text-left transition-colors ${
                  isActive
                    ? "bg-purple-50 text-purple-700"
                    : "text-slate-600 hover:bg-slate-50 hover:text-purple-700"
                }`}
              >
                <Icon
                  size={17}
                  strokeWidth={1.8}
                  className="shrink-0"
                />

                <span className="text-[13px] font-medium">
                  {item.label}
                </span>
              </Link>
            );
          })}
        </div>
      </nav>

      {/* Logout */}
      <div className="mt-auto shrink-0 border-t border-slate-100 px-3 py-4">
        <Link
          href="/doctor/under-progress?section=Logout"
          className="flex w-full items-center gap-3 rounded-lg px-3 py-2 text-red-500 transition-colors hover:bg-red-50"
        >
          <LogOut
            size={17}
            strokeWidth={1.8}
            className="shrink-0"
          />

          <span className="text-[13px] font-medium">
            Logout
          </span>
        </Link>
      </div>
    </aside>
  );
}