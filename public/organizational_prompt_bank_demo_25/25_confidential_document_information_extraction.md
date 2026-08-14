# 25 — Confidential document information extraction

**Executor Type:** `Local / Private AI`  
**Executor:** `Local LLM`  
**Environment:** `Private Document Workspace`  
**Department Tags:** `Finance & Administration`, `Operations`  
**Function Tags:** `Extraction`, `Classification`, `Summarization`  
**Task:** `Confidential document information extraction`

---

Extract the requested information from the confidential documents in this private workspace.

## Goal
Turn sensitive source material into a concise structured working summary without expanding its exposure.

## Extract
- Find the facts requested for the task.
- Preserve names, dates, amounts, identifiers, and classifications accurately.
- Group related information when several documents contribute to the answer.

## Context
Use only the locally supplied documents. Do not rely on external services or outside information.

## Output
Return the requested fields followed by a short source-grounded summary.

## Check
Mark missing, conflicting, or unreadable information clearly. Never fill gaps by guessing.
