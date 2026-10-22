# Security notes

- Keep secrets in environment variables; never commit local `.env` files.
- Validate and constrain profile input before storing or using it in matching.
- Treat imported records and AI-generated text as untrusted input.
- Keep source attribution and review status alongside externally sourced facts.
- Do not expose personal profile information in logs or public API responses.
- Authentication, authorization, retention, and production deployment controls
  still need to be designed before handling real user data.
