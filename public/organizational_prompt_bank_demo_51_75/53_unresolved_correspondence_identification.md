# 53 — Unresolved correspondence identification

**Executor Type:** `Workplace AI`  
**Executor:** `Microsoft 365 Copilot`  
**Environment:** `Outlook`  
**Department Tags:** `Finance & Administration`, `Operations`  
**Function Tags:** `Classification`, `Extraction`, `Summarization`  
**Task:** `Unresolved correspondence identification`

---

## Aim
Identify Outlook conversations that still contain unresolved business obligations.

## Find
Look for unanswered client or supplier questions, promised documents, pending invoices, approvals, missing confirmations, and commitments with dates.

## Status Logic
Label each thread: Awaiting Us, Awaiting External Party, Pending Decision, or Ambiguous. Treat a thread as resolved only when closure is explicit.

## Output
Return subject, unresolved item, responsible party if stated, deadline, and status.

## Caution
Do not classify a quiet thread as unresolved simply because nobody replied recently. Flag mixed or contradictory signals.
