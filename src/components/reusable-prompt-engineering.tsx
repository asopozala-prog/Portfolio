"use client";

import { useState } from "react";

// Section 04 — Reusable Prompt Engineering with a user-triggered knowledge loop.

const stages = [
  {
    key: "human",
    title: "Human Knowledge",
    text: "Domain understanding, problem definition, expectations",
  },
  {
    key: "agent",
    title: "Prompt Engineering Agent",
    text: "Designs, optimizes, and structures the prompt",
  },
  {
    key: "ai",
    title: "AI Executors",
    text: "Different models and platforms execute the prompt",
  },
  {
    key: "results",
    title: "Results",
    text: "Deliver output and business value",
  },
  {
    key: "feedback",
    title: "Feedback",
    text: "Human evaluation and real-world feedback",
  },
];

export default function ReusablePromptEngineering() {
  const [step, setStep] = useState(0);
  const [running, setRunning] = useState(false);

  const runCycle = () => {
    if (running) return;

    setRunning(true);
    setStep(0);

    const sequence = [1, 2, 3, 4, 5, 6];
    sequence.forEach((value, index) => {
      window.setTimeout(() => {
        setStep(value);

        if (value === 6) {
          window.setTimeout(() => {
            setStep(0);
            setRunning(false);
          }, 1400);
        }
      }, 650 * (index + 1));
    });
  };

  return (
    <section
      className="reusable-prompt-engineering"
      id="reusable-prompt-engineering"
    >
      <div className="page-shell">
        <div className="reusable-prompt-engineering__card">
          <div
            className="reusable-prompt-engineering__number"
            aria-hidden="true"
          >
            04
          </div>

          <div className="reusable-prompt-engineering__content">
            <header className="reusable-prompt-engineering__header">
              <h2>
                Reusable Prompt Engineering — From Individual Knowledge to
                Organizational Capability
              </h2>

              <p>
                Prompt-engineering knowledge can be captured inside specialized
                agents, tested through real work, improved through feedback, and
                reused across tasks and AI executors. The human remains
                responsible for understanding the business problem and
                evaluating the result, while the Prompt Engineering Agent
                handles prompt construction. Over time, this creates a reusable
                engineering layer between organizational knowledge and changing
                AI technologies.
              </p>
            </header>

            <div className="reusable-prompt-engineering__interaction">
              <p>
                <span aria-hidden="true">↻</span>
                Run the cycle to see how working knowledge becomes reusable
                engineering knowledge.
              </p>

              <button
                type="button"
                className="reusable-prompt-engineering__run"
                onClick={runCycle}
                disabled={running}
              >
                {running ? "Running…" : "Run knowledge loop"}
              </button>
            </div>

            <div
              className={`reusable-engineering-flow ${
                running ? "reusable-engineering-flow--running" : ""
              }`}
              aria-label="Reusable prompt engineering knowledge loop"
            >
              {stages.map((stage, index) => (
                <div className="reusable-engineering-flow__item" key={stage.key}>
                  <article
                    className={`reusable-engineering-node reusable-engineering-node--${stage.key} ${
                      step >= index + 1
                        ? "reusable-engineering-node--active"
                        : ""
                    }`}
                  >
                    <div className="reusable-engineering-node__visual">
                      <span
                        className={`reusable-icon reusable-icon--${stage.key}`}
                        aria-hidden="true"
                      >
                        {stage.key === "human" && <i />}
                        {stage.key === "agent" && (
                          <>
                            <i />
                            <i />
                            <i />
                          </>
                        )}
                      </span>
                    </div>

                    <h3>{stage.title}</h3>
                    <p>{stage.text}</p>
                  </article>

                  {index < stages.length - 1 && (
                    <span
                      className={`reusable-engineering-flow__arrow ${
                        step >= index + 2
                          ? "reusable-engineering-flow__arrow--active"
                          : ""
                      }`}
                      aria-hidden="true"
                    >
                      →
                    </span>
                  )}
                </div>
              ))}

              <div
                className={`reusable-engineering-loop ${
                  step >= 6 ? "reusable-engineering-loop--active" : ""
                }`}
                aria-hidden="true"
              >
                <span className="reusable-engineering-loop__right" />
                <span className="reusable-engineering-loop__line">
                  <span>Improvement</span>
                </span>
                <span className="reusable-engineering-loop__left" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
