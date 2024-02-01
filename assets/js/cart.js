const oneI = document.querySelector("#oneI");
const oneV = document.querySelector("#oneV");
const oneD = document.querySelector("#oneD");

const twoI = document.querySelector("#twoI");
const twoV = document.querySelector("#twoV");
const twoD = document.querySelector("#twoD");

const threeI = document.querySelector("#threeI");
const threeV = document.querySelector("#threeV");
const threeD = document.querySelector("#threeD");

const fourI = document.querySelector("#fourI");
const fourV = document.querySelector("#fourV");
const fourD = document.querySelector("#fourD");

const fiveI = document.querySelector("#fiveI");
const fiveV = document.querySelector("#fiveV");
const fiveD = document.querySelector("#fiveD");

const sixI = document.querySelector("#threeI");
const sixV = document.querySelector("#threeV");
const sixD = document.querySelector("#threeD");


const sevenI = document.querySelector("#sevenI");
const sevenV = document.querySelector("#tsevenV");
const sevenD = document.querySelector("#sevenD");


const eightI = document.querySelector("#eightI");
const eightV = document.querySelector("#eightV");
const eightD = document.querySelector("#eightD");


const nineI = document.querySelector("#nineI");
const nineV = document.querySelector("#nineV");
const nineD = document.querySelector("#nineD");


const tenI = document.querySelector("#tenI");
const tenV = document.querySelector("#tenV");
const tenD = document.querySelector("#tenD");

oneI.addEventListener("click", () => {
    incrementer(oneV);
});
oneD.addEventListener("click", () => {
    decrementer(oneV);
});

twoI.addEventListener("click", () => {
    incrementer(twoV);
});
twoD.addEventListener("click", () => {
    decrementer(twoV);
});

threeI.addEventListener("click", () => {
    incrementer(threeV);
});
threeD.addEventListener("click", () => {
    decrementer(threeV);
});

fourI.addEventListener("click", () => {
    incrementer(fourV);
});
fourD.addEventListener("click", () => {
    decrementer(fourV);
});

fiveI.addEventListener("click", () => {
    incrementer(fiveV);
});
fiveD.addEventListener("click", () => {
    decrementer(fiveV);
});

sixI.addEventListener("click", () => {
    incrementer(sixV);
});
sixD.addEventListener("click", () => {
    decrementer(sixV);
});

sevenI.addEventListener("click", () => {
    incrementer(sevenV);
});
sevenD.addEventListener("click", () => {
    decrementer(sevenV);
});

eightI.addEventListener("click", () => {
    incrementer(eightV);
});
eightD.addEventListener("click", () => {
    decrementer(eightV);
});

nineI.addEventListener("click", () => {
    incrementer(nineV);
});
nineD.addEventListener("click", () => {
    decrementer(nineV);
});

tenI.addEventListener("click", () => {
    incrementer(tenV);
});
tenD.addEventListener("click", () => {
    decrementer(tenV);
});




//handle increment function
const incrementer = (counter) => {
    const numberValue = parseInt(counter.innerHTML);
    const updatevalue = numberValue + 1;
    counter.innerHTML = updatevalue;
}


//handle dcrement function
const decrementer = (counter) => {
    const numberValue = parseInt(counter.innerHTML);
    if (numberValue > 1) {
        const updatevalue = numberValue - 1;
        counter.innerHTML = updatevalue;
    }
}