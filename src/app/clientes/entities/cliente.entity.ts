import { Decimal } from '@prisma/client/runtime';
import { Clientes } from '@prisma/client'

export class Cliente implements Clientes {
  IDCLIENTE: number;
  NOME: string;
  SOBRENOME: string;
  SIGLA: string;
  TIPOPESSOA: string;
  CPFCNPJ: string;
  RGIE: string;
  CEP: string;
  ENDERECO: string;
  NUM: string;
  COMPLEMENTO: string;
  BAIRRO: string;
  CIDADE_IBGE: string;
  CIDADE: string;
  CODUF: string;
  UF: string;
  CONTATO: string;
  TELEFONE1: string;
  TELEFONE2: string;
  FORMAPAG: string;
  EMAIL: string;
  PRESTADOR: string;
  BLOQUEARCREDITO: string;
  DATAPROTESTO: Date;
  LIMITECREDITO: Decimal;
  DATANASC: Date;
  OBSERVACAO: string;
  DATACAD: Date;
  USERCAD: string;
  DATAALT: Date;
  USERALT: string;
  EMPRESA: string;
  ATIVO: boolean;
}
