import {
  IsBoolean,
  IsDateString,
  isDateString,
  IsDecimal,
  isNotEmpty,
  IsNotEmpty,
  IsOptional,
  IsString,
} from 'class-validator'

export class CreateClienteDto {
  @IsString()
  @IsNotEmpty()
  RAZAONOME

  @IsString()
  @IsNotEmpty()
  FANTASIASOBRENOME

  @IsString()
  @IsOptional()
  SIGLA

  @IsString()
  @IsNotEmpty()
  TIPOPESSOA

  @IsString()
  @IsNotEmpty()
  CPFCNPJ

  @IsString()
  @IsNotEmpty()
  RGIE

  @IsString()
  @IsOptional()
  CEP

  @IsString()
  @IsOptional()
  ENDERECO

  @IsString()
  @IsOptional()
  NUM

  @IsString()
  @IsOptional()
  COMPLEMENTO

  @IsString()
  @IsOptional()
  BAIRRO

  @IsString()
  @IsOptional()
  CIDADE_IBGE

  @IsString()
  @IsOptional()
  CIDADE

  @IsString()
  @IsOptional()
  CODUF

  @IsString()
  @IsOptional()
  UF

  @IsString()
  @IsOptional()
  PAIS

  @IsString()
  @IsOptional()
  CONTATO

  @IsString()
  @IsNotEmpty()
  TELEFONE1

  @IsString()
  @IsOptional()
  TELEFONE2

  @IsString()
  @IsOptional()
  FORMAPAG

  @IsString()
  @IsOptional()
  EMAIL

  @IsString()
  @IsOptional()
  SITE

  @IsString()
  @IsOptional()
  TRANSPORTADORA

  @IsString()
  @IsOptional()
  REGIAO

  @IsString()
  @IsOptional()
  VENDEDOR

  @IsString()
  @IsOptional()
  TIPOCONTRIB

  @IsString()
  @IsOptional()
  BLOQUEARCREDITO

  @IsString()
  @IsOptional()
  DATAPROTESTO

  @IsDecimal()
  @IsOptional()
  LIMITECREDITO

  @IsString()
  @IsOptional()
  RAMOATIVIDADE

  @IsString()
  @IsOptional()
  DATANASC

  @IsString()
  @IsOptional()
  OBSERVACAO

  @IsString()
  @IsNotEmpty()
  USERCAD

  @IsString()
  @IsOptional()
  DATAALT

  @IsString()
  @IsOptional()
  USERALT

  @IsString()
  @IsNotEmpty()
  EMPRESA

  @IsString()
  @IsNotEmpty()
  ATIVO
}
