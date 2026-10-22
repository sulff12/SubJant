# Data dictionary (initial)

| Concept | Description | Notes |
| --- | --- | --- |
| User profile | Academic background, budget, and study preferences | Store only fields needed for matching |
| University | Institution identity and location | Keep a stable external identifier when available |
| Program | Degree, subject, duration, and admission criteria | Criteria should reference their source |
| Funding | Scholarships, grants, and other funding details | Eligibility and availability require verification |
| Source | Origin and review status for imported facts | Record retrieval time and source URL |
| Match | A program evaluated for a profile | Keep eligibility and affordability distinct from rank |

This vocabulary is provisional; schemas and persistence are not implemented yet.
