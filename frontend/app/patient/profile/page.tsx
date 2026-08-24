import PatientSidebar from "@/components/patient-sidebar";
import PatientProfile from "@/components/patient-profile";

export default function PatientProfilePage() {
  return (
    <main className="flex min-h-screen w-full bg-[#f4f7f9]">
      <PatientSidebar />

      <section className="min-h-screen min-w-0 flex-1 p-6">
        <div className="min-h-[calc(100vh-48px)] rounded-2xl border border-slate-100 bg-white p-7 shadow-[0_3px_20px_rgba(15,23,42,0.04)]">
          <PatientProfile />
        </div>
      </section>
    </main>
  );
}