"use client";

import { useState } from "react";
import ExecutorIntelligence from "@/components/executor-intelligence";
import ReusablePromptEngineering from "@/components/reusable-prompt-engineering";
import PromptEngineeringClosing from "@/components/prompt-engineering-closing";

import PromptSystemNav from "@/components/prompt-system-nav";
// Prompt Engineering Agent — interactive project page.


type ArchitecturePanel = {
  label: string;
  body?: string;
  code?: string;
};

type ArchitectureCardProps = {
  title: string;
  tone: "green" | "blue" | "purple" | "teal";
  icon: React.ReactNode;
  format: string;
  panels: ArchitecturePanel[];
};

function ArchitectureCard({
  title,
  tone,
  icon,
  format,
  panels,
}: ArchitectureCardProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [frontIndex, setFrontIndex] = useState(0);
  const [backIndex, setBackIndex] = useState(1);
  const [flipped, setFlipped] = useState(false);

  const handleTurn = () => {
    const nextIndex = (currentIndex + 1) % panels.length;

    if (flipped) {
      setFrontIndex(nextIndex);
      setFlipped(false);
    } else {
      setBackIndex(nextIndex);
      setFlipped(true);
    }

    setCurrentIndex(nextIndex);
  };

  const renderPanel = (panel: ArchitecturePanel) => (
    <>
      <span className="architecture-card__eyebrow">{panel.label}</span>

      {panel.body && <p>{panel.body}</p>}

      {panel.code && (
        <pre className="architecture-card__code">
          <code>{panel.code}</code>
        </pre>
      )}
    </>
  );

  return (
    <button
      type="button"
      className={`architecture-card architecture-card--${tone}`}
      onClick={handleTurn}
      aria-label={`${title}. Showing ${panels[currentIndex].label}. Click to continue.`}
    >
      <div
        className={`architecture-card__flipper ${
          flipped ? "architecture-card__flipper--turned" : ""
        }`}
      >
        <div className="architecture-card__face architecture-card__face--front">
          <div className="architecture-card__top">
            {icon}
            <h3>{title}</h3>
            <span className="architecture-card__line" />
          </div>

          <div className="architecture-card__body">
            {renderPanel(panels[frontIndex])}
          </div>

          <div className="architecture-card__footer">
            <span>{format}</span>
            <span>{frontIndex + 1} / 3</span>
          </div>
        </div>

        <div className="architecture-card__face architecture-card__face--back">
          <div className="architecture-card__top">
            {icon}
            <h3>{title}</h3>
            <span className="architecture-card__line" />
          </div>

          <div className="architecture-card__body">
            {renderPanel(panels[backIndex])}
          </div>

          <div className="architecture-card__footer">
            <span>{format}</span>
            <span>{backIndex + 1} / 3</span>
          </div>
        </div>
      </div>
    </button>
  );
}

