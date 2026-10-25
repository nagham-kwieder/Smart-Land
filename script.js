// Projects Page: Filter Projects

const projectFilters = document.querySelectorAll(".project-filter");
const projectCards = document.querySelectorAll(".project-card");

projectFilters.forEach((filterButton) => {
    filterButton.addEventListener("click", () => {
        const selectedCategory = filterButton.dataset.filter;

        // Update active filter
        projectFilters.forEach((button) => {
            button.classList.remove("active");
        });

        filterButton.classList.add("active");

        // Filter project cards
        projectCards.forEach((card) => {
            const projectCategory = card.dataset.category;

            if (
                selectedCategory === "all" ||
                selectedCategory === projectCategory
            ) {
                card.classList.remove("is-hidden");
            } else {
                card.classList.add("is-hidden");
            }
        });
    });
});

// Contact Page: Basic Form Validation

const contactForm = document.querySelector("#contact-form");

if (contactForm) {
    const statusMessage = document.querySelector("#contact-form-status");

    contactForm.addEventListener("submit", (event) => {
        event.preventDefault();

        if (!contactForm.checkValidity()) {
            contactForm.reportValidity();
            return;
        }

        statusMessage.textContent =
            "تم التحقق من الحقول، لكن إرسال الرسائل غير مفعّل في هذا النموذج.";

        statusMessage.className =
            "contact-form-status is-visible is-error";
    });
}
// Footer: Update Copyright Year
const currentYearElement = document.querySelector("#current-year");

if (currentYearElement) {
    currentYearElement.textContent = new Date().getFullYear();
}
