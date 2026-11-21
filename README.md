# Personal Portfolio — Assignment 3

A responsive HTML, CSS, and JavaScript portfolio by Mohammed Shublaq (202339150), developed for Web Engineering at KFUPM. This project builds on Assignments 1 and 2.

## Features

- About Me, skills, and two featured projects: KFUPM Room Booking System and KFUPM Hub.
- Combined project filtering (All / Java / UI/UX) and sorting (Featured / Title A–Z / Title Z–A).
- A project count and keyboard-accessible controls with visible focus indicators.
- Recent public GitHub repositories, fetched from GitHub with loading, empty, error, retry, and timeout handling.
- Light/dark theme, restored from browser storage on later visits. First visits follow the device preference.
- Time-based greeting and a responsive layout.
- A contact-form demonstration that validates required fields, trimmed input, and email format.
- Compressed WebP project images with lazy loading and explicit dimensions.

**The contact form does not send or store messages.** Use the email link for actual contact.

## Run locally

No framework, API key, package installation, build process, or backend is needed for the portfolio.

1. Select **Code → Download ZIP** on GitHub and extract it, or clone:

   ```bash
   git clone https://github.com/Shublaq/202339150-MohammedShublaq-assignment3.git
   cd 202339150-MohammedShublaq-assignment3
   ```

2. Open the folder in VS Code.
3. Start a local server using **Live Server → Go Live**. Alternatively, if Python is installed:

   ```bash
   python -m http.server 8000
   ```

4. Open `http://localhost:8000` for the Python option. Live Server opens its own address.
5. Keep the same address when testing saved preferences: browser storage is scoped to the origin.

An internet connection is required for the GitHub section. The rest of the portfolio remains usable if GitHub is unavailable. Opening `index.html` directly may work, but use a local HTTP server for consistent fetch and storage testing.

## Using the features

- Choose a project category, then a sorting option. Both apply together; **All** retains the selected sorting. **Featured order** restores the original card order.
- Use the **Theme** switch in the navigation. The visible Light/Dark label and moving thumb show the current state; screen readers receive the matching switch state. Reload to check persistence.
- The GitHub section shows up to six real public repositories ordered by their latest update. Existing portfolio assignments are valid content; lab repositories are optional. Assignment names receive readable titles, and missing descriptions receive a useful fallback. A repository description on GitHub is helpful but not required for this feature. Follow a repository title to open it. If loading fails, use **Retry loading repositories** or the permanent profile link.
- Enter a name, email, and message to try contact validation. Successful validation is explicitly a demo, without message delivery.
- Use Tab to navigate; native buttons support Enter/Space. A native select supports arrow keys.

## Structure

```text
202339150-MohammedShublaq-assignment3/
├── README.md
├── index.html
├── css/styles.css
├── js/
│   ├── theme.js
│   └── script.js
├── assets/images/
│   ├── room-booking.webp
│   └── kfupm-hub.webp
├── docs/
│   ├── ai-usage-report.md
│   ├── assignment2-ai-usage-report.md
│   ├── technical-documentation.md
│   └── testing-checklist.md
└── .gitignore
```

## Testing and submission status

JavaScript syntax checks, local asset/link checks, and 32 automated DOM checks passed on 2026-11-21. The real public GitHub endpoint also returned HTTP 200 and three repositories at test time. Mocked responses cover errors and unusual data. After the user reported a dark-theme contrast defect, 32 updated DOM checks passed again, together with 48 contrast combinations and switch-state/repository-title checks. Calculated text contrast in those combinations is at least 5.17:1. These checks do not replace rendering tests.

DOM checks do not verify layout, browser rendering, or screen readers. Visual, cross-browser, keyboard, and Lighthouse checks remain pending. Complete [Testing Checklist](docs/testing-checklist.md) and the [AI report](docs/ai-usage-report.md) before submission. No live deployment or performance score is claimed.

## AI assistance and inherited work

ChatGPT assisted with planning, implementation, debugging, checks, and documentation. See the [Assignment 3 AI Usage Report](docs/ai-usage-report.md). Its review and declaration are pending the student's own verification; automated checks do not replace personal understanding.

Assignment 2's report is preserved separately in [Assignment 2 AI Usage Report](docs/assignment2-ai-usage-report.md). Complete conversations and original AI artifacts belong in the separate Blackboard evidence ZIP, not this repository.

See [Technical Documentation](docs/technical-documentation.md) for application logic, state, API behavior, performance changes, and limitations.
