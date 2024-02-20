import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { GruposService } from './grupos.service';
import { CreateGrupoDto } from './dto/create-grupo.dto';
import { UpdateGrupoDto } from './dto/update-grupo.dto';

@Controller('grupos')
export class GruposController {
  constructor(private readonly gruposService: GruposService) {}

  @Post()
  create(@Body() createGrupoDto: CreateGrupoDto) {
    console.log('createGrupoDto:', createGrupoDto)
    return this.gruposService.create(createGrupoDto);
  }

  @Get()
  async findAll() {
    const RET = await this.gruposService.findAll();
    return RET
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.gruposService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateGrupoDto: UpdateGrupoDto) {
    return this.gruposService.update(+id, updateGrupoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.gruposService.remove(+id);
  }

  @Delete('ativar/:id')
  ativa(@Param('id') id: string) {
    return this.gruposService.ativar(+id);
  }


}
