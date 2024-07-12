import { Module, forwardRef } from '@nestjs/common';
import { GerenteService } from './gerente.service';
import { ClienteModule } from '../clientes/cliente.module';
import { ContaModule } from '../contas/conta.module';

@Module({
  imports: [forwardRef(() => ClienteModule), forwardRef(() => ContaModule)],
  providers: [GerenteService],
  exports: [GerenteService],
})
export class GerenteModule { }
