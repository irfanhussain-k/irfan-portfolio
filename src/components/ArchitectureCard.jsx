import { useState } from "react";
import ArchitectureModal from "./ArchitectureModal";

function IconLayers() {
    return (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
            <path
                d="M12 3l9 5-9 5-9-5 9-5zM3 12l9 5 9-5"
                stroke="currentColor"
                strokeWidth="1.5"
            />
        </svg>
    );
}

export default function ArchitectureCard({
    title,
    domain,
    description,
    highlights,
    stack,
    modalData,
}) {
    const [open, setOpen] = useState(false);

    return (
        <>
            <div className="bg-slate-900/70 border border-slate-800 rounded-2xl p-7 card-hover fade-in">

                {/* Header */}
                <div className="flex items-center justify-between mb-5">
                    <div className="flex items-center gap-3 text-sky-400">
                        <IconLayers />
                        <span className="uppercase text-xs tracking-wider">
                            {domain}
                        </span>
                    </div>
                </div>

                <h3 className="text-2xl font-semibold mb-3">
                    {title}
                </h3>

                <p className="text-slate-400 mb-5 leading-relaxed">
                    {description}
                </p>

                <ul className="space-y-2 text-slate-300 mb-6">
                    {highlights.map((item, i) => (
                        <li key={i} className="flex gap-2">
                            <span className="text-sky-400">▸</span>
                            <span>{item}</span>
                        </li>
                    ))}
                </ul>

                <div className="flex items-center justify-between">
                    <div className="text-sm text-slate-500">
                        <strong>Tech:</strong> {stack}
                    </div>

                    <button
                        onClick={() => setOpen(true)}
                        className="text-sm text-sky-400 hover:underline"
                    >
                        View Architecture →
                    </button>
                </div>
            </div>

            <ArchitectureModal
                open={open}
                onClose={() => setOpen(false)}
                data={modalData}
            />
        </>
    );
}
