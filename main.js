function calcbmi() {
	var weight = document.getElementById("weight").value;
    var height = document.getElementById("height").value;
    var BMI = weight / (height * height);
	
    if (BMI < 18.5) {
		window.alert("You are Underweight haha");
	}
	else if (BMI >= 18.5 && BMI <= 24.9){
		window.alert("Yippie you're Normal Weight");
	}
	else if (BMI >=25 && BMI <= 29.9){
		window.alert("You are Overweight :p");
	}
	else if (BMI >=30){
		window.alert("oh... you're Obese");
	}
}