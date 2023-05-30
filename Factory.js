class Developer {
  name;
  type = "Dev";

  constructor(name) {
    this.name = name;
  }
}

class Tester {
  name;
  type = "Tester";

  constructor(name) {
    this.name = name;
  }
}

function employeeFactory() {
  this.create = (name, type) => {
    switch (type) {
      case 1:
        return new Developer(name);
        break;
      case 2:
        return new Tester(name);
        break;
    }
  };
}

function say() {
  console.log(`Olá, me nome é ${this.name} e eu sou um ${this.type}`);
}
const employees = [];

const factory = new employeeFactory();

function teste(factory) {
  const vilma = factory.create("Vilma", 1);
  console.log(
    `Criando uma função que foi passada como argumento: nome: ${vilma.name} ocupação: ${vilma.type}`
  );
}

teste(factory)

employees.push(factory.create("Felipe", 1));
employees.push(factory.create("Fernanda", 2));

employees.forEach((emp) => {
  say.call(emp);
});
