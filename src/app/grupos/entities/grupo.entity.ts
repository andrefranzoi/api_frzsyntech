import { Grupos } from "@prisma/client";

export class Grupo implements Grupos {
  IDGRUPO: number;
  NOME: string;
  ATIVO: string;
  ACRESCIMO: string;
  SABORES: string;
  KIT: string;
  EXIBEVENDA: string;
  ICONE: string;
}
