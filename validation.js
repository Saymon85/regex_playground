const inputs = document.querySelectorAll('input');
const patterns = {
    telephone: /^\d{11}$/,
}

function testRegExp(testField, regex){
    if(regex.test(testField.value)){
        testField.className = "valid";
    }
    else{
        testField.className = "invalid";
    }
}

inputs.forEach((el) => {
    el.addEventListener('blur', (e) => {
        testRegExp(e.target, patterns[e.target.attributes.name.value]);
    })
})
