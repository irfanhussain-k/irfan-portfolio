function IconSparkle() {
    return (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
            <path d="M12 2l1.6 4.6L18 8l-4.4 1.4L12 14l-1.6-4.6L6 8l4.4-1.4L12 2z"
                stroke="currentColor" strokeWidth="1.5" />
        </svg>
    );
}

function IconStack() {
    return (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
            <path d="M12 2l9 5-9 5-9-5 9-5zM3 12l9 5 9-5"
                stroke="currentColor" strokeWidth="1.5" />
        </svg>
    );
}

export default function ProjectCard({
    title,
    subtitle,
    description,
    highlights,
    tech,
    badge,
}) {
    return (
        <div className="bg-slate-900/60 border border-slate-800 rounded-xl p-6 card-hover fade-in">
            <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-2 text-sky-400">
                    <IconSparkle />
                    <span className="text-xs uppercase tracking-wider">Project</span>
                </div>

                {badge && (
                    <span className="px-3 py-1 text-xs font-semibold bg-sky-400 text-slate-900 rounded-full">
                        {badge}
                    </span>
                )}
            </div>

            <h3 className="text-xl font-semibold mb-1">{title}</h3>
            <div className="text-sm text-slate-400 mb-3">{subtitle}</div>

            <p className="text-slate-300 mb-4">{description}</p>

            <ul className="list-disc list-inside text-slate-400 space-y-1 mb-4">
                {highlights.map((item, i) => (
                    <li key={i}>{item}</li>
                ))}
            </ul>

            <div className="flex items-center gap-2 text-xs text-slate-500">
                <IconStack />
                <span><strong>Tech:</strong> {tech}</span>
            </div>
        </div>
    );
}
