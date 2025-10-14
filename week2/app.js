const number = document.getElementById("counting-num");
const inc1Button = document.getElementById("increase1");
const inc10Button = document.getElementById("increase10");
const dec1Button = document.getElementById("decrease1");
const dec10Button = document.getElementById("decrease10");
const resetButton = document.getElementById("reset");

let count = 0;
number.textContent = count;

function increase1Count(){
    count++;
    number.textContent = count; //숫자 변화 반영
}

function increase10Count(){
    count += 10;
    number.textContent = count;
}

function decrease1Count(){
    count--;
    number.textContent = count;
}

function decrease10Count(){
    count -= 10;
    number.textContent = count;
}

function resetCount(){
    count = 0;
    number.textContent = count;
}

inc1Button.addEventListener("click", increase1Count);
inc10Button.addEventListener("click", increase10Count);
dec1Button.addEventListener("click", decrease1Count);
dec10Button.addEventListener("click", decrease10Count);
resetButton.addEventListener("click", resetCount);