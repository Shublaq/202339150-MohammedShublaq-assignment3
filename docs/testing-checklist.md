# Assignment 3 Verification Record

Verification date: 2026-11-21 (Asia/Riyadh).

## Agent-run checks

| Check | Result | Scope |
|---|---|---|
| JavaScript syntax | Passed | Both JS files checked with Node |
| Local asset references | Passed | HTML stylesheet, scripts, images, and favicon exist |
| Functional DOM checks | 32 passed | Filter/sort combinations, theme persistence/storage failure, form validation, API loading/error/empty/retry/timeout and safe rendering |
| Theme color checks | 48 combinations passed | 46 text combinations at 5.17:1 or higher; two form/select boundary combinations at 3:1 or higher |
| Startup checks | Six passed | Switch/sort/count occupy initial HTML space; controls enable after initialization; SVG favicon exists |
| Delivery patches | Passed | Each update reproduces the expected Git tree when applied to its baseline |

DOM simulation and mathematical contrast checks do not measure rendered browser layout or a Lighthouse score.

## Student-run checks

The results below follow the student's explicit confirmation in the complete C01 conversation. Desktop screenshots additionally show both themes and successful API rendering.

| Check | Result | Details |
|---|---|---|
| Desktop layout and project images | Passed | Full-page screenshots in Light and Dark |
| Filtering and sorting | Passed | User explicitly confirmed working; combined behavior covered by agent checks |
| Mobile layout | Passed, user-confirmed | 320px and 768px checks requested and confirmed; no clipping/sideways scrolling reported |
| Theme and reload | Passed, user-confirmed | Saved preference survives refresh |
| Contact validation | Passed, user-confirmed | Empty/invalid inputs rejected; valid input produces the demo confirmation |
| Keyboard | Passed, user-confirmed | Tab focus and Enter/Space button operation |
| Live API and failure recovery | Passed, user-confirmed | Blocked API request, unblocked, and retried successfully |
| Additional browser | Passed, user-confirmed | Core functionality; exact browser/version was not recorded |

A physical-phone or screen-reader test is not claimed. The initial theme defect was found through student review, corrected, and followed by screenshots showing the corrected presentation.

## Mobile Lighthouse

The original uploaded report used localhost, an emulated Moto G Power, Slow 4G throttling, Lighthouse 13.5.0, and Chromium 157.0.0.0.

| Category | Original supplied report | Final student-reported result |
|---|---:|---:|
| Performance | 91 | 100 |
| Accessibility | 100 | 100 |
| Best Practices | 96 | 100 |
| SEO | 100 | 100 |

The original run recorded CLS 0.193 and a missing favicon 404. The code now reserves the initial space for the theme/sort controls and count, and declares a real SVG favicon. The student reported perfect scores after rerunning. The final numeric CLS was not supplied and is not inferred from the overall score.

## Submission items

Submit the public Assignment 3 repository link after final documentation is included on `main`, plus the completed evidence ZIP:

`202339150-MohammedShublaq-assignment3-ai-evidence.zip`

The ZIP contains complete unedited conversations, original AI-produced artifacts, and inherited Assignment 2 provenance. Evidence is submitted separately from GitHub. A live deployment is optional under the supplied assignment instructions.
