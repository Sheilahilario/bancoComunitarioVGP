export enum TipoConta {
  CORRENTE = 'CORRENTE',
  POUPANCA = 'POUPANCA',
}

export interface Conta {
  id: string;
  clienteId: string;
  tipo: TipoConta;
  saldo: number;
  limiteChequeEspecial?: number;
}