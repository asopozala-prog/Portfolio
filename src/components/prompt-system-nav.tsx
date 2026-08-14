// Shared navigation for the Organizational Prompt Bank project family.

type PromptSystemNavProps = {
  active: "bank" | "demo" | "engine";
};

export default function PromptSystemNav({ active }: PromptSystemNavProps) {
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

  const items = [
    {
      key: "bank",
      label: "Organizational Prompt Bank",
      href: `${basePath}/projects/organizational-prompt-bank/`,
    },
    {
      key: "demo",
      label: "Interactive Demonstration",
      href: `${basePath}/projects/organizational-prompt-bank/demo/`,
    },
    {
      key: "engine",
      label: "Prompt Engineering Engine",
      href: `${basePath}/projects/prompt-engineering-agent/`,
    },
  ] as const;

  return (
    <div className="prompt-system-nav-wrap">
      <div className="page-shell">
        <nav className="prompt-system-nav" aria-label="Prompt system navigation">
          <div className="prompt-system-nav__family">
            {items.map((item) => {
              const isActive = item.key === active;

              return (
                <a
                  key={item.key}
                  className={`prompt-system-nav__link ${
                    isActive ? "prompt-system-nav__link--active" : ""
                  }`}
                  href={item.href}
                  aria-current={isActive ? "page" : undefined}
                >
                  {item.label}
                </a>
              );
            })}
          </div>

          <a
            className="prompt-system-nav__portfolio"
            href="https://asopozala-prog.github.io/Portfolio/"
          >
            Portfolio Home
            <span aria-hidden="true">↗</span>
          </a>
        </nav>
      </div>
    </div>
  );
}
