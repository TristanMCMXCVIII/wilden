export default function Stat({ kpi, label }: { kpi: string; label: string }) {
    return (
        <div className="text-center">
            <div className="text-2xl md:text-3xl font-semibold">{kpi}</div>
            <div className="text-xs md:text-sm text-neutral-600">{label}</div>
        </div>
    );
}
