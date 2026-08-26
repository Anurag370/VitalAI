import Link from "next/link";
import { Stethoscope, HeartPulse } from "lucide-react";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-slate-50 to-slate-100">
      <div className="flex flex-col items-center gap-10">
        <div className="text-center">
          <h1 className="text-4xl font-bold tracking-tight text-slate-800">
            HealthAI
          </h1>
          <p className="mt-2 text-sm text-slate-500">
            Select your dashboard to get started
          </p>
        </div>

        <div className="flex gap-6">
          <Link
            href="/doctor/dashboard"
            className="flex h-40 w-52 flex-col items-center justify-center gap-3 rounded-2xl border border-slate-200 bg-white shadow-sm transition hover:border-purple-300 hover:shadow-md"
          >
            <Stethoscope className="h-8 w-8 text-purple-600" />
            <span className="text-sm font-semibold text-slate-700">
              Doctor Dashboard
            </span>
          </Link>

          <Link
            href="/patient"
            className="flex h-40 w-52 flex-col items-center justify-center gap-3 rounded-2xl border border-slate-200 bg-white shadow-sm transition hover:border-teal-300 hover:shadow-md"
          >
            <HeartPulse className="h-8 w-8 text-teal-600" />
            <span className="text-sm font-semibold text-slate-700">
              Patient Dashboard
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
}
