const projectsDone = document.querySelector('.projects .numbers');
const clientServed = document.querySelector('.clients .numbers');
const workHours = document.querySelector('.work-hrs .numbers');

class Tabs {
    constructor(numbers, item){
        this.numbers = numbers
        this.currentNumber = 0;
        this.item = item
    }
    
    addNumbers = () => {
        if(this.currentNumber <= this.numbers){
            this.item.textContent = `${this.currentNumber++}+`
        }
    }

    displayNumbers = () => {
        setInterval(this.addNumbers, 1)
    }
}

const project = new Tabs(500, projectsDone);
const client = new Tabs(1500, clientServed);
const work = new Tabs(1714, workHours);

const forThree = () => {
    project.displayNumbers()
    client.displayNumbers()
    work.displayNumbers()
}

//setInterval(forThree, 1000)
//forThree()