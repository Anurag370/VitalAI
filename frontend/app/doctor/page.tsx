"use client";

import {
  Users,
  CalendarDays,
  FileText,
  UserRound,
} from "lucide-react";

const appointments = [
  {
    time: "09:00 AM",
    name: "Rahul Verma",
    type: "Follow-up",
    status: "Confirmed",
  },
  {
    time: "10:30 AM",
    name: "Sneha Roy",
    type: "Consultation",
    status: "Confirmed",
  },
  {
    time: "12:00 PM",
    name: "Amit Kumar",
    type: "ECG Review",
    status: "Confirmed",
  },
  {
    time: "02:00 PM",
    name: "Pooja Singh",
    type: "Consultation",
    status: "Pending",
  },
];

const patients = [
  {
    name: "Rahul Verma",
    age: "32 yrs",
    gender: "Male",
    date: "Today",
  },
  {
    name: "Sneha Roy",
    age: "28 yrs",
    gender: "Female",
    date: "Today",
  },
  {
    name: "Amit Kumar",
    age: "45 yrs",
    gender: "Male",
    date: "Yesterday",
  },
  {
    name: "Pooja Singh",
    age: "30 yrs",
    gender: "Female",
    date: "Yesterday",
  },
];

export default function Dashboard() {
  return (
    <div>
      <section>

          {/* TITLE */}
          <div className="mb-6">
            <h1 className="text-2xl font-bold text-slate-900">
              Dashboard
            </h1>

            <p className="mt-1 text-sm text-slate-500">
              Welcome back, Anurag Hom Roy
            </p>
          </div>

          {/* STAT CARDS */}
          <div className="grid grid-cols-4 gap-4">

            <StatCard
              icon={<CalendarDays size={19} />}
              title="Today's Appointments"
              value="16"
            />

            <StatCard
              icon={<Users size={19} />}
              title="Total Patients"
              value="248"
            />

            <StatCard
              icon={<FileText size={19} />}
              title="Pending Reports"
              value="12"
            />

            <StatCard
              icon={<UserRound size={19} />}
              title="New Patients"
              value="7"
              subtitle="This Week"
            />

          </div>

          {/* LOWER SECTION */}
          <div className="mt-5 grid grid-cols-3 gap-4">

            {/* APPOINTMENTS */}
            <div className="rounded-xl border border-slate-200 bg-white text-slate-500">

              <div className="flex items-center justify-between border-b border-slate-100 px-4 py-3">
                <h2 className="text-sm font-semibold text-slate-900">
                  Today's Appointments
                </h2>
              </div>

              <div className="divide-y divide-slate-100">

                {appointments.map((appointment) => (
                  <div
                    key={appointment.time}
                    className="flex items-center justify-between px-4 py-3"
                  >

                    <div className="flex gap-3">

                      <div className="w-14 text-xs font-medium text-slate-500">
                        {appointment.time}
                      </div>

                      <div>
                        <p className="text-xs font-semibold">
                          {appointment.name}
                        </p>

                        <p className="text-[11px] text-slate-400">
                          {appointment.type}
                        </p>
                      </div>

                    </div>

                    <span
                      className={`rounded-md px-2 py-1 text-[10px] ${
                        appointment.status === "Confirmed"
                          ? "bg-green-50 text-green-600"
                          : "bg-orange-50 text-orange-500"
                      }`}
                    >
                      {appointment.status}
                    </span>

                  </div>
                ))}

              </div>

              <div className="border-t border-slate-100 p-3 text-center">
                <button className="text-xs font-medium text-purple-600">
                  View All Appointments
                </button>
              </div>

            </div>

            {/* RECENT PATIENTS */}
            <div className="rounded-xl border border-slate-200 bg-white">

              <div className="flex items-center justify-between border-b border-slate-100 px-4 py-3">
                <h2 className="text-sm font-semibold text-slate-900">
                  Recent Patients
                </h2>
              </div>

              <div className="divide-y divide-slate-100 text-slate-500">

                {patients.map((patient) => (
                  <div
                    key={patient.name}
                    className="flex items-center justify-between px-4 py-3"
                  >

                    <div className="flex items-center gap-3">

                      <div className="flex h-8 w-8 items-center justify-center rounded-full bg-slate-100">
                        <UserRound
                          size={15}
                          className="text-slate-500"
                        />
                      </div>

                      <div>
                        <p className="text-xs font-semibold">
                          {patient.name}
                        </p>

                        <p className="text-[11px] text-slate-400">
                          {patient.age} • {patient.gender}
                        </p>
                      </div>

                    </div>

                    <span className="text-[10px] text-slate-400">
                      {patient.date}
                    </span>

                  </div>
                ))}

              </div>

              <div className="border-t border-slate-100 p-3 text-center">
                <button className="text-xs font-medium text-purple-600">
                  View All Patients
                </button>
              </div>

            </div>

            {/* PATIENT OVERVIEW */}
            <div className="rounded-xl border border-slate-200 bg-white p-4">

              <h2 className="text-sm font-semibold text-slate-900">
                Patient Overview
              </h2>

              {/* Circle */}
              <div className="flex items-center justify-center py-5 text-slate-500">

                <div className="flex h-32 w-32 flex-col items-center justify-center rounded-full border-[14px] border-purple-500">

                  <span className="text-2xl font-bold text-slate-900">
                    248
                  </span>

                  <span className="text-[10px] text-slate-400">
                    Total Patients
                  </span>

                </div>

              </div>

              {/* Gender */}
              <div className="space-y-2 text-xs text-slate-500">

                <div className="flex justify-between">
                  <span>Male</span>
                  <span>58% (144)</span>
                </div>

                <div className="h-1.5 rounded-full bg-slate-100">
                  <div className="h-full w-[58%] rounded-full bg-purple-500" />
                </div>

                <div className="flex justify-between">
                  <span>Female</span>
                  <span>42% (104)</span>
                </div>

                <div className="h-1.5 rounded-full bg-slate-100">
                  <div className="h-full w-[42%] rounded-full bg-purple-300" />
                </div>

              </div>

              {/* Conditions */}
              <div className="mt-5 text-slate-500">

                <h3 className="mb-3 text-xs font-semibold text-slate-500">
                  Common Conditions
                </h3>

                <Condition
                  name="Hypertension"
                  percentage="20%"
                  width="80%"
                />

                <Condition
                  name="Diabetes"
                  percentage="21%"
                  width="65%"
                />

                <Condition
                  name="Asthma"
                  percentage="14%"
                  width="50%"
                />

                <Condition
                  name="Others"
                  percentage="37%"
                  width="35%"
                />

              </div>

            </div>

          </div>

        </section>
    </div>
  );
}

