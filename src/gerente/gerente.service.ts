import { Injectable } from '@nestjs/common';
import { Gerente } from './gerente.class';
import { GerenteFactory } from './gerente.factory';

@Injectable()
export class GerenteServ {
  private gerentes: Gerente[] = [];

  criarGerente(nomeCompleto: string, numeroIdentificacao: string, endereco: string, numeroTelefone: string): Gerente {
    const novoGerente = GerenteFactory.criarGerente(nomeCompleto, numeroIdentificacao, endereco, numeroTelefone);
    this.gerentes.push(novoGerente);
    return novoGerente;
  }

  obterTodosGerentes(): Gerente[] {
    return this.gerentes;
  }

  obterGerentePorId(id: string): Gerente {
    return this.gerentes.find(gerente => gerente.id === id);
  }
}
