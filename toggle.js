let darkMode = false;

function toggleDarkMode() {
    const body = document.body;

    if (darkMode) {
        body.classList.remove('dark-mode');
    } else {
        body.classList.add('dark-mode');
    }

    darkMode = !darkMode;
}
