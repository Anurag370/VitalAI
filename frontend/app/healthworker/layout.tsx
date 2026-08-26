import { Suspense } from "react";
import HealthWorkerSidebar from "@/components/healthworkersidebar";
import NavBar from "@/components/NavBar";

export default function HealthWorkerLayout({
  children,
}: LayoutProps<"/healthworker">) {
  return (
    <div className="flex min-h-screen bg-[#fffaf5]">
      <Suspense
        fallback={
          <aside className="h-screen w-[220px] shrink-0 border-r border-orange-100 bg-white" />
        }
      >
        <HealthWorkerSidebar />
      </Suspense>

      <div className="flex min-w-0 flex-1 flex-col">
        <header className="sticky top-0 z-20 border-b border-orange-100 bg-white">
          <NavBar />
        </header>

        <main className="flex-1 p-4 sm:p-8">{children}</main>
      </div>
    </div>
  );
}
