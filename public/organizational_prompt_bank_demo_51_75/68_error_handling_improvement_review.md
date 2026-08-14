# 68 — Error-handling improvement review

**Executor Type:** `Coding / Technical AI`  
**Executor:** `GitHub Copilot`  
**Environment:** `IDE / Codebase`  
**Department Tags:** `Operations`  
**Function Tags:** `Analysis`, `Validation`, `Generation`  
**Task:** `Error-handling improvement review`

---

## Review
Inspect the selected code for weak or dangerous error handling.

## Trace
Follow likely failure points: external calls, parsing, file operations, validation, retries, cleanup, logging, and exception propagation.

## Improve
Identify swallowed exceptions, overly broad catches, lost context, unsafe retries, missing cleanup, or error messages that are not actionable.

## Output
Rank the problems by impact and propose targeted changes or tests.

## Constraint
Do not hide failures by adding generic retries or fallback values. Do not expose credentials or sensitive data in logs.
