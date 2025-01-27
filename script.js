document.addEventListener("DOMContentLoaded", () => {
    // استشارة غذائية - نموذج الذكاء الاصطناعي
    const nutritionForm = document.getElementById("nutrition-form");
    nutritionForm.addEventListener("submit", async (e) => {
        e.preventDefault();

        const age = document.getElementById("age").value;
        const weight = document.getElementById("weight").value;
        const height = document.getElementById("height").value;
        const activity = document.getElementById("activity").value;
        const goal = document.getElementById("goal").value;

        // هنا هنربط النموذج مع الـ AI API
        const response = await fetch("https://api.openai.com/v1/completions", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer sk-ijklmnopqrstuvwxijklmnopqrstuvwxijklmnop`
            },
            body: JSON.stringify({
                model: "text-davinci-003",
                prompt: `Generate a personalized nutrition plan for the following details:
                    Age: ${age},
                    Weight: ${weight} kg,
                    Height: ${height} cm,
                    Activity Level: ${activity},
                    Goal: ${goal}.`,
                max_tokens: 200,
            }),
        });

        const data = await response.json();
        const plan = data.choices[0].text;

        // عرض النتيجة في الصفحة
        document.getElementById("nutrition-results").style.display = "block";
        document.getElementById("result-text").textContent = plan;
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
