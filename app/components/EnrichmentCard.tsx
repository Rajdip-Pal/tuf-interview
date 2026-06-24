export default function EnrichmentCard() {
  return (
    <section className="rounded-3xl bg-amber-100 p-8">
      <h2 className="text-4xl text-amber-950 font-bold">
        Automatic enrichment
      </h2>

      <p className="mt-3 text-slate-700">
        Enrich customer profiles automatically using AI.
      </p>

      <div className="mt-6 rounded-2xl bg-white p-5 shadow-sm">
        <h3 className="font-semibold text-violet-600">Enriched with AI</h3>

        <div className="mt-4 grid grid-cols-2 gap-4 text-sm">
          <Info label="Website" value="intercom.io" />
          <Info label="Location" value="Ireland" />
          <Info label="Employees" value="800" />
          <Info label="Funding" value="$241M" />
        </div>
      </div>
    </section>
  );
}

function Info({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <p className="text-slate-500">{label}</p>
      <p>{value}</p>
    </div>
  );
}
