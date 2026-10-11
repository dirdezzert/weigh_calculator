
function calculateBMI() {
    let weight = parseFloat(document.getElementById("weight").value);
    let height = parseFloat(document.getElementById("height").value);
    let result = document.getElementById("result");

    if (isNaN(weight) || isNaN(height) || weight <= 0 || height <= 0) {
        result.innerHTML = "Please enter a valid weight and height!";
        return;
    }

    height = height / 100;
    let bmi = weight / (height * height);
    let category;

    if (bmi < 18.5) {
        category = "Underweight";
    } else if (bmi < 25) {
        category = "Normal weight";
    } else if (bmi < 30) {
        category = "Overweight";
    } else {
        category = "Obesity";
    }

    result.innerHTML = "Your BMI: " + bmi.toFixed(2) +
        "<br>Category: " + category;
}
