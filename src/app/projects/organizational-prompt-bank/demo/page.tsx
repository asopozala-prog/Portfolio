"use client";

// Interactive Organizational Prompt Bank demonstration built from 100 real prompt files.

import { useEffect, useMemo, useState } from "react";

import PromptSystemNav from "@/components/prompt-system-nav";
type PromptRef = {
  id: string;
  folder: string;
  filename: string;
};

type PromptAsset = PromptRef & {
  title: string;
  task: string;
  executorType: string;
  executor: string;
  environment: string;
  departments: string[];
  functions: string[];
  intro: string;
  sections: { heading: string; lines: string[] }[];
  raw: string;
};

const promptRefs: PromptRef[] = [
  { id: "01", folder: "organizational_prompt_bank_demo_25", filename: "01_client_correspondence_review.md" },
  { id: "02", folder: "organizational_prompt_bank_demo_25", filename: "02_financial_anomaly_analysis.md" },
  { id: "03", folder: "organizational_prompt_bank_demo_25", filename: "03_meeting_decision_extraction.md" },
  { id: "04", folder: "organizational_prompt_bank_demo_25", filename: "04_policy_document_refinement.md" },
  { id: "05", folder: "organizational_prompt_bank_demo_25", filename: "05_executive_presentation_creation.md" },
  { id: "06", folder: "organizational_prompt_bank_demo_25", filename: "06_customer_email_response_preparation.md" },
  { id: "07", folder: "organizational_prompt_bank_demo_25", filename: "07_project_documentation_synthesis.md" },
  { id: "08", folder: "organizational_prompt_bank_demo_25", filename: "08_monthly_performance_trend_analysis.md" },
  { id: "09", folder: "organizational_prompt_bank_demo_25", filename: "09_management_briefing_deck_preparation.md" },
  { id: "10", folder: "organizational_prompt_bank_demo_25", filename: "10_internal_document_discovery.md" },
  { id: "11", folder: "organizational_prompt_bank_demo_25", filename: "11_multi_document_evidence_comparison.md" },
  { id: "12", folder: "organizational_prompt_bank_demo_25", filename: "12_market_research_synthesis.md" },
  { id: "13", folder: "organizational_prompt_bank_demo_25", filename: "13_business_scenario_evaluation.md" },
  { id: "14", folder: "organizational_prompt_bank_demo_25", filename: "14_long_policy_review.md" },
  { id: "15", folder: "organizational_prompt_bank_demo_25", filename: "15_contract_version_comparison.md" },
  { id: "16", folder: "organizational_prompt_bank_demo_25", filename: "16_research_dossier_synthesis.md" },
  { id: "17", folder: "organizational_prompt_bank_demo_25", filename: "17_python_unit_test_generation.md" },
  { id: "18", folder: "organizational_prompt_bank_demo_25", filename: "18_legacy_code_explanation.md" },
  { id: "19", folder: "organizational_prompt_bank_demo_25", filename: "19_customer_account_briefing.md" },
  { id: "20", folder: "organizational_prompt_bank_demo_25", filename: "20_sales_opportunity_prioritization.md" },
  { id: "21", folder: "organizational_prompt_bank_demo_25", filename: "21_support_case_triage.md" },
  { id: "22", folder: "organizational_prompt_bank_demo_25", filename: "22_internal_knowledge_article_creation.md" },
  { id: "23", folder: "organizational_prompt_bank_demo_25", filename: "23_project_knowledge_consolidation.md" },
  { id: "24", folder: "organizational_prompt_bank_demo_25", filename: "24_internal_policy_question_answering.md" },
  { id: "25", folder: "organizational_prompt_bank_demo_25", filename: "25_confidential_document_information_extraction.md" },
  { id: "26", folder: "organizational_prompt_bank_demo_26_50", filename: "26_regulatory_document_requirement_extraction.md" },
  { id: "27", folder: "organizational_prompt_bank_demo_26_50", filename: "27_budget_variance_explanation.md" },
  { id: "28", folder: "organizational_prompt_bank_demo_26_50", filename: "28_client_email_action_extraction.md" },
  { id: "29", folder: "organizational_prompt_bank_demo_26_50", filename: "29_quarterly_business_review_preparation.md" },
  { id: "30", folder: "organizational_prompt_bank_demo_26_50", filename: "30_cross_team_meeting_follow_up.md" },
  { id: "31", folder: "organizational_prompt_bank_demo_26_50", filename: "31_supplier_correspondence_review.md" },
  { id: "32", folder: "organizational_prompt_bank_demo_26_50", filename: "32_standard_operating_procedure_creation.md" },
  { id: "33", folder: "organizational_prompt_bank_demo_26_50", filename: "33_operational_cost_comparison.md" },
  { id: "34", folder: "organizational_prompt_bank_demo_26_50", filename: "34_sales_performance_presentation_preparation.md" },
  { id: "35", folder: "organizational_prompt_bank_demo_26_50", filename: "35_project_file_classification.md" },
  { id: "36", folder: "organizational_prompt_bank_demo_26_50", filename: "36_competitor_intelligence_synthesis.md" },
  { id: "37", folder: "organizational_prompt_bank_demo_26_50", filename: "37_multi_source_management_briefing.md" },
  { id: "38", folder: "organizational_prompt_bank_demo_26_50", filename: "38_business_process_improvement_analysis.md" },
  { id: "39", folder: "organizational_prompt_bank_demo_26_50", filename: "39_complex_document_information_extraction.md" },
  { id: "40", folder: "organizational_prompt_bank_demo_26_50", filename: "40_policy_consistency_review.md" },
  { id: "41", folder: "organizational_prompt_bank_demo_26_50", filename: "41_research_findings_consolidation.md" },
  { id: "42", folder: "organizational_prompt_bank_demo_26_50", filename: "42_api_integration_implementation_support.md" },
  { id: "43", folder: "organizational_prompt_bank_demo_26_50", filename: "43_code_refactoring_review.md" },
  { id: "44", folder: "organizational_prompt_bank_demo_26_50", filename: "44_customer_service_case_classification.md" },
  { id: "45", folder: "organizational_prompt_bank_demo_26_50", filename: "45_customer_retention_risk_analysis.md" },
  { id: "46", folder: "organizational_prompt_bank_demo_26_50", filename: "46_internal_process_documentation.md" },
  { id: "47", folder: "organizational_prompt_bank_demo_26_50", filename: "47_project_decision_history_synthesis.md" },
  { id: "48", folder: "organizational_prompt_bank_demo_26_50", filename: "48_internal_knowledge_retrieval.md" },
  { id: "49", folder: "organizational_prompt_bank_demo_26_50", filename: "49_cross_department_workflow_routing.md" },
  { id: "50", folder: "organizational_prompt_bank_demo_26_50", filename: "50_confidential_financial_document_review.md" },
  { id: "51", folder: "organizational_prompt_bank_demo_51_75", filename: "51_management_report_executive_summary.md" },
  { id: "52", folder: "organizational_prompt_bank_demo_51_75", filename: "52_cash_flow_trend_review.md" },
  { id: "53", folder: "organizational_prompt_bank_demo_51_75", filename: "53_unresolved_correspondence_identification.md" },
  { id: "54", folder: "organizational_prompt_bank_demo_51_75", filename: "54_strategy_proposal_presentation.md" },
  { id: "55", folder: "organizational_prompt_bank_demo_51_75", filename: "55_meeting_risk_and_issue_identification.md" },
  { id: "56", folder: "organizational_prompt_bank_demo_51_75", filename: "56_customer_complaint_analysis.md" },
  { id: "57", folder: "organizational_prompt_bank_demo_51_75", filename: "57_internal_guideline_consistency_review.md" },
  { id: "58", folder: "organizational_prompt_bank_demo_51_75", filename: "58_workforce_data_trend_analysis.md" },
  { id: "59", folder: "organizational_prompt_bank_demo_51_75", filename: "59_employee_onboarding_presentation.md" },
  { id: "60", folder: "organizational_prompt_bank_demo_51_75", filename: "60_shared_drive_document_organization_review.md" },
  { id: "61", folder: "organizational_prompt_bank_demo_51_75", filename: "61_strategic_option_comparison.md" },
  { id: "62", folder: "organizational_prompt_bank_demo_51_75", filename: "62_customer_feedback_theme_discovery.md" },
  { id: "63", folder: "organizational_prompt_bank_demo_51_75", filename: "63_industry_development_research.md" },
  { id: "64", folder: "organizational_prompt_bank_demo_51_75", filename: "64_multi_document_requirement_mapping.md" },
  { id: "65", folder: "organizational_prompt_bank_demo_51_75", filename: "65_long_form_business_report_analysis.md" },
  { id: "66", folder: "organizational_prompt_bank_demo_51_75", filename: "66_knowledge_source_contradiction_review.md" },
  { id: "67", folder: "organizational_prompt_bank_demo_51_75", filename: "67_code_documentation_generation.md" },
  { id: "68", folder: "organizational_prompt_bank_demo_51_75", filename: "68_error_handling_improvement_review.md" },
  { id: "69", folder: "organizational_prompt_bank_demo_51_75", filename: "69_sales_pipeline_summary.md" },
  { id: "70", folder: "organizational_prompt_bank_demo_51_75", filename: "70_customer_inquiry_routing.md" },
  { id: "71", folder: "organizational_prompt_bank_demo_51_75", filename: "71_internal_knowledge_gap_identification.md" },
  { id: "72", folder: "organizational_prompt_bank_demo_51_75", filename: "72_team_project_status_synthesis.md" },
  { id: "73", folder: "organizational_prompt_bank_demo_51_75", filename: "73_employee_policy_knowledge_retrieval.md" },
  { id: "74", folder: "organizational_prompt_bank_demo_51_75", filename: "74_internal_request_classification_and_routing.md" },
  { id: "75", folder: "organizational_prompt_bank_demo_51_75", filename: "75_confidential_personnel_document_analysis.md" },
  { id: "76", folder: "organizational_prompt_bank_demo_76_100", filename: "76_procedure_document_gap_review.md" },
  { id: "77", folder: "organizational_prompt_bank_demo_76_100", filename: "77_expense_category_analysis.md" },
  { id: "78", folder: "organizational_prompt_bank_demo_76_100", filename: "78_correspondence_priority_assessment.md" },
  { id: "79", folder: "organizational_prompt_bank_demo_76_100", filename: "79_financial_results_presentation.md" },
  { id: "80", folder: "organizational_prompt_bank_demo_76_100", filename: "80_meeting_topic_and_commitment_tracking.md" },
  { id: "81", folder: "organizational_prompt_bank_demo_76_100", filename: "81_recruitment_correspondence_summary.md" },
  { id: "82", folder: "organizational_prompt_bank_demo_76_100", filename: "82_job_description_refinement.md" },
  { id: "83", folder: "organizational_prompt_bank_demo_76_100", filename: "83_marketing_campaign_performance_analysis.md" },
  { id: "84", folder: "organizational_prompt_bank_demo_76_100", filename: "84_project_progress_presentation.md" },
  { id: "85", folder: "organizational_prompt_bank_demo_76_100", filename: "85_shared_knowledge_file_discovery.md" },
  { id: "86", folder: "organizational_prompt_bank_demo_76_100", filename: "86_regulatory_change_impact_research.md" },
  { id: "87", folder: "organizational_prompt_bank_demo_76_100", filename: "87_survey_response_classification.md" },
  { id: "88", folder: "organizational_prompt_bank_demo_76_100", filename: "88_process_alternatives_evaluation.md" },
  { id: "89", folder: "organizational_prompt_bank_demo_76_100", filename: "89_document_chronology_reconstruction.md" },
  { id: "90", folder: "organizational_prompt_bank_demo_76_100", filename: "90_multiple_stakeholder_position_comparison.md" },
  { id: "91", folder: "organizational_prompt_bank_demo_76_100", filename: "91_large_knowledge_collection_synthesis.md" },
  { id: "92", folder: "organizational_prompt_bank_demo_76_100", filename: "92_existing_function_test_coverage_review.md" },
  { id: "93", folder: "organizational_prompt_bank_demo_76_100", filename: "93_repetitive_code_transformation.md" },
  { id: "94", folder: "organizational_prompt_bank_demo_76_100", filename: "94_customer_interaction_pattern_analysis.md" },
  { id: "95", folder: "organizational_prompt_bank_demo_76_100", filename: "95_service_case_resolution_summary.md" },
  { id: "96", folder: "organizational_prompt_bank_demo_76_100", filename: "96_meeting_knowledge_conversion.md" },
  { id: "97", folder: "organizational_prompt_bank_demo_76_100", filename: "97_project_risk_register_preparation.md" },
  { id: "98", folder: "organizational_prompt_bank_demo_76_100", filename: "98_internal_procedure_comparison.md" },
  { id: "99", folder: "organizational_prompt_bank_demo_76_100", filename: "99_organizational_request_triage.md" },
  { id: "100", folder: "organizational_prompt_bank_demo_76_100", filename: "100_confidential_agreement_comparison.md" },
];

