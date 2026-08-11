// Project codebase list for the Mushroom House AI Studio portfolio.

const projects = [
  {
    icon: <span className="icon-database" />,
    title: "Kiron — Local AI Workspace Prototype",
    description:
      "Experimental architecture for customizable local AI workspaces, combining deterministic Python, semantic retrieval, local LLM inference, tool use, structured memory, and layered testing. The project explores how different models and software components can be assigned to the roles they perform best for privacy, reliability, and cost efficiency.",
    href: "https://github.com/asopozala-prog/Kiron-coding-assistant/tree/main",
  },
  {
    icon: <span className="icon-trend" />,
    title: "BBC News — ML-Assisted Label Discovery",
    description:
      "An exploratory machine-learning workflow for turning large unlabeled text collections into usable structure and candidate labels when manual labeling would be expensive. It combines topic modeling, feature engineering, relational analysis and lightweight classifiers to discover meaningful patterns, test their stability and convert them into interpretable labels for downstream analysis.",
    href: "https://github.com/asopozala-prog/bbc-news-topic-modeling",
  },
  {
    icon: <span className="icon-document" />,
    title: "Orsi — AI File Steward",
    description:
      "A document-intelligence platform for professionals and organizations that need to turn large, messy PDF archives into structured, searchable knowledge without giving up control or reliability. Orsi combines deterministic processing, OCR and constrained AI to reduce manual document work while keeping every important step inspectable and recoverable.",
    href: "https://github.com/asopozala-prog/orsi",
  },
  {
    icon: <span className="icon-network"><i /><i /><i /></span>,
    title: "Kiron CV — End-to-End AI Application Automation",
    description:
      "A production-oriented AI application that turns job offers and career material into targeted CVs and honest match assessments through one automated workflow. Its practical value is reducing the manual effort of application preparation by combining hiring-criteria analysis, structured generation, document rendering, delivery, and cleanup across independently deployed services.",
    href: "https://github.com/asopozala-prog/CV-Job-Matcher",
  },
  {
    icon: <span className="icon-chart" />,
    title: "E-Commerce ML Experiments — Predictability Before Modeling",
    description:
      "A practical BigQuery ML project exploring which business questions are genuinely predictable from available e-commerce data — and which are not. It combines classification, retention analysis and demand forecasting to support better decisions about where machine learning can create value and where additional data or features are needed.",
    href: "https://github.com/asopozala-prog/ecommerce-ml-experiments-bqml",
  },
  {
    icon: <span className="icon-image" />,
    title: "Image Exploration — PCA / NMF Visual Structure",
    description:
      "A visual machine-learning exploration using image data to study how dimensionality reduction and matrix factorization reveal underlying structure in complex pixel spaces. The project focuses on understanding what information PCA and NMF preserve, separate, or reconstruct — useful groundwork for feature extraction and visual pattern analysis.",
    href: "https://github.com/asopozala-prog/kaggle-image-explorations",
  },
];

export default function MoreProjects() {
  return (
    <section className="more-projects" id="current-projects">
      <div className="page-shell">
        <div className="more-projects__header">
          <h2 className="more-projects__title">Project Codebases</h2>
        </div>

        <div className="more-projects__grid">
          {projects.map((project) => (
            <article className="mini-project" key={project.title}>
              <div className="mini-project__icon" aria-hidden="true">
                {project.icon}
              </div>

              <div className="mini-project__content">
                <h3 className="mini-project__title">{project.title}</h3>
                <p className="mini-project__description">{project.description}</p>
              </div>

              <a
                className="text-link mini-project__link"
                href={project.href}
                target="_blank"
                rel="noopener noreferrer"
              >
                View GitHub <span aria-hidden="true">→</span>
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
