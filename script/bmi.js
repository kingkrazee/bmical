let input1 = document.querySelector('#wgt')
let input2 = document.querySelector('#hgh')
let answer = document.querySelector('.answer1')
calc.addEventListener('click', () => {
    let bmi = input1.value / (input2.value * input2.value);
    let formattedBMI = bmi.toFixed(2);
    answer.innerText = formattedBMI;
})

let ac = document.getElementById('clr')
ac.addEventListener('click',function(){
clearSum();
});

function clearSum(){
    input1.value = '';
    input2.value = '';
    answer.innerText = '';
}