export default function MilestoneCard() {
  return (
    <section className="rounded-3xl bg-purple-100 p-8">
      <h2 className="text-3xl font-bold text-purple-900">
        Celebrate milestones
      </h2>

      <p className="mt-3 text-purple-700">
        Instant alerts and weekly digests to keep your team aligned.
      </p>

      <div className="mt-8 rounded-2xl bg-white p-6 shadow-sm">
        <div className="space-y-3">
          <p className="font-medium">Qualified signup</p>

          <div className="grid grid-cols-2 gap-4 text-sm">
            <Info label="Company" value="Intercom" />
            <Info label="Location" value="Dublin" />
            <Info label="Role" value="CTO" />
            <Info label="Employees" value="800" />
          </div>
        </div>
      </div>
    </section>
  );
}

function Info({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <p className="text-slate-500">{label}</p>
      <p className="font-medium">{value}</p>
    </div>
  );
}
