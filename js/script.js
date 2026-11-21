// Select the text and get the visitor's current hour.
let greeting = document.getElementById("greeting");
let currentHour = new Date().getHours();

// Change the greeting according to the current time.
if (currentHour < 12) {
    greeting.textContent = "Good morning, I am";
}
else if (currentHour < 18) {
    greeting.textContent = "Good afternoon, I am";
}
else {
    greeting.textContent = "Good evening, I am";
}

// One state object keeps filtering and sorting consistent with each other.
const state = {
    category: "all",
    sort: "featured",
    theme: document.documentElement.dataset.theme
};

const filterButtons = document.querySelectorAll(".filterButton");
const projectGrid = document.getElementById("projectsGrid");
// Keep the original order so visitors can return to Featured order.
const projectCards = Array.from(projectGrid.querySelectorAll(".projectCard"));
const sortSelect = document.getElementById("projectSort");
const projectCount = document.getElementById("projectCount");
sortSelect.parentElement.hidden = false;

function renderProjects() {
    const orderedCards = [...projectCards];

    if (state.sort !== "featured") {
        orderedCards.sort(function (first, second) {
            const firstTitle = first.querySelector("h3").textContent;
            const secondTitle = second.querySelector("h3").textContent;
            const comparison = firstTitle.localeCompare(secondTitle, "en");
            return state.sort === "az" ? comparison : -comparison;
        });
    }

    let visibleCount = 0;
    const fragment = document.createDocumentFragment();

    orderedCards.forEach(function (project) {
        project.hidden = state.category !== "all" &&
            project.dataset.category !== state.category;
        if (!project.hidden) visibleCount += 1;
        fragment.append(project);
    });

    projectGrid.append(fragment);
    filterButtons.forEach(function (button) {
        button.setAttribute("aria-pressed", String(button.dataset.filter === state.category));
    });
    projectCount.textContent = `${visibleCount} of ${projectCards.length} projects shown.`;
}

filterButtons.forEach(function (button) {
    button.addEventListener("click", function () {
        state.category = button.dataset.filter;
        renderProjects();
    });
});

sortSelect.addEventListener("change", function () {
    state.sort = sortSelect.value;
    renderProjects();
});
renderProjects();

// Keep the button, document theme, and stored preference in sync.
const themeToggle = document.getElementById("themeToggle");
themeToggle.hidden = false;

function renderTheme() {
    document.documentElement.dataset.theme = state.theme;
    themeToggle.setAttribute("aria-pressed", String(state.theme === "dark"));
}

renderTheme();
themeToggle.addEventListener("click", function () {
    state.theme = state.theme === "dark" ? "light" : "dark";
    renderTheme();
    try {
        localStorage.setItem("portfolio-theme", state.theme);
    } catch {
        // Continue using the selected theme even if persistence is unavailable.
    }
});

// Load public repositories without credentials or a backend.
const githubRepos = document.getElementById("githubRepos");
const githubStatus = document.getElementById("githubStatus");
const githubRetry = document.getElementById("githubRetry");
const githubEndpoint = "https://api.github.com/users/Shublaq/repos?sort=updated&per_page=6&type=owner";
let githubLoading = false;

function createRepositoryCard(repository) {
    const card = document.createElement("article");
    card.className = "repositoryCard";
    const title = document.createElement("h3");
    const link = document.createElement("a");
    // Restrict API-provided destinations to this profile's HTTPS GitHub pages.
    const url = new URL(repository.html_url);
    if (url.origin !== "https://github.com" || !url.pathname.startsWith("/Shublaq/")) {
        throw new Error("Unexpected repository link.");
    }
    link.href = url.href;
    link.textContent = repository.name;
    title.append(link);

    const description = document.createElement("p");
    description.textContent = repository.description || "No description provided yet.";
    const language = document.createElement("p");
    language.className = "muted";
    language.textContent = `Main language: ${repository.language || "Not specified"}`;
    // textContent treats external descriptions as text rather than executable HTML.
    card.append(title, description, language);
    return card;
}

async function loadRepositories() {
    if (githubLoading) return;
    githubLoading = true;
    githubRetry.hidden = true;
    githubRetry.disabled = true;
    githubRepos.setAttribute("aria-busy", "true");
    githubStatus.textContent = "Loading GitHub repositories…";
    const controller = new AbortController();
    const timeout = setTimeout(function () { controller.abort(); }, 10000);

    try {
        const response = await fetch(githubEndpoint, { signal: controller.signal });
        if (!response.ok) {
            const error = new Error("GitHub request failed.");
            error.rateLimited = response.status === 403 || response.status === 429;
            throw error;
        }
        const repositories = await response.json();
        if (!Array.isArray(repositories) || repositories.some(function (repository) {
            return !repository || typeof repository.name !== "string" ||
                typeof repository.html_url !== "string";
        })) {
            throw new Error("Unexpected GitHub response.");
        }

        const fragment = document.createDocumentFragment();
        repositories.slice(0, 6).forEach(function (repository) {
            fragment.append(createRepositoryCard(repository));
        });
        githubRepos.replaceChildren(fragment);
        githubStatus.textContent = repositories.length
            ? "Recent repositories loaded from GitHub."
            : "No public repositories are available yet.";
    } catch (error) {
        githubStatus.textContent = error.rateLimited
            ? "GitHub is limiting requests right now. Please try again later, or use the GitHub link above."
            : "Unable to load GitHub repositories. Check your connection and retry, or use the GitHub link above.";
        githubRetry.hidden = false;
    } finally {
        clearTimeout(timeout);
        githubLoading = false;
        githubRetry.disabled = false;
        githubRepos.setAttribute("aria-busy", "false");
    }
}

githubRetry.addEventListener("click", loadRepositories);
loadRepositories();

// Select the form, its fields, and the feedback paragraph.
const contactForm = document.getElementById("contactForm");
const formStatus = document.getElementById("formStatus");
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const messageInput = document.getElementById("message");

// Let our submit handler control when browser validation runs.
contactForm.noValidate = true;

contactForm.addEventListener("submit", function (event) {
    event.preventDefault();

    // Remove spaces from the beginning and end of each entry.
    nameInput.value = nameInput.value.trim();
    emailInput.value = emailInput.value.trim();
    messageInput.value = messageInput.value.trim();

    if (!contactForm.checkValidity()) {
        formStatus.textContent =
            "Please complete all required fields and enter a valid email address.";
        formStatus.dataset.state = "error";

        contactForm.reportValidity();
        return;
    }

    formStatus.textContent =
        "Your entries are valid. This demo does not send messages.";
    formStatus.dataset.state = "success";
});

// Clear outdated feedback when the visitor edits a field.
contactForm.addEventListener("input", function () {
    formStatus.textContent = "";
    formStatus.dataset.state = "";
});