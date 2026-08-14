# 70 — Customer inquiry routing

**Executor Type:** `Enterprise AI Platforms`  
**Executor:** `Salesforce Agentforce / Einstein`  
**Environment:** `Service`  
**Department Tags:** `Sales & Marketing`, `Operations`  
**Function Tags:** `Classification`, `Extraction`  
**Task:** `Customer inquiry routing`

---

## Routing Task
Determine where a new customer inquiry should go.

## Identify
Extract the request type, affected product or service, urgency, account context, stated deadline, and any billing, technical, complaint, order, sales, or account-management signals.

## Decide
Select the best available service category or queue using the organization’s routing rules.

## Output
Return: Inquiry Summary, Category, Destination, Priority, Information Still Needed.

## Limit
Do not invent queues or escalation rules. If the inquiry spans several functions or lacks key facts, route it for human triage.
