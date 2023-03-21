let month = 6;
let monthName;
if (month == 1) {
    monthName = 'Jan';
} else if (month == 2) {
    monthName = 'Feb';
} else if (month == 3) {
    monthName = 'Mar';
} else if (month == 4) {
    monthName = 'Apr';
} else if (month == 5) {
    monthName = 'May';
} else if (month == 6) {
    monthName = 'Jun';
} else if (month == 7) {
    monthName = 'Jul';
} else if (month == 8) {
    monthName = 'Aug';
} else if (month == 9) {
    monthName = 'Sep';
} else if (month == 10) {
    monthName = 'Oct';
} else if (month == 11) {
    monthName = 'Nov';
} else if (month == 12) {
    monthName = 'Dec';
} else {
    monthName = 'Invalid month';
}
console.log(monthName); // Jun

//BMI of a person
let weight = 70; // kg
let height = 1.72; // meter

let bmi = weight / (height * height);
let weightStatus;

if (bmi < 18.5) {
    weightStatus = 'Underweight';
} else if (bmi >= 18.5 && bmi <= 24.9) {
    weightStatus = 'Healthy Weight';
} else if (bmi >= 25 && bmi <= 29.9) {
    weightStatus = 'Overweight';
} else {
    weightStatus = 'Obesity';
}

console.log(weightStatus); //Healthy Weight
