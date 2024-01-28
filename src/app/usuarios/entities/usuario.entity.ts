import { Usuarios } from "@prisma/client";

export class Usuario implements Usuarios {
  ID: string;
  NOME: string;
  EMAIL: string;
  SENHA: string;
  SETOR: string;
  ATIVO: boolean;
  EMPRESA: string;
  TIPO: string;
}
