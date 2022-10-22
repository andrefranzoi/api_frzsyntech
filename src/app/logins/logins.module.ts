import { PrismaService } from './../../prisma/prisma.service';
import { Module } from '@nestjs/common';
import { LoginsService } from './logins.service';
import { LoginsController } from './logins.controller';

@Module({
  controllers: [LoginsController],
  providers: [LoginsService, PrismaService]
})
export class LoginsModule { }
