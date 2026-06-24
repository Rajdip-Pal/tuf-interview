export default function CRMCard() {
  return (
    <section className="rounded-3xl bg-green-100 p-8">
      <h2 className="text-3xl font-bold text-green-900">
        Integrated with your CRM
      </h2>

      <p className="mt-3 text-green-800">
        Connect your CRM and sync usage data.
      </p>

      <div className="mt-6 rounded-2xl bg-white p-5 shadow-sm">
        <table className="w-full text-left">
          <thead>
            <tr>
              <th>Company</th>
              <th>Seats</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td>Intercom</td>
              <td>22 (+3)</td>
            </tr>

            <tr>
              <td>Amie</td>
              <td>20 (-2)</td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  );
}
