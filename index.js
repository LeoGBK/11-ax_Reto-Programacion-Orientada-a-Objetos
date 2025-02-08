class Vehiculo {
    constructor(numRuedas) {
        this.numRuedas = numRuedas;
    }

    mostrarDetalles() {
        return 'Este vehículo tiene ' + this.numRuedas + ' ruedas.';
    }
}

class Auto extends Vehiculo {
    constructor(numRuedas, numPasajeros) {
        super(numRuedas);
        this.numPasajeros = numPasajeros;
    }

    mostrarDetallesAuto() {
        return 'Puede transportar ' + this.numPasajeros + ' pasajeros';
    }
}

class Bicicleta extends Vehiculo {
    constructor(numRuedas, tipo) {
        super(numRuedas);
        this.tipo = tipo;
    }

    mostrarDetallesBicicleta() {
        return 'Es una bicicleta de tipo ' + this.tipo + '.';
    }
}

const auto = new Auto(4, 5);
const bicicleta = new Bicicleta(2, 'Montaña');

console.log(auto.mostrarDetalles(), auto.mostrarDetallesAuto());
console.log(bicicleta.mostrarDetalles(), bicicleta.mostrarDetallesBicicleta());