function splitTags(value = "") {
  return value
    .split(",")
    .map((part) => part.trim())
    .filter(Boolean);
}

function cleanMarkdownLine(line: string) {
  return line.replace(/^[-*]\s+/, "").replace(/`/g, "");
}

function parsePromptMarkdown(ref: PromptRef, markdown: string): PromptAsset {
  const lines = markdown.split(/\r?\n/);
  const metadata: Record<string, string> = {};
  const sections: PromptAsset["sections"] = [];

  let title = "";
  let intro = "";
  let currentHeading = "";
  let currentLines: string[] = [];
  let afterDivider = false;

  const flush = () => {
    if (currentHeading) {
      sections.push({ heading: currentHeading, lines: currentLines });
      currentHeading = "";
      currentLines = [];
    }
  };

  for (const rawLine of lines) {
    const line = rawLine.trimEnd();

    if (line.startsWith("# ") && !title) {
      title = line.slice(2).trim();
      continue;
    }

    const metadataMatch = line.match(/^\*\*(.+?):\*\*\s+`(.+)`$/);
    if (metadataMatch) {
      metadata[metadataMatch[1]] = metadataMatch[2];
      continue;
    }

    if (line === "---") {
      afterDivider = true;
      continue;
    }

    if (!afterDivider) continue;

    if (line.startsWith("## ")) {
      flush();
      currentHeading = line.slice(3).trim();
      continue;
    }

    if (!currentHeading && line.trim()) {
      intro += `${intro ? " " : ""}${line.trim()}`;
      continue;
    }

    if (currentHeading && line.trim()) {
      currentLines.push(line.trim());
    }
  }

  flush();

  return {
    ...ref,
    title,
    task: metadata["Task"] || title.replace(/^\d+\s+[—-]\s+/, ""),
    executorType: metadata["Executor Type"] || "",
    executor: metadata["Executor"] || "",
    environment: metadata["Environment"] || "",
    departments: splitTags(metadata["Department Tags"]),
    functions: splitTags(metadata["Function Tags"]),
    intro,
    sections,
    raw: markdown,
  };
}

function unique(values: string[]) {
  return Array.from(new Set(values)).sort((a, b) => a.localeCompare(b));
}

export default function OrganizationalPromptBankDemoPage() {
  const [assets, setAssets] = useState<PromptAsset[]>([]);
  const [search, setSearch] = useState("");
  const [tagSearch, setTagSearch] = useState("");
  const [selectedId, setSelectedId] = useState("01");
  const [loading, setLoading] = useState(true);
  const [loadError, setLoadError] = useState("");

  const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

  useEffect(() => {
    let cancelled = false;

    async function loadAllPrompts() {
      setLoading(true);
      setLoadError("");

      try {
        const loaded = await Promise.all(
          promptRefs.map(async (ref) => {
            const url = `${basePath}/${ref.folder}/${encodeURIComponent(ref.filename)}`;
            const response = await fetch(url);

            if (!response.ok) {
              throw new Error(`Failed to load ${ref.filename} (${response.status}).`);
            }

            return parsePromptMarkdown(ref, await response.text());
          }),
        );

        if (!cancelled) setAssets(loaded);
      } catch (error) {
        if (!cancelled) {
          setLoadError(
            error instanceof Error ? error.message : "Could not load prompt bank.",
          );
        }
      } finally {
        if (!cancelled) setLoading(false);
      }
    }

    loadAllPrompts();

    return () => {
      cancelled = true;
    };
  }, [basePath]);

  const tagLibrary = useMemo(
    () =>
      unique([
        ...assets.flatMap((item) => item.departments),
        ...assets.flatMap((item) => item.functions),
      ]),
    [assets],
  );

  const filteredAssets = useMemo(() => {
    const query = search.trim().toLowerCase();
    const tagQuery = tagSearch.trim().toLowerCase();

    return assets.filter((item) => {
      const searchable = [
        item.task,
        item.executorType,
        item.executor,
        item.environment,
        ...item.departments,
        ...item.functions,
      ]
        .join(" ")
        .toLowerCase();

      const searchableTags = [...item.departments, ...item.functions]
        .join(" ")
        .toLowerCase();

      return (
        (!query || searchable.includes(query)) &&
        (!tagQuery || searchableTags.includes(tagQuery))
      );
    });
  }, [assets, search, tagSearch]);

  const selectedAsset =
    assets.find((item) => item.id === selectedId) ??
    filteredAssets[0] ??
    assets[0];

  function resetSearch() {
    setSearch("");
    setTagSearch("");
  }

  return (
    <main className="prompt-demo">
      <PromptSystemNav active="demo" />
      <div className="page-shell">
        <header className="prompt-demo__header">
<h1>Prompt Bank — Interactive Demonstration</h1>
          <p>Find the right prompt in seconds.</p>

          <p className="prompt-demo__notice">
            Demonstration only — these prompts illustrate the organizational prompt-bank concept and are not intended for direct operational use.
          </p>
        </header>

        <div className="prompt-demo__workspace">
          <aside className="prompt-demo__left">
            <section className="prompt-filters">
              <h2>Search &amp; Tags</h2>

              <div className="prompt-filters__form">
                <label className="prompt-search">
                  <span className="sr-only">Search prompts</span>
                  <input
                    type="search"
                    value={search}
                    onChange={(event) => setSearch(event.target.value)}
                    placeholder="What do you need to do?"
                  />
                  <span className="prompt-search__icon" aria-hidden="true" />
                </label>

                <div className="prompt-filters__divider" />

                <div className="prompt-filters__heading">
                  <h3>Search by tags</h3>
                  <button type="button" onClick={resetSearch}>Reset</button>
                </div>

                <label className="prompt-tag-search">
                  <span className="sr-only">Search prompt tags</span>
                  <input
                    type="search"
                    value={tagSearch}
                    onChange={(event) => setTagSearch(event.target.value)}
                    placeholder="e.g. analysis, HR, extraction"
                  />
                </label>

                <div className="prompt-tag-reference">
                  <span className="prompt-tag-reference__label">Keyword reference</span>
                  <p>{tagLibrary.join(", ")}</p>
                </div>
              </div>
            </section>

            <section className="selected-prompt">
              <span className="selected-prompt__eyebrow">Selected Prompt</span>

              {loading && <p className="selected-prompt__message">Loading prompt bank…</p>}
              {loadError && <p className="selected-prompt__message">{loadError}</p>}

              {selectedAsset && (
                <>
                  <header className="selected-prompt__header">
                    <h2>{selectedAsset.task}</h2>
                    <p>{selectedAsset.executor} · {selectedAsset.environment}</p>
                  </header>

                  <section className="selected-prompt__section">
                    <h3>Preview</h3>
                    <div className="selected-prompt__preview">
                      <p>{selectedAsset.intro}</p>
                    </div>
                  </section>

                  <section className="selected-prompt__section">
                    <h3>Details</h3>
                    <dl className="selected-prompt__details">
                      <div><dt>Executor Type</dt><dd>{selectedAsset.executorType}</dd></div>
                      <div><dt>Executor</dt><dd>{selectedAsset.executor}</dd></div>
                      <div><dt>Environment</dt><dd>{selectedAsset.environment}</dd></div>
                      <div><dt>Department Tags</dt><dd>{selectedAsset.departments.join(", ")}</dd></div>
                      <div><dt>Function Tags</dt><dd>{selectedAsset.functions.join(", ")}</dd></div>
                    </dl>
                  </section>
                </>
              )}
            </section>
          </aside>

          <section className="prompt-results">
            <header className="prompt-results__header">
              <h2>Prompt Results ({filteredAssets.length})</h2>
            </header>

            <div className="prompt-results__scroll">
              <div className="prompt-results__table">
                <div className="prompt-row prompt-row--header">
                  <span>#</span>
                  <span>Task</span>
                  <span>Executor</span>
                  <span>Environment</span>
                  <span>Department Tags</span>
                  <span>Function Tags</span>
                </div>

                {filteredAssets.map((item) => (
                  <button
                    className={`prompt-row${
                      item.id === selectedAsset?.id ? " prompt-row--selected" : ""
                    }`}
                    key={item.id}
                    type="button"
                    onClick={() => setSelectedId(item.id)}
                  >
                    <span>{item.id}</span>
                    <strong>{item.task}</strong>
                    <span>{item.executor}</span>
                    <span>{item.environment}</span>
                    <span>{item.departments.join(", ")}</span>
                    <span>{item.functions.join(", ")}</span>
                  </button>
                ))}

                {!loading && filteredAssets.length === 0 && (
                  <p className="prompt-results__empty">No prompts match this search.</p>
                )}
              </div>
            </div>

            <footer className="prompt-results__pagination">
              <span>
                {loading
                  ? "Loading…"
                  : filteredAssets.length === 0
                    ? "0 results"
                    : `1–${filteredAssets.length} of ${filteredAssets.length}`}
              </span>
            </footer>
          </section>
        </div>

        <section className="prompt-full-preview" aria-labelledby="prompt-full-preview-title">
          <header className="prompt-full-preview__header">
            <p className="prompt-full-preview__eyebrow">Full Prompt File</p>
            <h2 id="prompt-full-preview-title">
              {selectedAsset?.task ?? "Select a prompt"}
            </h2>
            <p>
              This section shows the complete demonstration prompt exactly as stored in the prompt bank file.
            </p>
          </header>

          <div className="prompt-full-preview__panel">
            {loading && <p className="prompt-full-preview__message">Loading prompt bank…</p>}
            {loadError && <p className="prompt-full-preview__message">{loadError}</p>}

            {selectedAsset && (
              <>
                <div className="prompt-full-preview__meta">
                  <span>{selectedAsset.id}</span>
                  <span>{selectedAsset.executor}</span>
                  <span>{selectedAsset.environment}</span>
                </div>

                <article className="prompt-full-preview__document">
                  <h3>{selectedAsset.title}</h3>

                  <dl className="prompt-full-preview__details">
                    <div><dt>Executor Type</dt><dd>{selectedAsset.executorType}</dd></div>
                    <div><dt>Executor</dt><dd>{selectedAsset.executor}</dd></div>
                    <div><dt>Environment</dt><dd>{selectedAsset.environment}</dd></div>
                    <div><dt>Department Tags</dt><dd>{selectedAsset.departments.join(", ")}</dd></div>
                    <div><dt>Function Tags</dt><dd>{selectedAsset.functions.join(", ")}</dd></div>
                    <div><dt>Task</dt><dd>{selectedAsset.task}</dd></div>
                  </dl>

                  {selectedAsset.intro && (
                    <p className="prompt-full-preview__intro">{selectedAsset.intro}</p>
                  )}

                  {selectedAsset.sections.map((section) => (
                    <section className="prompt-full-preview__section" key={section.heading}>
                      <h4>{section.heading}</h4>

                      {section.lines.some((line) => /^[-*]\s+/.test(line)) ? (
                        <ul>
                          {section.lines.map((line, index) => (
                            <li key={`${section.heading}-${index}`}>
                              {cleanMarkdownLine(line)}
                            </li>
                          ))}
                        </ul>
                      ) : (
                        section.lines.map((line, index) => (
                          <p key={`${section.heading}-${index}`}>
                            {cleanMarkdownLine(line)}
                          </p>
                        ))
                      )}
                    </section>
                  ))}
                </article>
              </>
            )}
          </div>
        </section>

{/* Portfolio closing section — real image + portfolio link */}
<section className="prompt-bank-closing" aria-labelledby="prompt-bank-closing-title">
  <div className="prompt-bank-closing__visual">
    <img
      className="prompt-bank-closing__image"
      src={`${basePath}/images/Prompt_bank.png`}
      alt="Organizational Prompt Bank illustration"
    />
  </div>

  <div className="prompt-bank-closing__content">
    <p className="prompt-bank-closing__note">
      <span aria-hidden="true">i</span>
      This is a synthetic demonstration dataset designed to illustrate how an
      Organizational Prompt Bank can be structured and managed.
    </p>

    <h2 id="prompt-bank-closing-title">
      A framework for building a living Organizational Prompt Bank — created
      from your organization’s real roles and tasks, enriched through use and
      feedback, and continuously developed within the specific context of your
      AI executors, internal systems, workflows, operational structure, access
      rules, and organizational knowledge.
    </h2>

    <a
      className="prompt-bank-closing__home"
      href="https://asopozala-prog.github.io/Portfolio/"
    >
      Visit product owner’s portfolio home
      <span aria-hidden="true">→</span>
    </a>
  </div>
</section>

<footer className="prompt-bank-footer">
  <p>© 2026 Product Owner. All rights reserved.</p>
</footer>


      </div>
    </main>
  );
}
