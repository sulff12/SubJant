# Architecture

The repository separates a TypeScript single-page application from a Python
HTTP API. The API is organized into routes, schemas, models, repositories, and
services so matching and data ingestion can be added without coupling them to
the transport layer.

PostgreSQL is provided for local development, but persistence, migrations, and
database-backed endpoints have not been implemented. `GET /health` is the
initial API check.

## Planned matching flow

Profile validation → eligibility filtering → affordability estimation →
ranking → explanation with source references.

Each stage should be independently testable. Eligibility and affordability
decisions should be based on explicit rules and source data; generated
explanations must not override those results.
