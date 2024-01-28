import { IsNotEmpty, IsString } from "class-validator";

export class CreateGrupoDto {
  @IsString()
  @IsNotEmpty()
  NOME: string;

  @IsString()
  @IsNotEmpty()
  ATIVO: string;

  @IsString()
  @IsNotEmpty()
  ACRESCIMO: string;

  @IsString()
  @IsNotEmpty()
  SABORES: string;

  @IsString()
  @IsNotEmpty()
  KIT: string;

  @IsString()
  @IsNotEmpty()
  EXIBEVENDA: string;

  @IsString()
  @IsNotEmpty()
  ICONE: string;
}
