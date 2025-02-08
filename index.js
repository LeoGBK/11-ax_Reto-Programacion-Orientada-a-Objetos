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
        console.log(`Este vehículo tiene ${this.numRuedas}`);
    }
}

class Bicicleta extends Vehiculo {
    constructor(numRuedas, numPasajeros, tipo) {
        super(numRuedas);
        this.numPasajeros = numPasajeros;
        this.tipo = tipo;
    }

    mostrarDetallesBicicleta() {
        console.log(`Este vehículo tiene ${this.numRuedas}`);
    }
}


mostrarDetallesTipo() {
    console.log(`Este vehículo tiene ${this.numRuedas}`);
}