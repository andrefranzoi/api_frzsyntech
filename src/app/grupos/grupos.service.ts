import { PrismaService } from './../../prisma/prisma.service'
import { Injectable } from '@nestjs/common'
import { CreateGrupoDto } from './dto/create-grupo.dto'
import { UpdateGrupoDto } from './dto/update-grupo.dto'

@Injectable()
export class GruposService {
  constructor(private prisma: PrismaService) {}

  async create(createGrupoDto: CreateGrupoDto) {
    const ret = await this.prisma.grupos.create({
      data: createGrupoDto,
    })

    return ret
  }

  async findAll() {
    return await this.prisma.grupos.findMany({})
  }

  findOne(id: number) {
    return `This action returns a #${id} grupo`
  }

  async update(IDGRUPO: number, updateGrupoDto: UpdateGrupoDto) {
    return await this.prisma.grupos.update({
      data: updateGrupoDto,
      where: {
        IDGRUPO,
      },
    })
  }

  async remove(IDGRUPO: number) {
    return await this.prisma.grupos.update({
      data: {
        ATIVO: 'N',
      },
      where: {
        IDGRUPO,
      },
    })
  }

  async ativar(IDGRUPO: number) {
    return await this.prisma.grupos.update({
      data: {
        ATIVO: 'S',
      },
      where: {
        IDGRUPO,
      },
    })
  }
}
