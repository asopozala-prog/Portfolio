"use client";

// International Business Projects — interactive portfolio demonstration.

import { useMemo, useState } from "react";
import OtaBridge from "@/components/ota-bridge";
import FashionEcosystem from "@/components/fashion-ecosystem";

type HannoverStage = {
  id: string;
  eyebrow: string;
  title: string;
  detail: string;
};

const hannoverStages: HannoverStage[] = [
  {
    id: "leaders",
    eyebrow: "01",
    title: "~200 Manufacturing Leaders",
    detail:
      "Chinese manufacturing owners and senior executives entered the program with different transformation priorities, operational realities, and technology questions.",
  },
  {
    id: "needs",
    eyebrow: "02",
    title: "Transformation Needs",
    detail:
      "The program translated company-specific priorities into practical themes: automation, digitalization, advanced manufacturing, and concrete industrial applications.",
  },
  {
    id: "scouting",
    eyebrow: "03",
    title: "Technology Scouting",
    detail:
      "Relevant technologies, companies, industrial visits, and dialogue opportunities were identified and matched against the participants’ real business contexts.",
  },
  {
    id: "ecosystem",
    eyebrow: "04",
    title: "German Industrial Ecosystem",
    detail:
      "Hannover Messe, German industrial companies, institutions, experts, and manufacturing applications became one coordinated learning environment.",
  },
  {
    id: "knowledge",
    eyebrow: "05",
    title: "Knowledge & Documentary",
    detail:
      "The resulting perspectives were synthesized into structured knowledge and a 40-minute German-subtitled documentary that preserved the program’s learning.",
  },
];

