import { PrismaService } from './../../prisma/prisma.service';
import { Injectable } from '@nestjs/common';
import { CreateEmpresaDto } from './dto/create-empresa.dto';
import { UpdateEmpresaDto } from './dto/update-empresa.dto';

@Injectable()
export class EmpresasService {
  constructor(private prisma: PrismaService) { }

  async create(createEmpresaDto: CreateEmpresaDto) {
    return this.prisma.empresas.create({ data: createEmpresaDto });
  }

  findAll() {
    return this.prisma.empresas.findMany({});
  }

  findOne(id: string) {
    return this.prisma.empresas.findUnique({
      where: {
        ID: id
      }
    });
  }

  update(id: string, updateEmpresaDto: UpdateEmpresaDto) {
    return this.prisma.empresas.update({
      data: updateEmpresaDto,
      where: {
        ID: id
      }
    })
  }

  remove(id: string) {
    return this.prisma.empresas.update({
      data: {
        ATIVO: false
      },
      where: {
        ID: id
      }
    })
  }
}
