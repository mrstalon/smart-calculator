class SmartCalculator {
  constructor(initialValue) {
    // your implementation
    this.calculatorMemory = [{
      type: 'initial',
      value: initialValue,
      parsed: false,
    }];
  }

  add(number) {
    // your implementation
    this.calculatorMemory.push({
      type: 'add',
      value: number,
      parsed: false,
    })
    return this;
  }

  subtract(number) {
    // your implementation
    this.calculatorMemory.push({
      type: 'subtract',
      value: number,
      parsed: false,
    })
    return this;
  }

  multiply(number) {
    // your implementation
    this.calculatorMemory.push({
      type: 'multiply',
      value: number,
      parsed: false,
    })
    return this;
  }

  devide(number) {
    // your implementation
    this.calculatorMemory.push({
      type: "devide",
      value: number,
      parsed: false,
    })
    return this;
  }

  pow(number) {
    // your implementation
    this.calculatorMemory.push({
      type: 'pow',
      value: number,
      parsed: false,
    })
    return this;
  }

  _calculate() {
    let memory = this.calculatorMemory.slice().reverse();

    memory.forEach((operation, index) => {
      if (operation.type === 'pow') {
        memory[index + 1].value = Math.pow(memory[index + 1].value, operation.value);
        operation.parsed = true;
      }
    });

    memory = memory.filter((operation) => operation.parsed === false);

    memory.forEach((operation, index) => {
      if (operation.type === 'multiply') {
        memory[index + 1].value *= operation.value;
        operation.parsed = true;
      } else if (operation.type === 'devide') {
        memory[index + 1].value /= operation.value;
        operation.parsed = true;
      }
    });

    memory = memory.filter((operation) => operation.parsed === false).reverse();

    for(let i = 0; i < memory.length; i++) {
      if (memory[i].type === 'add') {
        memory[0].value += memory[i].value;
      } else if (memory[i].type === 'subtract') {
        memory[0].value -= memory[i].value;
      }
    }

    this.calculatorMemory.length = 1;
    return this.calculatorMemory[0].value;
  }

  valueOf() {
    return this._calculate();
  }

  toString() {
    return this._calculate() + '';
  }
}

module.exports = SmartCalculator;
