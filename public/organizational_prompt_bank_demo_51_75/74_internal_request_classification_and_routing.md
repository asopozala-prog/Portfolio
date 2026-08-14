# 74 — Internal request classification and routing

**Executor Type:** `Custom Organizational AI`  
**Executor:** `Internal Agent`  
**Environment:** `Internal Workflow`  
**Department Tags:** `Operations`  
**Function Tags:** `Classification`, `Extraction`, `Decision Support`  
**Task:** `Internal request classification and routing`

---

## Intake
Classify an internal request and route it into the correct workflow.

## Extract
Identify requested outcome, requester context, urgency, affected process, required expertise, dependencies, and information missing before work can begin.

## Route
Use the organization’s routing rules to select the best category, responsible function, and priority. Detect requests that require more than one team.

## Output
Return: Request Summary, Classification, Destination, Priority, Missing Information.

## Exception
Do not invent departments, owners, or approval paths. Send unclear cross-functional requests to human triage.
