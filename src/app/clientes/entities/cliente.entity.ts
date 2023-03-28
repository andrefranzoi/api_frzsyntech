import { Decimal } from '@prisma/client/runtime';
import { Clientes } from '@prisma/client'

export class Cliente implements Clientes {
  IDCLIENTE: number
  RAZAONOME: string
  FANTASIASOBRENOME: string
  SIGLA: string
  TIPOPESSOA: string
  CPFCNPJ: string
  RGIE: string
  CEP: string
  ENDERECO: string
  NUM: string
  COMPLEMENTO: string
  BAIRRO: string
  CIDADE_IBGE: string
  CIDADE: string
  CODUF: string
  UF: string
  PAIS: string
  CONTATO: string
  TELEFONE1: string
  TELEFONE2: string
  FORMAPAG: string
  EMAIL: string
  SITE: string
  TRANSPORTADORA: string
  REGIAO: string
  VENDEDOR: string
  TIPOCONTRIB: string
  BLOQUEARCREDITO: string
  DATAPROTESTO: Date
  LIMITECREDITO: Decimal
  RAMOATIVIDADE: string
  DATANASC: Date
  OBSERVACAO: string
  DATACAD: Date
  USERCAD: string
  DATAALT: Date
  USERALT: string
  EMPRESA: string
  ATIVO: boolean
}
