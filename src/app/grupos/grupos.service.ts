import { Grupos, PrismaClient } from '@prisma/client';
import { Injectable } from '@nestjs/common';
import { CreateGrupoDto } from './dto/create-grupo.dto';
import { UpdateGrupoDto } from './dto/update-grupo.dto';

@Injectable()
export class GruposService {
  constructor(private prisma: PrismaClient) { }

  async create(createGrupoDto: CreateGrupoDto) {
    const ret = await this.prisma.grupos.create({
      data: createGrupoDto
    })

    return ret
  }

  findAll() {
    return `This action returns all grupos`;
  }

  findOne(id: number) {
    return `This action returns a #${id} grupo`;
  }

  update(id: number, updateGrupoDto: UpdateGrupoDto) {
    return `This action updates a #${id} grupo`;
  }

  remove(id: number) {
    return `This action removes a #${id} grupo`;
  }
}
