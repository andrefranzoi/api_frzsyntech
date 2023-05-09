import { Decimal } from '@prisma/client/runtime';
import {
  IsBoolean,
  IsDateString,
  IsDecimal,
  IsNotEmpty,
  IsOptional,
  IsString,
} from 'class-validator'

export class CreateClienteDto {
  @IsString()
  @IsNotEmpty()
  NOME: string;

  @IsString()
  @IsNotEmpty()
  SOBRENOME: string;

  @IsString()
  @IsOptional()
  SIGLA: string;

  @IsString()
  @IsNotEmpty()
  TIPOPESSOA: string;

  @IsString()
  @IsOptional()
  CPFCNPJ: string;

  @IsString()
  @IsOptional()
  RGIE: string;

  @IsString()
  @IsOptional()
  CEP: string;

  @IsString()
  @IsOptional()
  ENDERECO: string;

  @IsString()
  @IsOptional()
  NUM: string;

  @IsString()
  @IsOptional()
  COMPLEMENTO: string;

  @IsString()
  @IsOptional()
  BAIRRO: string;

  @IsString()
  @IsOptional()
  CIDADE_IBGE: string;

  @IsString()
  @IsOptional()
  CIDADE: string;

  @IsString()
  @IsOptional()
  CODUF: string;

  @IsString()
  @IsOptional()
  UF: string;

  @IsString()
  @IsOptional()
  CONTATO: string;

  @IsString()
  @IsOptional()
  TELEFONE1: string;

  @IsString()
  @IsOptional()
  TELEFONE2: string;

  @IsString()
  @IsOptional()
  FORMAPAG: string;

  @IsString()
  @IsOptional()
  EMAIL: string;

  @IsString()
  @IsOptional()
  PRESTADOR: string;

  @IsString()
  @IsOptional()
  BLOQUEARCREDITO: string;

  @IsDateString()
  @IsOptional()
  DATAPROTESTO: Date;

  @IsDecimal()
  @IsOptional()
  LIMITECREDITO: Decimal;

  @IsString()
  @IsOptional()
  DATANASC: Date;

  @IsString()
  @IsOptional()
  OBSERVACAO: string;

  @IsString()
  @IsOptional()
  USERCAD: string;

  @IsDateString()
  @IsOptional()
  DATAALT: Date;

  @IsString()
  @IsOptional()
  USERALT: string;

  @IsString()
  @IsOptional()
  EMPRESA: string;

  @IsBoolean()
  @IsOptional()
  ATIVO: boolean;
}
