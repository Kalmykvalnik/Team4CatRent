-- CreateTable
CREATE TABLE "SpecificationValue" (
    "id" SERIAL NOT NULL,
    "specificationid" INTEGER NOT NULL,
    "value" TEXT NOT NULL,
    "order" INTEGER NOT NULL,

    CONSTRAINT "SpecificationValue_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "SpecificationValue" ADD CONSTRAINT "SpecificationValue_specificationid_fkey" FOREIGN KEY ("specificationid") REFERENCES "Specification"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
