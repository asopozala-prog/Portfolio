"use client";

// Synthetic Data & Business Simulation project page with an interactive file preview.

import { useEffect, useMemo, useState } from "react";

type ProjectFile = {
  name: string;
  type: "csv" | "txt" | "md" | "pdf" | "rtf";
  label: string;
};

const files: ProjectFile[] = [
  { name: "Data_Dictionary-Table 1.csv", type: "csv", label: "CSV" },
  { name: "Monthly_Counts-Table 1.csv", type: "csv", label: "CSV" },
  {
    name: "Mushroom House Berlin — Business Documentation.rtf",
    type: "rtf",
    label: "RTF",
  },
  {
    name: "Mushroom House Monthly Order Schema 2011 2026.pdf",
    type: "pdf",
    label: "PDF",
  },
  {
    name: "Mushroom_House_Berlin_II_Business_Plan_2027.md",
    type: "md",
    label: "Markdown",
  },
  {
    name: "Mushroom_House_Business_Documentation.md",
    type: "md",
    label: "Markdown",
  },
  {
    name: "Mushroom_House_Orders_Receipts_2009_Apr-Jun.txt",
    type: "txt",
    label: "Text",
  },
  {
    name: "Mushroom_House_Orders_Receipts_2009_Jan-Mar.txt",
    type: "txt",
    label: "Text",
  },
  {
    name: "Mushroom_shop_Order_Archive_2014_2025_7450.csv",
    type: "csv",
    label: "CSV",
  },
  {
    name: "Orders_2014_2025-Table 1.csv",
    type: "csv",
    label: "CSV",
  },
  {
    name: "Thomas Mariño — Owner Portrait & Operational Profile.pdf",
    type: "pdf",
    label: "PDF",
  },
  {
    name: "Thomas Mariño — Owner Portrait & Operational Profile.rtf",
    type: "rtf",
    label: "RTF",
  },
  {
    name: "mushroom_orders_recipes_v1.csv",
    type: "csv",
    label: "CSV",
  },
  {
    name: "mushroom_orders_v1.csv",
    type: "csv",
    label: "CSV",
  },
  {
    name: "orders_archive_2014_2025_clean.csv",
    type: "csv",
    label: "CSV",
  },
];

const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
const projectFilesBasePath =
  `${basePath}/project-files/synthetic-data-business-simulation`;

function parseCsvLine(line: string) {
  const cells: string[] = [];
  let current = "";
  let quoted = false;

  for (let i = 0; i < line.length; i += 1) {
    const char = line[i];

    if (char === '"') {
      if (quoted && line[i + 1] === '"') {
        current += '"';
        i += 1;
      } else {
        quoted = !quoted;
      }
    } else if (char === "," && !quoted) {
      cells.push(current);
      current = "";
    } else {
      current += char;
    }
  }

  cells.push(current);
  return cells;
}

