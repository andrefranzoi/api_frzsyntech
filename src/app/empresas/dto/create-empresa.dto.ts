import { IsNotEmpty, IsOptional, IsString } from 'class-validator'

export class CreateEmpresaDto {
  @IsString()
  @IsNotEmpty()
  RAZAO: string;

  @IsString()
  @IsNotEmpty()
  FANTASIA: string;

  @IsString()
  @IsOptional()
  SIGLA: string;

  @IsString()
  @IsNotEmpty()
  CNPJ: string;

  @IsString()
  @IsNotEmpty()
  IE: string;

  @IsString()
  @IsNotEmpty()
  REGIME: string;

  @IsString()
  @IsNotEmpty()
  CEP: string;

  @IsString()
  @IsOptional()
  IM: string;

  @IsString()
  @IsNotEmpty()
  CNAE: string;

  @IsString()
  @IsNotEmpty()
  ENDERECO: string;

  @IsString()
  @IsNotEmpty()
  NUMERO: string;

  @IsString()
  @IsOptional()
  COMPLEMENTO: string;

  @IsString()
  @IsOptional()
  REFERENCIA: string;

  @IsString()
  @IsNotEmpty()
  BAIRRO: string;

  @IsString()
  @IsNotEmpty()
  CIDADEIBGE: string;

  @IsString()
  @IsNotEmpty()
  CIDADE: string;

  @IsString()
  @IsNotEmpty()
  UF: string;

  @IsString()
  @IsNotEmpty()
  EMAIL: string;

  @IsString()
  @IsNotEmpty()
  TELEFONE1: string;

  @IsString()
  @IsOptional()
  TELEFONE2: string;

  @IsString()
  @IsOptional()
  TELEFONE3: string;

  @IsString()
  @IsOptional()
  LOGONFE: string;

  @IsString()
  @IsOptional()
  LOGONFSE: string;

  @IsString()
  @IsOptional()
  LOGOEMPRESA: string;

  @IsString()
  @IsOptional()
  WEB: string;
}
