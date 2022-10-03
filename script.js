let gameState = {
    totalNumofChocolates: 0,
    numofPassiveChocoGenerator: 0,
    intervalLoopID: undefined,
}


let passiveChocoGeneratorText = document.getElementById("counter")
let chocoBagNumEle = document.getElementById("score")

let chocobagElement = document.getElementById("chocolatebars")


function chocolateBarsIncrementer() {
    gameState.totalNumofChocolates = gameState.totalNumofChocolates + 1;
    chocoBagNumEle.textContent = gameState.totalNumofChocolates;
};

chocobagElement.addEventListener("click", chocolateBarsIncrementer);

let chocolateButtonElement = document.getElementById("cacaobutton");

let cocoaButterButtonElement = document.getElementById("cocoabutterbutton")

let chocolateFingersButtonElement = document.getElementById("fingersbutton")

let fancyWrappedButtonElement = document.getElementById("fancyWrappedButton")

let conveyorButtonElement = document.getElementById("conveyorButton")

let fancyBoxButtonElement = document.getElementById("fancyBoxButton")

let factoryButtonElement = document.getElementById("factoryButton")

function chocolateProducerPurchaser () {
    if(gameState.totalNumofChocolates >= 50) {
        gameState.totalNumofChocolates -= 50;
        chocoBagNumEle.textContent = gameState.totalNumofChocolates;
        gameState.numofPassiveChocoGenerator += 1;
        passiveChocoGeneratorText.textContent = gameState.numofPassiveChocoGenerator;
    }
}

function chocolateProducerPurchaser2 () {
    if(gameState.totalNumofChocolates >= 120) {
        gameState.totalNumofChocolates -= 120;
        chocoBagNumEle.textContent = gameState.totalNumofChocolates;
        gameState.numofPassiveChocoGenerator += 10;
        passiveChocoGeneratorText.textContent = gameState.numofPassiveChocoGenerator;
    }
}

function chocolateProducerPurchaser3 () {
    if(gameState.totalNumofChocolates >= 250) {
        gameState.totalNumofChocolates -= 250;
        chocoBagNumEle.textContent = gameState.totalNumofChocolates;
        gameState.numofPassiveChocoGenerator += 50;
        passiveChocoGeneratorText.textContent = gameState.numofPassiveChocoGenerator;
    }
}

function chocolateProducerPurchaser4 () {
    if(gameState.totalNumofChocolates >= 7500) {
        gameState.totalNumofChocolates -= 7500;
        chocoBagNumEle.textContent = gameState.totalNumofChocolates;
        gameState.numofPassiveChocoGenerator += 200;
        passiveChocoGeneratorText.textContent = gameState.numofPassiveChocoGenerator;
    }
}

function chocolateProducerPurchaser5 () {
    if(gameState.totalNumofChocolates >= 25000) {
        gameState.totalNumofChocolates -= 25000;
        chocoBagNumEle.textContent = gameState.totalNumofChocolates;
        gameState.numofPassiveChocoGenerator += 500;
        passiveChocoGeneratorText.textContent = gameState.numofPassiveChocoGenerator;
    }
}

function chocolateProducerPurchaser6 () {
    if(gameState.totalNumofChocolates >= 500000) {
        gameState.totalNumofChocolates -= 500000;
        chocoBagNumEle.textContent = gameState.totalNumofChocolates;
        gameState.numofPassiveChocoGenerator += 2500;
        passiveChocoGeneratorText.textContent = gameState.numofPassiveChocoGenerator;
    }
}

function chocolateProducerPurchaser7 () {
    if(gameState.totalNumofChocolates >= 1000000) {
        gameState.totalNumofChocolates -= 1000000;
        chocoBagNumEle.textContent = gameState.totalNumofChocolates;
        gameState.numofPassiveChocoGenerator += 100000;
        passiveChocoGeneratorText.textContent = gameState.numofPassiveChocoGenerator;
    }
}


chocolateButtonElement.addEventListener("click", chocolateProducerPurchaser)

cocoaButterButtonElement.addEventListener("click", chocolateProducerPurchaser2)

chocolateFingersButtonElement.addEventListener("click", chocolateProducerPurchaser3)

fancyWrappedButtonElement.addEventListener("click", chocolateProducerPurchaser4)

conveyorButtonElement.addEventListener("click", chocolateProducerPurchaser5)

fancyBoxButtonElement.addEventListener("click", chocolateProducerPurchaser6)

factoryButtonElement.addEventListener("click", chocolateProducerPurchaser7)

let startButtonElement = document.getElementById("start");

function startIncrementingChocolate() {
    gameState.totalNumofChocolates += gameState.numofPassiveChocoGenerator
    chocoBagNumEle.textContent = gameState.totalNumofChocolates
}

function setTheIncrementationInterval() {
    gameState.intervalLoopID = setInterval(startIncrementingChocolate, 1000)
    console.log(gameState.intervalLoopID);    
}

startButtonElement.addEventListener("click", setTheIncrementationInterval)

let pauseButtonElement = document.getElementById("pause");

function pauseIntervalLoop() {
    clearInterval(gameState.intervalLoopID);
};

pauseButtonElement.addEventListener("click",pauseIntervalLoop)

