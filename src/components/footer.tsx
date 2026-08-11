// Footer for the Mushroom House AI Studio portfolio.

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="page-shell">
        <div className="site-footer__grid">
          <div className="site-footer__column">
            <h2 className="site-footer__title">Portfolio</h2>

            <p className="site-footer__text">
              Building systems.
              <br />
              Solving problems.
              <br />
              Creating value.
            </p>
          </div>

          <nav className="site-footer__column" aria-label="Footer navigation">
            <h2 className="site-footer__title">Navigate</h2>

            <a href="#projects">Projects</a>
            <a href="#about">About</a>
            <a href="#skills">Skills</a>
            <a href="#experience">Experience</a>
            <a href="#contact">Contact</a>
          </nav>

          <div className="site-footer__column">
            <h2 className="site-footer__title">Links</h2>

            <a
              href="https://github.com/asopozala-prog"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>

            <a href="#">LinkedIn</a>
            <a href="#">Kaggle</a>
            <a href="mailto:your-email@example.com">Email</a>
          </div>

          <div className="site-footer__column site-footer__contact">
            <h2 className="site-footer__title">Let’s stay in touch</h2>

            <a href="mailto:your-email@example.com">hello@portfolio.com</a>

            <p>Based in 🌍</p>
            <p>Available for remote collaborations</p>
          </div>
        </div>

        <p className="site-footer__copyright">
          © 2026 Portfolio. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
