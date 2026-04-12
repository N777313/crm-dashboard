"use client";

import { useEffect, useState } from "react";
import { getOrders } from "../services/orders";
import KPI from "../components/KPI";
import OrdersTable from "../components/OrdersTable";
import RevenueChart from "../components/RevenueChart";

export default function Home() {
  const [orders, setOrders] = useState<any[]>([]);

  useEffect(() => {
    getOrders().then(setOrders);
  }, []);

  const total = orders.reduce((s, o) => s + Number(o.total_sum || 0), 0);

  const chartData = Object.values(
    orders.reduce((acc: any, o: any) => {
      const d = o.created_at?.slice(0, 10);
      acc[d] = acc[d] || { date: d, sum: 0 };
      acc[d].sum += Number(o.total_sum || 0);
      return acc;
    }, {})
  );

  return (
    <div style={{ padding: 20 }}>
      <h1>📊 Production Dashboard</h1>

      <div style={{ display: "flex", gap: 10 }}>
        <KPI title="Orders" value={orders.length} />
        <KPI title="Revenue" value={`${total} ₸`} />
        <KPI title="Avg Order" value={`${orders.length ? (total / orders.length).toFixed(0) : 0} ₸`} />
      </div>

      <h2 style={{ marginTop: 30 }}>Revenue</h2>
      <RevenueChart data={chartData} />

      <h2 style={{ marginTop: 30 }}>Orders</h2>
      <OrdersTable orders={orders} />
    </div>
  );
}
