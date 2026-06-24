export default function HeroCard() {
  return (
    <section className="rounded-3xl bg-cyan-100 p-8 pb-0 pr-0">
      <div className="grid gap-8 lg:grid-cols-2">
        <div>
          <h1 className="max-w-sm text-4xl font-bold text-slate-900">
            We automatically generate reports for each of your customers
          </h1>
        </div>

        <div className="relative min-h-87.5 bottom-0">
          {/* Intercom Card */}
          <div className="absolute p-10 pt-5 pb-0 flex gap-x-5 bg-slate-50 rounded-tl-3xl bottom-0 right-0">
            <div className="w-80">
              <div className="min-h-5 bg-pink-100 rounded-t-sm"></div>
              <div className="bottom-5 right-40 rounded-b-2xl bg-white p-5 shadow-xl z-10">
                <div className="flex items-center gap-3">
                  <div className="h-12 w-12 rounded-xl bg-slate-900" />

                  <div>
                    <h3 className="font-semibold text-black">Intercom</h3>
                    <p className="text-sm text-slate-500">Joined 9 Feb 2023</p>
                  </div>
                </div>

                <div className="mt-6 space-y-4 text-sm">
                  <Row label="⚡ Total seats" value="50" />
                  <Row label="⚡ Active seats" value="22" />
                  <Row label="⚡ Active last 7 days" value="True" />
                </div>
              </div>
            </div>

            {/* Activation Card */}
            <div
              className="
              bottom-0
              right-5
              w-95
              rounded-2xl
              bg-white
              p-5
              shadow-xl
              origin-top-right
              rotate-[-5deg]
              z-20
              text-black
            "
            >
              <h3 className="text-lg font-semibold">Company activation</h3>

              <p className="mt-2 text-5xl font-bold">40%</p>

              <div className="mt-6 space-y-4">
                <Progress label="🎉 Signed up" value={100} />
                <Progress label="⚙️ Setup" value={80} />
                <Progress label="✨ Aha moment" value={60} />
                <Progress label="🚀 Activated" value={40} />
                <Progress label="⚡ Active" value={80} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Row({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex justify-between text-black">
      <span>{label}</span>
      <span>{value}</span>
    </div>
  );
}

function Progress({ label, value }: { label: string; value: number }) {
  return (
    <div className="grid grid-cols-[100px_1fr_40px] items-center gap-3">
      <span className="text-sm text-gray-600">{label}</span>

      <div className="h-2 rounded-full bg-slate-200">
        <div
          className="h-full rounded-full rounded-r-full bg-violet-500"
          style={{ width: `${value}%` }}
        />
      </div>

      <span className="text-right text-sm text-violet-500">{value}%</span>
    </div>
  );
}
