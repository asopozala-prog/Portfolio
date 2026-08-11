// Previous business and creative work for the Mushroom House AI Studio portfolio.

const previousWork = [
  {
    image: "/images/previous-work/previous-concept-store.jpg",
    alt: "Boutique concept store interior",
    title: "Founder – Concept Store",
    description:
      "Built and ran a boutique lifestyle store from the ground up: sourcing, branding, operations, and customer experience.",
    linkText: "View Instagram",
  },
  {
    image: "/images/previous-work/previous-brand-product.jpg",
    alt: "Product and brand development materials",
    title: "Brand & Product Development",
    description:
      "Developed product lines, branding, and content strategies across physical and digital channels.",
    linkText: "View Selected Work",
  },
  {
    image: "/images/previous-work/previous-creative-visual.jpg",
    alt: "Hands working on hand-drawn visual concepts",
    title: "Creative & Visual Projects",
    description:
      "Illustration, hand-drawn storytelling, and visual concepts exploring nature, people, and places.",
    linkText: "View Gallery",
  },
];

export default function PreviousWork() {
  return (
    <section className="previous-work" id="experience">
      <div className="page-shell">
        <div className="previous-work__header">
          <h2 className="previous-work__title">
            Previous Business &amp; Creative Work
          </h2>

          <p className="previous-work__intro">
            Entrepreneurial and creative experience that shaped my systems mindset.
          </p>
        </div>

        <div className="previous-work__grid">
          {previousWork.map((item) => (
            <article className="previous-card" key={item.title}>
              <div className="previous-card__image">
                <img src={item.image} alt={item.alt} />
              </div>

              <div className="previous-card__body">
                <h3 className="previous-card__title">{item.title}</h3>

                <p className="previous-card__description">
                  {item.description}
                </p>

                <a className="text-link previous-card__link" href="#">
                  {item.linkText} <span aria-hidden="true">→</span>
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
