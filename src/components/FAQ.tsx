type QA = { q: string; a: string };

export default function FAQ({ items }: { items: QA[] }) {
    return (
        <div className="space-y-4">
            {items.map((x, i) => (
                <details key={i} className="card">
                    <summary className="cursor-pointer font-medium">{x.q}</summary>
                    <div className="mt-2 prose-min">{x.a}</div>
                </details>
            ))}
        </div>
    );
}