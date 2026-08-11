// Contact call-to-action section for the Mushroom House AI Studio portfolio.

export default function ContactCta() {
  return (
    <section className="contact-cta" id="contact">
      <div className="page-shell">
        <div className="contact-cta__inner">
          <div className="contact-cta__content">
            <div className="contact-cta__icon" aria-hidden="true">
              <span className="contact-cta__envelope" />
            </div>

            <div className="contact-cta__text">
              <h2 className="contact-cta__title">
                Interested in collaborating?
              </h2>

              <p className="contact-cta__description">
                I’m open to AI, data, and automation projects that create real impact.
              </p>
            </div>
          </div>

          <a
            className="button button--primary contact-cta__button"
            href="mailto:asopo.zala@gmail.com"
          >
            Let&apos;s Connect
            <span aria-hidden="true">→</span>
          </a>
        </div>
      </div>
    </section>
  );
}
