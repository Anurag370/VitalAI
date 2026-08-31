"use client";

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
  UserPlus,
  ClipboardCheck,
  Stethoscope,
} from "lucide-react";
import Link from "next/link";

const sidebarItems = [
  {
    name: "Dashboard",
    icon: Home,
    href: "/healthworker",
  },
  {
    name: "Patients",
    icon: Users,
    href: "/healthworker/patients",
  },
  {
    name: "Field Visits",
    icon: MapPin,
    href: "/healthworker/under-progress?section=Field%20Visits",
  },
  {
    name: "Schedule",
    icon: CalendarDays,
    href: "/healthworker/under-progress?section=Schedule",
  },
  {
    name: "Medical Reports",
    icon: FileText,
    href: "/healthworker/under-progress?section=Medical%20Reports",
  },
  {
    name: "Data Collection",
    icon: ClipboardList,
    href: "/healthworker/under-progress?section=Data%20Collection",
  },
  {
    name: "Notifications",
    icon: Bell,
    href: "/healthworker/under-progress?section=Notifications",
  },
  {
    name: "Settings",
    icon: Settings,
    href: "/healthworker/under-progress?section=Settings",
  },
];

const fieldVisits = [
  {
    time: "09:00 AM",
    name: "Bhatibari Village",
    type: "Patient Data Collection",
    status: "Completed",
  },
  {
    time: "11:30 AM",
    name: "Dakshin Para",
    type: "Health Survey",
    status: "Completed",
  },
  {
    time: "02:00 PM",
    name: "Madhya Gram",
    type: "Patient Checkup",
    status: "Pending",
  },
  {
    time: "04:30 PM",
    name: "Uttar Basti",
    type: "Data Collection",
    status: "Pending",
  },
];

const recentPatients = [
  {
    name: "Rahul Verma",
    details: "32 yrs • Male",
    place: "Bhatibari Village",
  },
  {
    name: "Sneha Roy",
    details: "28 yrs • Female",
    place: "Dakshin Para",
  },
  {
    name: "Amit Kumar",
    details: "45 yrs • Male",
    place: "Madhya Gram",
  },
  {
    name: "Pooja Singh",
    details: "30 yrs • Female",
    place: "Uttar Basti",
  },
];

