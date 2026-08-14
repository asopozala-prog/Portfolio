"use client";

import { portfolioCopy } from "@/components/portfolio-copy";
import { usePortfolioLanguage } from "@/components/portfolio-language-context";

const themeIcons = ["♧", "♙", "◇", "☵", "▣", "▢"];
const factIcons = ["♧", "⌖", "▦", "▥", "◎"];

export default function BusinessProject() {
  const { language } = usePortfolioLanguage();
  const copy = portfolioCopy[language].business;

  return (
    <section className="business-project" id="previous-work">
      <div className="page-shell">
        <div className="business-project__card">
          <div className="business-project__main">
            <div className="business-project__content">
              <header className="business-project__header">
                <div className="business-project__globe" aria-hidden="true"><span /></div>

                <h2 className="business-project__title">
                  {copy.titleLines[0]}
                  <br />
                  {copy.titleLines[1]}
                </h2>
              </header>

              <div className="business-project__copy">
                <p>{copy.copyOne}</p>
                <p>{copy.copyTwo}</p>
              </div>

              <span className="business-project__divider" />

              <div className="business-project__themes">
                {copy.themes.map((theme, index) => (
                  <div className="business-theme" key={`${theme[0]}-${theme[1]}`}>
                    <span className="business-theme__icon" aria-hidden="true">{themeIcons[index]}</span>
                    <p>{theme[0]}<br />{theme[1]}</p>
                  </div>
                ))}
              </div>

              <div className="business-project__note">
                <span className="business-project__note-icon" aria-hidden="true">○</span>
                <p>{copy.note}</p>
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
                <p>{copy.caption[0]}<br />{copy.caption[1]}</p>
              </div>
            </div>
          </div>

          <div className="business-project__facts">
            {copy.facts.map((fact, index) => (
              <div className="business-fact" key={`${fact[0]}-${fact[1]}`}>
                <span className="business-fact__icon" aria-hidden="true">{factIcons[index]}</span>
                <div><strong>{fact[0]}</strong><span>{fact[1]}</span></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
