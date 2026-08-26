"use client";

// Premium Fashion Brand — interactive multi-year European brand ecosystem.

import { useMemo, useState } from "react";

type BrandNode = {
  id: "publishing" | "exhibition" | "performance" | "collaboration" | "fashion";
  label: string;
  title: string;
  detail: string;
};

const brandNodes: BrandNode[] = [
  {
    id: "publishing",
    label: "Publishing",
    title: "Multilingual Brand Storytelling",
    detail:
      "Publishing projects created a durable narrative layer that translated the brand's identity and cultural positioning for European audiences.",
  },
  {
    id: "exhibition",
    label: "Exhibition",
    title: "Physical Cultural Presence",
    detail:
      "Exhibitions turned brand narratives into physical environments and cultural encounters, extending the relationship beyond conventional marketing.",
  },
  {
    id: "performance",
    label: "Performance",
    title: "Live Experience & Expression",
    detail:
      "Performance projects added movement, emotion, and audience participation, helping the brand operate as an experiential cultural presence.",
  },
  {
    id: "collaboration",
    label: "Collaboration",
    title: "European Creative Partnerships",
    detail:
      "Collaborations with artists, creatives, institutions, and production partners created a long-term relationship network around the brand.",
  },
  {
    id: "fashion",
    label: "Fashion",
    title: "Integrated Brand Production",
    detail:
      "Fashion productions connected the brand's core identity with the narrative, cultural, and experiential layers developed across earlier initiatives.",
  },
];

