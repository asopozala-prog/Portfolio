// International Business Project section with embedded YouTube documentary.

export default function BusinessProject() {
  return (
    <section className="business-project" id="previous-work">
      <div className="page-shell">
        <div className="business-project__card">
          <div className="business-project__main">
            <div className="business-project__content">
              <header className="business-project__header">
                <div className="business-project__globe" aria-hidden="true">
                  <span />
                </div>

                <h2 className="business-project__title">
                  International Business Project
                  <br />
                  Europe · 2017
                </h2>
              </header>

              <div className="business-project__copy">
                <p>
                  A 2017 international business project involving approximately
                  200 Chinese business owners and senior managers visiting
                  Europe, particularly Germany.
                </p>

                <p>
                  Coordinated the broader project while also organizing the
                  documentary production and travelling with the group.
                </p>
              </div>

              <span className="business-project__divider" />

              <div className="business-project__themes">
                <div className="business-theme">
                  <span className="business-theme__icon" aria-hidden="true">♧</span>
                  <p>
                    International business
                    <br />
                    project management
                  </p>
                </div>

                <div className="business-theme">
                  <span className="business-theme__icon" aria-hidden="true">♙</span>
                  <p>
                    Delegation
                    <br />
                    coordination
                  </p>
                </div>

                <div className="business-theme">
                  <span className="business-theme__icon" aria-hidden="true">◇</span>
                  <p>
                    Client
                    <br />
                    relationships
                  </p>
                </div>

                <div className="business-theme">
                  <span className="business-theme__icon" aria-hidden="true">☵</span>
                  <p>
                    Multilingual
                    <br />
                    communication
                  </p>
                </div>

                <div className="business-theme">
                  <span className="business-theme__icon" aria-hidden="true">▣</span>
                  <p>
                    Film
                    <br />
                    production
                  </p>
                </div>

                <div className="business-theme">
                  <span className="business-theme__icon" aria-hidden="true">▢</span>
                  <p>
                    Logistics &amp;
                    <br />
                    stakeholder management
                  </p>
                </div>
              </div>

              <div className="business-project__note">
                <span className="business-project__note-icon" aria-hidden="true">○</span>
                <p>
                  Many participants were also consulting clients
                  of the company.
                </p>
              </div>
            </div>

            <div className="business-project__media">
              <div className="business-project__video">
                <iframe
                  src="https://www.youtube.com/embed/mt6Rqu5nnk8"
                  title="International Business Project Europe 2017"
                  loading="lazy"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                />
              </div>

              <div className="business-project__caption">
                <span className="business-project__caption-icon" aria-hidden="true">▦</span>
                <p>
                  Documentary impressions from the project.
                  <br />
                  Business leaders. Exchange. Perspectives.
                </p>
              </div>
            </div>
          </div>

          <div className="business-project__facts">
            <div className="business-fact">
              <span className="business-fact__icon" aria-hidden="true">♧</span>
              <div>
                <strong>~200</strong>
                <span>Participants</span>
              </div>
            </div>

            <div className="business-fact">
              <span className="business-fact__icon" aria-hidden="true">⌖</span>
              <div>
                <strong>Europe</strong>
                <span>Focus on Germany</span>
              </div>
            </div>

            <div className="business-fact">
              <span className="business-fact__icon" aria-hidden="true">▦</span>
              <div>
                <strong>2017</strong>
                <span>Project Year</span>
              </div>
            </div>

            <div className="business-fact">
              <span className="business-fact__icon" aria-hidden="true">▥</span>
              <div>
                <strong>Business Owners</strong>
                <span>&amp; Senior Managers</span>
              </div>
            </div>

            <div className="business-fact">
              <span className="business-fact__icon" aria-hidden="true">◎</span>
              <div>
                <strong>International</strong>
                <span>Network &amp; Exchange</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
