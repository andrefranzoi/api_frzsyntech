import { IsBoolean, IsNotEmpty, IsOptional, IsString } from 'class-validator'

export class CreateEmpresaDto {
  @IsString()
  @IsNotEmpty()
  RAZAO

  @IsString()
  @IsNotEmpty()
  FANTASIA

  @IsString()
  @IsOptional()
  SIGLA

  @IsString()
  @IsNotEmpty()
  CNPJ

  @IsString()
  @IsNotEmpty()
  IE

  @IsString()
  @IsOptional()
  IM

  @IsString()
  @IsNotEmpty()
  CNAE

  @IsString()
  @IsNotEmpty()
  CEP

  @IsString()
  @IsNotEmpty()
  ENDERECO

  @IsString()
  @IsNotEmpty()
  NUM

  @IsString()
  @IsOptional()
  COMPLEMENTO

  @IsString()
  @IsNotEmpty()
  BAIRRO

  @IsString()
  @IsNotEmpty()
  CIDADE_IBGE

  @IsString()
  @IsNotEmpty()
  CIDADE

  @IsString()
  @IsNotEmpty()
  CODUF

  @IsString()
  @IsNotEmpty()
  UF

  @IsString()
  @IsNotEmpty()
  PAIS

  @IsString()
  @IsNotEmpty()
  TELEFONE1

  @IsString()
  @IsOptional()
  TELEFONE2

  @IsString()
  @IsOptional()
  TELEFONE3

  @IsString()
  @IsNotEmpty()
  EMAIL

  @IsString()
  @IsOptional()
  SITE

  @IsString()
  @IsOptional()
  CONTATO

  @IsString()
  @IsNotEmpty()
  REGIME

  @IsBoolean()
  @IsNotEmpty()
  ATIVO
}
