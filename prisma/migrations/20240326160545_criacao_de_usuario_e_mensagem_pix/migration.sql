-- CreateTable
CREATE TABLE "usuariospagadores" (
    "id" TEXT NOT NULL,
    "nome" TEXT NOT NULL,
    "cpfCnpj" TEXT NOT NULL,
    "ispb" TEXT NOT NULL,
    "agencia" TEXT NOT NULL,
    "contaTransacional" TEXT NOT NULL,
    "tipoConta" TEXT NOT NULL,

    CONSTRAINT "usuariospagadores_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "mensagemPix" (
    "endToEndId" TEXT NOT NULL,
    "valor" DECIMAL(65,30) NOT NULL,
    "pagador_id" TEXT NOT NULL,
    "recebedor_id" TEXT,
    "campoLivre" TEXT NOT NULL,
    "txId" TEXT NOT NULL,
    "dataHoraPagamento" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "mensagemPix_pkey" PRIMARY KEY ("endToEndId")
);

-- AddForeignKey
ALTER TABLE "mensagemPix" ADD CONSTRAINT "mensagemPix_pagador_id_fkey" FOREIGN KEY ("pagador_id") REFERENCES "usuariospagadores"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "mensagemPix" ADD CONSTRAINT "mensagemPix_recebedor_id_fkey" FOREIGN KEY ("recebedor_id") REFERENCES "usuariospagadores"("id") ON DELETE SET NULL ON UPDATE CASCADE;
