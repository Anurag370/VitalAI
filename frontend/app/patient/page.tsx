import DashboardGreeting from "@/components/dashboard-greeting";
import HealthMetricCards from "@/components/health-metric-cards";
import UpcomingAppointment from "@/components/upcoming-appointment";
import HealthSummary from "@/components/health-summary";
import RecentActivity from "@/components/recent-activity";
import QuickActions from "@/components/quick-actions";

export default function PatientPage() {
  return (
    <div className="flex min-h-[calc(100vh-48px)] w-full flex-col rounded-2xl border border-slate-100 bg-white p-7 shadow-[0_3px_20px_rgba(15,23,42,0.04)]">
      <DashboardGreeting />

      <div className="flex flex-1 flex-col gap-5">

        <HealthMetricCards />

        <div className="grid flex-1 grid-cols-[1.05fr_1fr_1fr] gap-5">
          <UpcomingAppointment />
          <HealthSummary />
          <RecentActivity />
        </div>

        <QuickActions />

      </div>
    </div>
  );
}