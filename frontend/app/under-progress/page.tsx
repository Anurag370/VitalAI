"use client";

import { useSearchParams } from "next/navigation";
import { Suspense } from "react";

function UnderProgressContent() {
  const searchParams = useSearchParams();
  const section = searchParams.get("section") || "Section";

  return (
    <div className="flex min-h-screen items-center justify-center">
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

export default function UnderProgressPage() {
  return (
    <Suspense fallback={<div className="flex min-h-screen items-center justify-center"><span className="text-slate-400">Loading...</span></div>}>
      <UnderProgressContent />
    </Suspense>
  );
}
