export default function KPI({ title, value }: any) {
  return (
    <div style={{
      padding: 16,
      border: "1px solid #eee",
      borderRadius: 12,
      minWidth: 160
    }}>
      <div style={{ fontSize: 12, opacity: 0.6 }}>{title}</div>
      <div style={{ fontSize: 22, fontWeight: 600 }}>{value}</div>
    </div>
  );
}
