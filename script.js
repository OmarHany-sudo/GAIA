document.addEventListener("DOMContentLoaded", () => {
    // نموذج الذكاء الاصطناعي للخدمات الغذائية
    const nutritionForm = document.getElementById("nutrition-form");
    nutritionForm.addEventListener("submit", async (e) => {
        e.preventDefault();

        const age = document.getElementById("age").value;
        const weight = document.getElementById("weight").value;
        const height = document.getElementById("height").value;
        const activity = document.getElementById("activity").value;
        const goal = document.getElementById("goal").value;

        // توليد نص الخطة الغذائية (ممكن تعديلها بناءً على البيانات المدخلة)
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

        // إنشاء ملف PDF باستخدام مكتبة jsPDF
        const { jsPDF } = window.jspdf;
        const doc = new jsPDF();

        // إضافة النص للـ PDF
        doc.text(plan, 10, 10);

        // تحميل الملف PDF
        doc.save("nutrition-plan.pdf");

        // إظهار الرسالة للمستخدم
        document.getElementById("nutrition-results").style.display = "block";
        document.getElementById("result-text").textContent = "Your personalized nutrition plan has been generated and downloaded as a PDF.";
    });

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
