class Vehiculo {
    constructor(numRuedas) {
        this.numRuedas = numRuedas;
    }

    mostrarDetalles() {
        console.log(`Este vehículo tiene ${this.numRuedas}`);
    }
}

class Auto extends Vehiculo {
    constructor(numRuedas, numPasajeros) {
        super(numRuedas);
        this.numPasajeros = numPasajeros;
    }

    mostrarDetallesAuto() {
        console.log(`Puede transportar ${this.numPasajeros}`);
    }
}

class Bicicleta extends Vehiculo {
    constructor(numRuedas, tipo) {
        super(numRuedas);
        this.tipo = tipo;
    }

    mostrarDetallesBicicleta() {
        console.log(`Es una bicicleta de tipo ${this.tipo}`);
    }
}

const auto = new Auto(4, 5);
const bicicleta = new Bicicleta('Montaña');

auto.mostrarDetalles();
auto.mostrarDetallesAuto();
