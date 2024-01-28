import { Module } from '@nestjs/common';
import { UsuariosService } from './usuarios.service';
import { UsuariosController } from './usuarios.controller';
import { PrismaClient } from '@prisma/client';

@Module({
  controllers: [UsuariosController],
  providers: [UsuariosService, PrismaClient]
})
export class UsuariosModule {}
