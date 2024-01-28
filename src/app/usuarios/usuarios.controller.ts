import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { UsuariosService } from './usuarios.service';
import { CreateUsuarioDto } from './dto/create-usuario.dto';
import { UpdateUsuarioDto } from './dto/update-usuario.dto';

@Controller('usuarios')
export class UsuariosController {
  constructor(private readonly usuariosService: UsuariosService) { }

  @Post()
  create(@Body() createUsuarioDto: CreateUsuarioDto) {
    return this.usuariosService.create(createUsuarioDto);
  }

  @Get(':idEmpresa')
  findAll(@Param('idEmpresa') idEmpresa: string) {
    return this.usuariosService.findAll(idEmpresa);
  }

  @Get(':idUsuario')
  findOne(@Param('idUsuario') idUsuario: string) {
    return this.usuariosService.findOne(idUsuario);
  }

  @Patch(':idUsuario')
  update(@Param('idUsuario') idUsuario: string, @Body() updateUsuarioDto: UpdateUsuarioDto) {
    return this.usuariosService.update(idUsuario, updateUsuarioDto);
  }

  @Delete(':idUsuario')
  remove(@Param('idUsuario') idUsuario: string) {
    return this.usuariosService.remove(idUsuario);
  }
}
