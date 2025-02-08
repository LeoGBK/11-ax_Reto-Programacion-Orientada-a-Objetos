class Vehiculo {
    constructor(numRuedas) {
        this.numRuedas = numRuedas;
    }

    mostrarDetalles() {
        console.log(`Este vehículo tiene ${this.numRuedas}`);
    }
}

class Bus extends Vehiculo {
    constructor(numRuedas, numPasajeros, alcance) {
        super(numRuedas);
        this.numPasajeros = numPasajeros;
        this.alcance = alcance;
    }

    mostrarDetallesBus() {
        console.log(`Puede transportar ${this.numPasajeros}`);
    }
}

class Bicicleta extends Vehiculo {
    constructor(numRuedas, numPasajeros, tipo) {
        super(numRuedas);
        this.numPasajeros = numPasajeros;
        this.tipo = tipo;
    }

    mostrarDetallesBicicleta() {
        console.log(`Es una bicicleta de tipo ${this.tipo}`);
    }
}


mostrarDetallesTipo() {
    console.log(`Este vehículo tiene ${this.numRuedas}`);
}