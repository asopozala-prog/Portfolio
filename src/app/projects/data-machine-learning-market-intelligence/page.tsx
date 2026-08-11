// Data & Machine Learning for Market Intelligence project page.

export default function MarketIntelligenceProjectPage() {
  return (
    <main className="ml-project">
      <div className="page-shell">
        <header className="ml-project__header">
          <p className="ml-project__breadcrumb">
            Projects <span>/</span> Data &amp; Machine Learning
          </p>

          <h1 className="ml-project__title">
            Data &amp; Machine Learning
            <br />
            for Market Intelligence
          </h1>

          <p className="ml-project__intro">
            Turning behavioral data into interpretable user portraits,
            <br />
            early-detection models and actionable market intelligence.
          </p>

          <ul className="ml-project__tags" aria-label="Project methods">
            <li>NMF</li>
            <li>KMeans</li>
            <li>User Segmentation</li>
            <li>Logistic Regression</li>
            <li>Market Intelligence</li>
          </ul>
        </header>

        <div className="ml-process__heading">
          <span />
          <h2>From Behaviour to Market Intelligence</h2>
          <span />
        </div>

        <div className="ml-process">
          <article className="ml-step">
            <div className="ml-step__number">01</div>
            <div className="ml-step__icon ml-step__icon--database" aria-hidden="true"><span /></div>
            <p className="ml-step__label">Data</p>
            <h3 className="ml-step__title">10,000 users ×<br />listening behaviour</h3>
            <span className="ml-step__divider" />
            <p className="ml-step__text">Raw activity becomes a measurable taste landscape.</p>
            <span className="ml-step__arrow" aria-hidden="true">→</span>
          </article>

          <article className="ml-step">
            <div className="ml-step__number">02</div>
            <div className="ml-step__icon ml-step__icon--brain" aria-hidden="true"><span>✣</span></div>
            <p className="ml-step__label">Machine Learning</p>
            <h3 className="ml-step__title">NMF → KMeans →<br />Logistic Regression</h3>
            <span className="ml-step__divider" />
            <p className="ml-step__text">Discover hidden taste communities, then detect valuable user portraits from early behaviour.</p>
            <span className="ml-step__arrow" aria-hidden="true">→</span>
          </article>

          <article className="ml-step">
            <div className="ml-step__number">03</div>
            <div className="ml-step__icon ml-step__icon--person" aria-hidden="true"><span className="person-icon" /></div>
            <p className="ml-step__label">Business Sensitivity</p>
            <h3 className="ml-step__title">Who are these people —<br />and why do they matter?</h3>
            <span className="ml-step__divider" />
            <p className="ml-step__text">Translate statistical patterns into identity scenes, discovery behaviour and commercial hypotheses.</p>
            <span className="ml-step__arrow" aria-hidden="true">→</span>
          </article>

          <article className="ml-step">
            <div className="ml-step__number">04</div>
            <div className="ml-step__icon ml-step__icon--chart" aria-hidden="true"><span /></div>
            <p className="ml-step__label">Market Intelligence</p>
            <h3 className="ml-step__title">From patterns<br />to decisions</h3>
            <span className="ml-step__divider" />
            <ul className="ml-step__list">
              <li>Audience discovery</li>
              <li>Segment monitoring</li>
              <li>Targeted campaigns</li>
              <li>Product strategy</li>
            </ul>
          </article>
        </div>

        <div className="ml-evidence">
          <div className="ml-evidence__icon" aria-hidden="true">↗</div>
          <p className="ml-evidence__label">Evidence from the project:</p>
          <p className="ml-evidence__metrics">
            <strong>222</strong> identity listeners
            <span>·</span>
            <strong>795</strong> bridge listeners
            <span>·</span>
            <strong>~94–95%</strong> early-detection recall
          </p>
        </div>

        <div className="ml-insights">
          <article className="ml-insight">
            <div className="ml-insight__icon" aria-hidden="true">◎</div>
            <div>
              <h3 className="ml-insight__title">What I Discovered</h3>
              <span className="ml-insight__line" />
              <ul className="ml-insight__list">
                <li>Distinct taste communities</li>
                <li>Early-detection portraits</li>
                <li>Actionable insights</li>
              </ul>
            </div>
          </article>

          <article className="ml-insight">
            <div className="ml-insight__icon" aria-hidden="true">⊙</div>
            <div>
              <h3 className="ml-insight__title">Business Applications</h3>
              <span className="ml-insight__line" />
              <ul className="ml-insight__list">
                <li>Audience discovery</li>
                <li>Segment monitoring</li>
                <li>Targeted campaigns</li>
                <li>Product strategy</li>
              </ul>
            </div>
          </article>

          <article className="ml-insight">
            <div className="ml-insight__icon" aria-hidden="true">♧</div>
            <div>
              <h3 className="ml-insight__title">Impact</h3>
              <span className="ml-insight__line" />
              <p className="ml-insight__text">
                Connecting behavioral data and machine learning with human understanding to create real business value.
              </p>
            </div>
          </article>
        </div>

        <section className="ml-notebook" aria-labelledby="ml-notebook-title">
          <div className="ml-notebook__heading">
            <p className="eyebrow">Project Notebook</p>
            <h2 id="ml-notebook-title">Explore the full Kaggle analysis</h2>
          </div>

          <div className="ml-notebook__frame">
            <iframe
              src="https://www.kaggle.com/embed/asopozala/identity-users-ground-truth-portrait-and-early-de?kernelSessionId=320018573"
              title="Identity Users: Ground-Truth Portrait and Early-De"
              loading="lazy"
              scrolling="auto"
            />
          </div>
        </section>
      </div>
    </main>
  );
}
