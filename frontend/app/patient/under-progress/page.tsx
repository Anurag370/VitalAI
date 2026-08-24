"use client";

import { useSearchParams } from "next/navigation";
import PatientSidebar from "@/components/patient-sidebar";

export default function UnderProgressPage() {
  const searchParams = useSearchParams();

  const section = searchParams.get("section") || "Section";

  return (
    <main className="flex min-h-screen w-full bg-[#f4f7f9]">
      <PatientSidebar />

      <section className="flex min-h-screen min-w-0 flex-1 items-center justify-center p-6">
        <div className="text-center">
          <h1 className="text-3xl font-semibold text-slate-900">
            {section}
          </h1>

          <p className="mt-3 text-lg text-slate-500">
            Under Progress
          </p>
        </div>
      </section>
    </main>
  );
}