document.addEventListener("DOMContentLoaded", () => {
    const toggleModeBtn = document.getElementById("toggle-mode");
    const body = document.body;

    // التحقق مما إذا كان المستخدم قد قام بتحديد وضع معين سابقًا
    const savedMode = localStorage.getItem("theme");

    if (savedMode === "night") {
        body.classList.add("night-mode");
        toggleModeBtn.textContent = "☀️"; // تغيير الرمز إلى الشمس
    } else {
        body.classList.remove("night-mode");
        toggleModeBtn.textContent = "🌙"; // تغيير الرمز إلى القمر
    }

    // عند النقر على الزر، تغيير المظهر
    toggleModeBtn.addEventListener("click", () => {
        body.classList.toggle("night-mode");

        // حفظ التفضيل في Local Storage
        if (body.classList.contains("night-mode")) {
            localStorage.setItem("theme", "night");
            toggleModeBtn.textContent = "☀️"; // وضع النهار
        } else {
            localStorage.setItem("theme", "day");
            toggleModeBtn.textContent = "🌙"; // وضع الليل
        }
    });
});
