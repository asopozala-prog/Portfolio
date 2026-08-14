# 87 — Survey response classification

**Executor Type:** `General AI`  
**Executor:** `ChatGPT Workspace`  
**Environment:** `Files`  
**Department Tags:** `Sales & Marketing`  
**Function Tags:** `Classification`, `Extraction`, `Analysis`  
**Task:** `Survey response classification`

---

## Task
Classify survey responses into useful themes.

## Coding
Assign each response a primary topic and, where useful, a secondary topic. Distinguish praise, complaint, request, suggestion, and neutral observation.

## Pattern Review
Count or estimate theme prominence only from the supplied responses. Preserve rare but strategically important comments instead of hiding them in “Other.”

## Output
Return theme definitions, counts where possible, and concise findings.

## Quality
Do not infer demographics or intent. Mark responses that are ambiguous, multi-topic, sarcastic, or too vague to classify confidently.
