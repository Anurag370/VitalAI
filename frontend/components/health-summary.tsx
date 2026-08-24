export default function HealthSummary() {
  return (
    <div className="flex h-full min-h-[330px] flex-col rounded-2xl border border-slate-100 bg-white p-6 shadow-[0_3px_16px_rgba(15,23,42,0.04)]">
      <h2 className="text-[14px] font-semibold text-slate-900">
        Health Summary
      </h2>

      <div className="flex flex-1 items-center justify-center gap-10">
        <div
          className="flex h-[135px] w-[135px] shrink-0 items-center justify-center rounded-full"
          style={{
            background:
              "conic-gradient(#16a085 0deg 252deg, #f6b73c 252deg 324deg, #dc4c4c 324deg 360deg)",
          }}
        >
          <div className="flex h-[98px] w-[98px] flex-col items-center justify-center rounded-full bg-white">
            <span className="text-[28px] font-semibold text-slate-900">
              --
            </span>

            <span className="text-[11px] font-medium text-teal-600">
              Good
            </span>
          </div>
        </div>

        <div className="space-y-5">
          <div className="flex items-center gap-3">
            <span className="h-3 w-3 rounded-full bg-teal-500" />
            <span className="text-[11px] text-slate-600">
              Good
            </span>
            <span className="ml-4 text-[11px] font-medium text-slate-700">
              --%
            </span>
          </div>

          <div className="flex items-center gap-3">
            <span className="h-3 w-3 rounded-full bg-amber-400" />
            <span className="text-[11px] text-slate-600">
              Average
            </span>
            <span className="ml-4 text-[11px] font-medium text-slate-700">
              --%
            </span>
          </div>

          <div className="flex items-center gap-3">
            <span className="h-3 w-3 rounded-full bg-red-500" />
            <span className="text-[11px] text-slate-600">
              Poor
            </span>
            <span className="ml-4 text-[11px] font-medium text-slate-700">
              --%
            </span>
          </div>
        </div>
      </div>

      <p className="pb-2 text-center text-[11px] text-slate-600">
        You're doing great! Keep it up 
      </p>
    </div>
  );
}