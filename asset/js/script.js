document.getElementById("menuR1").innerHTML = '<button id="minus" class="btn" data-op="-">-</button> \
<input id="number" type="number" value="1" min="1" max="99"> \
<button id="plus" class="btn">+</button>';

//Add EventListeners
// Basics
minus.addEventListener("click", () => subNumber());
plus.addEventListener("click", () => addNumber());
document.getElementById("reset").addEventListener("click", () => reset());
// Checks
number.addEventListener("input", () => checkValueByElem(number));

function addNumber(){
    let res = parseInt(counter.value) + parseInt(number.value);
    counter.value = checkValueByNum(res);
}

function subNumber() {
    let res = parseInt(counter.value) - parseInt(number.value);
    counter.value = checkValueByNum(res);
}


function checkValueByNum(n){
    let min = -99;
    let max = 99;
    if (n > max) {
        alert("Warning: Exceeded value. Allowed counter: min = -99 max = 99");
        return(max);
    } else if (n < min) {
        alert("Warning: Exceeded value. Allowed counter: min = -99 max = 99");
        return(min);
    }
    return n;
}

//Identical function but handling element. It's used in #counter and #opNum too
function checkValueByElem(elem){
    let min = elem.min;
    let max = elem.max;
    let value = parseInt(elem.value);
    if (value > max) {
        alert(`Warning: Exceeded value. Allowed counter: min = ${min} max = ${max}`);
        elem.value = max;
    } else if (value < min) {
        alert(`Warning: Exceeded value. Allowed counter: min = ${min} max = ${max}`);
        elem.value = min;
    }
}

//rotate 'loading' icon adding class on element and removing it at the end
function rotate(elem) {
    elem.classList.add("rotating");
    setTimeout(() => {elem.classList.remove("rotating")}, 3000);
}

function reset(){
    let btnReset = document.getElementById("reset");
    rotate(btnReset.querySelector("i"));
    counter.value = 0;
    number.value = 1;
}