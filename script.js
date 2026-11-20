document.getElementById("calculateBtn").addEventListener("click", function () {

    const height = document.getElementById("height").value;
    const weight = document.getElementById("weight").value;
    const result = document.getElementById("result");

    if (height === "" || weight === "") {
        result.textContent = "Please enter both height and weight!";
        return;
    }

    const heightCm = Number(height);
    const weightKg = Number(weight);

    if (
        !Number.isFinite(heightCm) ||
        !Number.isFinite(weightKg) ||
        heightCm <= 0 ||
        weightKg <= 0
    ) {
        result.textContent = "Please enter valid positive values!";
        return;
    }

    // Convert height from cm to meters
    const heightM = heightCm / 100;

    // Calculate BMI
    const bmi = weightKg / (heightM * heightM);

    // Determine BMI category
    let category;

    if (bmi < 18.5) {
        category = "Underweight";
    } else if (bmi < 25) {
        category = "Normal weight";
    } else if (bmi < 30) {
        category = "Overweight";
    } else {
        category = "Obese";
    }

    // Display result
    result.innerHTML =
        "Your BMI: " + bmi.toFixed(2) +
        "<br>Category: " + category;

});
