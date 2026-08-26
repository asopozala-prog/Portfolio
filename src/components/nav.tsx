"use client";

// Main portfolio navigation with EN / DE language switch.
import { usePortfolioLanguage } from "@/components/portfolio-language-context";
import { portfolioCopy } from "@/components/portfolio-copy";

export default function Nav() {
  const { language, setLanguage } = usePortfolioLanguage();
  const copy = portfolioCopy[language].nav;
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

  return (
    <header className="site-header">
      <div className="page-shell site-header__inner">
        <a className="site-brand" href="#top">{copy.portfolio}</a>

        <nav className="site-project-nav" aria-label="Portfolio projects">
          <a href={`${basePath}/projects/international-business-projects/`}>
            {language === "de" ? "Internationales Business" : "International Business"}
          </a>

          <a href={`${basePath}/projects/organizational-prompt-bank/`}>
            Organizational PromptBank
          </a>
        </nav>

        <div className="site-language" aria-label={copy.languageLabel}>
          <button
            type="button"
            className={`site-language__button ${language === "en" ? "site-language__button--active" : ""}`}
            onClick={() => setLanguage("en")}
            aria-pressed={language === "en"}
          >
            EN
          </button>
          <span aria-hidden="true">/</span>
          <button
            type="button"
            className={`site-language__button ${language === "de" ? "site-language__button--active" : ""}`}
            onClick={() => setLanguage("de")}
            aria-pressed={language === "de"}
          >
            DE
          </button>
        </div>

        <nav className="site-nav" aria-label="External profiles">
          <a className="site-nav__link" href="https://www.linkedin.com/in/dany-gr%C3%BCnewald-20bb3a3b8" target="_blank" rel="noreferrer" aria-label="LinkedIn">
            <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
              <path d="M6.5 8.25H3.25V21H6.5V8.25ZM4.88 3A1.88 1.88 0 1 0 4.88 6.75 1.88 1.88 0 0 0 4.88 3ZM21 13.7C21 9.85 18.94 8.06 16.2 8.06c-2.21 0-3.2 1.22-3.76 2.08V8.25H9.19V21h3.25v-6.32c0-1.67.32-3.29 2.39-3.29 2.04 0 2.06 1.91 2.06 3.4V21H21v-7.3Z" />
            </svg>
          </a>

          <a className="site-nav__link" href="https://github.com/asopozala-prog" target="_blank" rel="noreferrer" aria-label="GitHub">
            <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
              <path d="M12 2C6.48 2 2 6.58 2 12.23c0 4.52 2.87 8.35 6.84 9.71.5.1.68-.22.68-.49v-1.91c-2.78.62-3.37-1.22-3.37-1.22-.45-1.19-1.11-1.5-1.11-1.5-.91-.64.07-.62.07-.62 1 .07 1.53 1.06 1.53 1.06.89 1.56 2.34 1.11 2.91.85.09-.66.35-1.11.63-1.37-2.22-.26-4.56-1.14-4.56-5.06 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.3.1-2.71 0 0 .84-.28 2.75 1.05A9.3 9.3 0 0 1 12 6.92a9.3 9.3 0 0 1 2.5.35c1.91-1.33 2.75-1.05 2.75-1.05.55 1.41.2 2.45.1 2.71.64.72 1.03 1.63 1.03 2.75 0 3.93-2.34 4.79-4.57 5.04.36.32.68.95.68 1.92v2.85c0 .27.18.6.69.49A10.25 10.25 0 0 0 22 12.23C22 6.58 17.52 2 12 2Z" />
            </svg>
          </a>

          <a className="site-nav__link" href="https://www2.asopo-verlag.de" target="_blank" rel="noreferrer" aria-label="Website">
            <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
              <circle cx="12" cy="12" r="9" />
              <path d="M3 12h18M12 3c2.5 2.45 3.9 5.55 3.9 9S14.5 18.55 12 21M12 3C9.5 5.45 8.1 8.55 8.1 12s1.4 6.55 3.9 9" />
            </svg>
          </a>
        </nav>
      </div>
    </header>
  );
}
