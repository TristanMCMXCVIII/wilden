export default function TestimonialCard({
                                            quote,
                                            author,
                                            role,
                                            logo,
                                        }: {
    quote: string;
    author: string;
    role?: string;
    logo?: string;
}) {
    return (
        <figure className="card">
            <blockquote className="prose-min text-neutral-900">&ldquo;{quote}&rdquo;</blockquote>
            <figcaption className="mt-4 flex items-center gap-3">
                {logo ? <img src={logo} alt="" className="h-6 w-auto opacity-80" /> : null}
                <div className="text-sm">
                    <div className="font-medium">{author}</div>
                    {role ? <div className="text-neutral-600">{role}</div> : null}
                </div>
            </figcaption>
        </figure>
    );
}
