document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector(".booking-form");
    form.addEventListener("submit", (e) => {
        e.preventDefault(); // عشان نمنع إعادة تحميل الصفحة

        // تنبيه عند الحجز
        alert("Your booking has been submitted!");

        // إضافة تأثير عندما يتم إرسال الحجز
        form.classList.add('submitted'); // إضافة class جديد عند الإرسال

        // تنفيذ شيء آخر بعد الحجز، مثل مسح الحقول
        form.reset(); // إعادة تعيين الحقول

        // مثال لتأثير CSS عند الحجز
        setTimeout(() => {
            form.classList.remove('submitted'); // إزالة تأثير بعد فترة
        }, 1500); // تأثير يستمر 1.5 ثانية
    });
});
