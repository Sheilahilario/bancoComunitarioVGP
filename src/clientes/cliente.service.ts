import { forwardRef, Inject, Injectable, NotFoundException } from '@nestjs/common';
import { Cliente } from './cliente.class';
import { Conta } from 'src/contas/conta.class';
import { ContaService } from 'src/contas/conta.service';
import { TipoConta } from 'src/contas/conta.enum';

@Injectable()
export class ClienteService {
  private readonly cliente: Cliente[] = [];

  constructor(@Inject(forwardRef(() => ContaService)) private readonly contaService: ContaService) { }

  criarConta(clienteId: string, tipo: TipoConta, saldo: number): Conta {
    return this.contaService.criar(clienteId, tipo, saldo);
  }

  atualizarConta(id: string, tipo: TipoConta): Conta {
    return this.contaService.atualizar(id, tipo);
  }

  removerConta(id: string): Conta {
    return this.contaService.remover(id);
  }

  fecharConta(id: string): Conta {
    return this.contaService.fecharConta(id);
  }

  buscarConta(id: string): Conta {
    return this.contaService.buscarUm(id);
  }

  obterClientePorId(id: string): Cliente {
    const cliente = this.cliente.find(cliente => cliente.id === id);
    if (!cliente) {
      throw new NotFoundException(`Cliente com ID ${id} não encontrado`);
    }
    return cliente;
  }

  buscarClientePorContaId(contaId: string): Cliente {
    return this.cliente.find(cliente => cliente.contas.some(conta => conta.id === contaId));
  }

  buscarUm(clienteId: string): Cliente {
    const cliente = this.cliente.find(cliente => cliente.id === clienteId);
    if (!cliente) {
      throw new NotFoundException(`Cliente com ID ${clienteId} não encontrado`);
    }
    return cliente;
  }

}
