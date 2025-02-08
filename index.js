class Vehiculo {
    constructor(numRuedas) {
        this.numRuedas = numRuedas;
    }

    mostrarDetalles() {
        console.log(`Este vehículo tiene ${this.numRuedas}`);
    }
}

class Bus extends Vehiculo {
    constructor(numPasajeros) {
        super(numRuedas);
        this.numPasajeros = numPasajeros;
    }

    mostrarDetallesBus() {
        console.log(`Puede transportar ${this.numPasajeros}`);
    }
}

class Bicicleta extends Vehiculo {
    constructor(tipo) {
        super(numRuedas);
        this.tipo = tipo;
    }

    mostrarDetallesBicicleta() {
        console.log(`Es una bicicleta de tipo ${this.tipo}`);
    }
}

const bus = new Bus(60);
const bicicleta = new Bicicleta('Montaña');

bus.mostrarDetalles();
bus.mostrarDetallesBus();