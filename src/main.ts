import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Conta } from './contas/conta.class';
import { TipoConta } from './contas/conta.enum';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);
}
bootstrap();

const novaConta = new Conta(TipoConta.CORRENTE, 'cliente-123', 100.0);
console.log(novaConta);