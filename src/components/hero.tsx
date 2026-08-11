// Hero section for the Mushroom House AI Studio portfolio.

const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export default function Hero() {
  return (
    <section className="path-section" id="top">
      <div className="page-shell path-section__grid">
        <div className="path-section__content">
          <div className="path-section__intro">
            <p className="path-section__eyebrow">— My Path</p>

            <h1 className="path-section__headline">
              A journey from <em>real-world experience</em>
              <br />
              to <em>practical intelligence</em>.
            </h1>

            <p className="path-section__lead">
              Two decades of navigating complexity in business and leadership.
              <br />
              Now transforming that experience into AI systems that create real value.
            </p>
          </div>

          <div className="path-stages">
            <article className="path-stage">
              <div className="path-stage__top">
                <span className="path-stage__number">01</span>
                <span className="path-stage__line" aria-hidden="true" />
              </div>

              <div className="path-stage__visual path-stage__visual--globe" aria-hidden="true">
                <span className="globe-icon" />
              </div>

              <p className="path-stage__label">For almost 20 years</p>

              <h2 className="path-stage__title">
                Intercultural business,
                <br />
                project management &amp;
                <br />
                leadership consulting
              </h2>

              <span className="path-stage__divider" />

              <p className="path-stage__text">
                Working across cultures and industries, bridging strategy and execution,
                people and systems.
              </p>
            </article>

            <article className="path-stage">
              <div className="path-stage__top">
                <span className="path-stage__number">02</span>
                <span className="path-stage__line" aria-hidden="true" />
              </div>

              <div className="path-stage__visual path-stage__visual--director" aria-hidden="true">
                ♟
              </div>

              <p className="path-stage__label">As Managing Director</p>

              <h2 className="path-stage__title">
              Navigated board pressure,
              <br />
              operational realities,
              <br />
              and built an AI agent team I came to rely on
            </h2>

              <span className="path-stage__divider" />

              <p className="path-stage__text">
                Navigating between board pressure and operational reality, I built an AI
                agent team I came to rely on.
              </p>
            </article>

            <article className="path-stage">
              <div className="path-stage__top">
                <span className="path-stage__number">03</span>
              </div>

              <div className="path-stage__visual path-stage__visual--ai" aria-hidden="true">
                <span className="ai-node ai-node--top-left" />
                <span className="ai-node ai-node--top-right" />
                <span className="ai-node ai-node--bottom-left" />
                <span className="ai-node ai-node--bottom-right" />
                <span className="ai-node ai-node--center">✦</span>
              </div>

              <p className="path-stage__label">In 2026</p>

              <h2 className="path-stage__title">
                Transforming that team
                <br />
                into reusable intelligence
                <br />
                workflows for businesses
                <br />
                &amp; professionals
              </h2>

              <span className="path-stage__divider" />

              <p className="path-stage__text">
                Turning operational experience and AI into practical systems that create
                measurable value.
              </p>
            </article>
          </div>

          <div className="path-values">
            <div className="path-value">
              <div className="path-value__icon" aria-hidden="true">◎</div>
              <div>
                <h2 className="path-value__title">Global Perspective</h2>
                <p className="path-value__text">
                  Working across cultures
                  <br />
                  and markets
                </p>
              </div>
            </div>

            <div className="path-value">
              <div className="path-value__icon" aria-hidden="true">◒</div>
              <div>
                <h2 className="path-value__title">Operational Reality</h2>
                <p className="path-value__text">
                  Hands-on experience in
                  <br />
                  complex environments
                </p>
              </div>
            </div>

            <div className="path-value">
              <div className="path-value__icon" aria-hidden="true">✦</div>
              <div>
                <h2 className="path-value__title">AI With Purpose</h2>
                <p className="path-value__text">
                  Technology that supports
                  <br />
                  people and decisions
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="path-section__portrait">
          <img
            src={`${basePath}/images/hero/DG_office.png`}
            alt="Portrait working at a desk"
          />
        </div>
      </div>
    </section>
  );
}
