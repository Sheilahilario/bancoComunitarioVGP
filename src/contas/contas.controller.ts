import { Controller, Post, Body, Put, Param, Delete } from '@nestjs/common';
import { ContasService } from './contas.service';
import { TipoConta } from './conta.enum';

@Controller('contas')
export class ContasController {
  constructor(private readonly contasService: ContasService) { }

  @Post()
  criar(@Body() dados: { clienteId: string; tipo: TipoConta; saldo: number; }) {
    return this.contasService.criar(dados.clienteId, dados.tipo, dados.saldo);
  }

  @Put(':id')
  atualizar(@Param('id') id: string, @Body() dados: { tipo: TipoConta }) {
    return this.contasService.atualizar(id, dados.tipo);
  }

  @Delete(':id')
  remover(@Param('id') id: string) {
    return this.contasService.remover(id);
  }
}
