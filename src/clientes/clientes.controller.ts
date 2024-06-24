// clientes/clientes.controller.ts
import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { ClientesService } from './clientes.service';
import { Cliente } from './clientes.interfaces';

@Controller('clientes')
export class ClientesController {
  constructor(private readonly clientesService: ClientesService) { }

  @Post()
  criarCliente(@Body() criarClienteDto: Omit<Cliente, 'id'>): Cliente {
    return this.clientesService.criarCliente(criarClienteDto);
  }

  @Get()
  obterClientes(): Cliente[] {
    return this.clientesService.obterClientes();
  }

  @Get(':id')
  obterClientePorId(@Param('id') id: string): Cliente {
    return this.clientesService.obterClientePorId(id);
  }
}
