import { Gerente } from './gerente.class';
import { v4 as uuidv4 } from 'uuid';

export class GerenteFactory {
  static criarGerente(nomeCompleto: string, numeroIdentificacao: string, endereco: string, numeroTelefone: string): Gerente {
    return new Gerente(uuidv4(), nomeCompleto, numeroIdentificacao, endereco, numeroTelefone);
  }
}
