import ArchitectureCard from "../components/ArchitectureCard";

export default function Architecture() {
    return (
        <section
            id="architecture"
            className="relative py-28 border-t border-slate-800"
        >
            {/* Subtle background accent */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-sky-500/10 rounded-full blur-3xl"></div>
            </div>

            <div className="relative z-10 max-w-6xl mx-auto px-6">
                {/* Section header */}
                <div className="mb-14 max-w-3xl">
                    <div className="flex items-center gap-3 mb-4">
                        <div className="w-10 h-[2px] bg-sky-400"></div>
                        <span className="text-sky-400 uppercase text-sm tracking-wider">
                            Architecture
                        </span>
                    </div>

                    <h2 className="text-4xl font-bold mb-4">
                        Architecture Portfolio
                    </h2>

                    <p className="text-slate-400 text-lg">
                        End-to-end systems I architected and led, focusing on scalability,
                        security, and long-term maintainability across enterprise and
                        public-sector environments.
                    </p>
                </div>

                {/* Architecture cards */}
                <div className="grid md:grid-cols-2 gap-10">

                    {/* 1️⃣ AI Document Intelligence Platform */}
                    <ArchitectureCard
                        title="AI-Driven Document Intelligence Platform"
                        domain="Enterprise AI / SaaS"
                        description="Cloud-native platform enabling intelligent document ingestion, LLM-based analysis, conversational querying, and multi-cloud CRM exports."
                        highlights={[
                            "LLM orchestration with dynamic model selection",
                            "ChatGPT-style conversational interface for document insights",
                            "Multi-cloud deployment across AWS and Azure",
                            "Secure export pipelines to Salesforce and HubSpot",
                        ]}
                        stack="React, FastAPI, OpenAI GPT, AWS, Azure Blob Storage"
                        modalData={{
                            title: "AI-Driven Document Intelligence Platform",
                            diagram: "/diagrams/ai-platform.png",
                            context:
                                "Enterprises needed a secure and scalable way to extract insights from large, unstructured documents using LLMs while retaining control over data and integrations.",
                            decisions: [
                                "Separated ingestion, AI orchestration, and export layers",
                                "Used FastAPI as an async orchestration backend",
                                "Designed for multi-cloud flexibility to avoid vendor lock-in",
                                "Implemented async processing for large document workloads",
                            ],
                            tradeoffs: [
                                "Increased operational complexity due to multi-cloud setup",
                                "Latency trade-offs when invoking external LLM APIs",
                            ],
                        }}
                    />

                    {/* 2️⃣ Salesforce Public Sector Platform */}
                    <ArchitectureCard
                        title="Salesforce Public Sector Registration Platform"
                        domain="Public Sector / Government"
                        description="Large-scale Salesforce platform supporting charity registration, annual filings, approvals, and payments for the Massachusetts Attorney General’s Office."
                        highlights={[
                            "Platform supporting 23,000+ nonprofit organizations",
                            "Salesforce Digital Experience architecture for public users",
                            "Automated workflows, approvals, and notifications",
                            "Secure payment gateway integration with nCourt",
                        ]}
                        stack="Salesforce (Apex, LWC, Flows), Digital Experience, REST APIs"
                        modalData={{
                            title: "Salesforce Public Sector Registration Platform",
                            diagram: "/diagrams/salesforce-platform.png",
                            context:
                                "The Attorney General’s Office required a scalable, compliant platform to digitize charity registration, annual filings, and payment processing.",
                            decisions: [
                                "Salesforce chosen as the system of record",
                                "Digital Experience Sites for public-facing access",
                                "Custom Apex and Flows for complex approval workflows",
                                "External payment integration via secure web services",
                            ],
                            tradeoffs: [
                                "Salesforce customization complexity",
                                "Governance overhead for public-sector compliance",
                            ],
                        }}
                    />

                    {/* 3️⃣ Education Data & Analytics Platform */}
                    <ArchitectureCard
                        title="Education Data & Analytics Platform"
                        domain="Education / Analytics"
                        description="Automated data extraction and analytics platform integrating PowerSchool with real-time dashboards for academic stakeholders."
                        highlights={[
                            "Automated daily ETL pipelines from PowerSchool",
                            "Real-time dashboards using Qlik Sense",
                            "Improved data accuracy and freshness",
                            "Reduced manual reporting effort by ~70%",
                        ]}
                        stack="React, REST APIs, PowerSchool, Qlik Sense"
                        modalData={{
                            title: "Education Data & Analytics Platform",
                            diagram: "/diagrams/education-analytics.png",
                            context:
                                "Education stakeholders needed timely, accurate access to student and school data without manual extraction and reporting.",
                            decisions: [
                                "Automated scheduled data extraction via REST APIs",
                                "Normalized data models for analytics consumption",
                                "Qlik Sense chosen for real-time visualization",
                            ],
                            tradeoffs: [
                                "Initial ETL setup complexity",
                                "Dependency on third-party SIS API stability",
                            ],
                        }}
                    />

                </div>
            </div>
        </section>
    );
}
