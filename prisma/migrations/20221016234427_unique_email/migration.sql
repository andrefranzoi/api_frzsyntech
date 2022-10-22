/*
  Warnings:

  - A unique constraint covering the columns `[EMAIL]` on the table `Usuarios` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Usuarios_EMAIL_key" ON "Usuarios"("EMAIL");
