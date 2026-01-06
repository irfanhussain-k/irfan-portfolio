import ExperienceItem from "../components/ExperienceItem";

export default function Experience() {
    return (
        <section
            id="experience"
            className="py-24 border-t border-slate-800"
        >
            <div className="max-w-6xl mx-auto px-6">
                <h2 className="text-4xl font-bold mb-6">
                    Professional Experience
                </h2>

                <p className="text-slate-400 max-w-3xl mb-16">
                    A progression from hands-on engineering to solution design and
                    end-to-end technical architecture across enterprise, public-sector,
                    and SaaS platforms.
                </p>

                <div className="space-y-12">
                    <ExperienceItem
                        period="2025 – Present"
                        title="Senior Technical Architect / Solution Designer"
                        company="Assure eServices Pvt. Ltd."
                        summary="Leading the architecture and delivery of AI-driven, cloud-native platforms with LLM integration, multi-cloud deployments, and enterprise CRM exports."
                        highlights={[
                            "Architected AI document intelligence platform using React, FastAPI, AWS, and Azure",
                            "Owned system design across ingestion, AI orchestration, analytics, and integrations",
                            "Defined architectural standards, scalability, and security controls",
                        ]}
                    />

                    <ExperienceItem
                        period="2022 – 2024"
                        title="Senior Full Stack Engineer & Salesforce Consultant"
                        company="Law Firm (Remote)"
                        summary="Designed and delivered secure client-facing platforms automating regulatory filings and document workflows."
                        highlights={[
                            "Led architecture of client portal for charitable registration and Form-990 filings",
                            "Implemented secure authentication and role-based access control",
                            "Reduced operational effort by approximately 40%",
                        ]}
                    />

                    <ExperienceItem
                        period="2020 – 2022"
                        title="Senior Application Consultant (Salesforce Architecture Role)"
                        company="Assure eServices Pvt. Ltd."
                        summary="Architected and delivered a large-scale Salesforce public-sector platform for charity registration and annual filings."
                        highlights={[
                            "Salesforce platform supporting 23,000+ nonprofit organizations",
                            "Designed Digital Experience Sites, workflows, and payment integrations",
                            "Ensured high availability, compliance, and data integrity",
                        ]}
                    />

                    <ExperienceItem
                        period="2015 – 2019"
                        title="Frontend Engineer / Data Visualization Specialist"
                        company="District 360"
                        summary="Built data extraction and analytics platforms for education stakeholders."
                        highlights={[
                            "Designed React-based data extraction platform",
                            "Integrated PowerSchool data with Qlik Sense dashboards",
                            "Reduced manual reporting by ~70%",
                        ]}
                    />
                </div>
            </div>
        </section>
    );
}
