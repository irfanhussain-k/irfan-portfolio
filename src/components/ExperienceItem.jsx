export default function ExperienceItem({
    period,
    title,
    company,
    summary,
    highlights,
}) {
    return (
        <div className="relative pl-8 border-l border-slate-800">
            <div className="absolute -left-[6px] top-1 w-3 h-3 bg-sky-400 rounded-full" />

            <div className="text-sm text-slate-500 mb-1">{period}</div>
            <h3 className="text-xl font-semibold">{title}</h3>
            <div className="text-slate-400 mb-3">{company}</div>

            <p className="text-slate-300 mb-4 max-w-3xl">{summary}</p>

            <ul className="list-disc list-inside text-slate-400 space-y-1">
                {highlights.map((item, i) => (
                    <li key={i}>{item}</li>
                ))}
            </ul>
        </div>
    );
}
