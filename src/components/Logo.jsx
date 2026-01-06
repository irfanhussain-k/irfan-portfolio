export default function Logo() {
    return (
        <svg
            width="36"
            height="36"
            viewBox="0 0 100 100"
            className="logo-animate"
            aria-label="Irfan Hussain logo"
        >
            <rect
                x="2"
                y="2"
                width="96"
                height="96"
                rx="14"
                fill="currentColor"
            />
            <text
                x="50"
                y="62"
                textAnchor="middle"
                fontSize="42"
                fontWeight="700"
                fill="#0f172a"
                fontFamily="system-ui, -apple-system, BlinkMacSystemFont, Segoe UI"
            >
                IH
            </text>
        </svg>
    );
}
