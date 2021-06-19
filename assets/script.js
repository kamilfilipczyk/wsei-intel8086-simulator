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

const checkInput = (regA, regB) => {
    if ((regA === "AX" || regA === "BX" || regA === "CX" || regA === "DX") && (regB === "AX" || regB === "BX" || regB === "CX" || regB === "DX")) {
        return true;
    } else {
        return false;
    }
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
});

clearButton.addEventListener('click', () => {
    for (const register of registers) {
        register.value = '0000';
    }

    for (let i = 0; i < 4; i++) {
        registersElements[i].innerHTML = registers[i].value;
    }

    fromInputElement.value = "";
    toInputElement.value = "";
    isStarted = false;
});

movButton.addEventListener('click', () => {
    const movFromEl = fromInputElement.value;
    const movToEl = toInputElement.value;

    if (movFromEl != "" && movToEl != "" && checkInput(movFromEl.toUpperCase(), movToEl.toUpperCase()) === true) {

        if (movFromEl.toUpperCase() === "AX") {
            if (movToEl.toUpperCase() === "BX") {
                registers[1].value = registers[0].value;
            } else if (movToEl.toUpperCase() === "CX") {
                registers[2].value = registers[0].value;
            } else if (movToEl.toUpperCase() === "DX") {
                registers[3].value = registers[0].value;
            }
        } else if (movFromEl.toUpperCase() === "BX") {
            if (movToEl.toUpperCase() === "AX") {
                registers[0].value = registers[1].value;
            } else if (movToEl.toUpperCase() === "CX") {
                registers[2].value = registers[1].value;
            } else if (movToEl.toUpperCase() === "DX") {
                registers[3].value = registers[1].value;
            }
        } else if (movFromEl.toUpperCase() === "CX") {
            if (movToEl.toUpperCase() === "BX") {
                registers[1].value = registers[2].value;
            } else if (movToEl.toUpperCase() === "AX") {
                registers[0].value = registers[2].value;
            } else if (movToEl.toUpperCase() === "DX") {
                registers[3].value = registers[2].value;
            }
        } else if (movFromEl.toUpperCase() === "DX") {
            if (movToEl.toUpperCase() === "BX") {
                registers[1].value = registers[3].value;
            } else if (movToEl.toUpperCase() === "CX") {
                registers[2].value = registers[3].value;
            } else if (movToEl.toUpperCase() === "AX") {
                registers[0].value = registers[3].value;
            }
        }

        for (let i = 0; i < 4; i++) {
            registersElements[i].innerHTML = registers[i].value;
        }
    }
});

xchgButton.addEventListener('click', () => {
    const xchgFromEl = fromInputElement.value;
    const xchgToEl = toInputElement.value;
    let valueHolder;

    if (xchgFromEl != "" && xchgToEl != "" && checkInput(xchgFromEl.toUpperCase(), xchgToEl.toUpperCase()) === true) {

        if (xchgFromEl.toUpperCase() === "AX") {
            valueHolder = registers[0].value;
            if (xchgToEl.toUpperCase() === "BX") {
                registers[0].value = registers[1].value;
                registers[1].value = valueHolder;
            } else if (xchgToEl.toUpperCase() === "CX") {
                registers[0].value = registers[2].value;
                registers[2].value = valueHolder;
            } else if (xchgToEl.toUpperCase() === "DX") {
                registers[0].value = registers[3].value;
                registers[3].value = valueHolder;
            }
        } else if (xchgFromEl.toUpperCase() === "BX") {
            valueHolder = registers[1].value;
            if (xchgToEl.toUpperCase() === "AX") {
                registers[1].value = registers[0].value;
                registers[0].value = valueHolder;
            } else if (xchgToEl.toUpperCase() === "CX") {
                registers[1].value = registers[2].value;
                registers[2].value = valueHolder;
            } else if (xchgToEl.toUpperCase() === "DX") {
                registers[1].value = registers[3].value;
                registers[3].value = valueHolder;
            }
        } else if (xchgFromEl.toUpperCase() === "CX") {
            valueHolder = registers[2].value;
            if (xchgToEl.toUpperCase() === "BX") {
                registers[2].value = registers[1].value;
                registers[1].value = valueHolder;
            } else if (xchgToEl.toUpperCase() === "AX") {
                registers[2].value = registers[0].value;
                registers[0].value = valueHolder;
            } else if (xchgToEl.toUpperCase() === "DX") {
                registers[2].value = registers[3].value;
                registers[3].value = valueHolder;
            }
        } else if (xchgFromEl.toUpperCase() === "DX") {
            valueHolder = registers[3].value;
            if (xchgToEl.toUpperCase() === "BX") {
                registers[3].value = registers[1].value;
                registers[1].value = valueHolder;
            } else if (xchgToEl.toUpperCase() === "CX") {
                registers[3].value = registers[2].value;
                registers[2].value = valueHolder;
            } else if (xchgToEl.toUpperCase() === "AX") {
                registers[3].value = registers[0].value;
                registers[0].value = valueHolder;
            }
        }

        for (let i = 0; i < 4; i++) {
            registersElements[i].innerHTML = registers[i].value;
        }
    }
});