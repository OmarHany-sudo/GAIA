document.addEventListener("DOMContentLoaded", () => {
    // قراءة الـ query parameters من الـ URL
    const urlParams = new URLSearchParams(window.location.search);
    const age = urlParams.get('age');
    const weight = urlParams.get('weight');
    const height = urlParams.get('height');
    const activity = urlParams.get('activity');
    const goal = urlParams.get('goal');

    // إذا تم تحميل القيم من الـ URL، نقوم بعرض الخطة الغذائية
    if (age && weight && height && activity && goal) {
        const plan = `
        Personalized Nutrition Plan:
        ----------------------------
        Age: ${age}
        Weight: ${weight} kg
        Height: ${height} cm
        Activity Level: ${activity}
        Goal: ${goal}

        Suggested Plan:
        - Breakfast: Oatmeal with fruits.
        - Lunch: Grilled chicken with quinoa and veggies.
        - Dinner: Salad with olive oil and a source of protein.
        - Snacks: Almonds and Greek yogurt.
        `;

        // إظهار النتيجة على الصفحة
        document.getElementById("nutrition-results").style.display = "block";
        document.getElementById("result-text").textContent = plan;

        // تحميل الـ PDF بعد فترة قصيرة
        setTimeout(() => {
            const { jsPDF } = window.jspdf;
            const doc = new jsPDF();

            // إضافة النص للـ PDF
            doc.text(plan, 10, 10);

            // تحميل الملف PDF
            doc.save("nutrition-plan.pdf");
        }, 1000); // بعد ثانية واحدة
    }

    // نموذج الحجز - التأثيرات والتنبيه
    const bookingForm = document.querySelector(".booking-form");
    bookingForm.addEventListener("submit", (e) => {
        e.preventDefault(); // منع إعادة تحميل الصفحة

        // تنبيه عند الحجز
        alert("Your booking has been submitted!");

        // إضافة تأثير عند الإرسال
        bookingForm.classList.add("submitted");

        // إعادة تعيين الحقول
        bookingForm.reset();

        // إزالة التأثير بعد 1.5 ثانية
        setTimeout(() => {
            bookingForm.classList.remove("submitted");
        }, 1500);
    });
});
