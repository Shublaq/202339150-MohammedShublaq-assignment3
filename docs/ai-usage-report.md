# AI Usage Report — Assignment 3

Name: Mohammed Shublaq

Student ID: 202339150

Date: 2026-11-21 (Asia/Riyadh)

## Tools used and use cases

I used ChatGPT (Codex) in one continuous conversation, C01, for Assignment 3. I confirmed that I did not use another AI chat or tool for this assignment. The exact underlying model identifier was not recorded.

ChatGPT helped interpret the requirements, review the inherited Assignment 2 project, explain repository import, implement features, diagnose issues I reported, run automated checks, and draft documentation and delivery scripts. The implementation assistance covered combined filtering/sorting, theme persistence, external GitHub data and failure recovery, WebP image conversion, startup layout stability, and a favicon.

Sharp and jsdom were local image-processing and verification utilities, not additional AI services or dependencies of the portfolio website.

## Benefits and challenges

AI helped connect the assignment requirements to a focused extension of my existing portfolio and helped organize implementation, verification, and documentation.

Testing remained necessary. I found that the initial dark theme made my name and other content difficult to read and that its theme button did not communicate its state clearly. I supplied screenshots and requested consistent colors and a clearer switch. I also ran Lighthouse, supplied the report and expanded diagnostics, and requested corrections. The missing favicon and startup control changes were addressed, and I then reported perfect Lighthouse scores.

A limitation was that the agent could not launch Chromium in its environment. Its DOM and color checks did not establish real browser behavior. I performed the browser checks and confirmed the results separately.

## Learning outcomes

I learned how to test a website thoroughly with browser developer tools, improve consistency between light and dark themes, and save and restore theme preferences. This assignment helped me connect design refinement with functional testing and performance checks.

These outcomes reflect the learning I described in C01. The application uses browser localStorage to remember the selected theme.

## Responsible use, decisions, and modifications

ChatGPT produced the proposed code and documentation; I do not claim that the AI-assisted implementation was written independently. I applied the updates through my own local Git/GitHub setup, tested them, identified problems, and guided revisions.

My review and requested changes included:

- Keeping the cumulative portfolio and its existing projects.
- Confirming that filtering and sorting worked.
- Identifying the dark-theme contrast problem and unclear theme control, then requesting consistent styling and an explicit stateful switch.
- Reviewing screenshots of both complete themes and the live repository section.
- Running Lighthouse and supplying its findings, which led to the favicon and startup-space correction.
- Confirming mobile layouts, preference persistence, contact validation, keyboard operation, API failure/retry, and core behavior in another browser.
- Confirming that this conversation was my only AI use for Assignment 3 and supplying my learning reflection.

The testing record distinguishes agent checks from my reported browser results. No unperformed screen-reader or real-phone test is claimed, and no final numerical CLS value is invented.

## Verification

Agent checks: JavaScript syntax and local assets, 32 functional DOM checks, 48 contrast combinations, and six startup/asset checks passed. The delivered patches were checked against their baseline Git trees.

I confirmed the browser checks listed in `docs/testing-checklist.md` passed. I reported 100 in all four Lighthouse categories after the fixes. The earlier supplied report was 91 Performance, 100 Accessibility, 96 Best Practices, 100 SEO, with CLS 0.193. The final detailed timings and CLS were not supplied. The additional browser's name/version was not recorded.

## Inherited Assignment 2 work

The repository was imported from Assignment 2 with its history. Existing personal content, project cards, greeting, category filtering, and contact validation originate in that baseline. Assignment 3 extends it.

The previous AI report is retained as `docs/assignment2-ai-usage-report.md`. The final evidence package preserves the original Assignment 2 evidence ZIP under `provenance/`; it documents inherited assistance and does not replace the new C01 conversation or Assignment 3 artifacts.

## Usage log

All new assistance took place on 2026-11-21 (Asia/Riyadh), in the continuous C01 conversation. Each artifact directory contains original AI-produced outputs before my personal edits; earlier versions and failed attempts remain in the full conversation and preserved artifacts.

