# Technical Documentation — Assignment 3

## Scope and files

This static portfolio extends Assignment 2. Semantic HTML, the original personal content, featured projects, greeting, form validation, and responsive layout are retained. No application framework or backend was added.

| File | Responsibility |
|---|---|
| `index.html` | Sections, filter and sort controls, theme toggle, API status and fallback link, and contact form |
| `css/styles.css` | Theme variables, responsive grids, focus styles, reduced motion, and feedback colors |
| `js/theme.js` | Read the stored theme and apply it before the stylesheet loads |
| `js/script.js` | Greeting, shared state, filtering/sorting, theme interaction, asynchronous API loading, and validation |
| `assets/images/*.webp` | Compressed project previews |
| `docs/testing-checklist.md` | Actual verification status and remaining manual checks |

## Filtering and sorting

The `state` object stores the active category, sort option, and theme. `projectCards` retains the original card order. Each render copies this array, optionally sorts the copy using `localeCompare`, applies the active category to each card's `hidden` property, and appends the ordered cards through a document fragment.

Filter handlers update only the category. The select handler updates only the sort value. Both call `renderProjects()`, so changing one control preserves the other. Featured order uses the original array. The selected filter's `aria-pressed` state and visible project count are updated together. An explicit `[hidden]` CSS rule prevents display styling from overriding hidden elements.

There are two featured projects, so a category containing one project has no visible sorting difference. Check sorting with All selected, then check that it remains selected while changing categories.

## Theme state

`theme.js` is a small local script loaded before the stylesheet. It accepts only `light` or `dark` from the `portfolio-theme` localStorage key; otherwise it follows `prefers-color-scheme`. The theme is applied through `data-theme` on the root HTML element.

The main script toggles `state.theme`, updates the root and switch's `aria-checked`, updates the visible Light/Dark label and next-action tooltip, and saves the preference. The native button uses `role="switch"` with the stable accessible name Dark theme; the checked state means dark theme is active. Its track and moving thumb communicate the state visually. Storage reads and writes are protected with try/catch. When storage is blocked, the toggle still works for the current visit. Filtering and sorting are session state and reset on reload. The device preference is read at initial load; later device changes apply on the next load unless the visitor saved an explicit choice.

CSS variables control page, cards, fields, headings, links, badges, and feedback colors. Dedicated `--hero-bg` / `--hero-text` tokens keep the navigation, hero, and footer dark with white text in both themes. Dedicated `--button-bg`, `--button-hover`, and `--button-text` tokens keep filled buttons and selected filters readable. The pale dark-theme link color is used for links, never as a filled-button background. Form/select boundary colors also have a separate token.

### Reported contrast defect and correction

The initial Assignment 3 CSS incorrectly reused `--heading` for header/footer backgrounds, which became nearly white in dark mode. It also reused `--link` as a button background, making white button labels difficult to see. The user reported these problems with screenshots; filtering and sorting were confirmed working. The follow-up separates those color roles and replaces the static-looking theme button with the switch described above.

Forty-eight automated color combinations were checked across the two themes: 46 text/surface combinations meet at least 4.5:1 (minimum measured 5.17:1), and two form/select boundary combinations meet at least 3:1. Hero checks include sampled positions from the gradient's transparent endpoint through its maximum overlay opacity. These mathematical checks use the CSS declarations; they do not establish a complete accessibility audit or browser rendering result.

## GitHub integration

Endpoint:

```text
GET https://api.github.com/users/Shublaq/repos?sort=updated&per_page=6&type=owner
```

This fetches public repositories for Shublaq, ordered by update time, with up to six results. It is separate from the curated featured projects. The permanent profile link lets visitors see all repositories or continue if the API fails.

