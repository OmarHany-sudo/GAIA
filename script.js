document.addEventListener("DOMContentLoaded", () => {
    const urlParams = new URLSearchParams(window.location.search);
    const age = urlParams.get('age');
    const weight = urlParams.get('weight');
    const height = urlParams.get('height');
    const activity = urlParams.get('activity');
    const goal = urlParams.get('goal');

    // إذا تم تحميل القيم من الـ URL، نقوم بتوليد النظام الغذائي المناسب
    if (age && weight && height && activity && goal) {
        let plan = "";

        // تحديد النظام الغذائي بناءً على الهدف ومستوى النشاط
        if (goal === "lose") {
            if (activity === "sedentary") {
                plan = `
                Personalized Nutrition Plan for Weight Loss:
                ----------------------------
                Age: ${age}
                Weight: ${weight} kg
                Height: ${height} cm
                Activity Level: ${activity}
                Goal: ${goal}

                Suggested Plan:
                - Breakfast: فول مدمس مع خبز بلدي وليمون.
                - Lunch: دجاج مشوي مع سلطة خضار (خيار، طماطم، جزر، بصل) وزيت الزيتون.
                - Dinner: سمك مشوي مع أرز بني.
                - Snacks: زبادي طبيعي أو تفاحة.
                `;
            } else if (activity === "light") {
                plan = `
                Personalized Nutrition Plan for Weight Loss:
                ----------------------------
                Age: ${age}
                Weight: ${weight} kg
                Height: ${height} cm
                Activity Level: ${activity}
                Goal: ${goal}

                Suggested Plan:
                - Breakfast: شوفان مع حليب وتمر.
                - Lunch: دجاج مشوي مع أرز بسمتي وسلطة.
                - Dinner: سمك مشوي مع خضار مشوية.
                - Snacks: زبادي مع عسل.
                `;
            } else {
                plan = `
                Personalized Nutrition Plan for Weight Loss:
                ----------------------------
                Age: ${age}
                Weight: ${weight} kg
                Height: ${height} cm
                Activity Level: ${activity}
                Goal: ${goal}

                Suggested Plan:
                - Breakfast: شوفان مع حليب وموز.
                - Lunch: لحمة مشوية مع أرز وسلطة.
                - Dinner: خضار مسلوقة مع دجاج مشوي.
                - Snacks: جزر مع حمص.
                `;
            }
        } else if (goal === "maintain") {
            plan = `
            Personalized Nutrition Plan for Weight Maintenance:
            ----------------------------
            Age: ${age}
            Weight: ${weight} kg
            Height: ${height} cm
            Activity Level: ${activity}
            Goal: ${goal}

            Suggested Plan:
            - Breakfast: بيض مسلوق مع خبز أسمر.
            - Lunch: كفتة مشوية مع أرز أبيض وسلطة خضراء.
            - Dinner: حمص مع طحينة وخبز بلدي.
            - Snacks: مكسرات أو فاكهة موسمية.
            `;
        } else if (goal === "gain") {
            plan = `
            Personalized Nutrition Plan for Weight Gain:
            ----------------------------
            Age: ${age}
            Weight: ${weight} kg
            Height: ${height} cm
            Activity Level: ${activity}
            Goal: ${goal}

            Suggested Plan:
            - Breakfast: بان كيك مع زبدة فول سوداني وتمر.
            - Lunch: كباب مشوي مع أرز أبيض وصوص الطماطم.
            - Dinner: معكرونة مع دجاج وبيض مسلوق.
            - Snacks: عصير فواكه طبيعي أو خبز مع زبدة.
            `;
        }

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
        alert("تم إرسال الحجز!");

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