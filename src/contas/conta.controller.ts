import { Controller, Post, Body, Param, Put, Delete, Get } from '@nestjs/common';
import { ContaService } from './conta.service';
import { Conta } from './conta.class';
import { TipoConta } from './conta.enum';

@Controller('contas')
export class ContaController {
  constructor(private readonly contaService: ContaService) { }

  @Post()
  criar(@Body() body: { clienteId: string, tipo: TipoConta, saldo: number }): Conta {
    return this.contaService.criar(body.clienteId, body.tipo, body.saldo);
  }

  @Put(':id')
  atualizar(@Param('id') id: string, @Body() body: { tipo: TipoConta }): Conta {
    return this.contaService.atualizar(id, body.tipo);
  }

  @Delete(':id')
  remover(@Param('id') id: string): Conta {
    return this.contaService.remover(id);
  }

  @Put('fechar/:id')
  fechar(@Param('id') id: string): Conta {
    return this.contaService.fecharConta(id);
  }

  @Get(':id')
  buscarUm(@Param('id') id: string): Conta {
    return this.contaService.buscarUm(id);
  }
}
