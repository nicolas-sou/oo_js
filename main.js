class Carro {
    constructor(marca, modelo, cor) {
    this.marca = marca;
    this.modelo = modelo;
    this.cor = cor;
}
    dirigir() {
    throw new Error("Método 'dirigir' precisa ser implementado nas classes filhas.");
    }
}

class Sedan extends Carro {
    dirigir() {
    return `Dirigindo o ${this.marca} ${this.modelo} na cor ${this.cor}.`;
    }
}

class SUV extends Carro {
    dirigir() {
    return `Dirigindo o ${this.marca} ${this.modelo} na cor ${this.cor}.`;
    }
}

const sedan1 = new Sedan("Toyota", "Corolla", "Prata");
const suv1 = new SUV("Jeep", "Compass", "Preto");
const sedan2 = new Sedan("Honda", "Civic", "Branco");

console.log(sedan1.dirigir()); 
console.log(suv1.dirigir());  
console.log(sedan2.dirigir());  
