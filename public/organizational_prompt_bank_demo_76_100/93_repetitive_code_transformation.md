# 93 — Repetitive code transformation

**Executor Type:** `Coding / Technical AI`  
**Executor:** `GitHub Copilot`  
**Environment:** `IDE / Codebase`  
**Department Tags:** `Operations`  
**Function Tags:** `Transformation`, `Generation`, `Validation`  
**Task:** `Repetitive code transformation`

---

## Refactoring Goal
Remove real duplication while keeping behavior stable.

## Inspect
Find repeated logic and note where the repeated blocks differ in data, side effects, control flow, or error handling.

## Transform
Choose the simplest safe structure—helper function, shared method, loop, mapping, or small abstraction. Avoid architectural redesign.

## Output
Provide the refactored code and briefly explain what duplication was removed and what stayed intentionally separate.

## Safety
Preserve interfaces and tests. Do not abstract code that only looks similar but serves different responsibilities.