Reference: [GitHub documentation: List repositories for a user](https://docs.github.com/en/rest/repos/repos#list-repositories-for-a-user).

`loadRepositories()` uses async/await and handles the full request lifecycle:

1. Guard against simultaneous requests, announce loading, hide and disable Retry, and set `aria-busy`.
2. Start a ten-second AbortController timeout.
3. Fetch data, reject unsuccessful HTTP status codes, and parse JSON.
4. Validate that the result is an array with repository names and links.
5. Build at most six cards in a document fragment, then replace the results together.
6. Announce success or an empty result.
7. On errors, display friendly guidance and restore Retry. HTTP 403/429 receive request-limit guidance.
8. In `finally`, clear the timeout, clear the loading guard, enable Retry, and reset busy state.

Each card displays a readable title, description, language, and its real repository link. Names matching this student's portfolio assignment naming convention are displayed as Portfolio — Assignment N. API-provided descriptions take priority after trimming whitespace; a missing assignment description gets a portfolio coursework summary, while other repositories receive a prompt to explore their source and README. A missing language uses Repository as a neutral label. These display fallbacks do not change repository metadata.

The requirement is meaningful external API data, so the existing public assignments are sufficient. Lab repositories and additional projects can appear if the student independently chooses to publish them; making them public is not necessary for this feature. There is no requirement for six results or for every GitHub repository to have a custom description. External text is inserted using `textContent`, never `innerHTML`. Links must use the HTTPS GitHub origin and a `/Shublaq/` path. No credentials, secrets, or API keys are embedded.

Requests happen once per page load or explicit retry; there is no polling or persistent data cache. Unauthenticated GitHub request limits and connection failures can affect this section. The rest of the page operates independently.

## Contact form and greeting

The greeting uses the device's current hour on page load. The existing contact form intercepts submit, trims all fields, checks native required/email constraints, reports invalid entries, and otherwise announces that the valid form is a demo. Input clears stale feedback. This is client-side validation only; there is no message-delivery backend.

## Performance changes

| Image | Assignment 2 PNG | Assignment 3 WebP |
|---|---:|---:|
| Room Booking | 94,600 bytes | 37,712 bytes |
| KFUPM Hub | 73,778 bytes | 29,002 bytes |
| Total | 168,378 bytes | 66,714 bytes |

The displayed images use approximately 60.4% fewer bytes. The originals and unused SVG placeholders were removed from the current tree after checking references; earlier Git commits retain them. WebP conversion used quality 90 without resizing. Image dimensions and lazy loading are retained.

The app loads no frameworks or third-party font libraries. The main script uses `defer`. DOM references are reused, and fragments batch card insertion. Reduced-motion preferences disable smooth scrolling and filter transitions. Image savings are measured file sizes, not a claimed Lighthouse result.

## Verification and limits

On 2026-11-21, both JavaScript files passed Node syntax checks. Thirty-two automated jsdom checks passed for filtering/sorting, theme state, storage failure, form validation, loading/success/empty/error/retry/timeout cases, invalid API data, safe text rendering, and the six-card limit. The actual GitHub endpoint independently returned HTTP 200 and three repositories at that time.

These automated checks simulate a DOM; they are not browser compatibility, rendering, keyboard, screen-reader, or Lighthouse tests. A local Chromium launch failed due to execution-environment restrictions. At that stage, no browser rendering or performance score was claimed. The inherited Assignment 2 Chrome results do not establish results for this version. The later student-run checks below provide the browser-test evidence for this version.

## User Lighthouse report and startup correction

The user supplied a Chrome Lighthouse 13.5.0 Mobile report, captured on 2026-11-21 at 21:50 GMT+3, using an emulated Moto G Power and Slow 4G throttling on localhost. Results before the startup correction were Performance 91, Accessibility 100, Best Practices 96, SEO 100, FCP 1.0s, LCP 1.1s, TBT 0ms, Speed Index 1.0s, and CLS 0.193.

The expanded diagnostics identified a missing `/favicon.ico` request (404) and the entire `<main>` as the shifted element. A shifted element identifies the affected content, not necessarily the cause. Source inspection showed that the theme switch was hidden until the deferred script ran; revealing it could enlarge the mobile header and move main. The sorting row and count also appeared after initial parsing.

The correction renders the switch and sorting row in normal flow from initial HTML, keeps their controls disabled until JavaScript initializes them, and supplies the initial project count in HTML. JavaScript enables these controls instead of revealing them, keeping their geometry present from first render. The CSS styling fixes their control dimensions. An explicit `assets/favicon.svg` link supplies a real favicon resource.

Reference: [web.dev: Optimize Cumulative Layout Shift](https://web.dev/articles/optimize-cls).

The functional and color checks still passed, and six additional startup/asset checks passed. The student then reran Mobile Lighthouse and reported 100 in all four categories. The final numeric CLS was not supplied, so the earlier 0.193 remains identified only as the initial measurement. No replacement CLS or timing values are estimated.

## Final student verification

The student confirmed that mobile layout at 320px and 768px, theme persistence across refresh, contact validation, keyboard operation, API failure/retry, and core features in another browser all passed. Filtering and sorting were also confirmed earlier. Submitted desktop screenshots show both complete themes and populated API cards. The other browser's name/version was not recorded, and a real-phone or screen-reader test is not claimed.

| Lighthouse category | Initial supplied report | Final student-reported run |
|---|---:|---:|
| Performance | 91 | 100 |
| Accessibility | 100 | 100 |
| Best Practices | 96 | 100 |
| SEO | 100 | 100 |

The original report and diagnostic screenshots identify the tested issues. The final scores and remaining manual test results are recorded from the student's confirmation in C01. These results have not been independently reproduced in the agent's restricted browser environment.
