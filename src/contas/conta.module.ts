import { Module, forwardRef } from '@nestjs/common';
import { ContaService } from './conta.service';
import { ContaFactory } from './conta.factory';
import { ClienteModule } from '../clientes/cliente.module';

@Module({
  imports: [forwardRef(() => ClienteModule)],
  providers: [ContaService, ContaFactory],
  exports: [ContaService],
})
export class ContaModule { }
