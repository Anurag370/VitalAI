"use client";

import { useSearchParams } from "next/navigation";

export default function DoctorUnderProgressPage() {
  const searchParams = useSearchParams();

  const section = searchParams.get("section") || "Section";

  return (
    <div className="flex min-h-[calc(100vh-48px)] items-center justify-center">
      <div className="text-center">
        <h1 className="text-3xl font-semibold text-slate-900">
          {section}
        </h1>

        <p className="mt-3 text-lg text-slate-500">
          Under Progress
        </p>
      </div>
    </div>
  );
}
