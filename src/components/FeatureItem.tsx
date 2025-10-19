export default function FeatureItem({ title, desc }: { title: string; desc: string }) {
    return (
        <div className="flex gap-3 items-start">
            <div className="h-2 w-2 rounded-full bg-neutral-900 mt-2" />
            <div>
                <div className="font-medium">{title}</div>
                <div className="text-sm text-neutral-600">{desc}</div>
            </div>
        </div>
    );
}
