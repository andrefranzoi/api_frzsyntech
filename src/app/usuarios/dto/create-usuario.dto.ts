import { IsBoolean, IsEmail, IsNotEmpty, IsString } from "class-validator";

export class CreateUsuarioDto {
  @IsString()
  @IsNotEmpty()
  NOME: string;

  @IsEmail()
  @IsNotEmpty()
  EMAIL: string;

  @IsString()
  @IsNotEmpty()
  SENHA: string;

  @IsString()
  @IsNotEmpty()
  SETOR: string;

  @IsBoolean()
  @IsNotEmpty()
  ATIVO: boolean;

  @IsString()
  @IsNotEmpty()
  EMPRESA: string;

  @IsString()
  @IsNotEmpty()
  TIPO: string;
}
