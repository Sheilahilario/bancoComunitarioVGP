import { Conta } from "src/contas/conta.interface";

export interface Cliente {
  id: string;
  nomeCompleto: string;
  numeroIdentificacao: string;
  endereco: string;
  telefone: string;
  rendaSalarial: number;
  contas: Conta[];
}