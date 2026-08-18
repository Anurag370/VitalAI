import PatientSidebar from "./components/patient-sidebar";

export default function PatientPage() {
  return (
    <main className="flex min-h-screen bg-slate-50">
      <PatientSidebar />

      <section className="flex-1 p-8">
        <h1 className="text-2xl font-semibold text-slate-900">
          Patient Dashboard
        </h1>

        <p className="mt-2 text-sm text-slate-500">
          Patient portal dashboard
        </p>
      </section>
    </main>
  );
}