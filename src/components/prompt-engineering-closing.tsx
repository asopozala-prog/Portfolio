"use client";

import { useState } from "react";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export default function PromptEngineeringClosing() {
  const [active, setActive] = useState(false);

  return (
    <>
      <section className="prompt-engine-closing" aria-labelledby="prompt-engine-closing-title">
        <div className="page-shell">
          <div
            className={`prompt-engine-closing__card ${
              active ? "prompt-engine-closing__card--active" : ""
            }`}
          >
            <div className="prompt-engine-closing__visual">
              <button
                type="button"
                className="prompt-engine-closing__image-button"
                onClick={() => setActive((value) => !value)}
                aria-pressed={active}
                aria-label="Activate Prompt Engineering Agent closing animation"
              >
                <span className="prompt-engine-closing__halo prompt-engine-closing__halo--one" />
                <span className="prompt-engine-closing__halo prompt-engine-closing__halo--two" />

                <img
                  className="prompt-engine-closing__image"
                  src={`${basePath}/images/prompt_agent.png`}
                  alt="Prompt Engineering Agent illustration"
                />
              </button>
            </div>

            <div className="prompt-engine-closing__content">
              <p className="prompt-engine-closing__eyebrow">
                Reusable Prompt Engineering
              </p>

              <h2 id="prompt-engine-closing-title">
                Human understanding stays at the center.
                <br />
                Prompt engineering becomes reusable infrastructure.
              </h2>

              <p className="prompt-engine-closing__text">
                The organization defines the real work. The Prompt Engineering Agent
                turns that knowledge into task-specific prompt architecture for changing
                AI executors, then improves through tested results and feedback.
              </p>

              <button
                type="button"
                className="prompt-engine-closing__trigger"
                onClick={() => setActive((value) => !value)}
                aria-pressed={active}
              >
                <span aria-hidden="true">{active ? "●" : "○"}</span>
                {active ? "Agent loop active" : "Activate agent loop"}
              </button>
            </div>

            <div className="prompt-engine-closing__signal" aria-hidden="true">
              <span />
              <span />
              <span />
              <span />
              <span />
            </div>
          </div>
        </div>
      </section>

      <footer className="prompt-engine-footer">
        <div className="page-shell">
          <p>© 2026 Product Owner. All rights reserved.</p>
        </div>
      </footer>
    </>
  );
}
