export default function ArchitectureModal({ open, onClose, data }) {
    if (!open) return null;

    return (
        <div className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center px-6">
            <div className="bg-slate-900 max-w-4xl w-full rounded-xl border border-slate-700 overflow-hidden">

                {/* Header */}
                <div className="flex justify-between items-center px-6 py-4 border-b border-slate-800">
                    <h3 className="text-xl font-semibold">{data.title}</h3>
                    <button
                        onClick={onClose}
                        className="text-slate-400 hover:text-white text-xl"
                    >
                        ✕
                    </button>
                </div>

                {/* Content */}
                <div className="p-6 space-y-6 max-h-[75vh] overflow-y-auto">

                    {/* Diagram */}
                    <img
                        src={data.diagram}
                        alt="Architecture Diagram"
                        className="w-full rounded-lg border border-slate-800"
                    />

                    {/* Context */}
                    <section>
                        <h4 className="font-semibold mb-2">Problem Context</h4>
                        <p className="text-slate-400">{data.context}</p>
                    </section>

                    {/* Decisions */}
                    <section>
                        <h4 className="font-semibold mb-2">Key Design Decisions</h4>
                        <ul className="list-disc list-inside text-slate-400 space-y-1">
                            {data.decisions.map((d, i) => (
                                <li key={i}>{d}</li>
                            ))}
                        </ul>
                    </section>

                    {/* Trade-offs */}
                    <section>
                        <h4 className="font-semibold mb-2">Trade-offs</h4>
                        <ul className="list-disc list-inside text-slate-400 space-y-1">
                            {data.tradeoffs.map((t, i) => (
                                <li key={i}>{t}</li>
                            ))}
                        </ul>
                    </section>
                </div>
            </div>
        </div>
    );
}