export default function HealthWorkerDashboard() {
  return (
    <div>
      <section>

        {/* Header */}
        <div className="mb-7">
          <h1 className="text-2xl font-bold text-slate-800">
            Health Worker Dashboard
          </h1>

          <p className="mt-1 text-sm text-slate-500">
            Welcome back, Anurag Hom Roy
          </p>
        </div>

        {/* TOP STATS */}
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-4">

          <div className="rounded-2xl border border-orange-100 bg-white p-5 shadow-sm">
            <div className="flex items-center gap-4">
              <div className="rounded-xl bg-orange-50 p-3 text-orange-500">
                <CalendarDays size={22} />
              </div>

              <div>
                <p className="text-sm text-slate-500">
                  Today&apos;s Field Visits
                </p>
                <h2 className="mt-1 text-2xl font-bold">8</h2>
              </div>
            </div>
          </div>

          <div className="rounded-2xl border border-orange-100 bg-white p-5 shadow-sm">
            <div className="flex items-center gap-4">
              <div className="rounded-xl bg-orange-50 p-3 text-orange-500">
                <Users size={22} />
              </div>

              <div>
                <p className="text-sm text-slate-500">
                  Total Patients
                </p>
                <h2 className="mt-1 text-2xl font-bold">248</h2>
              </div>
            </div>
          </div>

          <div className="rounded-2xl border border-orange-100 bg-white p-5 shadow-sm">
            <div className="flex items-center gap-4">
              <div className="rounded-xl bg-orange-50 p-3 text-orange-500">
                <ClipboardCheck size={22} />
              </div>

              <div>
                <p className="text-sm text-slate-500">
                  Pending Reports
                </p>
                <h2 className="mt-1 text-2xl font-bold">12</h2>
              </div>
            </div>
          </div>

          <div className="rounded-2xl border border-orange-100 bg-white p-5 shadow-sm">
            <div className="flex items-center gap-4">
              <div className="rounded-xl bg-orange-50 p-3 text-orange-500">
                <UserPlus size={22} />
              </div>

              <div>
                <p className="text-sm text-slate-500">
                  New Patients
                </p>
                <h2 className="mt-1 text-2xl font-bold">7</h2>
                <p className="text-xs text-slate-400">This Week</p>
              </div>
            </div>
          </div>
        </div>

        {/* MAIN GRID */}
        <div className="mt-6 grid grid-cols-1 gap-5 xl:grid-cols-3">

          {/* TODAY'S FIELD VISITS */}
          <div className="rounded-2xl border border-orange-100 bg-white p-6 shadow-sm">
            <h2 className="mb-5 text-lg font-semibold">
              Today&apos;s Field Visits
            </h2>

            <div className="space-y-4">
              {fieldVisits.map((visit) => (
                <div
                  key={visit.time}
                  className="flex items-center justify-between border-b border-orange-50 pb-4 last:border-0"
                >
                  <span className="w-20 text-xs font-medium text-slate-500">
                    {visit.time}
                  </span>

                  <div className="flex-1">
                    <p className="text-sm font-semibold text-slate-700">
                      {visit.name}
                    </p>

                    <p className="text-xs text-slate-400">
                      {visit.type}
                    </p>
                  </div>

                  <span
                    className={`text-xs font-medium ${
                      visit.status === "Completed"
                        ? "text-green-600"
                        : "text-orange-500"
                    }`}
                  >
                    {visit.status}
                  </span>
                </div>
              ))}
            </div>

            <button className="mt-5 w-full border-t border-orange-100 pt-4 text-sm font-medium text-orange-600 hover:text-orange-700">
              View All Field Visits
            </button>
          </div>

          {/* RECENT PATIENTS */}
          <div className="rounded-2xl border border-orange-100 bg-white p-6 shadow-sm">
            <h2 className="mb-5 text-lg font-semibold">
              Recently Collected Patients
            </h2>

            <div className="space-y-4">
              {recentPatients.map((patient) => (
                <div
                  key={patient.name}
                  className="flex items-center gap-3 border-b border-orange-50 pb-4 last:border-0"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-orange-100 text-sm font-semibold text-orange-600">
                    {patient.name.charAt(0)}
                  </div>

                  <div className="flex-1">
                    <p className="text-sm font-semibold text-slate-700">
                      {patient.name}
                    </p>

                    <p className="text-xs text-slate-400">
                      {patient.details}
                    </p>
                  </div>

                  <span className="text-xs text-slate-400">
                    {patient.place}
                  </span>
                </div>
              ))}
            </div>

            <Link
              href="/healthworker/patients"
              className="mt-5 block w-full border-t border-orange-100 pt-4 text-center text-sm font-medium text-orange-600 transition hover:text-orange-700"
            >
              View All Patients
            </Link>
          </div>

          {/* RURAL DATA OVERVIEW */}
          <div className="rounded-2xl border border-orange-100 bg-white shadow-sm">

            <div className="p-6">
              <h2 className="text-lg font-semibold">
                Rural Data Overview
              </h2>

              <div className="mt-6 flex items-center gap-6">

                <div className="relative flex h-32 w-32 items-center justify-center rounded-full border-[14px] border-orange-200 border-r-orange-500 border-t-orange-400">
                  <div className="text-center">
                    <p className="text-2xl font-bold">248</p>
                    <p className="text-xs text-slate-500">
                      Patients
                    </p>
                  </div>
                </div>

                <div className="space-y-3 text-sm">
                  <div className="flex justify-between gap-8">
                    <span className="text-slate-500">Male</span>
                    <span className="font-medium">56%</span>
                  </div>

                  <div className="flex justify-between gap-8">
                    <span className="text-slate-500">Female</span>
                    <span className="font-medium">44%</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Common Conditions */}
            <div className="border-t border-orange-100 p-6">
              <h3 className="font-semibold">
                Common Conditions
              </h3>

              <div className="mt-5 space-y-4">
                {[
                  ["Hypertension", "28%"],
                  ["Diabetes", "21%"],
                  ["Asthma", "14%"],
                  ["Others", "37%"],
                ].map(([name, percentage]) => (
                  <div key={name}>
                    <div className="mb-2 flex justify-between text-xs">
                      <span className="text-slate-500">{name}</span>
                      <span className="font-medium">{percentage}</span>
                    </div>

                    <div className="h-1.5 overflow-hidden rounded-full bg-orange-100">
                      <div
                        className="h-full rounded-full bg-orange-500"
                        style={{ width: percentage }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* QUICK ACTIONS */}
        <div className="mt-6 rounded-2xl border border-orange-100 bg-white p-6 shadow-sm">
          <h2 className="mb-5 text-lg font-semibold">
            Quick Actions
          </h2>

          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-4">

            <Link
              href="/healthworker/patients"
              className="flex items-center gap-3 rounded-xl border border-orange-100 p-4 text-left transition hover:bg-orange-50"
            >
              <UserPlus className="text-orange-500" size={20} />
              <span className="text-sm font-medium">
                Add Patient
              </span>
            </Link>

            <button className="flex items-center gap-3 rounded-xl border border-orange-100 p-4 text-left transition hover:bg-orange-50">
              <ClipboardList className="text-orange-500" size={20} />
              <span className="text-sm font-medium">
                Collect Health Data
              </span>
            </button>

            <button className="flex items-center gap-3 rounded-xl border border-orange-100 p-4 text-left transition hover:bg-orange-50">
              <MapPin className="text-orange-500" size={20} />
              <span className="text-sm font-medium">
                Start Field Visit
              </span>
            </button>

            <button className="flex items-center gap-3 rounded-xl border border-orange-100 p-4 text-left transition hover:bg-orange-50">
              <Stethoscope className="text-orange-500" size={20} />
              <span className="text-sm font-medium">
                View Health Reports
              </span>
            </button>

          </div>
        </div>
      </section>
    </div>
  );
}
