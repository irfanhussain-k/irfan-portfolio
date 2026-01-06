export default function Footer() {
    return (
        <footer className="border-t border-slate-800 py-6 mt-24">
            <div className="max-w-6xl mx-auto px-6 text-sm text-slate-500">
                © {new Date().getFullYear()} Irfan Hussain · Senior Technical Architect
            </div>
        </footer>
    );
}
