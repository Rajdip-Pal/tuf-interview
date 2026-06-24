import HeroCard from "./components/HeroCard";
import MilestoneCard from "./components/MilestoneCard";
import EnrichmentCard from "./components/EnrichmentCard";
import CRMCard from "./components/CRMCard";

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-50 p-6">
      <div className=" mx-auto max-w-7xl ">
        <div className="relative space-y-6">
          <HeroCard />

          <div className="grid gap-6 lg:grid-cols-2">
            <MilestoneCard />

            <div className="space-y-6">
              <EnrichmentCard />
              <CRMCard />
            </div>
          </div>

          {/* Status Pills */}
          <div className="flex flex-col items-center gap-4 py-4">
            <StatusBadge label="Last seen" value="today" />

            <StatusBadge label="Activated" value="true" />
          </div>
        </div>
      </div>
      {/* Floating circles */}

      <div className="absolute right-16 top-1/2 -translate-y-1/2 z-20">
        <div className="h-16 w-16 overflow-hidden rounded-full border-4 border-white shadow-lg">
          <img
            src="https://picsum.photos/200"
            alt="Map"
            className="h-full w-full object-cover"
          />
        </div>
      </div>

      <div className="absolute right-6 top-1/2 -translate-y-1/2 z-30">
        <div className="flex h-16 w-16 items-center justify-center rounded-full border-4 border-white bg-slate-900 shadow-lg">
          <span className="text-xl font-bold text-white">I</span>
        </div>
      </div>

      <h2 className="text-3xl font-bold">Automatic enrichment</h2>

      <p className="mt-3 text-slate-700">
        Automatically enrich your customers profiles and their users powered by
        GPT
      </p>

      {/* Existing content */}
    </main>
  );
}

function StatusBadge({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-center gap-3">
      <div className="h-px w-24 bg-green-300" />

      <div className="flex items-center gap-2 rounded-full border border-green-200 bg-white px-3 py-1 shadow-sm">
        <span className="text-green-500">⚡</span>

        <span className="text-sm text-gray-700">{label}</span>

        <span className="rounded-full bg-green-100 px-2 py-0.5 text-xs font-medium text-green-700">
          {value}
        </span>
      </div>
    </div>
  );
}