export default function SyntheticDataBusinessSimulationPage() {
  const [selectedFile, setSelectedFile] = useState<ProjectFile>(files[0]);
  const [textPreview, setTextPreview] = useState("");
  const [csvRows, setCsvRows] = useState<string[][]>([]);
  const [loading, setLoading] = useState(false);
  const [previewError, setPreviewError] = useState("");

  const fileUrl = useMemo(
    () => `${projectFilesBasePath}/${encodeURIComponent(selectedFile.name)}`,
    [selectedFile],
  );

  useEffect(() => {
    let cancelled = false;

    async function loadPreview() {
      setTextPreview("");
      setCsvRows([]);
      setPreviewError("");

      if (!["txt", "md", "csv"].includes(selectedFile.type)) {
        return;
      }

      setLoading(true);

      try {
        const response = await fetch(fileUrl);

        if (!response.ok) {
          throw new Error(`Preview could not be loaded (${response.status}).`);
        }

        const text = await response.text();

        if (cancelled) return;

        if (selectedFile.type === "csv") {
          const rows = text
            .split(/\r?\n/)
            .filter(Boolean)
            .slice(0, 51)
            .map(parseCsvLine);

          setCsvRows(rows);
        } else {
          setTextPreview(text.slice(0, 50000));
        }
      } catch (error) {
        if (!cancelled) {
          setPreviewError(
            error instanceof Error ? error.message : "Preview could not be loaded.",
          );
        }
      } finally {
        if (!cancelled) setLoading(false);
      }
    }

    loadPreview();

    return () => {
      cancelled = true;
    };
  }, [fileUrl, selectedFile.type]);

  return (
    <main className="simulation-project">
      <div className="page-shell">
        <header className="simulation-project__header">
          <p className="simulation-project__breadcrumb">
            Projects <span>/</span> Synthetic Data &amp; Business Simulation
          </p>

          <h1 className="simulation-project__title">
            Synthetic Data &amp;
            <br />
            Business Simulation
          </h1>

          <p className="simulation-project__intro">
            Designing realistic synthetic business environments where data reflects
            operational structure, long-term development, seasonality and edge cases
            for ML training, testing and product demonstration.
          </p>

          <ul className="simulation-project__tags" aria-label="Project themes">
            <li>Synthetic Data Architecture</li>
            <li>Business Simulation</li>
            <li>Data Modeling</li>
            <li>ML Test Data</li>
            <li>Privacy-Preserving Data</li>
          </ul>
        </header>

        <div className="simulation-process__heading">
          <span />
          <h2>From Business Logic to ML-Ready Data</h2>
          <span />
        </div>

        <div className="simulation-process">
          <article className="simulation-step">
            <div className="simulation-step__number">01</div>
            <div
              className="simulation-step__icon simulation-step__icon--business"
              aria-hidden="true"
            >
              <span className="business-icon" />
            </div>
            <p className="simulation-step__label">Business Model</p>
            <p className="simulation-step__text">
              Start with the company itself: owner profile, operating logic,
              B2B/B2C workflows, products, suppliers, customers and long-term history.
            </p>
            <span className="simulation-step__arrow" aria-hidden="true">→</span>
          </article>

          <article className="simulation-step">
            <div className="simulation-step__number">02</div>
            <div
              className="simulation-step__icon simulation-step__icon--schema"
              aria-hidden="true"
            >
              <span className="schema-icon"><i /><i /><i /></span>
            </div>
            <p className="simulation-step__label">Data Schema</p>
            <p className="simulation-step__text">
              Translate the business into connected operational datasets: orders,
              inventory, customers, suppliers, products, seasonality and business events.
            </p>
            <span className="simulation-step__arrow" aria-hidden="true">→</span>
          </article>

          <article className="simulation-step">
            <div className="simulation-step__number">03</div>
            <div
              className="simulation-step__icon simulation-step__icon--complexity"
              aria-hidden="true"
            >
              <span className="complexity-icon" />
            </div>
            <p className="simulation-step__label">Real-World<br />Complexity</p>
            <p className="simulation-step__text">
              Preserve growth phases, crises, seasonal fluctuations, operational
              pressure and edge cases — not flat random values.
            </p>
            <span className="simulation-step__arrow" aria-hidden="true">→</span>
          </article>

          <article className="simulation-step">
            <div className="simulation-step__number">04</div>
            <div
              className="simulation-step__icon simulation-step__icon--ready"
              aria-hidden="true"
            >
              <span className="ready-icon" />
            </div>
            <p className="simulation-step__label">ML-Ready<br />Environment</p>
            <p className="simulation-step__text">
              Generate scalable data for model training, testing, prototyping and
              product demonstration without exposing sensitive real business data.
            </p>
          </article>
        </div>

        <div className="simulation-facts">
          <div className="simulation-fact"><span className="simulation-fact__icon">▦</span><p><strong>15+ years</strong><br />simulated history</p></div>
          <div className="simulation-fact"><span className="simulation-fact__icon">↗</span><p>linked<br />operational datasets</p></div>
          <div className="simulation-fact"><span className="simulation-fact__icon">◎</span><p>B2B + B2C</p></div>
          <div className="simulation-fact"><span className="simulation-fact__icon">▥</span><p>seasonality</p></div>
          <div className="simulation-fact"><span className="simulation-fact__icon">△</span><p>crises</p></div>
          <div className="simulation-fact"><span className="simulation-fact__icon">⌁</span><p>edge cases</p></div>
        </div>

        <div className="simulation-principles">
          {[
            ["☷", "Business Realism", "Reflects how the business actually operates over time."],
            ["⎈", "Operational Structure", "Connected datasets with consistent logic and rules."],
            ["↗", "Complexity by Design", "Growth, pressure, seasonality and rare events included."],
            ["♢", "Privacy First", "Realistic data without exposing real business or customer information."],
          ].map(([icon, title, text]) => (
            <article className="simulation-principle" key={title}>
              <div className="simulation-principle__icon" aria-hidden="true">{icon}</div>
              <div>
                <h3 className="simulation-principle__title">{title}</h3>
                <span className="simulation-principle__line" />
                <p className="simulation-principle__text">{text}</p>
              </div>
            </article>
          ))}
        </div>

        <section className="simulation-files" aria-labelledby="simulation-files-title">
          <div className="simulation-files__heading">
            <p className="eyebrow">Synthetic Environment</p>
            <h2 id="simulation-files-title">Explore the generated business files</h2>
            <p>
              Select a file to inspect a browser preview. Large CSV files show the first
              50 rows; RTF files remain available to open or download.
            </p>
          </div>

          <div className="simulation-file-browser">
            <div className="simulation-file-list" role="list" aria-label="Project files">
              <div className="simulation-file-list__header">
                <span>File</span>
                <span>Type</span>
              </div>

              {files.map((file) => (
                <button
                  key={file.name}
                  type="button"
                  className={`simulation-file-row${
                    selectedFile.name === file.name ? " simulation-file-row--active" : ""
                  }`}
                  onClick={() => setSelectedFile(file)}
                >
                  <span className="simulation-file-row__name">{file.name}</span>
                  <span className="simulation-file-row__type">{file.label}</span>
                </button>
              ))}
            </div>

            <div className="simulation-preview">
              <div className="simulation-preview__toolbar">
                <div>
                  <p className="simulation-preview__eyebrow">Preview</p>
                  <h3>{selectedFile.name}</h3>
                </div>

                <a href={fileUrl} target="_blank" rel="noopener noreferrer">
                  Open file ↗
                </a>
              </div>

              <div className="simulation-preview__body">
                {loading && <p className="simulation-preview__message">Loading preview…</p>}
                {previewError && <p className="simulation-preview__message">{previewError}</p>}

                {!loading && !previewError && selectedFile.type === "pdf" && (
                  <iframe src={fileUrl} title={selectedFile.name} />
                )}

                {!loading && !previewError && ["txt", "md"].includes(selectedFile.type) && (
                  <pre className="simulation-preview__text">{textPreview}</pre>
                )}

                {!loading && !previewError && selectedFile.type === "csv" && (
                  <div className="simulation-preview__table-wrap">
                    {csvRows.length > 0 ? (
                      <table className="simulation-preview__table">
                        <thead>
                          <tr>
                            {csvRows[0].map((cell, index) => (
                              <th key={`${cell}-${index}`}>{cell}</th>
                            ))}
                          </tr>
                        </thead>
                        <tbody>
                          {csvRows.slice(1).map((row, rowIndex) => (
                            <tr key={rowIndex}>
                              {row.map((cell, cellIndex) => (
                                <td key={cellIndex}>{cell}</td>
                              ))}
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    ) : (
                      <p className="simulation-preview__message">No CSV rows found.</p>
                    )}
                  </div>
                )}

                {!loading && !previewError && selectedFile.type === "rtf" && (
                  <div className="simulation-preview__unsupported">
                    <span aria-hidden="true">▤</span>
                    <h4>RTF file</h4>
                    <p>
                      Browser preview is not enabled for this format. Open or download
                      the original file to inspect it.
                    </p>
                    <a href={fileUrl} target="_blank" rel="noopener noreferrer">
                      Open original file ↗
                    </a>
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
