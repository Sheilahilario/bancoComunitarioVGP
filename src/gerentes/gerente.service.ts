import { Injectable, NotFoundException } from '@nestjs/common';
import { v4 as uuidv4 } from 'uuid';
import { Gerente } from './gerente.class';
import { ContaService } from '../contas/conta.service';
import { Conta } from '../contas/conta.class';
import { TipoConta } from 'src/contas/conta.enum';
import { ContaFactory } from 'src/contas/conta.factory';

@Injectable()
export class GerenteService {
  private gerentes: Gerente[] = [];

  constructor(private readonly contaService: ContaService) { }

  criarGerente(nomeCompleto: string, numeroIdentificacao: string, endereco: string, numeroTelefone: string): Gerente {
    const novoGerente = new Gerente(uuidv4(), nomeCompleto, numeroIdentificacao, endereco, numeroTelefone);
    this.gerentes.push(novoGerente);
    return novoGerente;
  }

  obterTodosGerentes(): Gerente[] {
    return this.gerentes;
  }

  obterGerentePorId(id: string): Gerente {
    const gerente = this.gerentes.find(gerente => gerente.id === id);
    if (!gerente) {
      throw new NotFoundException(`Gerente com ID ${id} não encontrado`);
    }
    return gerente;
  }

  criarConta(clienteId: string, tipo: TipoConta, saldo: number): Conta {
    return this.contaService.criar(clienteId, tipo, saldo);
  }

  criarContaPeloGerente(gerenteId: string, clienteId: string, tipo: TipoConta, saldo: number): Conta {
    const gerente = this.obterGerentePorId(gerenteId);

    const novaContaGerente = ContaFactory.criarConta(tipo, clienteId, saldo);
    this.contaService.criar(clienteId, tipo, saldo);
    return novaContaGerente;
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
}
