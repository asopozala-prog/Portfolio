"use client";

import { portfolioCopy } from "@/components/portfolio-copy";
import { usePortfolioLanguage } from "@/components/portfolio-language-context";

export default function ContactCta() {
  const { language } = usePortfolioLanguage();
  const copy = portfolioCopy[language].contact;

  return (
    <section className="contact-cta" id="contact">
      <div className="page-shell">
        <div className="contact-cta__inner">
          <div className="contact-cta__content">
            <div className="contact-cta__icon" aria-hidden="true">
              <span className="contact-cta__envelope" />
            </div>

            <div className="contact-cta__text">
              <h2 className="contact-cta__title">{copy.title}</h2>
              <p className="contact-cta__description">{copy.description}</p>
            </div>
          </div>

          <a className="button button--primary contact-cta__button" href="mailto:asopo.zala@gmail.com">
            {copy.button}<span aria-hidden="true">→</span>
          </a>
        </div>
      </div>
    </section>
  );
}
