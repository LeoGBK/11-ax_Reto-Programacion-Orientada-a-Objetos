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
}

class Bicicleta extends Vehiculo {
    constructor(numRuedas, numPasajeros, tipo) {
        super(numRuedas);
        this.numPasajeros = numPasajeros;
        this.tipo = tipo;
    }
}


mostrarDetallesTipo() {
    console.log(`Este vehículo tiene ${this.numRuedas}`);
}