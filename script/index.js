let button = document.getElementById('btn');
button.addEventListener('click',() => {
    const height = parseInt(document.getElementById('height').value);
    const weight = parseInt(document.getElementById('weight').value);
    // const pria = getElementById('pria')=1;
    // const wanita = getElementById('wanita')=0;
    const result = document.getElementById('output');
    let height_status= false, weight_status=false;

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

    if(height_status && weight_status){
    const bmi = (weight / ((height*height)/10000)).toFixed(2);

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

    // if(height_status && weight_status){
    //     const bmi = (weight / ((height*height)/10000)).toFixed(2);
    
    //     if(bmi < 18.6){
    //         result.innerHTML = 'kekurangan berat : '+ bmi; }
    //     else if(bmi >= 18.6 && bmi <30){
    //         result.innerHTML = 'Normal : '+ bmi;}
    //     else{
    //         result.innerHTML = 'kelebihan berat : '+ bmi;}
    //     }    
});