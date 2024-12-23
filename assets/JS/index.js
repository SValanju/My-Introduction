const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))

$(function () {
    // Fetch the markdown file
    $.get("assets/content.md", function (markdownContent) {
        // Convert markdown to HTML using marked.js
        var htmlContent = marked.parse(markdownContent);

        // Inject the HTML into the content div
        $("#mdContent").html(htmlContent);
    }).fail(function () {
        $("#mdContent").html(
            '<p class="text-danger">Failed to load the markdown file.</p>'
        );
    });

    Init();
});

function Init() {
    $("#toggleTheme").click(function () {
        let icon = $("#toggleTheme i");
        let isDarkTheme = icon.hasClass("bi-moon-stars-fill");

        if (isDarkTheme) {
            icon.removeClass("bi-moon-stars-fill").addClass("bi-brightness-high-fill");
            $(this).attr("data-bs-title", "Light Theme");
        } else {
            icon.removeClass("bi-brightness-high-fill").addClass("bi-moon-stars-fill");
            $(this).attr("data-bs-title", "Dark Theme");
        }

        $(this).tooltip('dispose').tooltip();

        document.body.classList.toggle('light-theme');
        document.body.classList.toggle('dark-theme');
    });
}
