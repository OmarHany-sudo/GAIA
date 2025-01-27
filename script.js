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

        try {
            // إرسال الطلب لـ DeepSeek API
            const response = await fetch("https://api.deepseek.com/v1/nutrition-plan", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer sk-f4205b6e4b3947dd8c010933a5a825a6`, // استبدل المفتاح الخاص بك هنا
                },
                body: JSON.stringify({
                    age: age,
                    weight: weight,
                    height: height,
                    activity_level: activity,
                    goal: goal,
                }),
            });

            if (!response.ok) {
                throw new Error("Failed to fetch data from DeepSeek API");
            }

            const data = await response.json();
            const plan = data.plan; // افترض أن DeepSeek بيرجع النتيجة في `plan`

            // عرض النتيجة في الصفحة
            document.getElementById("nutrition-results").style.display = "block";
            document.getElementById("result-text").textContent = plan;
        } catch (error) {
            console.error("Error fetching data:", error);
            alert("Something went wrong. Please try again.");
        }
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
