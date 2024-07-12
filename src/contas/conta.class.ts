import { TipoConta } from "./conta.enum";

export class Conta {
  constructor(
    public tipo: TipoConta,
    clienteId: string,
    saldo: number,
    //limiteChequeEspecial?: number,
  ) { }
}