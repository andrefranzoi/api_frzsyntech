import { Empresas } from '@prisma/client'
import { Decimal } from '@prisma/client/runtime';

export class EmpresaEntity implements Empresas {
  SIMPLES: Decimal;
  PIS: Decimal;
  COFINS: Decimal;
  ID: string;
  RAZAO: string;
  FANTASIA: string;
  SIGLA: string;
  CNPJ: string;
  IE: string;
  IM: string;
  CNAE: string;
  CEP: string;
  ENDERECO: string;
  NUM: string;
  COMPLEMENTO: string;
  BAIRRO: string;
  CIDADE_IBGE: string;
  CIDADE: string;
  CODUF: string;
  UF: string;
  PAIS: string;
  TELEFONE1: string;
  TELEFONE2: string;
  TELEFONE3: string;
  EMAIL: string;
  SITE: string;
  CONTATO: string;
  REGIME: string;
  ATIVO: boolean;
}