export default function FashionEcosystem() {
  const [step, setStep] = useState(0);
  const [selectedId, setSelectedId] = useState<BrandNode["id"]>("publishing");

  const selected =
    brandNodes.find((node) => node.id === selectedId) ?? brandNodes[0];

  const activeNodes = useMemo(
    () => brandNodes.slice(0, step + 1).map((node) => node.id),
    [step],
  );

  const advance = () => {
    setStep((current) => {
      const next = current >= brandNodes.length - 1 ? 0 : current + 1;
      setSelectedId(brandNodes[next].id);
      return next;
    });
  };

  const activateNode = (id: BrandNode["id"], index: number) => {
    setSelectedId(id);
    setStep((current) => Math.max(current, index));
  };

  return (
    <section className="ibp-section ibp-section--fashion" id="premium-fashion-brand">
      <div className="page-shell">
        <div className="ibp-section__card ibp-section__card--fashion">
          <div
            className="ibp-section__number ibp-section__number--fashion"
            aria-hidden="true"
          >
            03
          </div>

          <div className="ibp-section__content">
            <header className="ibp-section__header">
              <p className="ibp-section__eyebrow ibp-section__eyebrow--fashion">
                Multi-Year European Brand &amp; Experience Program
              </p>

              <h2>
                Premium Fashion Brand — Multi-Year European Brand &amp; Experience Program
              </h2>

              <p>
                A multi-year European development partnership for a Chinese premium
                fashion brand, comprising more than five interconnected initiatives
                across publishing, exhibitions, performance, fashion and cultural
                collaboration. The program developed the brand&apos;s European presence
                through a continuing narrative rather than isolated marketing campaigns.
              </p>
            </header>

            <div className="fashion-ecosystem">
              <div className="fashion-ecosystem__topline">
                <p className="fashion-ecosystem__hint">
                  <span aria-hidden="true">✦</span>
                  Grow the ecosystem to see how individual initiatives became one coherent
                  European brand presence.
                </p>

                <button
                  type="button"
                  className="fashion-ecosystem__run"
                  onClick={advance}
                >
                  {step >= brandNodes.length - 1
                    ? "Restart ecosystem"
                    : "Add next initiative"}
                  <span aria-hidden="true">→</span>
                </button>
              </div>

              <div
                className="fashion-ecosystem__diagram"
                aria-label="Premium fashion brand multi-year ecosystem"
              >
                <svg
                  className="fashion-ecosystem__connections"
                  viewBox="0 0 1000 520"
                  role="img"
                  aria-label="Connections between the central brand strategy and five European initiatives"
                >
                  <path
                    className={`fashion-ecosystem__path ${
                      step >= 0 ? "fashion-ecosystem__path--active" : ""
                    }`}
                    d="M500 260 C430 210, 350 175, 250 145"
                  />
                  <path
                    className={`fashion-ecosystem__path ${
                      step >= 1 ? "fashion-ecosystem__path--active" : ""
                    }`}
                    d="M500 260 C575 210, 660 175, 755 145"
                  />
                  <path
                    className={`fashion-ecosystem__path ${
                      step >= 2 ? "fashion-ecosystem__path--active" : ""
                    }`}
                    d="M500 260 C420 300, 345 345, 250 390"
                  />
                  <path
                    className={`fashion-ecosystem__path ${
                      step >= 3 ? "fashion-ecosystem__path--active" : ""
                    }`}
                    d="M500 260 C585 300, 670 345, 755 390"
                  />
                  <path
                    className={`fashion-ecosystem__path ${
                      step >= 4 ? "fashion-ecosystem__path--active" : ""
                    }`}
                    d="M500 260 C500 330, 500 390, 500 455"
                  />

                  <path
                    className={`fashion-ecosystem__path fashion-ecosystem__path--secondary ${
                      step >= 2 ? "fashion-ecosystem__path--active" : ""
                    }`}
                    d="M250 145 C210 220, 210 300, 250 390"
                  />
                  <path
                    className={`fashion-ecosystem__path fashion-ecosystem__path--secondary ${
                      step >= 3 ? "fashion-ecosystem__path--active" : ""
                    }`}
                    d="M755 145 C800 220, 800 300, 755 390"
                  />
                  <path
                    className={`fashion-ecosystem__path fashion-ecosystem__path--secondary ${
                      step >= 4 ? "fashion-ecosystem__path--active" : ""
                    }`}
                    d="M250 390 C340 450, 420 470, 500 455"
                  />
                  <path
                    className={`fashion-ecosystem__path fashion-ecosystem__path--secondary ${
                      step >= 4 ? "fashion-ecosystem__path--active" : ""
                    }`}
                    d="M755 390 C665 450, 585 470, 500 455"
                  />
                </svg>

                <div className="fashion-ecosystem__center">
                  <span className="fashion-ecosystem__center-kicker">
                    European Brand Strategy
                  </span>
                  <strong>Long-Term Narrative &amp; Experience Direction</strong>
                  <span className="fashion-ecosystem__center-status">
                    {step >= 4 ? "Connected ecosystem established" : "Ecosystem growing"}
                  </span>
                </div>

                {brandNodes.map((node, index) => {
                  const isActive = activeNodes.includes(node.id);
                  const isSelected = selectedId === node.id;

                  return (
                    <button
                      key={node.id}
                      type="button"
                      className={[
                        "fashion-node",
                        `fashion-node--${node.id}`,
                        isActive ? "fashion-node--active" : "",
                        isSelected ? "fashion-node--selected" : "",
                      ]
                        .filter(Boolean)
                        .join(" ")}
                      onClick={() => activateNode(node.id, index)}
                      aria-pressed={isSelected}
                    >
                      <span className="fashion-node__index">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <span className="fashion-node__icon" aria-hidden="true">
                        {index === 0 && "▤"}
                        {index === 1 && "▱"}
                        {index === 2 && "✦"}
                        {index === 3 && "◎"}
                        {index === 4 && "◇"}
                      </span>
                      <strong>{node.label}</strong>
                    </button>
                  );
                })}
              </div>

              <div className="fashion-ecosystem__detail" aria-live="polite">
                <span className="fashion-ecosystem__detail-label">
                  {selected.label}
                </span>
                <div>
                  <h3>{selected.title}</h3>
                  <p>{selected.detail}</p>
                </div>
              </div>
            </div>

            <section
              className="fashion-publications"
              aria-labelledby="fashion-publications-title"
            >
              <header className="fashion-publications__header">
                <p>Project Archive</p>
                <h3 id="fashion-publications-title">
                  Publications &amp; Documentation
                </h3>
              </header>

              <div className="fashion-publications__grid">
                <a
                  className="fashion-publication"
                  href="https://drive.google.com/file/d/1cXFMXoR4pMfpXKkTHmgW859yuY8w-f7S/view?usp=sharing"
                  target="_blank"
                  rel="noreferrer"
                >
                  <div className="fashion-publication__preview fashion-publication__preview--pdf">
                    <span>PROJECT</span>
                    <strong>PUBLICATION</strong>
                    <small>PDF</small>
                  </div>

                  <div className="fashion-publication__meta">
                    <span>Selected Project Publication</span>
                    <strong>View PDF</strong>
                    <small>One example from a broader body of project publications and documentation · Open ↗</small>
                  </div>
                </a>

                <a
                  className="fashion-publication"
                  href="https://kaiteichert.de/catalogues/taschen#page/n0/mode/2up"
                  target="_blank"
                  rel="noreferrer"
                >
                  <div className="fashion-publication__preview fashion-publication__preview--book">
                    <span>EUROPEAN</span>
                    <strong>ART &amp;<br />FASHION</strong>
                    <small>CATALOGUE</small>
                  </div>

                  <div className="fashion-publication__meta">
                    <span>Artist Documentation</span>
                    <strong>Online Book</strong>
                    <small>Open catalogue ↗</small>
                  </div>
                </a>
              </div>
            </section>

            <div className="ibp-project-details">
              <article>
                <p className="ibp-project-details__label">My Role</p>
                <h3>European Project Director · Brand &amp; Experience Strategy</h3>
                <p>
                  Held overall responsibility for the long-term client relationship,
                  project direction and coordination of multidisciplinary European
                  partners and production teams.
                </p>
              </article>

              <article>
                <p className="ibp-project-details__label">My Responsibility</p>
                <ul>
                  <li>
                    Translated strategic brand objectives into European narratives,
                    experiences and individual project concepts.
                  </li>
                  <li>
                    Designed and directed interconnected projects across different media,
                    audiences and physical environments.
                  </li>
                  <li>
                    Built collaborations with German and Berlin-based artists, creatives,
                    institutions and production partners.
                  </li>
                  <li>
                    Directed multidisciplinary teams while coordinating client leadership
                    and external stakeholders.
                  </li>
                  <li>
                    Maintained strategic and narrative coherence across multiple years and
                    project cycles.
                  </li>
                </ul>
              </article>

              <article>
                <p className="ibp-project-details__label">
                  What the Project Established / Achieved
                </p>
                <ul>
                  <li>
                    Established a sustained European cultural and experiential presence
                    for the brand.
                  </li>
                  <li>
                    Created a coherent ecosystem spanning multilingual publishing,
                    exhibitions, performances, collaborations and fashion productions.
                  </li>
                  <li>
                    Developed continuing relationships between the brand and European
                    creative and cultural partners.
                  </li>
                  <li>
                    Used successive projects to evolve, test and communicate the
                    brand&apos;s European identity.
                  </li>
                </ul>
              </article>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
