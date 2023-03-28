import { PrismaClient } from '@prisma/client';
import { Module } from '@nestjs/common';
import { ClientesService } from './clientes.service';
import { ClientesController } from './clientes.controller';

@Module({
  controllers: [ClientesController],
  providers: [ClientesService, PrismaClient]
})
export class ClientesModule { }
