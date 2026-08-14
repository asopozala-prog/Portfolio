// Organizational Prompt Bank standalone project page — Section 01.
import PromptSystemNav from "@/components/prompt-system-nav";

export default function OrganizationalPromptBankPage() {
  return (
    <main className="prompt-bank">
      <PromptSystemNav active="bank" />
      <div className="page-shell">
        <div className="prompt-bank__layout">
          <div className="prompt-bank__main">
            <header className="prompt-bank__header">
              <div className="prompt-bank__heading">
                <div>
                  <h1 className="prompt-bank__title">
                    Organizational Prompt Bank
                  </h1>

                  <p className="prompt-bank__subtitle">
                    Turn working knowledge into reusable organizational knowledge.
                  </p>
                </div>
              </div>

              <p className="prompt-bank__intro">
                A Prompt Bank connects roles, tasks, variables, inputs, outputs,
                ownership, validation, versioning and lifecycle — so the right person
                can find the right prompt, use it with the right variables, and get
                reliable results every time.
              </p>
            </header>

            <div className="prompt-flow">
              <article className="prompt-flow__step prompt-flow__step--role">
                <div className="prompt-flow__icon" aria-hidden="true">
                  <span className="prompt-icon-person" />
                </div>
                <h2 className="prompt-flow__title">Working Role</h2>
                <p className="prompt-flow__text">Who does<br />the work?</p>
              </article>

              <span className="prompt-flow__arrow" aria-hidden="true">→</span>

              <article className="prompt-flow__step prompt-flow__step--task">
                <div className="prompt-flow__icon" aria-hidden="true">
                  <span className="prompt-icon-task"><i /><i /><i /></span>
                </div>
                <h2 className="prompt-flow__title">Task</h2>
                <p className="prompt-flow__text">What needs<br />to be done?</p>
              </article>

              <span className="prompt-flow__arrow" aria-hidden="true">→</span>

              <article className="prompt-flow__step prompt-flow__step--prompt">
                <div className="prompt-flow__icon" aria-hidden="true">
                  <span className="prompt-icon-document" />
                </div>
                <h2 className="prompt-flow__title">Right Prompt</h2>
                <p className="prompt-flow__text">Which proven<br />method fits?</p>
              </article>

              <span className="prompt-flow__arrow" aria-hidden="true">→</span>

              <article className="prompt-flow__step prompt-flow__step--variables">
                <div className="prompt-flow__icon" aria-hidden="true">
                  <span className="prompt-icon-controls"><i /><i /><i /></span>
                </div>
                <h2 className="prompt-flow__title">Variables</h2>
                <p className="prompt-flow__text">Insert the right<br />information</p>
              </article>

              <span className="prompt-flow__arrow" aria-hidden="true">→</span>

              <article className="prompt-flow__step prompt-flow__step--result">
                <div className="prompt-flow__icon" aria-hidden="true">
                  <span className="prompt-icon-check" />
                </div>
                <h2 className="prompt-flow__title">Result</h2>
                <p className="prompt-flow__text">Consistent,<br />trusted output</p>
              </article>
            </div>
          </div>

          <aside className="prompt-bank__idea">
            <div className="prompt-bank__idea-heading">
              <span className="prompt-bank__bulb" aria-hidden="true">♧</span>
              <h2>Core Idea</h2>
            </div>

            <p className="prompt-bank__idea-text">
              Prompts are not just text.
              <strong>
                They are structured assets that capture proven methods,
                context, and decisions.
              </strong>
            </p>

            <div className="prompt-bank__idea-divider" />

            <p className="prompt-bank__idea-conclusion">
              What the organization learns through prompts becomes
              knowledge it can preserve and reuse.
            </p>
          </aside>
        </div>
      </div>
{/* SECTION 02 — WHAT IS A PROMPT ASSET? */}
<section className="prompt-asset" id="prompt-asset">
  <div className="page-shell">
    <div className="prompt-asset__layout">
      <header className="prompt-asset__intro">
        <h2 className="prompt-asset__heading">What Is a Prompt Asset?</h2>
        <p>
          A prompt asset is more than prompt text.
          <br />
          It is a complete, governed, reusable asset.
        </p>

<a
  className="prompt-asset__demo-link"
  href="demo/"
  aria-label="Open the Organizational Prompt Bank interactive demonstration"
>
  <img
    className="prompt-asset__demo-image"
    src={`${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}/images/Prompt_bank.png`}
    alt="Organizational Prompt Bank interactive demonstration"
  />

  <span className="prompt-asset__demo-label">
    Open Interactive Demonstration
    <span aria-hidden="true">→</span>
  </span>
</a>
      </header>

      <div className="prompt-asset__example">
        <article className="asset-card">
          <div className="asset-card__main">
            <header className="asset-card__header">
              <div className="asset-card__document-icon" aria-hidden="true">
                <span />
              </div>
              <h3 className="asset-card__title">Candidate Screening</h3>
              <span className="asset-card__status">Approved · v2.1</span>
            </header>

            <p className="asset-card__description">
              Evaluate a candidate’s CV against the job requirements and
              company context to produce a structured HR evaluation.
            </p>

            <div className="asset-fields">
              <section className="asset-field">
                <h4><span className="asset-field__symbol" aria-hidden="true">♙</span>Role</h4>
                <p>HR Manager</p>
              </section>

              <section className="asset-field">
                <h4><span className="asset-field__symbol" aria-hidden="true">◇</span>Purpose</h4>
                <p>First CV screening</p>
              </section>

              <section className="asset-field">
                <h4><span className="asset-field__symbol" aria-hidden="true">‡</span>Variables</h4>
                <ul>
                  <li>Job criteria</li>
                  <li>Candidate CV</li>
                </ul>
              </section>

              <section className="asset-field">
                <h4><span className="asset-field__symbol" aria-hidden="true">▱</span>Output</h4>
                <p>HR evaluation report</p>
              </section>
            </div>

            <dl className="asset-metadata">
              <div><dt>Owner</dt><dd>HR Team</dd></div>
              <div><dt>Access</dt><dd>HR, Recruiters</dd></div>
              <div><dt>Status</dt><dd>Approved</dd></div>
              <div><dt>Version</dt><dd>2.1</dd></div>
              <div><dt>Last Updated</dt><dd>2026-08-10</dd></div>
            </dl>
          </div>

          <aside className="asset-includes">
            <h3>Includes</h3>
            <ul>
              <li>Prompt text (method)</li>
              <li>Variables (reusable)</li>
              <li>Inputs &amp; Outputs</li>
              <li>Ownership &amp; Access</li>
              <li>Validation &amp; Version</li>
              <li>Lifecycle &amp; History</li>
              <li>Related Knowledge</li>
            </ul>
          </aside>
        </article>

        <p className="prompt-asset__note">
          <span aria-hidden="true">i</span>
          The prompt text is only one part of the asset.
        </p>
      </div>
    </div>
  </div>
</section>


{/* =====================================================
    SECTION 03 — RETRIEVAL + PROMPT REUSE
   ===================================================== */}

<section className="prompt-retrieval" id="prompt-retrieval">
  <div className="page-shell">
    <header className="prompt-retrieval__header">
      <h2>Retrieval — Why the Bank Matters</h2>

      <p>
        People should not need to remember filenames or browse hundreds of prompts.
      </p>
    </header>

    <div className="retrieval-flow">
      <article className="retrieval-card retrieval-card--context">
        <div className="retrieval-card__icon" aria-hidden="true">
          <span className="retrieval-person-icon" />
        </div>

        <div className="retrieval-context__formula">
          <strong>Working Role</strong>
          <span>+</span>
          <strong>Task</strong>
          <span>+</span>
          <strong>Context</strong>
        </div>

        <p>
          Who, what, situation,
          <br />
          department, goal
        </p>
      </article>

      <span className="retrieval-flow__arrow" aria-hidden="true">→</span>

      <article className="retrieval-card retrieval-card--bank">
        <div className="retrieval-card__top">
          <span className="retrieval-bank-icon" aria-hidden="true" />
          <h3>Prompt Bank</h3>
        </div>

        <p>
          Organized by role, task,
          <br />
          department, tags,
          <br />
          output type, status,
          <br />
          and more
        </p>
      </article>

      <span className="retrieval-flow__arrow" aria-hidden="true">→</span>

      <article className="retrieval-card retrieval-card--match">
        <div className="retrieval-card__top">
          <span className="retrieval-star-icon" aria-hidden="true">☆</span>
          <h3>Best Matching Prompt</h3>
        </div>

        <p>
          The most relevant,
          <br />
          approved prompt
          <br />
          optimized for the
          <br />
          situation
        </p>
      </article>

      <aside className="retrieval-uses">
        <h3>Retrieval uses:</h3>

        <ul>
          <li>Role &amp; Department</li>
          <li>Task &amp; Context</li>
          <li>Tags &amp; Categories</li>
          <li>Output Type</li>
          <li>Status &amp; Quality</li>
          <li>Past Usage &amp; Feedback</li>
        </ul>
      </aside>
    </div>

    <section className="prompt-usage">
      <header className="prompt-usage__header">
        <h2>Using a Prompt — One Method, Many Situations</h2>

        <p>
          A well-designed prompt with variables adapts to many real situations.
        </p>
      </header>

      <div className="prompt-usage__diagram">
        <article className="base-prompt">
          <span className="base-prompt__eyebrow">
            Base Prompt
          </span>

          <h3>Candidate Screening</h3>

          <span className="base-prompt__status">
            Approved · v2.1
          </span>

          <h4>Variables</h4>

          <div className="base-variable">
            <strong>{"{job_offer}"}</strong>
            <span>The specific job description</span>
          </div>

          <div className="base-variable">
            <strong>{"{company_context}"}</strong>
            <span>Company and team context</span>
          </div>

          <div className="base-variable">
            <strong>{"{candidate_cv}"}</strong>
            <span>The candidate’s CV content</span>
          </div>
        </article>

        <div className="usage-inputs">
          <h3 className="usage-column-title">
            Different Inputs
          </h3>

          <div className="usage-inputs__grid">
            <div className="usage-input">Job Offer A</div>
            <div className="usage-input">Company A</div>
            <div className="usage-input">Candidate X</div>
            <span className="usage-row-arrow" aria-hidden="true">→</span>

            <div className="usage-input">Job Offer B</div>
            <div className="usage-input">Company B</div>
            <div className="usage-input">Candidate Y</div>
            <span className="usage-row-arrow" aria-hidden="true">→</span>

            <div className="usage-input">Job Offer C</div>
            <div className="usage-input">Company C</div>
            <div className="usage-input">Candidate Z</div>
            <span className="usage-row-arrow" aria-hidden="true">→</span>
          </div>
        </div>

        <div className="usage-method">
          <h3 className="usage-column-title">
            Same Governed Method
          </h3>

          <article className="usage-method__card">
            <div className="usage-method__icon" aria-hidden="true">
              <span className="usage-document-icon" />
              <span className="usage-cycle-icon">↻</span>
            </div>

            <strong>Candidate Screening</strong>
            <span>(Same Prompt)</span>
          </article>
        </div>

        <div className="usage-results">
          <h3 className="usage-column-title">
            Different Results
          </h3>

          <div className="usage-results__list">
            <article className="usage-result">
              <span className="usage-result__person" aria-hidden="true" />
              <p>
                <strong>HR Evaluation Report</strong>
                <span>Candidate X</span>
              </p>
            </article>

            <article className="usage-result">
              <span className="usage-result__person" aria-hidden="true" />
              <p>
                <strong>HR Evaluation Report</strong>
                <span>Candidate Y</span>
              </p>
            </article>

            <article className="usage-result">
              <span className="usage-result__person" aria-hidden="true" />
              <p>
                <strong>HR Evaluation Report</strong>
                <span>Candidate Z</span>
              </p>
            </article>
          </div>
        </div>
      </div>

      <p className="prompt-usage__conclusion">
        <span aria-hidden="true">✓</span>
        Consistency, quality and compliance remain the same — only the variables change.
      </p>
    </section>
  </div>
</section>


{/* =====================================================
    SECTION 04 — PROMPT LIFECYCLE + ORGANIZATIONAL KNOWLEDGE
   ===================================================== */}

<section className="prompt-lifecycle" id="prompt-lifecycle">
  <div className="page-shell">
    <header className="prompt-lifecycle__header">
      <h2>Prompt Lifecycle</h2>
      <p>Prompts evolve and improve over time.</p>
    </header>

    <div className="lifecycle-flow">
      <article className="lifecycle-step lifecycle-step--cream">
        <div className="lifecycle-step__icon" aria-hidden="true">⌁</div>
        <h3>Working Need</h3>
        <p>A real operational<br />need emerges</p>
      </article>

      <span className="lifecycle-arrow" aria-hidden="true">→</span>

      <article className="lifecycle-step lifecycle-step--cream">
        <div className="lifecycle-step__icon" aria-hidden="true">✓</div>
        <h3>Create</h3>
        <p>Draft a prompt<br />to solve it</p>
      </article>

      <span className="lifecycle-arrow" aria-hidden="true">→</span>

      <article className="lifecycle-step lifecycle-step--cream">
        <div className="lifecycle-step__icon" aria-hidden="true">♙</div>
        <h3>Test</h3>
        <p>Try in real<br />situations</p>
      </article>

      <span className="lifecycle-arrow" aria-hidden="true">→</span>

      <article className="lifecycle-step lifecycle-step--gold">
        <div className="lifecycle-step__icon" aria-hidden="true">◇</div>
        <h3>Approve</h3>
        <p>Validate quality<br />and usefulness</p>
      </article>

      <span className="lifecycle-arrow" aria-hidden="true">→</span>

      <article className="lifecycle-step lifecycle-step--gold">
        <div className="lifecycle-step__icon lifecycle-step__icon--circle" aria-hidden="true">✓</div>
        <h3>Use</h3>
        <p>Share and use<br />in daily work</p>
      </article>

      <span className="lifecycle-arrow" aria-hidden="true">→</span>

      <article className="lifecycle-step lifecycle-step--cream">
        <div className="lifecycle-step__icon" aria-hidden="true">↻</div>
        <h3>Improve</h3>
        <p>Collect feedback<br />and refine</p>
      </article>

      <span className="lifecycle-arrow" aria-hidden="true">→</span>

      <article className="lifecycle-step lifecycle-step--blue">
        <div className="lifecycle-step__icon lifecycle-step__icon--circle" aria-hidden="true">✓</div>
        <h3>Version</h3>
        <p>New version<br />released</p>
      </article>

      <span className="lifecycle-arrow" aria-hidden="true">→</span>

      <article className="lifecycle-step lifecycle-step--gold lifecycle-step--archive">
        <div className="lifecycle-step__icon" aria-hidden="true">▱</div>
        <h3>Archive</h3>
        <p>Retire but<br />preserve</p>
      </article>

      <div className="lifecycle-loop" aria-hidden="true">
        <span>Continuous improvement</span>
      </div>
    </div>

    <section className="knowledge-flow">
      <header className="knowledge-flow__header">
        <h2>From Archive to Organizational Knowledge</h2>
        <p>Archived prompts are not deleted — they become knowledge assets.</p>
      </header>

      <div className="knowledge-flow__layout">
        <div className="knowledge-flow__main">
          <div className="knowledge-chain">
            <article className="knowledge-card knowledge-card--archive">
              <div className="knowledge-card__heading">
                <span className="knowledge-card__icon" aria-hidden="true">▤</span>
                <h3>Archived Prompts</h3>
              </div>
              <p>Past prompts and<br />their full history</p>
            </article>

            <span className="knowledge-arrow" aria-hidden="true">→</span>

            <article className="knowledge-card knowledge-card--versions">
              <div className="knowledge-card__heading">
                <span className="knowledge-card__icon" aria-hidden="true">☷</span>
                <h3>Versions + Decisions<br />+ Working Methods</h3>
              </div>
              <p>What changed,<br />why it changed,<br />what we learned</p>
            </article>

            <span className="knowledge-arrow" aria-hidden="true">→</span>

            <article className="knowledge-card knowledge-card--knowledge">
              <div className="knowledge-card__heading">
                <span className="knowledge-card__icon" aria-hidden="true">▣</span>
                <h3>Organizational<br />Knowledge</h3>
              </div>
              <p>Reusable, searchable,<br />and teachable</p>
            </article>
          </div>

          <div className="knowledge-message">
            <div className="knowledge-message__icon" aria-hidden="true">♧</div>
            <div>
              <strong>
                Prompts capture experience.
                <br />
                The Prompt Bank preserves it. Your organization grows because of it.
              </strong>
              <p>Right knowledge. Right people. Right time. Every time.</p>
            </div>
          </div>
        </div>

        <aside className="knowledge-enables">
          <h3>Enables</h3>
          <ul>
            <li>Employee training</li>
            <li>Onboarding &amp; upskilling</li>
            <li>Internal knowledge retrieval</li>
            <li>Workflow improvement</li>
            <li>Future organizational AI systems</li>
          </ul>
        </aside>
      </div>
    </section>
  </div>
</section>


{/* Closing bridge — Prompt Bank → Prompt Engineering Engine */}
<section className="prompt-bank-engine-bridge" aria-labelledby="prompt-bank-engine-bridge-title">
  <div className="page-shell">
    <div className="prompt-bank-engine-bridge__card">
      <div className="prompt-bank-engine-bridge__visual">
        <div className="prompt-bank-engine-bridge__halo">
          <img
            className="prompt-bank-engine-bridge__image"
            src={`${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}/images/prompt_agent.png`}
            alt="Prompt Engineering Agent illustration"
          />
        </div>
      </div>

      <div className="prompt-bank-engine-bridge__content">
        <p className="prompt-bank-engine-bridge__eyebrow">
          From Prompt Bank to Prompt Engineering
        </p>

        <h2 id="prompt-bank-engine-bridge-title">
          Reusable organizational knowledge becomes reusable prompt engineering.
        </h2>

        <p className="prompt-bank-engine-bridge__text">
          The Prompt Bank preserves proven working knowledge. The Prompt Engineering
          Engine turns that knowledge into task-specific prompt architectures for
          changing AI executors and working environments.
        </p>

        <a
          className="prompt-bank-engine-bridge__link"
          href={`${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}/projects/prompt-engineering-agent/`}
        >
          Open Prompt Engineering Engine
          <span aria-hidden="true">→</span>
        </a>
      </div>

      <div className="prompt-bank-engine-bridge__signal" aria-hidden="true">
        <span />
        <span />
        <span />
        <span />
        <span />
      </div>
    </div>
  </div>
</section>

      <footer className="prompt-bank-footer">
        <p>© 2026 Product Owner. All rights reserved.</p>
      </footer>

    </main>
  );
}
