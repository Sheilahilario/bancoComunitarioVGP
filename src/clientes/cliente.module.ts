import { Module, forwardRef } from '@nestjs/common';
import { ClienteService } from './cliente.service';
import { ClienteController } from './cliente.controller';
import { ContaModule } from '../contas/conta.module';

@Module({
  imports: [forwardRef(() => ContaModule)],
  controllers: [ClienteController],
  providers: [ClienteService],
  exports: [ClienteService],
})
export class ClienteModule { }
