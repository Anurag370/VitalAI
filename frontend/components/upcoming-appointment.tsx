import Image from "next/image";
import {
  CalendarDays,
  MapPin,
} from "lucide-react";

export default function UpcomingAppointment() {
  return (
    <div className="flex h-full min-h-[330px] flex-col rounded-2xl border border-slate-100 bg-white p-6 shadow-[0_3px_16px_rgba(15,23,42,0.04)]">
      <h2 className="text-[14px] font-semibold text-slate-900">
        Upcoming Appointment
      </h2>

      <div className="mt-7 flex items-center gap-4">
       <div className="h-12 w-12 overflow-hidden rounded-full">
  <Image
    src="/drdummy.jpg"
    alt="Dr. Antony Smith"
    width={48}
    height={48}
    className="h-full w-full object-cover"
  />
</div>

        <div>
          <p className="text-[13px] font-semibold text-slate-900">
            Dr. Antony Smith
          </p>

          <p className="mt-1 text-[11px] text-slate-500">
            Psychologist
          </p>
        </div>
      </div>

      <div className="mt-8 space-y-4">
        <div className="flex items-center gap-3">
          <CalendarDays size={15} className="text-slate-500" />
          <span className="text-[11px] font-medium text-slate-700">
            23 June 2007, 10:30 AM
          </span>
        </div>

        <div className="flex items-center gap-3">
          <MapPin size={15} className="text-slate-500" />
          <span className="text-[11px] text-slate-600">
            Delhi General Hospital
          </span>
        </div>
      </div>

      <button className="mt-auto h-11 w-full rounded-lg bg-teal-600 text-[11px] font-medium text-white transition hover:bg-teal-700">
        View Appointment
      </button>
    </div>
  );
}