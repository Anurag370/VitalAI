import { Suspense } from "react";
import PatientSidebar from "@/components/patient-sidebar";
import NavBar from "@/components/NavBar";

export default function PatientLayout({
  children,
}: LayoutProps<"/patient">) {
  return (
    <div className="flex min-h-screen bg-slate-50">
      <Suspense
        fallback={
          <aside className="h-screen w-[220px] shrink-0 border-r border-slate-200 bg-white" />
        }
      >
        <PatientSidebar />
      </Suspense>

      <div className="flex min-w-0 flex-1 flex-col">
        <header className="sticky top-0 z-20 border-b border-slate-100 bg-white">
          <NavBar />
        </header>

        <main className="flex-1 p-4 sm:p-8">{children}</main>
      </div>
    </div>
  );
}
