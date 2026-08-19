"use client";

import {
  Activity,
  Droplets,
  HeartPulse,
  Scale,
  Syringe,
} from "lucide-react";

const metrics = [
  {
    title: "Health Score",
    value: "--",
    unit: "/100",
    status: "Good",
    icon: Activity,
    iconClass: "bg-teal-50 text-teal-600",
    statusClass: "text-teal-600",
    chart: true,
  },
  {
    title: "Heart Rate",
    value: "--",
    unit: "bpm",
    status: "Normal",
    icon: HeartPulse,
    iconClass: "bg-red-50 text-red-500",
    statusClass: "text-teal-600",
  },
  {
    title: "Blood Pressure",
    value: "--/--",
    unit: "mmHg",
    status: "Normal",
    icon: Syringe,
    iconClass: "bg-red-50 text-red-500",
    statusClass: "text-teal-600",
  },
  {
    title: "Blood Sugar",
    value: "--",
    unit: "mg/dL",
    status: "Normal",
    icon: Droplets,
    iconClass: "bg-blue-50 text-blue-500",
    statusClass: "text-teal-600",
  },
  {
    title: "BMI",
    value: "--",
    unit: "",
    status: "Healthy",
    icon: Scale,
    iconClass: "bg-emerald-50 text-emerald-500",
    statusClass: "text-teal-600",
  },
];

export default function HealthMetricCards() {
  return (
    <div className="grid grid-cols-5 gap-5">
      {metrics.map((metric) => {
        const Icon = metric.icon;

        return (
          <div
            key={metric.title}
            className="flex min-h-[145px] flex-col rounded-2xl border border-slate-100 bg-white p-5 shadow-[0_3px_16px_rgba(15,23,42,0.04)]"
          >
            <div className="flex items-center gap-3">
              <div
                className={`flex h-9 w-9 items-center justify-center rounded-xl ${metric.iconClass}`}
              >
                <Icon size={17} strokeWidth={1.8} />
              </div>

              <span className="text-[12px] font-medium text-slate-600">
                {metric.title}
              </span>
            </div>

            <div className="mt-5 flex items-baseline gap-1.5">
              <span className="text-[25px] font-semibold leading-none text-slate-900">
                {metric.value}
              </span>

              {metric.unit && (
                <span className="text-[11px] font-medium text-slate-600">
                  {metric.unit}
                </span>
              )}
            </div>

            <p
              className={`mt-2 text-[11px] font-medium ${metric.statusClass}`}
            >
              {metric.status}
            </p>

            {metric.chart && (
              <div className="mt-auto h-10 w-full pt-2">
                <svg
                  viewBox="0 0 160 32"
                  className="h-full w-full"
                  preserveAspectRatio="none"
                >
                  <path
                    d="M2 27 L18 24 L34 25 L51 14 L68 20 L85 10 L102 24 L119 14 L137 21 L158 3"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    className="text-teal-500"
                  />
                </svg>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}