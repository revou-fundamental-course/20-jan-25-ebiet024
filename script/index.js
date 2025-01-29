let button = document.getElementById('btn');
button.addEventListener('click',() => {
    // mengambil ID dari HTML
    const height = parseInt(document.getElementById('height').value);
    const weight = parseInt(document.getElementById('weight').value);
    const age = parseInt(document.getElementById('age').value);
    const result = document.getElementById('output');
    let height_status= false, weight_status=false;

    // pemasukan kemungkinan error
    if(height === '' || isNaN(height) || (height <= 0)){
        document.getElementById('height_error').innerHTML = 'tolong masukkan tinggi anda dengan benar';}
    else{
        document.getElementById('height_error').innerHTML = '';
        height_status=true
    }

    if(weight === '' || isNaN(weight) || (weight <= 0)){
        document.getElementById('weight_error').innerHTML = 'tolong masukkan berat anda dengan benar';}
    else{
        document.getElementById('weight_error').innerHTML = '';
        weight_status=true
    }

    if(age === '' || isNaN(age) || (age <= 0)){
        document.getElementById('age_error').innerHTML = 'tolong masukkan umur anda dengan benar';}
    else{
        document.getElementById('age_error').innerHTML = '';
        age_status=true
    }

    // rumus BMI
    if(height_status && weight_status && age_status){
    const bmi = (weight / ((height*height)/10000)).toFixed(2);

    // penentuan pengelompokan BMI
    if(bmi <= 18.5){
        result.innerHTML = 'berat badan kurang : '+ bmi; }
    else if(bmi > 18.5 && bmi <23){
        result.innerHTML = 'Normal : '+ bmi;}
    else if(bmi >= 23 && bmi < 25){
        result.innerHTML = 'kelebihan berat badan : '+ bmi;}
    else if(bmi >= 25 && bmi <29.9){
        result.innerHTML = 'obesitas 1 : '+ bmi;}
    else{
        result.innerHTML = 'obesitas 2 : '+ bmi;}
    }
  
});