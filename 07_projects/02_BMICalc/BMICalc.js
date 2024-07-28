const form =  document.querySelector('form')
form.addEventListener('submit',function(e) {
    e.preventDefault()
    const height = parseInt(document.querySelector('#height').value);
    const weight = parseInt(document.querySelector('#weight').value)
    const result = document.querySelector('#result')
    if (height === '' || height < 0 || isNaN(height)) {
        result.innerHTML = `Please enter valid ${height}`
    }else if (weight === '' || weight < 0 || isNaN(weight)) {
       result.innerHTML = `Please enter valid ${weight}`
    }
    else{
        const bmi = (weight / ((height * height) / 10000)).toFixed(2);
        if(bmi>=25)
        {
            result.innerHTML = `Your BMI is ${bmi} and you are overweight`
        }else if(bmi > 18.6 && bmi<24.9){
                result.innerHTML = `Your BMI is ${bmi} and you are in normal range`
        }else{
            result.innerHTML = `Your BMI is ${bmi} and you are underweight`
        }
    }
})