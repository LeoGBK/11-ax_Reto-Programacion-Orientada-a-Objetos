// Father/main class.
class Vehiculo {
    constructor(numRuedas) {
        this.numRuedas = numRuedas;
    }

    // Father class method to showcase the number of wheels the vehicle has.
    mostrarDetalles() {
        return 'Este vehículo tiene ' + this.numRuedas + ' ruedas.';
    }
}

// Child class creation for Auto.
class Auto extends Vehiculo {
    constructor(numRuedas, numPasajeros) {
        super(numRuedas);
        this.numPasajeros = numPasajeros;
    }

    // Specific method created for Auto child class to showcase number of passengers.
    mostrarDetallesAuto() {
        return 'Puede transportar ' + this.numPasajeros + ' pasajeros';
    }
}

// Child class creation for Bicicleta.
class Bicicleta extends Vehiculo {
    constructor(numRuedas, tipo) {
        super(numRuedas);
        this.tipo = tipo;
    }

    // Specific method created for Bicileta child class to showcase type of bike.
    mostrarDetallesBicicleta() {
        return 'Es una bicicleta de tipo ' + this.tipo + '.';
    }
}

// Creating objects and instancing them.
const auto = new Auto(4, 5);
const bicicleta = new Bicicleta(2, 'Montaña');

// Concatenating within console.log function outputs of father and son methods so they print in the same line.
console.log(auto.mostrarDetalles(), auto.mostrarDetallesAuto());
console.log(bicicleta.mostrarDetalles(), bicicleta.mostrarDetallesBicicleta());