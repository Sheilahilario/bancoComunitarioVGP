import { Injectable, NotFoundException } from '@nestjs/common';
import { Cliente } from './clientes.interfaces';
import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class ClientesService {
  private readonly clientes: Cliente[] = [];

  criarCliente(cliente: Omit<Cliente, 'id'>): Cliente {
    const novoCliente: Cliente = { id: uuidv4(), ...cliente };
    this.clientes.push(novoCliente);
    return novoCliente;
  }

  obterClientes(): Cliente[] {
    return this.clientes;
  }

  obterClientePorId(id: string): Cliente {
    const cliente = this.clientes.find(cliente => cliente.id === id);
    if (!cliente) {
      throw new NotFoundException(`Cliente com ID ${id} não encontrado`);
    }
    return cliente;
  }
}
