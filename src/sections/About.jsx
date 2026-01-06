export default function About() {
    return (
        <section className="relative py-28 border-t border-slate-800" id="aboutme">

            {/* Soft background accent */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-1/2 right-0 w-[400px] h-[400px] bg-indigo-500/10 rounded-full blur-3xl"></div>
            </div>

            <div className="relative z-10 max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center" >

                {/* Left: About text */}
                <div>
                    <h2 className="text-4xl font-bold mb-6">
                        About <span className="text-sky-400">Me</span>
                    </h2>

                    <p className="text-slate-400 text-lg leading-relaxed max-w-xl">
                        I am a <strong className="text-slate-200">Senior Technical Architect</strong> with
                        over <strong className="text-slate-200">14 years of experience</strong> designing,
                        delivering, and scaling enterprise-grade platforms across
                        public sector, legal, education, and SaaS domains.
                    </p>

                    <p className="mt-5 text-slate-400 leading-relaxed max-w-xl">
                        My expertise lies in translating complex business requirements
                        into secure, scalable architectures — spanning cloud platforms,
                        AI-driven systems, and large-scale Salesforce ecosystems.
                    </p>

                    <p className="mt-5 text-slate-400 leading-relaxed max-w-xl">
                        I focus on long-term system maintainability, architectural
                        governance, and mentoring teams to deliver reliable,
                        future-ready solutions.
                    </p>
                </div>

                {/* Right: Stats / highlights */}
                <div className="grid grid-cols-2 gap-8">

                    <div className="bg-slate-900/70 border border-slate-800 rounded-xl p-6">
                        <div className="text-3xl font-bold text-sky-400">14+</div>
                        <div className="mt-2 text-slate-400">
                            Years of Experience
                        </div>
                    </div>

                    <div className="bg-slate-900/70 border border-slate-800 rounded-xl p-6">
                        <div className="text-3xl font-bold text-sky-400">23K+</div>
                        <div className="mt-2 text-slate-400">
                            Organizations Supported
                        </div>
                    </div>

                    <div className="bg-slate-900/70 border border-slate-800 rounded-xl p-6">
                        <div className="text-3xl font-bold text-sky-400">Multi-Cloud</div>
                        <div className="mt-2 text-slate-400">
                            AWS · Azure · Salesforce
                        </div>
                    </div>

                    <div className="bg-slate-900/70 border border-slate-800 rounded-xl p-6">
                        <div className="text-3xl font-bold text-sky-400">AI & LLM</div>
                        <div className="mt-2 text-slate-400">
                            Enterprise AI Platforms
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
