import { PrismaService } from './../../prisma/prisma.service';
import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateLoginDto } from './dto/create-login.dto';
import { compare, hash } from 'bcryptjs'
import { sign } from 'jsonwebtoken'

var CryptoJS = require('crypto-js')

@Injectable()
export class LoginsService {
  constructor(private readonly prisma: PrismaService) { }

  async login(loginDto: CreateLoginDto) {
    const usuario = await this.prisma.usuarios.findUnique({
      where: {
        EMAIL: loginDto.email
      }
    })

    if (!usuario) {
      throw new HttpException('Credenciais inválidas', HttpStatus.UNAUTHORIZED)
    }

    if (!usuario.ATIVO) {
      throw new HttpException('Usuário se encontra inativado', HttpStatus.UNAUTHORIZED)
    }

    //Descrypta a senha que chegou do front
    const bytes = CryptoJS.AES.decrypt(loginDto.password, 'secret key 114510')
    const originalText = bytes.toString(CryptoJS.enc.Utf8)

    //Compare as senhas
    const senhaIgual = await compare(originalText, usuario.SENHA)

    const JWT_TOKEN = process.env.JWT_TOKEN || 'b99a56d3a122a96aa4688fafa994756c'

    const token = sign(
      {
        nome: usuario.NOME,
        email: usuario.EMAIL,
      },
      JWT_TOKEN,
      {
        subject: usuario.ID,
        expiresIn: '30d',
      }
    )
  }
}
