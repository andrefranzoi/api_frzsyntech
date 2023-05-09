import { Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
import { CreateClienteDto } from './dto/create-cliente.dto';
import { UpdateClienteDto } from './dto/update-cliente.dto';

@Injectable()
export class ClientesService {
  constructor(private prisma: PrismaClient) { }

  async create(createClienteDto: CreateClienteDto) {
    const ret = await this.prisma.clientes.create({
      data: createClienteDto
    })

    return await ret
  }

  async findAll(sCodEmpresa: string) {
    return await this.prisma.clientes.findMany({
      where: {
        EMPRESA: sCodEmpresa
      }
    })
  }

  findOne(id: number) {
    return `This action returns a #${id} cliente`;
  }

  async update(IDCLIENTE: number, updateClienteDto: UpdateClienteDto) {
    return await this.prisma.clientes.update({
      data: updateClienteDto,
      where: {
        IDCLIENTE
      }
    })
  }

  remove(id: number) {
    return `This action removes a #${id} cliente`;
  }
}
