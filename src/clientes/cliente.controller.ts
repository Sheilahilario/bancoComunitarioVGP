import { Controller, Post, Body, Param, Put, Delete, Get } from '@nestjs/common';
import { ClienteService } from './cliente.service';
import { Cliente } from './cliente.class';
import { Conta } from '../contas/conta.class';
import { TipoConta } from '../contas/conta.enum';

@Controller('clientes')
export class ClienteController {
  constructor(private readonly clienteService: ClienteService) { }

  @Post(':clienteId/contas')
  criarConta(
    @Param('clienteId') clienteId: string,
    @Body() body: { tipo: TipoConta, saldo: number },
  ): Conta {
    return this.clienteService.criarConta(clienteId, body.tipo, body.saldo);
  }

  @Put(':clienteId/contas/:contaId')
  atualizarConta(
    @Param('clienteId') clienteId: string,
    @Param('contaId') contaId: string,
    @Body() body: { tipo: TipoConta },
  ): Conta {
    return this.clienteService.atualizarConta(contaId, body.tipo);
  }

  @Delete(':clienteId/contas/:contaId')
  removerConta(
    @Param('clienteId') clienteId: string,
    @Param('contaId') contaId: string,
  ): Conta {
    return this.clienteService.removerConta(contaId);
  }

  @Put(':clienteId/contas/:contaId/fechar')
  fecharConta(
    @Param('clienteId') clienteId: string,
    @Param('contaId') contaId: string,
  ): Conta {
    return this.clienteService.fecharConta(contaId);
  }

  @Get(':clienteId/contas/:contaId')
  buscarConta(
    @Param('clienteId') clienteId: string,
    @Param('contaId') contaId: string,
  ): Conta {
    return this.clienteService.buscarConta(contaId);
  }

  @Get(':clienteId')
  buscarUm(
    @Param('clienteId') clienteId: string,
  ): Cliente {
    return this.clienteService.buscarUm(clienteId);
  }
}
