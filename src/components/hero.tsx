"use client";

import { portfolioCopy } from "@/components/portfolio-copy";
import { usePortfolioLanguage } from "@/components/portfolio-language-context";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export default function Hero() {
  const { language } = usePortfolioLanguage();
  const copy = portfolioCopy[language].hero;

  return (
    <section className="path-section" id="top">
      <div className="page-shell path-section__grid">
        <div className="path-section__content">
          <div className="path-section__intro">
            <p className="path-section__eyebrow">{copy.eyebrow}</p>

            <h1 className="path-section__headline">
              {copy.headlineBefore}<em>{copy.headlineEmOne}</em>
              <br />
              {copy.headlineMiddle}<em>{copy.headlineEmTwo}</em>.
            </h1>

            <p className="path-section__lead">
              {copy.leadOne}
              <br />
              {copy.leadTwo}
            </p>
          </div>

          <div className="path-stages">
            {copy.stages.map((stage, index) => (
              <article className="path-stage" key={stage.label}>
                <div className="path-stage__top">
                  <span className="path-stage__number">{String(index + 1).padStart(2, "0")}</span>
                  {index < copy.stages.length - 1 && <span className="path-stage__line" aria-hidden="true" />}
                </div>

                {index === 0 && (
                  <div className="path-stage__visual path-stage__visual--globe" aria-hidden="true">
                    <span className="globe-icon" />
                  </div>
                )}

                {index === 1 && (
                  <div className="path-stage__visual path-stage__visual--director" aria-hidden="true">♟</div>
                )}

                {index === 2 && (
                  <div className="path-stage__visual path-stage__visual--ai" aria-hidden="true">
                    <span className="ai-node ai-node--top-left" />
                    <span className="ai-node ai-node--top-right" />
                    <span className="ai-node ai-node--bottom-left" />
                    <span className="ai-node ai-node--bottom-right" />
                    <span className="ai-node ai-node--center">✦</span>
                  </div>
                )}

                <p className="path-stage__label">{stage.label}</p>

                <h2 className="path-stage__title">
                  {stage.title.map((line, lineIndex) => (
                    <span key={`${stage.label}-${lineIndex}`}>
                      {line}
                      {lineIndex < stage.title.length - 1 && <br />}
                    </span>
                  ))}
                </h2>

                <span className="path-stage__divider" />
                {stage.detail && <p className="path-stage__text">{stage.detail}</p>}
              </article>
            ))}
          </div>

          <div className="path-values">
            {copy.values.map((value, index) => (
              <div className="path-value" key={value.title}>
                <div className="path-value__icon" aria-hidden="true">
                  {index === 0 ? "◎" : index === 1 ? "◒" : "✦"}
                </div>
                <div>
                  <h2 className="path-value__title">{value.title}</h2>
                  <p className="path-value__text">
                    {value.lines[0]}
                    <br />
                    {value.lines[1]}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="path-section__portrait">
          <img src={`${basePath}/images/hero/DG_office.png`} alt="Portrait working at a desk" />
        </div>
      </div>
    </section>
  );
}
