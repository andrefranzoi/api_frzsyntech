import { Module } from '@nestjs/common';
import { GruposService } from './grupos.service';
import { GruposController } from './grupos.controller';

@Module({
  controllers: [GruposController],
  providers: [GruposService]
})
export class GruposModule {}
