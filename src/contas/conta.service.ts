import { Injectable, NotFoundException, BadRequestException, Inject, forwardRef } from '@nestjs/common';
import { TipoConta } from './conta.enum';
import { Conta } from './conta.class';
import { ContaFactory } from './conta.factory';
import { ClienteService } from '../clientes/cliente.service';

@Injectable()
export class ContaService {
  constructor(
    @Inject(forwardRef(() => ClienteService)) private readonly clienteService: ClienteService,
    private readonly contaFactory: ContaFactory,
  ) { }

  criar(clienteId: string, tipo: TipoConta, saldo: number): Conta {
    this.validarTipoConta(tipo);

    const cliente = this.clienteService.buscarUm(clienteId);
    if (!cliente) {
      throw new NotFoundException(`Cliente com ID ${clienteId} não encontrado`);
    }

    const novaConta = ContaFactory.criarConta(tipo, clienteId, saldo);
    cliente.contas.push(novaConta);
    return novaConta;
  }

  atualizar(id: string, tipo: TipoConta): Conta {
    this.validarTipoConta(tipo);

    const conta = this.buscarUm(id);
    conta.tipo = tipo;
    return conta;
  }

  remover(id: string): Conta {
    const conta = this.buscarUm(id);
    const cliente = this.clienteService.buscarClientePorContaId(id);

    if (cliente) {
      cliente.contas = cliente.contas.filter(c => c.id !== id);
    }

    return conta;
  }

  fecharConta(id: string): Conta {
    const conta = this.buscarUm(id);
    conta.estaAtiva = false;
    return conta;
  }

  buscarUm(id: string): Conta {
    const cliente = this.clienteService.buscarClientePorContaId(id);

    if (cliente) {
      const conta = cliente.contas.find(conta => conta.id === id);
      if (conta) {
        return conta;
      }
    }

    throw new NotFoundException(`Conta com ID ${id} não encontrada`);
  }

  private validarTipoConta(tipo: TipoConta): void {
    const tiposValidos = Object.values(TipoConta);
    if (!tiposValidos.includes(tipo)) {
      throw new BadRequestException(`Tipo de conta inválido: ${tipo}`);
    }
  }
}
