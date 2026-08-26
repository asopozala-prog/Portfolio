"use client";

// China–Europe OTA — interactive bidirectional operating bridge.

import { useMemo, useState } from "react";

type BridgeStage = {
  id: "platform" | "team" | "market" | "operation";
  title: string;
  label: string;
  detail: string;
};

const bridgeStages: BridgeStage[] = [
  {
    id: "platform",
    label: "Chinese OTA",
    title: "Platform Requirements",
    detail:
      "Business objectives, platform standards, data structures, and digital onboarding requirements originate from the OTA's existing operating model.",
  },
  {
    id: "team",
    label: "European Extension Team",
    title: "Translate & Coordinate",
    detail:
      "The local team interprets platform requirements, negotiates with suppliers and stakeholders, and turns centralized expectations into workable European delivery processes.",
  },
  {
    id: "market",
    label: "European Market",
    title: "Suppliers & Stakeholders",
    detail:
      "Travel suppliers, fairs, local partners, and industry stakeholders bring fragmented commercial realities, relationship practices, and operational constraints.",
  },
  {
    id: "operation",
    label: "Established Capability",
    title: "Repeatable European Operation",
    detail:
      "Supplier identification, onboarding support, stakeholder engagement, campaigns, and local representation become repeatable operating workflows rather than one-off interventions.",
  },
];

