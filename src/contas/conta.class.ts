import { v4 as uuidv4 } from 'uuid';
import { TipoConta } from "./conta.enum";

export class Conta {
  public id: string;

  constructor(
    public tipo: TipoConta,
    public clienteId: string,
    public saldo: number,
    public estaAtiva: boolean = true
    // public limiteChequeEspecial?: number,
  ) {
    this.id = uuidv4();
  }
}