| ID | Tool (model) | Date | Purpose | Files affected | Changes and verification |
|---|---|---|---|---|---|
| C01 | ChatGPT (Codex; exact model not recorded) | 2026-11-21 | Requirements review, setup guidance, implementation, corrections, verification, documentation, and submission preparation | index.html, js/, css/, assets/, README.md, docs/, .gitignore; external delivery scripts | I applied the updates, tested the website, supplied screenshots and Lighthouse findings, requested corrections, confirmed browser checks, and supplied my learning reflection. Full unedited export: conversations/C01.pdf. |
| A01 | ChatGPT (Codex) | 2026-11-21 | Generate initial Assignment 3 implementation and optimized images | index.html, js/, css/, assets/images/, .gitignore | Added filter/sort state, saved theme, API loading and recovery, and WebP images. Initial agent checks passed. Later student findings led to A04/A05 corrections. Originals: artifacts/A01-feature-implementation/. |
| A02 | ChatGPT (Codex) | 2026-11-21 | Draft initial documentation and AI report | README.md, docs/ | Preserved the initial drafts, including their pending-review notes. Final reports reflect later student feedback and tests. Originals: artifacts/A02-documentation/. |
| A03 | ChatGPT (Codex) | 2026-11-21 | Generate and run DOM verification harness | External test harness and results | 32 checks passed. DOM simulation was distinguished from browser rendering. Originals: artifacts/A03-verification/. |
| A04 | ChatGPT (Codex) | 2026-11-21 | Correct dark-theme colors, add clear theme switch, refine API titles and fallbacks | css/styles.css, index.html, js/script.js, README.md, docs/ | My screenshots and feedback drove the correction. Agent reran 32 DOM checks and tested 48 contrast combinations plus switch/title states. I later supplied screenshots of the corrected themes. Originals: artifacts/A04-theme-and-api-polish/. |
| A05 | ChatGPT (Codex) | 2026-11-21 | Interpret Lighthouse findings and fix favicon/startup layout | index.html, js/script.js, assets/favicon.svg, README.md, docs/ | My report showed 91/100/96/100, main shifting, and favicon 404. Controls/count now occupy initial space and a favicon is declared. Agent checks passed; I reported 100/100/100/100 after rerunning. Originals: artifacts/A05-lighthouse-fixes/. |
| A06 | ChatGPT (Codex) | 2026-11-21 | Generate delivery automation, finalize reports, and consolidate submission evidence | README.md, docs/; external setup, update, finalization and packaging scripts | Reports were updated from my test confirmation and learning reflection. The evidence bundle preserves earlier delivery scripts/patches, original final-documentation outputs, and the finalizer. It adds my complete C01 PDF locally and preserves inherited Assignment 2 evidence. Originals: artifacts/A06-finalization/. |

## Evidence

Submit separately on Blackboard:

`202339150-MohammedShublaq-assignment3-ai-evidence.zip`

It contains:

- `conversations/C01.pdf`: complete, unedited export of this continuous conversation, including explanations, generated outputs, errors, corrections, and submission preparation.
- `artifacts/A01-feature-implementation/` through `A06-finalization/`: original generated outputs and verification/delivery artifacts.
- `provenance/202339150-MohammedShublaq-assignment2-ai-evidence.zip`: inherited Assignment 2 evidence, unchanged.

The evidence folders and ZIP are not committed to GitHub. The finalization script requests the saved C01 PDF and requires me to confirm completeness and understanding before building the final ZIP and applying the final documentation. A package without that complete export is not the final evidence submission.

## Declaration

I declare that this report and the attached evidence document all of my AI use in this assignment, with complete and unedited conversations, and that I understand and can explain all the code I submitted. I understand that undeclared AI use or a false declaration will be treated as plagiarism according to KFUPM regulations.

Name: Mohammed Shublaq

Student ID: 202339150

Date: 2026-11-21
