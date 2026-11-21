// Apply the saved preference before CSS loads to avoid a flash of the wrong theme.
(function () {
    let savedTheme;

    try {
        savedTheme = localStorage.getItem("portfolio-theme");
    } catch {
        // The theme still works for this visit when browser storage is blocked.
    }

    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const theme = savedTheme === "light" || savedTheme === "dark"
        ? savedTheme
        : (prefersDark ? "dark" : "light");

    document.documentElement.dataset.theme = theme;
}());
