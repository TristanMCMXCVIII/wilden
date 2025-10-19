type Props = {
    title: string;
    problem: string;
    solution: string[];
    impact: string;
};

export default function CaseStudyCard({ title, problem, solution, impact }: Props) {
    return (
        <article className="card h-full flex flex-col">
            <h3 className="h3">{title}</h3>
            <div className="mt-3 text-sm text-neutral-600"><strong>Problème :</strong> {problem}</div>
            <ul className="mt-3 list-check">
                {solution.map((s, i) => <li key={i}>{s}</li>)}
            </ul>
            <div className="mt-4 text-sm"><strong>Impact :</strong> {impact}</div>
        </article>
    );
}
