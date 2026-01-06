import ProjectCard from "../components/ProjectCard";

export default function Projects() {
    return (
        <section id="projects" className="py-28 border-t border-slate-800">
            <div className="max-w-6xl mx-auto px-6">
                <div className="mb-12">
                    <h2 className="text-4xl font-bold mb-4">Projects & Innovation</h2>
                    <p className="text-slate-400 max-w-3xl">
                        Innovation-led projects demonstrating analytics, AI, sustainability,
                        and real-world impact beyond core enterprise platforms.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-10">
                    <ProjectCard
                        title="No Planet B"
                        subtitle="Qlik Hackathon · Sustainability Analytics"
                        badge="2nd Place Winner"
                        description="Decision-support platform helping organizations choose greener air-travel options using real data."
                        highlights={[
                            "UN air travel data analysis",
                            "CO₂ contributor ranking",
                            "Cost vs sustainability trade-offs",
                        ]}
                        tech="Qlik Sense, Qlik Core, Mapbox, JavaScript"
                    />

                    <ProjectCard
                        title="Guard Resource Optimization"
                        subtitle="Cost Optimization & BI Integration"
                        description="Platform comparing scanner devices vs metal detectors to estimate staffing and cost savings."
                        highlights={[
                            "Custom savings calculator",
                            "Secure Tableau dashboard access",
                            "Actionable executive insights",
                        ]}
                        tech="React, Tableau API, Web Services"
                    />

                    <ProjectCard
                        title="iBot – Intelligent Chatbot"
                        subtitle="Education · Conversational AI"
                        description="Chatbot enabling teachers to query live student data and receive automated reports."
                        highlights={[
                            "Natural language queries",
                            "Automated attendance emails",
                            "Productivity improvements",
                        ]}
                        tech="Node.js, SQL, REST APIs, JWT"
                    />
                </div>
            </div>
        </section>
    );
}
