import { Empresas } from '@prisma/client'

export class EmpresaEntity implements Empresas {
  ID: string;
  RAZAO: string;
  FANTASIA: string;
  SIGLA: string;
  CNPJ: string;
  IE: string;
  REGIME: string;
  CEP: string;
  IM: string;
  CNAE: string;
  ENDERECO: string;
  NUMERO: string;
  COMPLEMENTO: string;
  REFERENCIA: string;
  BAIRRO: string;
  CIDADEIBGE: string;
  CIDADE: string;
  UF: string;
  EMAIL: string;
  TELEFONE1: string;
  TELEFONE2: string;
  TELEFONE3: string;
  LOGONFE: string;
  LOGONFSE: string;
  LOGOEMPRESA: string;
  WEB: string;
  ATIVO: boolean;
}
