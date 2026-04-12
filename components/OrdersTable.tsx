export default function OrdersTable({ orders }: any) {
  return (
    <table style={{ width: "100%", marginTop: 20 }}>
      <thead>
        <tr>
          <th>ID</th>
          <th>Number</th>
          <th>Amount</th>
        </tr>
      </thead>
      <tbody>
        {orders.map((o: any) => (
          <tr key={o.id}>
            <td>{o.id}</td>
            <td>{o.number}</td>
            <td>{o.total_sum} ₸</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
