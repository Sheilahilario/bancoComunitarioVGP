import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ContaModule } from './contas/conta.module';
import { ClienteModule } from './clientes/cliente.module';
import { GerenteModule } from './gerentes/gerente.module';

@Module({
  imports: [ContaModule, ClienteModule, GerenteModule],
  controllers: [AppController],
  providers: [AppService]
})
export class AppModule { }
