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

    console.log('cadastro:', ret)
    return ret
  }

  findAll() {
    return `This action returns all clientes`;
  }

  findOne(id: number) {
    return `This action returns a #${id} cliente`;
  }

  update(id: number, updateClienteDto: UpdateClienteDto) {
    return `This action updates a #${id} cliente`;
  }

  remove(id: number) {
    return `This action removes a #${id} cliente`;
  }
}
