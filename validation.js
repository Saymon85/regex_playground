const inputs = document.querySelectorAll('input');
const patterns = {
    telephone: /^\d{11}$/,
    username: /^[a-z\d]{5,12}$/i,
    password: /^[\w@-]{8,20}$/,
    slug: /^[a-z\d-]{8,20}$/,
    email: /^([a-z\d\.-_]+)@([a-z\d-]+)\.([a-z]{2,6})([\.a-z]{2,6})?$/
}

function testRegExp(testField, regex){
    debugger;
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
