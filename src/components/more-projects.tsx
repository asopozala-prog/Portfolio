"use client";

import { portfolioCopy } from "@/components/portfolio-copy";
import { usePortfolioLanguage } from "@/components/portfolio-language-context";

const projectMeta = [
  { icon: <span className="icon-database" />, href: "https://github.com/asopozala-prog/Kiron-coding-assistant/tree/main" },
  { icon: <span className="icon-trend" />, href: "https://github.com/asopozala-prog/bbc-news-topic-modeling" },
  { icon: <span className="icon-document" />, href: "https://github.com/asopozala-prog/orsi" },
  { icon: <span className="icon-network"><i /><i /><i /></span>, href: "https://github.com/asopozala-prog/CV-Job-Matcher" },
  { icon: <span className="icon-chart" />, href: "https://github.com/asopozala-prog/ecommerce-ml-experiments-bqml" },
  { icon: <span className="icon-image" />, href: "https://github.com/asopozala-prog/kaggle-image-explorations" },
];

export default function MoreProjects() {
  const { language } = usePortfolioLanguage();
  const copy = portfolioCopy[language].moreProjects;

  return (
    <section className="more-projects" id="current-projects">
      <div className="page-shell">
        <div className="more-projects__header">
          <h2 className="more-projects__title">{copy.title}</h2>
        </div>

        <div className="more-projects__grid">
          {copy.projects.map((project, index) => (
            <article className="mini-project" key={project.title}>
              <div className="mini-project__icon" aria-hidden="true">{projectMeta[index].icon}</div>

              <div className="mini-project__content">
                <h3 className="mini-project__title">{project.title}</h3>
                <p className="mini-project__description">{project.description}</p>
              </div>

              <a className="text-link mini-project__link" href={projectMeta[index].href} target="_blank" rel="noopener noreferrer">
                {copy.linkText} <span aria-hidden="true">→</span>
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
