import { Injectable } from '@nestjs/common';
import { Conta } from "./conta.class";
import { TipoConta } from "./conta.enum";

@Injectable()
export class ContaFactory {
  static criarConta(tipo: TipoConta, clienteId: string, saldo: number): Conta {
    return new Conta(tipo, clienteId, saldo)
  }
}
