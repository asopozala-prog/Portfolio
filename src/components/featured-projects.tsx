// Featured project cards for the Mushroom House AI Studio portfolio.

const projects = [
  {
    image: "/images/projects/kironapp.png",
    alt: "End-to-end AI automation workflow preview",
    label: "AI / Automation",
    labelClass: "",
    title: "End-to-End AI Automation",
    description:
      "Designing complete AI-assisted workflows from raw input and reasoning to validation, execution, recovery and human review.",
    tags: ["Multi-stage LLM Workflows", "FastAPI", "Structured Outputs", "Pydantic", "End-to-End Testing"],
    href: "https://cv-job-matcher-gwls.vercel.app/",
    linkText: "View Live Project",
  },
  {
    image: "/images/projects/knowledge_package.png",
    alt: "Synthetic data and business simulation preview",
    label: "Synthetic Data",
    labelClass: " project-card__label--blue",
    title: "Synthetic Data & Business Simulation",
    description:
      "Designing secure synthetic datasets and realistic business environments for model training, testing, prototyping and product demonstration.",
    tags: ["Synthetic Data", "Business Simulation", "Data Modeling", "AI Evaluation", "Privacy"],
    linkText: "View Project",
    href: "/projects/synthetic-data-business-simulation",
  },
  {
    image: "/images/projects/User Behaviour.png",
    alt: "Data and machine learning for market intelligence preview",
    label: "Data / ML",
    labelClass: "",
    title: "Data & Machine Learning for Market Intelligence",
    description:
      "Turning raw business, market and behavioural data into patterns, segments and interpretable insights for decision-making.",
    tags: ["NLP", "Clustering", "Customer Segmentation", "Feature Discovery", "scikit-learn"],
    linkText: "View Project",
    href: "/projects/data-machine-learning-market-intelligence",
  },
  {
    image: "/images/projects/AI_File_steward.png",
    alt: "Local intelligence systems preview",
    label: "Local AI",
    labelClass: "",
    title: "Local Intelligence Systems",
    description:
      "Building customizable local AI systems for sensitive business and professional environments where data control, privacy and reliability matter.",
    tags: ["Local LLM", "RAG", "Embeddings", "Tool Calling", "Local-First Architecture"],
    href: "https://kiron-coding-assistant-x3d9klzag52v4rc92zress.streamlit.app/?page=about",
    linkText: "View Live Project",
  },
];

export default function FeaturedProjects() {
  return (
    <section className="featured-projects" id="projects">
      <div className="page-shell">
        <div className="featured-projects__header">
          <div>
            <p className="eyebrow">Current Focus</p>
            <h2 className="section-title">Where my work is heading</h2>
          </div>

        </div>

        <div className="featured-projects__grid">
          {projects.map((project) => (
            <article className="project-card" key={project.title}>
              <div className="project-card__image">
                <img src={project.image} alt={project.alt} />
                <span className={`project-card__label${project.labelClass}`}>
                  {project.label}
                </span>
              </div>

              <div className="project-card__body">
                <h3 className="project-card__title">{project.title}</h3>

                <p className="project-card__description">{project.description}</p>

                <ul className="project-card__tags">
                  {project.tags.map((tag) => (
                    <li key={tag}>{tag}</li>
                  ))}
                </ul>

                <a
                  className="text-link project-card__link"
                  href={project.href ?? "#"}
                  target={project.href ? "_blank" : undefined}
                  rel={project.href ? "noopener noreferrer" : undefined}
                >
                  {project.linkText} <span aria-hidden="true">→</span>
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