export default function OtaBridge() {
  const [step, setStep] = useState(0);
  const [selectedId, setSelectedId] = useState<BridgeStage["id"]>("platform");

  const selected =
    bridgeStages.find((stage) => stage.id === selectedId) ?? bridgeStages[0];

  const stageIndex = useMemo(
    () => Object.fromEntries(bridgeStages.map((stage, index) => [stage.id, index])),
    [],
  ) as Record<BridgeStage["id"], number>;

  const advance = () => {
    setStep((current) => {
      const next = current >= 4 ? 0 : current + 1;

      if (next === 0) setSelectedId("platform");
      if (next === 1) setSelectedId("team");
      if (next === 2) setSelectedId("market");
      if (next >= 3) setSelectedId("operation");

      return next;
    });
  };

  const activateStage = (id: BridgeStage["id"]) => {
    setSelectedId(id);
    setStep((current) => Math.max(current, stageIndex[id]));
  };

  return (
    <section className="ibp-section ibp-section--ota" id="china-europe-ota">
      <div className="page-shell">
        <div className="ibp-section__card ibp-section__card--ota">
          <div className="ibp-section__number ibp-section__number--ota" aria-hidden="true">
            02
          </div>

          <div className="ibp-section__content">
            <header className="ibp-section__header">
              <p className="ibp-section__eyebrow ibp-section__eyebrow--ota">
                European Market &amp; Supplier Development
              </p>

              <h2>China–Europe OTA — European Market &amp; Supplier Development</h2>

              <p>
                A long-term European market-development engagement for a major Chinese
                Online Travel Agency (OTA), with our company operating externally as an
                integrated extension of the client&apos;s team. The work connected European
                travel-product suppliers and stakeholders with the OTA&apos;s existing digital
                platform while developing locally appropriate ways to support supplier
                onboarding, partnerships and brand presence.
              </p>
            </header>

            <aside className="ibp-confidentiality-note">
              <strong>Confidentiality Note</strong>
              <p>
                The OTA is not identified by name due to contractual confidentiality
                obligations. Our company operated externally under the client&apos;s brand
                identity as an integrated extension of its team rather than presenting
                itself as a separate legal entity.
              </p>
            </aside>

            <div className="ota-bridge">
              <div className="ota-bridge__topline">
                <p className="ota-bridge__hint">
                  <span aria-hidden="true">↔</span>
                  Run the bridge to see how platform requirements and European market
                  realities are translated in both directions.
                </p>

                <button
                  type="button"
                  className="ota-bridge__run"
                  onClick={advance}
                >
                  {step >= 4 ? "Restart bridge" : "Run next exchange"}
                  <span aria-hidden="true">→</span>
                </button>
              </div>

              <div className="ota-bridge__diagram" aria-label="China Europe OTA operating bridge">
                <div className="ota-bridge__side ota-bridge__side--platform">
                  <button
                    type="button"
                    className={`ota-bridge__panel ${
                      selectedId === "platform" ? "ota-bridge__panel--selected" : ""
                    }`}
                    onClick={() => activateStage("platform")}
                    aria-pressed={selectedId === "platform"}
                  >
                    <span className="ota-bridge__panel-kicker">Chinese OTA</span>
                    <strong>Platform &amp; Business Requirements</strong>
                    <ul>
                      <li>Platform standards</li>
                      <li>Data &amp; onboarding rules</li>
                      <li>Business objectives</li>
                      <li>Brand requirements</li>
                    </ul>
                  </button>
                </div>

                <div className="ota-bridge__channel ota-bridge__channel--left" aria-hidden="true">
                  <span className={`ota-packet ota-packet--requirement ${step >= 1 ? "ota-packet--active" : ""}`}>
                    Requirement
                  </span>
                  <span className={`ota-packet ota-packet--response ${step >= 3 ? "ota-packet--active" : ""}`}>
                    Adaptation
                  </span>
                  <span className="ota-bridge__line" />
                </div>

                <button
                  type="button"
                  className={`ota-bridge__team ${
                    step >= 1 ? "ota-bridge__team--active" : ""
                  } ${selectedId === "team" ? "ota-bridge__team--selected" : ""}`}
                  onClick={() => activateStage("team")}
                  aria-pressed={selectedId === "team"}
                >
                  <span className="ota-bridge__team-icon" aria-hidden="true">⇄</span>
                  <span className="ota-bridge__team-kicker">European Extension Team</span>
                  <strong>Translate · Negotiate · Coordinate</strong>
                  <span className="ota-bridge__team-status">
                    {step >= 4 ? "Operational system established" : "Building the operation"}
                  </span>
                </button>

                <div className="ota-bridge__channel ota-bridge__channel--right" aria-hidden="true">
                  <span className={`ota-packet ota-packet--supplier ${step >= 2 ? "ota-packet--active" : ""}`}>
                    Supplier reality
                  </span>
                  <span className={`ota-packet ota-packet--workflow ${step >= 4 ? "ota-packet--active" : ""}`}>
                    Workflow
                  </span>
                  <span className="ota-bridge__line" />
                </div>

                <div className="ota-bridge__side ota-bridge__side--market">
                  <button
                    type="button"
                    className={`ota-bridge__panel ${
                      step >= 2 ? "ota-bridge__panel--active" : ""
                    } ${selectedId === "market" ? "ota-bridge__panel--selected" : ""}`}
                    onClick={() => activateStage("market")}
                    aria-pressed={selectedId === "market"}
                  >
                    <span className="ota-bridge__panel-kicker">European Market</span>
                    <strong>Suppliers &amp; Stakeholders</strong>
                    <ul>
                      <li>Travel suppliers</li>
                      <li>Trade fairs</li>
                      <li>Local partners</li>
                      <li>Market practices</li>
                    </ul>
                  </button>
                </div>
              </div>

              <div className="ota-bridge__operation">
                <button
                  type="button"
                  className={`ota-operation ${
                    step >= 4 ? "ota-operation--active" : ""
                  } ${selectedId === "operation" ? "ota-operation--selected" : ""}`}
                  onClick={() => activateStage("operation")}
                  aria-pressed={selectedId === "operation"}
                >
                  <span className="ota-operation__icon" aria-hidden="true">✓</span>
                  <div>
                    <span>Established Capability</span>
                    <strong>Repeatable European Supplier-Development Operation</strong>
                  </div>
                </button>
              </div>

              <div className="ota-bridge__detail" aria-live="polite">
                <span className="ota-bridge__detail-label">{selected.label}</span>
                <div>
                  <h3>{selected.title}</h3>
                  <p>{selected.detail}</p>
                </div>
              </div>
            </div>

            <div className="ibp-project-details">
              <article>
                <p className="ibp-project-details__label">My Role</p>
                <h3>European Project &amp; Operations Director</h3>
                <p>
                  Led our dedicated team and held responsibility for translating the
                  OTA&apos;s objectives and platform requirements into workable European
                  operations, stakeholder relationships and project delivery.
                </p>
              </article>

              <article>
                <p className="ibp-project-details__label">My Responsibility</p>
                <ul>
                  <li>
                    Designed and continuously optimized the operating workflows for
                    European supplier development, onboarding support and stakeholder
                    engagement where no established delivery model existed.
                  </li>
                  <li>
                    Built and managed the team representing the OTA locally, coordinating
                    closely with the client&apos;s internal business and technical teams.
                  </li>
                  <li>
                    Understood the OTA&apos;s platform, data and onboarding requirements
                    sufficiently to moderate between its standardized digital system and
                    the realities of European travel suppliers.
                  </li>
                  <li>
                    Led negotiations and relationship management with suppliers, industry
                    stakeholders, fairs and local partners while representing the client
                    under its own brand identity.
                  </li>
                  <li>
                    Built temporary multidisciplinary teams for individual campaigns and
                    events, including specialist selection, contracting, onboarding and
                    several months of project delivery.
                  </li>
                </ul>
              </article>

              <article>
                <p className="ibp-project-details__label">
                  What the Project Established / Achieved
                </p>
                <ul>
                  <li>
                    Established a functioning European extension of the OTA&apos;s
                    supplier-development operation without requiring the client to build
                    an equivalent permanent local organization.
                  </li>
                  <li>
                    Created repeatable workflows for identifying, approaching and
                    supporting European travel suppliers into the OTA&apos;s existing digital
                    onboarding framework.
                  </li>
                  <li>
                    Bridged differences between centralized platform requirements and
                    local supplier practices through negotiation, interpretation and
                    operational adaptation.
                  </li>
                  <li>
                    Extended the OTA&apos;s European presence beyond supplier acquisition
                    through trade-fair participation, stakeholder networks, locally
                    designed events and brand storytelling.
                  </li>
                </ul>
              </article>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
