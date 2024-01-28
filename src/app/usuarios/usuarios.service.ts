import { CreateUsuarioDto } from './dto/create-usuario.dto'
import { UpdateUsuarioDto } from './dto/update-usuario.dto'
import { PrismaClient } from '@prisma/client'
import { HttpException, HttpStatus, Injectable } from '@nestjs/common'

import { hash } from 'bcryptjs'

var CryptoJS = require('crypto-js')

@Injectable()
export class UsuariosService {
  constructor(private prisma: PrismaClient) {}

  async create(createUsuarioDto: CreateUsuarioDto) {
    try {
      const { EMAIL, EMPRESA } = createUsuarioDto

      const EMPRESAEXISTE = await this.prisma.empresas.findMany({
        where: {
          ID: EMPRESA,
        },
      })

      if (!EMPRESAEXISTE) {
        throw new HttpException('Empresa informada não existe', HttpStatus.CONFLICT)
      }

      const EMAILEXISTE = await this.prisma.usuarios.findMany({
        where: {
          EMAIL,
        },
      })

      if (!EMAILEXISTE) {
        throw new HttpException('Email já cadastrado', HttpStatus.CONFLICT)
      }

      //Descrypta a senha que chegou do front
      const BYTES = await CryptoJS.AES.decrypt(createUsuarioDto.SENHA, 'secret key 114510')
      const SENHAORIGINAL = await BYTES.toString(CryptoJS.enc.Utf8)

      const SENHAHASH = await hash(SENHAORIGINAL, 8)

      const USUARIO = await this.prisma.usuarios.create({
        data: {
          NOME: createUsuarioDto.NOME,
          EMAIL: createUsuarioDto.EMAIL,
          SENHA: SENHAHASH,
          SETOR: createUsuarioDto.SETOR,
          EMPRESA: createUsuarioDto.EMPRESA,
          TIPO: createUsuarioDto.TIPO,
        },
        select: {
          NOME: true,
          EMAIL: true,
          SETOR: true,
          EMPRESA: true,
          TIPO: true,
        },
      })

      return USUARIO
    } catch (error) {
      throw new HttpException('Ocorreu um erro: ' + error.message, HttpStatus.INTERNAL_SERVER_ERROR)
    }
  }

  async findAll(idEmpresa: string) {
    return await this.prisma.usuarios.findMany({
      where: {
        EMPRESA: idEmpresa,
      },
    })
  }

  async findOne(idUsuario: string) {
    return await this.prisma.usuarios.findUnique({
      where: {
        ID: idUsuario,
      },
    })
  }

  async update(idUsuario: string, updateUsuarioDto: UpdateUsuarioDto) {
    return await this.prisma.usuarios.update({
      data: updateUsuarioDto,
      where: {
        ID: idUsuario
      }
    })
  }

  async remove(idUsuario: string) {
    return await this.prisma.usuarios.delete({
      where: {
        ID: idUsuario
      }
    })
  }
}
