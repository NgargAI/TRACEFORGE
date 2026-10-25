# Failure Passport — TRACEFORGE

A Next.js starter implementation of Failure Passport, an industrial reliability and engineering-knowledge reuse workspace for the Japan Day hackathon.

## Included in this branch

- Asset library for six machine types: centrifugal pump, CNC spindle, diesel generator, air compressor, hydraulic lift / HPU, and electric motor.
- Machine-scoped overview, failure register, evidence register, asset passport, simulation lab, and troubleshooting guidance.
- Procedural Three.js / React Three Fiber model with interactive operating controls, response charts, and saved-run comparison.
- Local draft failure records and evidence forms to demonstrate the workflow.
- Dark navy / teal / lime design tokens based on the TRACEFORGE theme.

## Run locally

Requirements: Node.js 20.9+ and npm.

```bash
npm install
cp .env.example .env.local
npm run dev
```

Open http://localhost:3000. Most demo screens work without environment variables.

## Machine-specific links

The app reads the `machine` query parameter:

- `/?machine=pump`
- `/?machine=spindle`
- `/?machine=generator`
- `/?machine=compressor`
- `/?machine=lift`
- `/?machine=motor`

## Important status and limitations

This is a codebase separate from the canonical original Wix site: https://website-ngarg3be26-070a.wix-site-host.com/. It does not export, replace, or publish changes to that Wix site.

This branch is a demo/starter and is not yet production-ready:
- Failure records and evidence entries are held in browser state and reset on refresh.
- Seeded case/evidence/telemetry values are illustrative and are not plant-verified.
- The troubleshooting screen uses a deterministic safety-first template; it is not connected to an LLM or WhatsApp webhook.
- The procedural 3D model and response curves are educational visualizations, not validated engineering simulations. Do not use them to set machine operating limits or make safety-critical decisions.
- Database integration, login, role authorization, file storage, and a production webhook are not wired in yet.

## Production integration checklist

1. Add server-side persistence and database migrations with row-level security.
2. Add authenticated roles and machine-scoped access checks.
3. Add evidence storage, file validation, and an audit trail.
4. Implement WhatsApp Cloud API signature verification, idempotency, transcription, translation, structured extraction, retries, and human review.
5. Connect the UI to persisted records and evidence; keep privileged service-role keys server-side.
6. Validate simulation equations against OEM data and controlled engineering tests before presenting outputs as operational guidance.
7. Add automated unit, integration, accessibility, and end-to-end tests. Run `npm run typecheck` and `npm run build`.

## Environment variables

See `.env.example`. Never commit actual API keys or privileged service-role tokens. Values beginning with `NEXT_PUBLIC_` are exposed to the browser and must never contain secrets.
