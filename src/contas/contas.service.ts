import { Injectable } from '@nestjs/common';
import { ClientesService } from '../clientes/clientes.service';
import { TipoConta } from './conta.enum';
import { Conta } from './conta.class';

@Injectable()
export class ContasService {
  constructor(private readonly clientesService: ClientesService) { }

  criar(clienteId: string, tipo: TipoConta, saldo: number) {
    const cliente = this.clientesService.buscarUm(clienteId);
    if (cliente) {
      const novaConta = new Conta(tipo, clienteId, saldo);
      cliente.contas.push(novaConta);
      return novaConta;
    }
    throw new Error('Cliente não encontrado');
  }

  atualizar(id: string, tipo: TipoConta) {
    const conta = this.buscarUm(id);
    if (conta) {
      conta.tipo = tipo;
      return conta;
    }
    throw new Error('Conta não encontrada');
  }

  remover(id: string) {
    const conta = this.buscarUm(id);
    if (conta) {
      const cliente = this.clientesService.buscarClientePorContaId(id);
      if (cliente) {
        cliente.contas = cliente.contas.filter(c => c.id !== id);
      }
      return conta;
    }
    throw new Error('Conta não encontrada');
  }

  buscarUm(id: string): Conta {
    const cliente = this.clientesService.buscarClientePorContaId(id);
    if (cliente) {
      return cliente.contas.find(conta => conta.id === id);
    }
    throw new Error('Conta não encontrada');
  }
}
