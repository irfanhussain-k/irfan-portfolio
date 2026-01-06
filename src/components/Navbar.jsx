import { useEffect, useState } from "react";
import Logo from "./Logo";

const sections = [
    { id: "aboutme", label: "About Me" },
    { id: "architecture", label: "Architecture" },
    { id: "experience", label: "Experience" },
    { id: "projects", label: "Projects" },
    { id: "contact", label: "Contact" },
];

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [active, setActive] = useState("");
    const [open, setOpen] = useState(false);

    useEffect(() => {
        const onScroll = () => {
            setScrolled(window.scrollY > 40);

            sections.forEach((section) => {
                const el = document.getElementById(section.id);
                if (!el) return;

                const rect = el.getBoundingClientRect();
                if (rect.top <= 120 && rect.bottom >= 120) {
                    setActive(section.id);
                }
            });
        };

        window.addEventListener("scroll", onScroll);
        onScroll();
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    // Lock background scroll when mobile menu is open
    useEffect(() => {
        document.body.style.overflow = open ? "hidden" : "auto";
    }, [open]);

    const goTo = (id) => {
        setOpen(false);
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    };

    return (
        <>
            {/* NAVBAR */}
            <nav
                className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled
                        ? "bg-slate-900/80 backdrop-blur border-b border-slate-800 shadow-lg"
                        : "bg-transparent"
                    }`}
            >
                <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">

                    {/* Logo */}
                    <div
                        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                        className="flex items-center gap-3 cursor-pointer"
                    >
                        <div className="text-sky-400">
                            <Logo />
                        </div>
                        <div className="flex flex-col leading-tight">
                            <span className="text-sm font-semibold text-slate-200">
                                Irfan Hussain
                            </span>
                            <span className="text-xs text-slate-400">
                                Senior Technical Architect
                            </span>
                        </div>
                    </div>

                    {/* Desktop Nav */}
                    <div className="hidden md:flex items-center gap-8 text-sm">
                        {sections.map((s) => (
                            <a
                                key={s.id}
                                href={`#${s.id}`}
                                className={`transition ${active === s.id
                                        ? "text-sky-400"
                                        : "text-slate-300 hover:text-sky-400"
                                    }`}
                            >
                                {s.label}
                            </a>
                        ))}

                        <a
                            href="#contact"
                            className="ml-4 px-4 py-2 rounded-lg bg-sky-400 text-slate-900 font-semibold hover:bg-sky-300 transition"
                        >
                            Let’s Talk
                        </a>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setOpen(true)}
                        className="md:hidden text-slate-200"
                        aria-label="Open menu"
                    >
                        ☰
                    </button>
                </div>
            </nav>

            {/* MOBILE OVERLAY */}
            {open && (
                <div className="fixed inset-0 z-40 bg-black/60" onClick={() => setOpen(false)} />
            )}

            {/* MOBILE MENU PANEL */}
            <div
                className={`fixed top-0 right-0 w-full h-screen bg-slate-950 z-50 transform transition-transform duration-300 ${open ? "translate-y-0" : "-translate-y-full"
                    }`}
            >
                <div className="px-6 pt-20 space-y-8">
                    {sections.map((s) => (
                        <button
                            key={s.id}
                            onClick={() => goTo(s.id)}
                            className={`block text-2xl font-medium w-full text-left ${active === s.id ? "text-sky-400" : "text-slate-200"
                                }`}
                        >
                            {s.label}
                        </button>
                    ))}

                    <div className="pt-6 border-t border-slate-800">
                        <button
                            onClick={() => goTo("contact")}
                            className="w-full px-6 py-3 rounded-lg bg-sky-400 text-slate-900 font-semibold"
                        >
                            Let’s Talk
                        </button>
                    </div>
                </div>

                {/* Close */}
                <button
                    onClick={() => setOpen(false)}
                    className="absolute top-5 right-6 text-2xl text-slate-300"
                    aria-label="Close menu"
                >
                    ✕
                </button>
            </div>
        </>
    );
}
