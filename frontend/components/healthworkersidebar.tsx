"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Bell,
  CalendarDays,
  ClipboardList,
  FileText,
  Home,
  LogOut,
  MapPin,
  Settings,
  Users,
} from "lucide-react";

const navigationItems = [
  {
    label: "Dashboard",
    href: "/healthworker",
    icon: Home,
  },
  {
    label: "Patients",
    href: "/healthworker/under-progress?section=Patients",
    icon: Users,
  },
  {
    label: "Field Visits",
    href: "/healthworker/under-progress?section=Field%20Visits",
    icon: MapPin,
  },
  {
    label: "Schedule",
    href: "/healthworker/under-progress?section=Schedule",
    icon: CalendarDays,
  },
  {
    label: "Medical Reports",
    href: "/healthworker/under-progress?section=Medical%20Reports",
    icon: FileText,
  },
  {
    label: "Data Collection",
    href: "/healthworker/under-progress?section=Data%20Collection",
    icon: ClipboardList,
  },
  {
    label: "Notifications",
    href: "/healthworker/under-progress?section=Notifications",
    icon: Bell,
  },
  {
    label: "Settings",
    href: "/healthworker/under-progress?section=Settings",
    icon: Settings,
  },
];

export default function HealthWorkerSidebar() {
  const pathname = usePathname();

  return (
    <aside className="sticky top-0 flex h-screen w-[220px] shrink-0 flex-col border-r border-orange-100 bg-white">
      {/* Logo */}
      <div className="flex h-[72px] shrink-0 items-center border-b border-orange-100 px-5">
        <div className="flex items-center gap-3">
          <div className="grid grid-cols-2 gap-1">
            <span className="h-2 w-2 rounded-full bg-orange-500" />
            <span className="h-2 w-2 rounded-full bg-orange-500" />
            <span className="h-2 w-2 rounded-full bg-orange-500" />
            <span className="h-2 w-2 rounded-full bg-orange-500" />
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
              item.href === "/healthworker"
                ? pathname === "/healthworker"
                : pathname === "/healthworker/under-progress";

            return (
              <Link
                key={item.label}
                href={item.href}
                className={`flex w-full items-center gap-3 rounded-lg px-3 py-2 text-left transition-colors ${
                  isActive
                    ? "bg-orange-50 text-orange-600"
                    : "text-slate-600 hover:bg-orange-50 hover:text-orange-600"
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
      <div className="mt-auto shrink-0 border-t border-orange-100 px-3 py-4">
        <Link
          href="/healthworker/under-progress?section=Logout"
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
