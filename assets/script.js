const buttons = document.querySelector('.buttons');

const registersElements = [];

registersElements.push(document.getElementById('ax-value'));
registersElements.push(document.getElementById('bx-value'));
registersElements.push(document.getElementById('cx-value'));
registersElements.push(document.getElementById('dx-value'));

const fromInputElement = document.getElementById('fromInput');
const toInputElement = document.getElementById('toInput');

const setButton = buttons.children[0];
const clearButton = buttons.children[1];
const movButton = buttons.children[2];
const xchgButton = buttons.children[3];

const registers = [{
        name: 'ax',
        value: '0000'
    },
    {
        name: 'bx',
        value: '0000'
    },
    {
        name: 'cx',
        value: '0000'
    },
    {
        name: 'dx',
        value: '0000'
    }
];

let isStarted = false;

const generateRandomValue = () => {
    const hexDigits = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e', 'f'];
    let generatedHexNumber = [];
    for (let i = 0; i < 4; i++) {
        generatedHexNumber.push(hexDigits[Math.floor(Math.random() * hexDigits.length)]);
    }
    return generatedHexNumber.join('');
}

setButton.addEventListener('click', () => {
    setButton.innerHTML = "random";
    isStarted = true;

    for (const register of registers) {
        register.value = generateRandomValue();
    }

    for (let i = 0; i < 4; i++) {
        registersElements[i].innerHTML = registers[i].value;
    }
})

clearButton.addEventListener('click', () => {
    for (const register of registers) {
        register.value = '0000';
    }

    for (let i = 0; i < 4; i++) {
        registersElements[i].innerHTML = registers[i].value;
    }

    fromInputElement.value = null;
    toInputElement.value = null;
    isStarted = false;
})

movButton.addEventListener('click', () => {

})