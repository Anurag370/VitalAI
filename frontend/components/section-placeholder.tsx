export default function SectionPlaceholder({
  title,
}: {
  title: string;
}) {
  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center rounded-2xl border border-dashed border-slate-200 bg-white p-10 text-center">
      <h1 className="text-2xl font-semibold text-slate-900">{title}</h1>
      <p className="mt-3 text-sm text-slate-500">
        This section is under progress. Check back soon.
      </p>
    </div>
  );
}
