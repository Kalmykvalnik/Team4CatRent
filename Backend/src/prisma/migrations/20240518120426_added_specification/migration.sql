-- CreateTable
CREATE TABLE "Specification" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "isGuide" BOOLEAN NOT NULL,
    "description" TEXT NOT NULL,
    "isactive" BOOLEAN NOT NULL,

    CONSTRAINT "Specification_pkey" PRIMARY KEY ("id")
);
