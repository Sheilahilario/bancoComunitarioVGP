import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { GerenteServ } from './gerente.service';
import { Gerente } from './gerente.class';

@Controller('gerentes')
export class GerenteController {
  constructor(private readonly gerentesService: GerenteServ) { }

  @Post()
  criarGerente(@Body() criarGerenteDto: { nomeCompleto: string, numeroIdentificacao: string, endereco: string, numeroTelefone: string }): Gerente {
    const { nomeCompleto, numeroIdentificacao, endereco, numeroTelefone } = criarGerenteDto;
    return this.gerentesService.criarGerente(nomeCompleto, numeroIdentificacao, endereco, numeroTelefone);
  }

  @Get()
  obterTodosGerentes(): Gerente[] {
    return this.gerentesService.obterTodosGerentes();
  }

  @Get(':id')
  obterGerentePorId(@Param('id') id: string): Gerente {
    return this.gerentesService.obterGerentePorId(id);
  }
}
