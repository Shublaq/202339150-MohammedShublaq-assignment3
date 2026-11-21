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
├── assets/
│   ├── favicon.svg
│   └── images/
│       ├── room-booking.webp
│       └── kfupm-hub.webp
├── docs/
│   ├── ai-usage-report.md
│   ├── assignment2-ai-usage-report.md
│   ├── technical-documentation.md
│   └── testing-checklist.md
└── .gitignore
```

## Testing

The student confirmed that filtering/sorting, mobile layouts at 320px and 768px, theme persistence, contact validation, keyboard operation, API failure/retry, and core features in another browser passed. Full-page screenshots show the desktop layout and both themes. The additional browser's name/version was not recorded; a real-phone test is not claimed.

After the startup/favicon correction, the student reported **100 Performance, 100 Accessibility, 100 Best Practices, and 100 SEO** in Mobile Lighthouse. The original supplied report scored 91/100/96/100 with CLS 0.193. The final numerical CLS and other metrics were not supplied and are not estimated. Lighthouse scores describe the tested run, not a guarantee across every device or an exhaustive accessibility audit.

Agent-run verification includes JavaScript syntax checks, local references, 32 functional DOM checks, 48 color combinations, and six startup/asset checks. See [Testing Checklist](docs/testing-checklist.md) and [Technical Documentation](docs/technical-documentation.md) for scope and results.

## AI assistance and inherited work

ChatGPT assisted with planning, implementation, debugging, checks, and documentation. See the [Assignment 3 AI Usage Report](docs/ai-usage-report.md). The report distinguishes AI-produced implementation, student review and test feedback, and agent-run checks. Complete conversations and original outputs are provided in the separate evidence ZIP, not the public repository.

Assignment 2's report is preserved separately in [Assignment 2 AI Usage Report](docs/assignment2-ai-usage-report.md). Complete conversations and original AI artifacts belong in the separate Blackboard evidence ZIP, not this repository.

See [Technical Documentation](docs/technical-documentation.md) for application logic, state, API behavior, performance changes, and limitations.
