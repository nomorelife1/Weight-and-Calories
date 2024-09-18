document.getElementById("weightForm").addEventListener("submit", function(event) {
    event.preventDefault();

    // الحصول على القيم المدخلة من المستخدم
    var age = document.getElementById("age").value;
    var weight = document.getElementById("weight").value;
    var height = document.getElementById("height").value;
    var gender = document.getElementById("gender").value;
    var activityLevel = document.getElementById("activity").value;

    // تحويل الطول من سنتيمترات إلى متر
    var heightInMeters = height / 100;

    // حساب مؤشر كتلة الجسم BMI
    var bmi = weight / (heightInMeters * heightInMeters);
    var resultText = "";
    var adviceText = "";

    // تصنيف الوزن بناءً على BMI
    if (bmi < 18.5) {
        resultText = "Your BMI is " + bmi.toFixed(2) + ". You are underweight.";
        adviceText = "You need to gain some weight.";
    } else if (bmi >= 18.5 && bmi <= 24.9) {
        resultText = "Your BMI is " + bmi.toFixed(2) + ". Your weight is normal.";
        adviceText = "Keep maintaining your healthy weight!";
    } else if (bmi >= 25 && bmi <= 29.9) {
        resultText = "Your BMI is " + bmi.toFixed(2) + ". You are overweight.";
        adviceText = "You may need to lose some weight for better health.";
    } else {
        resultText = "Your BMI is " + bmi.toFixed(2) + ". You are obese.";
        adviceText = "Consider consulting with a healthcare provider for weight loss.";
    }

    // حساب السعرات الحرارية BMR
    var bmr;
    if (gender === "male") {
        bmr = 10 * weight + 6.25 * height - 5 * age + 5;
    } else {
        bmr = 10 * weight + 6.25 * height - 5 * age - 161;
    }

    // ضرب BMR في مستوى النشاط لحساب السعرات اليومية المطلوبة
    var dailyCalories = bmr * activityLevel;

    // حساب نطاق الوزن الطبيعي بناءً على الطول
    var minNormalWeight = 18.5 * (heightInMeters * heightInMeters);
    var maxNormalWeight = 24.9 * (heightInMeters * heightInMeters);

    // حساب الوزن الذي يبدأ عنده الوزن الزائد والسمنة
    var overweightLimit = 25 * (heightInMeters * heightInMeters);
    var obeseLimit = 30 * (heightInMeters * heightInMeters);

    // عرض النتائج في الصفحة
    document.getElementById("bmiResult").textContent = resultText;
    document.getElementById("bmiAdvice").textContent = adviceText;
    document.getElementById("caloriesResult").textContent = "You need " + dailyCalories.toFixed(2) + " calories per day based on your activity level.";

    // عرض تحليل الوزن
    document.getElementById("weightRange").textContent = "Your ideal weight range is between " + minNormalWeight.toFixed(1) + " kg and " + maxNormalWeight.toFixed(1) + " kg.";
    document.getElementById("normalWeight").textContent = "Normal weight range: " + minNormalWeight.toFixed(1) + " kg - " + maxNormalWeight.toFixed(1) + " kg.";
    document.getElementById("overweightLimit").textContent = "Overweight begins at: " + overweightLimit.toFixed(1) + " kg.";
    document.getElementById("obeseLimit").textContent = "Obesity starts at: " + obeseLimit.toFixed(1) + " kg.";
});
