//Add EventListeners
minus.addEventListener("click", () => changeValue(minus.dataset.op));
plus.addEventListener("click", () => changeValue(plus.dataset.op));
reset.addEventListener("click", () => changeValue(reset.dataset.op));

function changeValue(operator){
    let res;
    switch (operator) {
        case "+":
            res = parseInt(counter.value) + parseInt(opNum.value);
            break;
        case "-":
            res = parseInt(counter.value) - parseInt(opNum.value);
            break;
        case "reset":
            rotate(reset.querySelector("i"));
            res = 0;
            opNum.value = 1;
    }
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
    let deg = 0;
    elem.classList.add("rotating");
    setTimeout(() => {elem.classList.remove("rotating")}, 3000);
}
let items = null;
function pino(){
    if(items == null)
        items = document.querySelectorAll(".border-debug");
    for(let item of items){
        if (item.classList.contains("border-debug"))
            item.classList.remove("border-debug");
        else
            item.classList.add("border-debug");
    }
}