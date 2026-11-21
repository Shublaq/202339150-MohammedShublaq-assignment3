# Assignment 3 Testing Checklist

## Completed automatically — 2026-11-21

- [x] Both JavaScript files pass `node --check`.
- [x] 32 DOM checks pass using Node.js and jsdom, installed separately from the app.
- [x] Filter selection survives sorting; sorting survives category changes; Featured restores original order.
- [x] Theme toggles, is restored from stored state on a fresh simulated page, follows device preference without a valid stored value, and handles blocked storage.
- [x] Empty, whitespace-only, invalid-email, and valid form entries behave as expected; editing clears feedback.
- [x] Mocked GitHub success, missing descriptions/languages, empty results, offline failure, HTTP 500/403/429, invalid JSON/shape, unsafe links, and timeout receive appropriate handling.
- [x] Retry recovers without duplicate cards; no more than six cards appear; external descriptions remain text.
- [x] The actual API endpoint returned HTTP 200 with three repositories at test time.

## Follow-up checks after the theme fix — 2026-11-21

- [x] User confirmed project filtering and sorting work in the initial version.
- [x] User reported unreadable dark-theme header text and an unclear theme button; fixed through dedicated color roles and a stateful switch.
- [x] Re-ran 32 updated DOM checks successfully after the fix.
- [x] Checked 48 theme contrast combinations; the 46 text combinations have a minimum calculated contrast of 5.17:1 and both form/select boundary combinations meet 3:1.
- [x] Checked switch role, accessible name, checked state, visible Light/Dark label, next-action tooltip, and readable API assignment titles.
- [ ] User visually verifies the revised header, footer, selected filters, primary buttons, form fields, and switch in both themes.

## Complete personally in a browser

Use VS Code Live Server or a local Python server. Record actual results below. Do not mark checks passed before doing them.

- [ ] Load the site and confirm both images display clearly.
- [ ] Choose All and sort A–Z: Hub should appear before Room Booking. Choose Z–A: reverse order.
- [ ] Choose Java, change sorting, then choose All: only Java appears while filtered, and the selected sorting is preserved afterward.
- [ ] Use the Theme switch, check its Light/Dark label and thumb, reload, and verify the preference persists. Toggle back and reload again.
- [ ] Inspect headings, links, fields, selected buttons, and success/error feedback in both themes.
- [ ] Confirm live GitHub repositories and their links load correctly.
- [ ] In DevTools Network request blocking, block `*api.github.com*`, reload, and check the error message. Unblock, then select Retry and confirm recovery. Request blocking is preferable to full offline mode because the local page must still load.
- [ ] Try empty fields, spaces-only name/message, an invalid email, and valid input. Confirm no message is claimed to have been sent.
- [ ] Navigate with Tab/Shift+Tab; activate buttons with Enter/Space and use arrow keys in the sorting select.
- [ ] Check widths 320px, 768px, and 1440px for clipping, overlaps, horizontal scrolling, and usable controls.
- [ ] Check the Console for unexpected JavaScript errors. Expected network failures during the deliberate API test are not application crashes.
- [ ] Repeat core features in another browser and, if available, on a real phone.
- [ ] Run Lighthouse in Chrome DevTools using Mobile mode, fix actionable issues, and record results.

| Check | Actual browser / viewport / mode | Result / notes |
|---|---|---|
| Layout and images | Pending | Pending |
| Filters and sorting | User browser, initial version | User confirmed passed; recheck after refinement |
| Keyboard navigation | Pending | Pending |
| Theme and reload | Pending | Pending |
| Live API and recovery | Pending | Pending |
| Contact validation | Pending | Pending |
| Second browser / phone | Pending | Pending |
| Lighthouse Performance | Pending | Pending |
| Lighthouse Accessibility | Pending | Pending |
| Lighthouse Best Practices | Pending | Pending |
| Lighthouse SEO | Pending | Pending |

## Before Blackboard submission

- [ ] Review and understand the new JavaScript and CSS.
- [ ] Adapt the AI output as needed, record real changes, and rerun affected checks.
- [ ] Finish the AI usage report, including personal learning, review notes, and a truthful dated declaration.
- [ ] Export the complete, unedited current conversation and any other AI conversations.
- [ ] Include original AI artifacts and reconcile their IDs with the usage log.
- [ ] Keep Assignment 2 provenance available for inherited code.
- [ ] Confirm the final changes are merged to `main` and visible in the public repository.
- [ ] Submit the repository link and the completed Assignment 3 AI Evidence ZIP on Blackboard.