function HannoverNetwork() {
  const [step, setStep] = useState(0);
  const [selectedId, setSelectedId] = useState(hannoverStages[0].id);

  const selected =
    hannoverStages.find((stage) => stage.id === selectedId) ?? hannoverStages[0];

  const activeIds = useMemo(
    () => hannoverStages.slice(0, step + 1).map((stage) => stage.id),
    [step],
  );

  const advance = () => {
    setStep((current) => {
      const next = current >= hannoverStages.length - 1 ? 0 : current + 1;
      setSelectedId(hannoverStages[next].id);
      return next;
    });
  };

  return (
    <section className="ibp-section ibp-section--hannover" id="hannover-messe">
      <div className="page-shell">
        <div className="ibp-section__card">
          <div className="ibp-section__number" aria-hidden="true">
            01
          </div>

          <div className="ibp-section__content">
            <header className="ibp-section__header">
              <p className="ibp-section__eyebrow">
                Industrial Transformation &amp; Technology Exchange
              </p>

              <h2>
                Hannover Messe — Industrial Transformation &amp; Technology Exchange
              </h2>

              <p>
                An international technology and business exchange program for
                approximately 200 Chinese manufacturing owners and senior executives
                exploring Hannover Messe and Germany&apos;s industrial ecosystem. The
                project focused on interpreting automation, digitalization and advanced
                manufacturing technologies in relation to real transformation needs and
                manufacturing applications.
              </p>
            </header>

            <div className="hannover-network">
              <div className="hannover-network__topline">
                <p className="hannover-network__hint">
                  <span aria-hidden="true">↗</span>
                  Click a stage to inspect it, or run the network to reveal the complete
                  flow.
                </p>

                <button
                  type="button"
                  className="hannover-network__run"
                  onClick={advance}
                >
                  {step >= hannoverStages.length - 1
                    ? "Restart network"
                    : "Run next connection"}
                  <span aria-hidden="true">→</span>
                </button>
              </div>

              <div
                className="hannover-network__diagram"
                aria-label="Hannover Messe project knowledge flow"
              >
                <svg
                  className="hannover-network__connections"
                  viewBox="0 0 1000 260"
                  role="img"
                  aria-label="Progressive connections between five project stages"
                >
                  <path
                    className={`hannover-network__path ${
                      step >= 1 ? "hannover-network__path--active" : ""
                    }`}
                    d="M150 130 C240 130, 260 130, 350 130"
                  />
                  <path
                    className={`hannover-network__path ${
                      step >= 2 ? "hannover-network__path--active" : ""
                    }`}
                    d="M350 130 C440 130, 460 130, 550 130"
                  />
                  <path
                    className={`hannover-network__path ${
                      step >= 3 ? "hannover-network__path--active" : ""
                    }`}
                    d="M550 130 C640 130, 660 130, 750 130"
                  />
                  <path
                    className={`hannover-network__path ${
                      step >= 4 ? "hannover-network__path--active" : ""
                    }`}
                    d="M750 130 C825 130, 850 130, 925 130"
                  />
                </svg>

                <div className="hannover-network__nodes">
                  {hannoverStages.map((stage, index) => {
                    const isActive = activeIds.includes(stage.id);
                    const isSelected = selectedId === stage.id;

                    return (
                      <button
                        key={stage.id}
                        type="button"
                        className={[
                          "hannover-node",
                          `hannover-node--${stage.id}`,
                          isActive ? "hannover-node--active" : "",
                          isSelected ? "hannover-node--selected" : "",
                        ]
                          .filter(Boolean)
                          .join(" ")}
                        onClick={() => {
                          setSelectedId(stage.id);
                          setStep((current) => Math.max(current, index));
                        }}
                        aria-pressed={isSelected}
                      >
                        <span className="hannover-node__index">{stage.eyebrow}</span>
                        <span className="hannover-node__icon" aria-hidden="true">
                          {index === 0 && "♙"}
                          {index === 1 && "◇"}
                          {index === 2 && "⌕"}
                          {index === 3 && "◎"}
                          {index === 4 && "▣"}
                        </span>
                        <strong>{stage.title}</strong>
                      </button>
                    );
                  })}
                </div>

                <div className="hannover-network__signals" aria-hidden="true">
                  <span
                    className={`signal signal--one ${
                      step >= 1 ? "signal--active" : ""
                    }`}
                  />
                  <span
                    className={`signal signal--two ${
                      step >= 2 ? "signal--active" : ""
                    }`}
                  />
                  <span
                    className={`signal signal--three ${
                      step >= 3 ? "signal--active" : ""
                    }`}
                  />
                  <span
                    className={`signal signal--four ${
                      step >= 4 ? "signal--active" : ""
                    }`}
                  />
                </div>
              </div>

              <div className="hannover-network__detail" aria-live="polite">
                <span className="hannover-network__detail-number">
                  {selected.eyebrow}
                </span>
                <div>
                  <h3>{selected.title}</h3>
                  <p>{selected.detail}</p>
                </div>
              </div>
            </div>

            <section className="hannover-archive" aria-labelledby="hannover-archive-title">
              <header className="hannover-archive__header">
                <p className="hannover-archive__eyebrow">Project Documentation</p>
                <h3 id="hannover-archive-title">
                  Project Documentary
                </h3>
                <p>
                  Selected documentary material preserving perspectives and knowledge from the project.
                </p>
              </header>

              <div className="hannover-archive__video">
                <iframe
                  src="https://www.youtube.com/embed/mt6Rqu5nnk8"
                  title="Zukunft der Menschen"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                />
              </div>

            </section>

            <div className="ibp-project-details">
              <article>
                <p className="ibp-project-details__label">My Role</p>
                <h3>
                  Program Director · Industrial Transformation &amp; Technology Exchange
                </h3>
                <p>
                  Overall project lead from concept and research through stakeholder
                  coordination, multidisciplinary delivery and final knowledge
                  documentation.
                </p>
              </article>

              <article>
                <p className="ibp-project-details__label">My Responsibility</p>
                <ul>
                  <li>
                    Defined the program strategy based on participating manufacturers&apos;
                    business contexts, transformation interests and technology priorities.
                  </li>
                  <li>
                    Directed technology scouting and matching across Hannover Messe,
                    German industrial companies and manufacturing applications.
                  </li>
                  <li>
                    Managed executive stakeholders, institutional and industry partners,
                    and China–Germany communication.
                  </li>
                  <li>
                    Directed an extended multidisciplinary organization of more than 50
                    contributors at peak delivery.
                  </li>
                  <li>
                    Oversaw the complete program architecture, industrial visits,
                    interviews, communication and documentary production.
                  </li>
                </ul>
              </article>

              <article>
                <p className="ibp-project-details__label">
                  What the Project Established / Achieved
                </p>
                <ul>
                  <li>
                    Created a structured technology-exchange bridge for approximately 200
                    Chinese manufacturing decision-makers.
                  </li>
                  <li>
                    Connected German industrial innovation with concrete Chinese
                    manufacturing and transformation contexts.
                  </li>
                  <li>
                    Integrated exhibition research, industrial visits, business exchange
                    and executive dialogue into one learning program.
                  </li>
                  <li>
                    Produced a 40-minute German-subtitled documentary preserving the
                    resulting perspectives and knowledge.
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

export default function InternationalBusinessProjectsPage() {
  return (
    <main className="international-business-projects">
      <div className="page-shell">
        <header className="ibp-page-header">
          <p className="ibp-page-header__breadcrumb">
            Projects <span>/</span> International Business Projects
          </p>

          <h1>International Business Projects</h1>

          <p className="ibp-page-header__intro">
            Three international business structures showing how complex environments
            can be translated into knowledge systems, operating models, and long-term
            ecosystems.
          </p>

          <ul className="ibp-page-header__tags" aria-label="Project themes">
            <li>International Business</li>
            <li>Program Direction</li>
            <li>Cross-Cultural Operations</li>
            <li>Stakeholder Systems</li>
            <li>Knowledge Transfer</li>
          </ul>
        </header>
      </div>

      <HannoverNetwork />

      <OtaBridge />

      <FashionEcosystem />

      <footer className="ibp-footer">
        <div className="page-shell">
          <a href={`${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}/`}>
            ← Back to Portfolio
          </a>
        </div>
      </footer>
    </main>
  );
}
