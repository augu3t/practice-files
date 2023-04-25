const domContainer = document.querySelector('.container');

class counter {
    constructor(name, currentNumber){
        this.name = name;
        this.currentNumber = currentNumber;
        this.value = 0;
    }
    
    currentValue = document.createElement('P');
    createDomElements = () => {
        const name = document.createElement('P');
        const decrease = document.createElement('span');
        const reset = document.createElement('span');
        const increase = document.createElement('span');
        const counterDiv = document.createElement('div');
        const buttons = document.createElement('div');
        const container = document.createElement('div');

        this.currentValue.classList.add('counter');
        decrease.classList.add('btn');
        reset.classList.add('btn');
        increase.classList.add('btn');
        container.classList.add('counter-container')
        counterDiv.classList.add('counter-div');
        buttons.classList.add('setters');

        name.textContent = this.name;
        this.currentValue.textContent = this.currentNumber;
        decrease.textContent = "decrease";
        reset.textContent = "reset";
        increase.textContent = "increase";

        decrease.onclick = this.decreaseValue;
        reset.onclick = this.resetValue;
        increase.onclick = this.increaseValue;

        counterDiv.appendChild(name);
        counterDiv.appendChild(this.currentValue);
        buttons.appendChild(decrease);
        buttons.appendChild(reset);
        buttons.appendChild(increase);

        container.appendChild(counterDiv);
        container.appendChild(buttons);

        domContainer.appendChild(container);
    }

    increaseValue = () => {
        this.currentNumber++
        this.currentValue.textContent = this.currentNumber;
    }

    decreaseValue = (item) => {
        this.currentNumber--
        this.currentValue.textContent = this.currentNumber;
    }

    resetValue = () => {
        this.currentNumber = 0
        this.currentValue.textContent = this.currentNumber;
    }
}

const counterOne = new counter("first counter", 100);
const counterTwo = new counter("second counter", 200);
counterOne.createDomElements();
counterTwo.createDomElements();