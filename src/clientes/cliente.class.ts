import { Conta } from "src/contas/conta.class";

export class Cliente {
  constructor(
    public id: string,
    public nomeCompleto: string,
    public numeroIdentificacao: string,
    public endereco: string,
    public telefone: string,
    public rendaSalarial: number,
    public contas: Conta[],
  ) { }
}
