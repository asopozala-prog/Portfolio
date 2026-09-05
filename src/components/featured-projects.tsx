"use client";

// Featured project carousel for the Mushroom House AI Studio portfolio.

import { useState } from "react";
import { portfolioCopy } from "@/components/portfolio-copy";
import { usePortfolioLanguage } from "@/components/portfolio-language-context";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

const projectMeta = [
  {
    image: `${basePath}/images/projects/concept-motion-library.gif`,
    alt: "Preview of the Concept Motion Library",
    labelClass: "",
    href: "https://asopozala-prog.github.io/concept-motion-library/",
  },
  {
    image: `${basePath}/images/projects/User Behaviour.png`,
    alt: "Data and machine learning for market intelligence preview",
    labelClass: "",
    href: `${basePath}/projects/data-machine-learning-market-intelligence/`,
  },
  {
    image: `${basePath}/images/projects/kironapp.png`,
    alt: "End-to-end AI automation workflow preview",
    labelClass: "",
    href: "https://cv-job-matcher-gwls.vercel.app/",
  },
  {
    image: `${basePath}/images/Prompt_bank.png`,
    alt: "Organizational Prompt Bank preview",
    labelClass: " project-card__label--purple",
    href: `${basePath}/projects/organizational-prompt-bank/`,
  },
  {
    image: `${basePath}/images/projects/AI_File_steward.png`,
    alt: "Local intelligence systems preview",
    labelClass: "",
    href: "https://kiron-coding-assistant-x3d9klzag52v4rc92zress.streamlit.app/?page=about",
  },
  {
    image: `${basePath}/images/projects/knowledge_package.png`,
    alt: "Synthetic data and business simulation preview",
    labelClass: " project-card__label--blue",
    href: `${basePath}/projects/synthetic-data-business-simulation/`,
  },
];

export default function FeaturedProjects() {
  const { language } = usePortfolioLanguage();
  const copy = portfolioCopy[language].featured;
  const [startIndex, setStartIndex] = useState(0);

  const projectCount = copy.projects.length;
  const visibleCount = 4;
  const maxStart = Math.max(0, projectCount - visibleCount);

  const moveLeft = () => {
    setStartIndex((current) => (current === 0 ? maxStart : current - 1));
  };

  const moveRight = () => {
    setStartIndex((current) => (current >= maxStart ? 0 : current + 1));
  };

  return (
    <section className="featured-projects" id="projects">
      <div className="page-shell">
        <div className="featured-projects__header">
          <div>
            <p className="eyebrow">{copy.eyebrow}</p>
            <h2 className="section-title">{copy.title}</h2>
          </div>

          <div className="featured-projects__controls" aria-label="Project carousel controls">
            <button type="button" className="featured-projects__control" onClick={moveLeft} aria-label="Show previous projects">←</button>
            <button type="button" className="featured-projects__control" onClick={moveRight} aria-label="Show next projects">→</button>
          </div>
        </div>

        <div className="featured-projects__viewport">
          <div
            className="featured-projects__track"
            style={{
              transform: `translateX(calc(-${startIndex} * ((100% - 72px) / 4 + 24px)))`,
            }}
          >
            {copy.projects.map((project, index) => {
              const meta = projectMeta[index];

              return (
                <article className="project-card" key={project.title}>
                  <div className="project-card__image">
                    <img src={meta.image} alt={meta.alt} />
                    <span className={`project-card__label${meta.labelClass}`}>
                      {project.label}
                    </span>
                  </div>

                  <div className="project-card__body">
                    <h3 className="project-card__title">{project.title}</h3>
                    <p className="project-card__description">{project.description}</p>

                    <ul className="project-card__tags">
                      {project.tags.map((tag) => <li key={tag}>{tag}</li>)}
                    </ul>

                    <a
                      className="text-link project-card__link"
                      href={meta.href}
                      target={meta.href.startsWith("http") ? "_blank" : undefined}
                      rel={meta.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    >
                      {project.linkText} <span aria-hidden="true">→</span>
                    </a>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
