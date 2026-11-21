# AI Usage Report — Assignment 3

**Status: Draft. Student review, personal learning notes, conversation export, and declaration confirmation are pending. This report does not certify that the submission is ready.**

## Tools used and use cases

ChatGPT (Codex) assisted with reading Assignment 3 requirements, reviewing the Assignment 2 source and evidence structure, explaining repository import, and implementing a proposed Assignment 3 extension. The exact underlying model identifier is not asserted here.

The generated work includes combined filtering/sorting, a persistent light/dark theme, GitHub repository fetching with failure recovery, WebP image conversion, documentation, and automated DOM verification. jsdom and Sharp were local verification/image-processing tools, not additional AI services or runtime website dependencies.

## Inherited work

The repository was imported from Assignment 2, including its Git history. The previous AI report is preserved as `docs/assignment2-ai-usage-report.md`. The original Assignment 2 evidence ZIP remains separate. Its conversations and artifacts describe inherited assistance; they do not replace evidence of the new Assignment 3 assistance.

Existing personal content, portfolio structure, greeting, category filters, and contact validation originate in the earlier assignment. Assignment 3 extends that baseline.

## Benefits and challenges

AI assistance combined API lifecycle handling, application state, image optimization, and documentation into one reviewable proposal. Automated DOM checks exercised normal and failure cases.

A limitation was that the execution environment could not launch Chromium. Automated DOM checks do not establish responsive appearance, cross-browser behavior, real keyboard behavior, or Lighthouse performance. Those tasks remain on the student checklist. Evidence must preserve the full conversation, including errors and corrections, rather than only the final output.

## Learning outcomes — complete after review

The student should explain in their own words what they actually learned, including:

- How `state.category` and `state.sort` combine in one render function.
- Why sorting a copy preserves Featured order.
- How localStorage, a device preference, and the theme toggle interact.
- What async/await, response checks, AbortController, catch, and finally do in the API request.
- Why external text uses textContent and links are checked.
- Why browser/manual tests remain necessary after DOM checks.

Do not present this suggested topic list as completed personal learning.

## Responsible use and modifications

The feature code and documentation in the proposed branch were produced by ChatGPT. Agent-run checks are listed separately from student-run checks in `testing-checklist.md`.

Student review and changes: **Pending. Record actual choices, changes, explanations, and tests here after reviewing the proposal.** Do not claim personal authorship of unchanged generated code or tests you have not run. Review and adapt the proposal to satisfy the course's academic integrity requirements before submission.

## Usage log

Dates below are 2026-11-21 (Asia/Riyadh). C01 is this ongoing conversation; extend its dates if it continues later. Each artifact directory preserves AI-produced outputs before the student's edits.

| ID | Tool (model) | Date | Purpose | Files affected | Changes and verification |
|---|---|---|---|---|---|
| C01 | ChatGPT (Codex; exact model not recorded) | 2026-11-21 | Requirements review, baseline review, repository setup guidance, implementation, checks, and documentation | index.html, js/, css/, assets/images/, README.md, docs/, .gitignore | AI implemented and checked the proposal. Student review and testing are pending. Full conversation export must be added to evidence. |
| A01 | ChatGPT (Codex) | 2026-11-21 | Generate Assignment 3 implementation and optimized image outputs | index.html, js/theme.js, js/script.js, css/styles.css, assets/images/*.webp, .gitignore | Original generated files are preserved in artifacts/A01-feature-implementation/. Agent syntax and DOM checks passed; student adaptations are pending. |
| A02 | ChatGPT (Codex) | 2026-11-21 | Draft Assignment 3 README, technical documentation, checklist, and AI report | README.md, docs/ | Original drafts are preserved in artifacts/A02-documentation/. Documentation distinguishes completed checks from pending work. Student review and declaration are pending. |
| A03 | ChatGPT (Codex) | 2026-11-21 | Generate and run DOM verification harness | External verification harness; no website runtime dependencies | artifacts/A03-verification/ contains the harness and 32-check results. This is DOM simulation, not real-browser testing. |

Add one row for every later AI conversation or generated artifact. Record actual student changes and tests in the relevant rows when completed.

## Evidence packaging — required before submission

Final filename: `202339150-MohammedShublaq-assignment3-ai-evidence.zip`.

- `conversations/`: Complete, unedited C01 export and every additional AI conversation, including failed attempts.
- `artifacts/A01-feature-implementation/`: Original generated HTML, CSS, JS, image files, and .gitignore.
- `artifacts/A02-documentation/`: Original generated documentation drafts.
- `artifacts/A03-verification/`: Original verification script and results.

The artifacts-only download supplied with the proposal is a starter package, not the final evidence ZIP. Add the full conversation export and reconcile all IDs before creating the final ZIP. No logs, original-output folders, or evidence ZIP should be committed to the public repository.

## Declaration — not yet confirmed

The required declaration text is reproduced below for the student to confirm only after reviewing the solution and reconciling all evidence:

> I declare that this report and the attached evidence document all of my AI use in this assignment, with complete and unedited conversations, and that I understand and can explain all the code I submitted. I understand that undeclared AI use or a false declaration will be treated as plagiarism according to KFUPM regulations.

Name: Mohammed Shublaq
Student ID: 202339150
Declaration date: **Pending personal confirmation after review**
