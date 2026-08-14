"use client";

import { useState } from "react";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export default function ExecutorIntelligence() {
  const [open, setOpen] = useState(false);

  return (
    <section className="executor-intelligence" id="executor-intelligence">
      <div className="page-shell">
        <div
          className={`executor-intelligence__card ${
            open ? "executor-intelligence__card--open" : ""
          }`}
        >
          <div className="executor-intelligence__number" aria-hidden="true">
            03
          </div>

          <div className="executor-intelligence__content">
            <header className="executor-intelligence__header">
              <h2>
                Context &amp; Executor Intelligence — Engineer for the Real Working Environment
              </h2>

              <p>
                Prompt engineering depends on both the work and the AI system that will
                execute it. The agent considers the working role, task, organizational
                context, available knowledge, constraints, and expected result together
                with the executor&apos;s capabilities, limitations, environment, and
                output requirements. The same business task may therefore require
                different prompt engineering for Microsoft Copilot, Gemini, ChatGPT,
                Claude, a local model, or an API.
              </p>
            </header>

            <p className="executor-intelligence__hint">
              <span aria-hidden="true">↘</span>
              Select the Prompt Engineering Agent to open or close its working intelligence.
            </p>

            <div
              className={`executor-intelligence__shell ${
                open ? "executor-intelligence__shell--open" : ""
              }`}
            >
              <button
                type="button"
                className="intelligence-agent-button"
                onClick={() => setOpen((value) => !value)}
                aria-expanded={open}
                aria-controls="executor-intelligence-expanded"
              >
                <img
                  className="intelligence-agent-button__image"
                  src={`${basePath}/images/prompt_agent.png`}
                  alt=""
                  aria-hidden="true"
                />

                <span className="intelligence-agent-button__label">
                  PROMPT ENGINEERING AGENT
                </span>

                <span className="intelligence-agent-button__toggle" aria-hidden="true">
                  {open ? "−" : "+"}
                </span>
              </button>

              <div
                id="executor-intelligence-expanded"
                className="executor-intelligence__expanded"
                aria-hidden={!open}
              >
                <div className="executor-intelligence__diagram">
                  <article className="intelligence-panel intelligence-panel--executor">
                    <h3>Executor Knowledge</h3>
                    <ul>
                      <li>Capabilities</li>
                      <li>Limitations</li>
                      <li>Environment</li>
                      <li>Output Requirements</li>
                      <li>Tools &amp; Integrations</li>
                    </ul>
                  </article>

                  <div className="intelligence-connector" aria-hidden="true">
                    <span>→</span>
                  </div>

                  <div className="intelligence-engine">
                    <div className="intelligence-engine__step intelligence-engine__step--prompt">
                      Prompt Type
                    </div>

                    <span className="intelligence-engine__arrow" aria-hidden="true">↓</span>

                    <div className="intelligence-engine__step intelligence-engine__step--instruction">
                      Instruction Architecture
                    </div>

                    <span className="intelligence-engine__arrow" aria-hidden="true">↓</span>

                    <div className="intelligence-engine__step intelligence-engine__step--output">
                      Output Architecture
                    </div>

                    <span className="intelligence-engine__arrow" aria-hidden="true">↓</span>

                    <div className="intelligence-engine__step intelligence-engine__step--validation">
                      Validation
                    </div>
                  </div>

                  <div className="intelligence-connector" aria-hidden="true">
                    <span>←</span>
                  </div>

                  <article className="intelligence-panel intelligence-panel--context">
                    <h3>Context Architecture</h3>
                    <ul>
                      <li>Working Role</li>
                      <li>Task</li>
                      <li>Organizational Context</li>
                      <li>Available Knowledge</li>
                      <li>Constraints</li>
                      <li>Expected Result</li>
                    </ul>
                  </article>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
