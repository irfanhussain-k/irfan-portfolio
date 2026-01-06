export default function Hero() {
    return (
        <section className="relative min-h-screen flex items-center overflow-hidden">

            {/* Background glow */}
            <div className="absolute inset-0">
                <div className="absolute -top-40 -right-40 w-[600px] h-[600px] bg-sky-500/20 rounded-full blur-3xl"></div>
                <div className="absolute top-1/3 -left-40 w-[500px] h-[500px] bg-indigo-500/20 rounded-full blur-3xl"></div>
            </div>

            {/* Content */}
            <div className="relative z-10 max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">

                {/* Left content */}
                <div>
                    <p className="text-sky-400 font-medium mb-3">
                        Hello.
                    </p>

                    <h1 className="text-5xl md:text-6xl font-bold leading-tight">
                        I’m <span className="text-sky-400">Irfan Hussain</span>
                        <br />
                        Senior Technical Architect
                    </h1>

                    <p className="mt-6 text-lg text-slate-400 max-w-xl">
                        I design and lead scalable cloud, AI, and Salesforce platforms
                        for enterprise and public-sector organizations.
                    </p>

                    <div className="mt-8 flex gap-4">
                        <a
                            href="#architecture"
                            className="px-6 py-3 bg-sky-400 text-slate-900 font-semibold rounded-lg hover:bg-sky-300 transition"
                        >
                            View Architecture
                        </a>

                        <a
                            href="#resume"
                            className="px-6 py-3 border border-slate-600 rounded-lg hover:border-sky-400 transition"
                        >
                            My Resume
                        </a>
                    </div>
                </div>

                {/* Right image */}
                <div className="relative flex justify-center">
                    <div className="relative">
                        <div className="absolute inset-0 bg-sky-400/20 rounded-full blur-2xl"></div>
                        <img
                            src="/file.enc"
                            alt="Irfan Hussain"
                            className="relative w-96 h-96 object-cover rounded-full border border-slate-700"
                        />
                    </div>
                </div>

            </div>
        </section>
    );
}
