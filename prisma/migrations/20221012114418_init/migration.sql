-- CreateTable
CREATE TABLE "TBUTIL001" (
    "ID" TEXT NOT NULL,
    "RAZAO" VARCHAR(150) NOT NULL,
    "FANTASIA" VARCHAR(150) NOT NULL,
    "SIGLA" VARCHAR(5),
    "CNPJ" VARCHAR(14) NOT NULL,
    "IE" VARCHAR(14) NOT NULL,
    "REGIME" CHAR(1) NOT NULL,
    "CEP" CHAR(8) NOT NULL,
    "IM" VARCHAR(20),
    "CNAE" VARCHAR(20) NOT NULL,
    "ENDERECO" VARCHAR(150) NOT NULL,
    "NUMERO" VARCHAR(10) NOT NULL,
    "COMPLEMENTO" VARCHAR(50),
    "REFERENCIA" VARCHAR(50),
    "BAIRRO" VARCHAR(150) NOT NULL,
    "CIDADEIBGE" CHAR(7) NOT NULL,
    "CIDADE" VARCHAR(150) NOT NULL,
    "UF" CHAR(2) NOT NULL,
    "EMAIL" TEXT NOT NULL,
    "TELEFONE1" VARCHAR(13) NOT NULL,
    "TELEFONE2" VARCHAR(13),
    "TELEFONE3" VARCHAR(13),
    "LOGONFE" TEXT,
    "LOGONFSE" TEXT,
    "LOGOEMPRESA" TEXT,
    "WEB" VARCHAR(200),

    CONSTRAINT "TBUTIL001_pkey" PRIMARY KEY ("ID")
);

-- CreateTable
CREATE TABLE "Usuarios" (
    "ID" TEXT NOT NULL,
    "NOME" VARCHAR(100) NOT NULL,
    "EMAIL" VARCHAR(100) NOT NULL,
    "SENHA" TEXT NOT NULL,
    "SETOR" TEXT NOT NULL,
    "ATIVO" BOOLEAN NOT NULL DEFAULT true,
    "EMPRESA" TEXT NOT NULL,

    CONSTRAINT "Usuarios_pkey" PRIMARY KEY ("ID")
);

-- AddForeignKey
ALTER TABLE "Usuarios" ADD CONSTRAINT "Usuarios_EMPRESA_fkey" FOREIGN KEY ("EMPRESA") REFERENCES "TBUTIL001"("ID") ON DELETE RESTRICT ON UPDATE CASCADE;