export default function PromptEngineeringAgentPage() {
  return (
    <main className="prompt-engine-page">
      <PromptSystemNav active="engine" />
      <header className="prompt-engine-page__header">
        <div className="page-shell">
<h1>Prompt Engineering Engine</h1>
        </div>
      </header>

      <section className="prompt-engine-core" id="prompt-engine-core">
        <div className="page-shell">
          <div className="prompt-engine-core__card">
            <div className="prompt-engine-core__number" aria-hidden="true">
              01
            </div>

            <div className="prompt-engine-core__content">
              <header className="prompt-engine-core__header">
                <h2 className="prompt-engine-core__title">
                  Core Concept — Prompt Engineering as an Engine, Not a Manual Skill
                </h2>

                <p className="prompt-engine-core__text">
                  The product owner does not manually engineer every prompt. The human
                  defines the real working problem, task, context, constraints, and
                  expected result. A specialized Prompt Engineering Agent then translates
                  that knowledge into the appropriate prompt architecture for the
                  selected AI executor. The objective is to separate human domain
                  understanding from prompt construction and make prompt engineering
                  reusable, systematic, and scalable.
                </p>
              </header>

              <p className="prompt-engine-core__interaction-hint">
                <span aria-hidden="true">↗</span>
                Hover or focus a role to explore its responsibility.
              </p>

              <div
                className="prompt-engine-pipeline"
                aria-label="Prompt engineering pipeline"
              >
                <article
                  className="prompt-engine-node prompt-engine-node--owner"
                  data-stage="owner"
                  tabIndex={0}
                >
                  <div className="prompt-engine-node__visual">
                    <span
                      className="prompt-engine-icon prompt-engine-icon--person"
                      aria-hidden="true"
                    />
                  </div>

                  <h3 className="prompt-engine-node__title">Product Owner</h3>
                  <p className="prompt-engine-node__text">Understands the work</p>

                  <p className="prompt-engine-node__detail">
                    The human working role that understands the business need and defines
                    the real organizational task, including its context, available inputs,
                    constraints, workflow position, and expected output.
                  </p>
                </article>

                <span
                  className="prompt-engine-pipeline__arrow"
                  aria-hidden="true"
                  data-connection="owner-agent"
                >
                  →
                </span>

                <article
                  className="prompt-engine-node prompt-engine-node--agent"
                  data-stage="agent"
                  tabIndex={0}
                >
                  <div className="prompt-engine-node__visual">
                    <span
                      className="prompt-engine-icon prompt-engine-icon--chip"
                      aria-hidden="true"
                    >
                      <i />
                      <i />
                      <i />
                    </span>
                  </div>

                  <h3 className="prompt-engine-node__title">
                    Prompt
                    <br />
                    Engineering Agent
                  </h3>

                  <p className="prompt-engine-node__text">Designs the instruction</p>

                  <p className="prompt-engine-node__detail">
                    An AI agent that combines the collected task and organizational
                    context with knowledge of the selected execution AI—its capabilities,
                    features, working environment, limitations, and output requirements—to
                    engineer the appropriate prompt.
                  </p>
                </article>

                <span
                  className="prompt-engine-pipeline__arrow"
                  aria-hidden="true"
                  data-connection="agent-executor"
                >
                  →
                </span>

                <article
                  className="prompt-engine-node prompt-engine-node--executor"
                  data-stage="executor"
                  tabIndex={0}
                >
                  <div className="prompt-engine-node__visual">
                    <span
                      className="prompt-engine-icon prompt-engine-icon--robot"
                      aria-hidden="true"
                    />
                  </div>

                  <h3 className="prompt-engine-node__title">Execution AI</h3>
                  <p className="prompt-engine-node__text">Executes the work</p>

                  <p className="prompt-engine-node__detail">
                    The AI system that performs the task, such as Microsoft Copilot,
                    Gemini, ChatGPT, Claude, a local model, or an API-based model, each
                    providing different capabilities and operating within different
                    technical and working environments.
                  </p>
                </article>

                <span
                  className="prompt-engine-pipeline__arrow"
                  aria-hidden="true"
                  data-connection="executor-result"
                >
                  →
                </span>

                <article
                  className="prompt-engine-node prompt-engine-node--result"
                  data-stage="result"
                  tabIndex={0}
                >
                  <div className="prompt-engine-node__visual">
                    <span
                      className="prompt-engine-icon prompt-engine-icon--result"
                      aria-hidden="true"
                    />
                  </div>

                  <h3 className="prompt-engine-node__title">Result</h3>
                  <p className="prompt-engine-node__text">Delivers value</p>

                  <p className="prompt-engine-node__detail">
                    The task-specific output expected by the organization, designed to fit
                    its intended place in the wider business workflow and provide the
                    required input for the human or next process step.
                  </p>
                </article>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="prompt-architecture" id="prompt-architecture">
        <div className="page-shell">
          <div className="prompt-architecture__card">
            <div className="prompt-architecture__number" aria-hidden="true">
              02
            </div>

            <div className="prompt-architecture__content">
              <header className="prompt-architecture__header">
                <h2>
                  Prompt Architecture Library — Different Tasks Require Different Prompt Architectures
                </h2>

                <p>
                  The Prompt Engineering Agent selects the appropriate prompt architecture
                  according to the work being performed. A single task requires a focused
                  instruction; a workflow requires coordinated steps and dependencies; a
                  concentrated working session requires an initiation prompt that establishes
                  context, rules, and working behavior; and software execution requires a precise
                  machine-facing prompt. The architecture changes with the task while the
                  engineering logic remains reusable.
                </p>
              </header>

              <p className="prompt-architecture__interaction-hint">
                <span aria-hidden="true">↻</span>
                Click a card to turn it: What It Is → Use Case → Example.
              </p>

              <div className="prompt-architecture__grid">
                <ArchitectureCard
                  title="Single-Task Prompt"
                  tone="green"
                  format=".md"
                  icon={
                    <div
                      className="architecture-card__icon architecture-card__icon--focus"
                      aria-hidden="true"
                    >
                      <span />
                    </div>
                  }
                  panels={[
                    {
                      label: "What It Is",
                      body:
                        "A focused prompt designed to perform one clearly defined operation. It combines task context, instructions, variables, and the expected output in one reusable prompt asset.",
                    },
                    {
                      label: "Use Case",
                      body:
                        "Use when the working context is already established and one clearly defined task needs to be executed. A focused prompt provides the specific instruction, variables, and output requirements needed to produce a well-formulated result.",
                    },
                    {
                      label: "Example",
                      code: `# Client Correspondence Review

Analyze: {client_correspondence}

Extract:
- Client requests
- Deadlines
- Required follow-up actions

Return:
Request | Deadline | Action Required`,
                    },
                  ]}
                />

                <ArchitectureCard
                  title="Multi-Step Workflow Prompt"
                  tone="blue"
                  format="NL"
                  icon={
                    <div
                      className="architecture-card__icon architecture-card__icon--workflow"
                      aria-hidden="true"
                    >
                      <span className="workflow-top" />
                      <span className="workflow-branch workflow-branch--one" />
                      <span className="workflow-branch workflow-branch--two" />
                      <span className="workflow-branch workflow-branch--three" />
                    </div>
                  }
                  panels={[
                    {
                      label: "What It Is",
                      body:
                        "A coordinated prompt structure for work that requires several dependent operations. It defines the sequence, dependencies, intermediate results, and controls needed to reach the final output.",
                    },
                    {
                      label: "Use Case",
                      body:
                        "Use when a task requires multi-layered reasoning and a single instruction would reduce precision. The work is divided into sequential steps, allowing new context, inputs, and intermediate results to be introduced at each stage until the expected output is reached.",
                    },
                    {
                      label: "Example",
                      code: `Prompt 1

Task:
Review the provided case documents and identify the facts relevant to the dispute.

Input:
- Case documents
- Initial case context

Output:
A structured list of verified facts with source references.


Prompt 2

Task:
Using the verified facts from Prompt 1, compare the parties' positions and identify contradictions, missing information, and unresolved questions.

Input:
- Output from Prompt 1
- Party statements
- Additional correspondence

Output:
A structured comparison of agreements, conflicts, and information gaps.


Prompt 3

Task:
Task: the previouTask: the previpare the fiTask: the previouTask: the previpare the fiTask: the previouTeqTask: the p
Input:
- Output from Prompt 2
- Procedural requirements
- Required briefing format

Output:
A concise case briefing containing verified facts, key conflicts, missing information, and required next actions.`,
                    },
                  ]}
                />

                <ArchitectureCard
                  title="Session Initiation Prompt"
                  tone="purple"
                  format="JSON"
                  icon={
                    <div
                      className="architecture-card__icon architecture-card__icon--session"
                      aria-hidden="true"
                    >
                      <span />
                    </div>
                  }
                  panels={[
                    {
                      label: "What It Is",
                      body:
                        "An initiation prompt establishes a temporary specialized working environment inside a general-purpose AI session. It loads the task, context, knowledge, rules, boundaries, and working method before the actual work begins.",
                    },
                    {
                      label: "Use Case",
                      body:
                        "Use when an AI session should operate as one concrete working role and remain concentrated on a specific task or topic. The initiation prompt establishes the role, context, knowledge, rules, and working boundaries that govern the entire session.",
                    },
                    {
                      label: "Example",
                      code: `{
  "role": "Case Research Assistant",
  "objective": "Prepare Case A",
  "ground_truth": "Uploaded case files only",
  "rules": [
    "Do not infer missing facts",
    "Identify the source for every finding"
  ]
}`,
                    },
                  ]}
                />

                <ArchitectureCard
                  title="API / Machine-Execution Prompt"
                  tone="teal"
                  format="NL + JSON"
                  icon={
                    <div
                      className="architecture-card__icon architecture-card__icon--api"
                      aria-hidden="true"
                    >
                      <span>&lt;</span>
                      <i>/</i>
                      <span>&gt;</span>
                    </div>
                  }
                  panels={[
                    {
                      label: "What It Is",
                      body:
                        "A machine-facing prompt designed to operate reliably inside software and automated workflows. It combines precise natural-language instructions with structured inputs, constraints, output schemas, and validation requirements.",
                    },
                    {
                      label: "Use Case",
                      body:
                        "Classify incoming documents automatically before routing them to the next stage of a processing pipeline. The model must return predictable structured data that downstream software can validate and consume.",
                    },
                    {
                      label: "Example",
                      code: `Classify the supplied document using only the permitted categories.
Do not infer information that is not present.
Return only valid JSON matching the required schema.

{
  "document_type": "invoice",
  "confidence": 0.94,
  "review_required": false
}`,
                    },
                  ]}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <ExecutorIntelligence />
      <ReusablePromptEngineering />
      <PromptEngineeringClosing />
    </main>
  );
}