/* STAT CARD */
function StatCard({
  icon,
  title,
  value,
  subtitle,
}: {
  icon: React.ReactNode;
  title: string;
  value: string;
  subtitle?: string;
}) {
  return (
    <div className="rounded-xl border border-slate-200 bg-white p-4">

      <div className="flex items-center gap-2">

        <div className="rounded-lg bg-purple-50 p-2 text-purple-600">
          {icon}
        </div>

        <span className="text-xs text-slate-500">
          {title}
        </span>

      </div>

      <div className="mt-3 flex items-end gap-2">

        <span className="text-2xl font-bold text-slate-900">
          {value}
        </span>

        {subtitle && (
          <span className="mb-1 text-[10px] text-slate-400">
            {subtitle}
          </span>
        )}

      </div>

    </div>
  );
}

/* CONDITION */
function Condition({
  name,
  percentage,
  width,
}: {
  name: string;
  percentage: string;
  width: string;
}) {
  return (
    <div className="mb-3">

      <div className="mb-1 flex justify-between text-[10px]">
        <span>{name}</span>
        <span>{percentage}</span>
      </div>

      <div className="h-1.5 rounded-full bg-slate-100">
        <div
          className="h-full rounded-full bg-purple-400"
          style={{ width }}
        />
      </div>

    </div>
  );
}