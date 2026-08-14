# 48 — Internal knowledge retrieval

**Executor Type:** `Custom Organizational AI`  
**Executor:** `Internal RAG Agent`  
**Environment:** `Proprietary Knowledge Base`  
**Department Tags:** `Operations`  
**Function Tags:** `Research`, `Extraction`, `Validation`  
**Task:** `Internal knowledge retrieval`

---

## Goal
Find and synthesize the information most relevant to the working question.

## Work
- Focus on sources directly related to the task.
- Extract the strongest useful evidence.
- Distinguish established information from uncertainty.

## Context
Use only information available in the current `Proprietary Knowledge Base` task context and respect existing organizational access boundaries.

## Output
Return a concise result designed for human review, emphasizing the information most relevant to **internal knowledge retrieval**.

## Check
Do not invent missing facts. Flag contradictions, uncertainty, or missing information that could materially affect the result.
