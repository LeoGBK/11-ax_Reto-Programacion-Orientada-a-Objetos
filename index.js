class Vehiculo {
    constructor(numRuedas) {
        this.numRuedas = numRuedas;
    }

    mostrarDetalles() {
        console.log(`Este vehículo tiene ${this.numRuedas}`);
    }
}

class Bicicleta {
    constructor(numRuedas, numPasajeros, tipo) {
        super(numRuedas);
        this.numPasajeros = numPasajeros;
        this.tipo = tipo;
    }
}

class Bus {
    constructor(numRuedas, numPasajeros, alcance) {
        super(numRuedas);
        this.numPasajeros = numPasajeros;
        this.alcance = alcance;
    }
}

mostrarDetallesTipo() {
    console.log(`Este vehículo tiene ${this.numRuedas}`);
}