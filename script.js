document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector(".booking-form");
    form.addEventListener("submit", (e) => {
        alert("Your booking has been submitted!");
    });
});