/*
  Warnings:

  - Added the required column `TIPOPESSOA` to the `TBCLI001` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "TBCLI001" ADD COLUMN     "TIPOPESSOA" CHAR(1) NOT NULL;
