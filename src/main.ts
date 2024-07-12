import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { TipoConta } from './contas/conta.enum';
import { ContaFactory } from './contas/conta.factory';
import { GerenteService } from './gerentes/gerente.service';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const gerenteService = app.get(GerenteService);

  const novoGerente = gerenteService.criarGerente('João Hilario', '123456789', 'Rua Brasil, 300', '987654321');
  console.log(novoGerente, 'criado com sucesso');

  const novaConta = ContaFactory.criarConta(TipoConta.CORRENTE, 'cliente-id-123', 1000);
  console.log(novaConta, 'criada com sucesso');

  const novaContaGerente = ContaFactory.criarConta(TipoConta.EMPRESARIAL, 'cliente-id-20', 2500);
  console.log(novaContaGerente, 'criada com sucesso');

  await app.listen(3000);
}

bootstrap();
