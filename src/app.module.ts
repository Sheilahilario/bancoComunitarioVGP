import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ClientesModule } from './clientes/clientes.module';
import { ContasModule } from './contas/contas.module';
import { GerenteModule } from './gerente/gerente.module';

@Module({
  imports: [ClientesModule, ContasModule, GerenteModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
