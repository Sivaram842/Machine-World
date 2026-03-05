import React, { useMemo, useState } from "react";

export default function HelpCenterPage() {
    const [q, setQ] = useState("");

    const sections = useMemo(() => ([
        {
            title: "Get started with Varjo headsets",
            links: [
                "System requirements for XR-4 Series",
                "Setting up XR-4 Series (2026)",
                "Positional tracking technologies",
                "Setting up a Varjo Account",
                "Varjo Base Pro license for XR-4 Series",
            ],
        },
        {
            title: "Get to know your headset",
            links: [
                "Compatible accessories",
                "Using Varjo Controllers",
                "Fitting the headset – XR-4 Series",
                "Adjusting the headset lenses",
                "What is in the box - XR-4 Series (2026)",
            ],
        },
        {
            title: "Get to know Varjo software",
            links: [
                "Overview of Varjo Base",
                "Using Virtual desktop",
                "Chroma key",
                "Using hand tracking",
                "Using Applications panel",
            ],
        },
        {
            title: "Ordering and deliveries",
            links: [
                "How can I place an order with Varjo?",
                "Shipping and deliveries",
                "Where can I find Varjo’s Terms and Conditions of Sale?",
            ],
        },
        {
            title: "Headsets FAQ and troubleshooting",
            links: [
                "Can I use adapters for connecting Varjo headset to my computer?",
                "Can I use my Varjo headset without an internet connection?",
                "My headset does not work with SteamVR, OpenVR, or OpenXR applications",
                "Can I use multiple monitors with my headset?",
            ],
        },
        {
            title: "Security FAQ",
            links: [
                "What makes Varjo headsets secure?",
                "What is different in the XR-4 Secure Edition?",
                "What makes Varjo's software (Varjo Base) secure?",
                "Does Varjo Base require network connectivity?",
            ],
        },
        {
            title: "Developer FAQ",
            links: [
                "How to recenter or reset camera position and rotation in Unity?",
                "Where can I find Unity examples?",
                "How to see Unix Time of an eye tracking recording in Varjo Analytics Window?",
            ],
        },
        {
            title: "Downloads",
            links: [
                "PDF User guides – XR-4 Series",
                "XR-4 calibration sheet",
                "Download Varjo Base",
                "Developer assets",
                "Declaration of Conformity",
            ],
        },
        {
            title: "Release notes",
            links: [
                "Release notes – Varjo Base 4.14",
                "Release notes – Varjo Base 4.13.1",
                "Release notes – Varjo Base 4.13",
                "Release notes – Varjo Base 4.12",
            ],
        },
    ]), []);

    const filtered = useMemo(() => {
        const query = q.trim().toLowerCase();
        if (!query) return sections;

        return sections
            .map((s) => {
                const titleHit = s.title.toLowerCase().includes(query);
                const links = s.links.filter((t) => t.toLowerCase().includes(query));
                return titleHit ? s : { ...s, links };
            })
            .filter((s) => s.title.toLowerCase().includes(query) || s.links.length > 0);
    }, [q, sections]);

    return (
        <div className="vhc">
            <section className="vhc-hero">
                <div className="vhc-container vhc-heroInner">
                    <div className="vhc-heroCard">
                        <h1 className="vhc-heroTitle">HELP CENTER</h1>
                        <form className="vhc-searchRow" onSubmit={(e) => e.preventDefault()}>
                            <input
                                className="vhc-searchInput"
                                value={q}
                                onChange={(e) => setQ(e.target.value)}
                                placeholder="Search for answers"
                            />
                            <button className="vhc-searchBtn" type="submit" aria-label="Search">
                                🔍
                            </button>
                        </form>
                    </div>
                </div>
            </section>

            <main className="vhc-container vhc-content">
                <div className="vhc-grid">
                    {filtered.map((sec) => (
                        <section className="vhc-section" key={sec.title}>
                            <h2 className="vhc-h2">{sec.title}</h2>
                            <ul className="vhc-links">
                                {sec.links.map((t) => (
                                    <li key={t}>
                                        <a className="vhc-link" href="#">
                                            {t}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                            <a className="vhc-seeMore" href="#">
                                See more <span className="vhc-arrow">→</span>
                            </a>
                        </section>
                    ))}
                </div>
            </main>
        </div>
    );
}