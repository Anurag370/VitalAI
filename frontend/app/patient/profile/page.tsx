import PatientProfile from "@/components/patient-profile";

export default function PatientProfilePage() {
  return (
    <div className="min-h-[calc(100vh-48px)] rounded-2xl border border-slate-100 bg-white p-7 shadow-[0_3px_20px_rgba(15,23,42,0.04)]">
      <PatientProfile />
    </div>
  );
}