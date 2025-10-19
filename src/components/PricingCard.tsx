type Tier = {
    name: string;
    price: string;
    features: string[];
    cta: { label: string; href: string };
    note?: string;
};

export default function PricingCard({ tier }: { tier: Tier }) {
    return (
        <div className="card h-full flex flex-col">
            <div className="flex items-baseline justify-between">
                <h3 className="h3">{tier.name}</h3>
                <div className="text-xl font-semibold">{tier.price}</div>
            </div>
            <ul className="mt-4 list-check">
                {tier.features.map((f, i) => <li key={i}>{f}</li>)}
            </ul>
            {tier.note ? <div className="mt-3 text-sm text-neutral-600">{tier.note}</div> : null}
            <a href={tier.cta.href} className="btn btn-primary mt-5">{tier.cta.label}</a>
        </div>
    );
}
