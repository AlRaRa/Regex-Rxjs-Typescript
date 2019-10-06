

export abstract class Cuenta {
    constructor(private numero: number, private saldo: number, private moneda: string){

    }
}

export class CajaDeAhorro extends Cuenta{
    constructor(nombre: number, saldo: number, moneda: string, private interes: number){
        super(nombre, saldo, moneda);
    }

    public aplicarInteres(): void{
        console.log('aplicando interes' + this.interes)
    }
}



const cuenta01:Cuenta = new CajaDeAhorro(123456, 0, 'USD', 10);


console.log(cuenta01)