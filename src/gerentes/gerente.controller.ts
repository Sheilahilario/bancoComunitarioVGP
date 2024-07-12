import { Controller, Post, Body, Param, Put, Delete, Get } from '@nestjs/common';
import { GerenteService } from './gerente.service';
import { Gerente } from './gerente.class';
import { Conta } from '../contas/conta.class';
import { TipoConta } from '../contas/conta.enum';

@Controller('gerentes')
export class GerenteController {
  constructor(private readonly gerenteService: GerenteService) { }

  @Post()
  criarGerente(
    @Body() body: {
      nomeCompleto: string,
      numeroIdentificacao: string,
      endereco: string,
      numeroTelefone: string
    }
  ): Gerente {
    const { nomeCompleto, numeroIdentificacao, endereco, numeroTelefone } = body;
    return this.gerenteService.criarGerente(nomeCompleto, numeroIdentificacao, endereco, numeroTelefone);
  }

  @Post('criar-manualmente')
  criarGerenteManualmente(): Gerente {
    const nomeCompleto = 'João da Silva';
    const numeroIdentificacao = '123456789';
    const endereco = 'Rua Exemplo, 123';
    const numeroTelefone = '987654321';

    return this.gerenteService.criarGerente(nomeCompleto, numeroIdentificacao, endereco, numeroTelefone);
  }

  @Get()
  obterTodosGerentes(): Gerente[] {
    return this.gerenteService.obterTodosGerentes();
  }

  @Get(':id')
  obterGerentePorId(@Param('id') id: string): Gerente {
    return this.gerenteService.obterGerentePorId(id);
  }

  @Post(':gerenteId/contas')
  criarContaPeloGerente(
    @Param('gerenteId') gerenteId: string,
    @Body() body: { clienteId: string, tipo: TipoConta, saldo: number },
  ): Conta {
    return this.gerenteService.criarContaPeloGerente(gerenteId, body.clienteId, body.tipo, body.saldo);
  }

  @Put(':gerenteId/contas/:contaId')
  atualizarConta(
    @Param('gerenteId') gerenteId: string,
    @Param('contaId') contaId: string,
    @Body() body: { tipo: TipoConta },
  ): Conta {
    return this.gerenteService.atualizarConta(contaId, body.tipo);
  }

  @Delete(':gerenteId/contas/:contaId')
  removerConta(
    @Param('gerenteId') gerenteId: string,
    @Param('contaId') contaId: string,
  ): Conta {
    return this.gerenteService.removerConta(contaId);
  }

  @Put(':gerenteId/contas/:contaId/fechar')
  fecharConta(
    @Param('gerenteId') gerenteId: string,
    @Param('contaId') contaId: string,
  ): Conta {
    return this.gerenteService.fecharConta(contaId);
  }

  @Get(':gerenteId/contas/:contaId')
  buscarConta(
    @Param('gerenteId') gerenteId: string,
    @Param('contaId') contaId: string,
  ): Conta {
    return this.gerenteService.buscarConta(contaId);
  }
}
