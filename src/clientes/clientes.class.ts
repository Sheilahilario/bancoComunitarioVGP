import { Conta } from "src/contas/conta.class";

export class Cliente {
  id: string;
  contas: any;
  constructor(
    id: string,
    nomeCompleto: string,
    numeroIdentificacao: string,
    endereco: string,
    telefone: string,
    rendaSalarial: number,
    contas: Conta[],) { }
}