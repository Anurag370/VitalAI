import { Suspense } from "react";
import PatientSidebar from "@/components/patient-sidebar";

export default function PatientLayout({
  children,
}: LayoutProps<"/patient">) {
  return (
    <div className="flex min-h-screen w-full bg-[#f4f7f9]">
      <Suspense
        fallback={
          <aside className="h-screen w-[260px] shrink-0 border-r border-slate-200 bg-white" />
        }
      >
        <PatientSidebar />
      </Suspense>

      <div className="min-w-0 flex-1 p-4 sm:p-6">{children}</div>
    </div>
  );
}
