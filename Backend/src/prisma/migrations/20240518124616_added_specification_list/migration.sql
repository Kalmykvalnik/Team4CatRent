-- CreateTable
CREATE TABLE "SpecificationList" (
    "id" SERIAL NOT NULL,
    "productid" INTEGER NOT NULL,
    "value" TEXT NOT NULL,
    "specificationid" INTEGER NOT NULL,
    "startdate" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "SpecificationList_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "SpecificationList" ADD CONSTRAINT "SpecificationList_productid_fkey" FOREIGN KEY ("productid") REFERENCES "Product"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SpecificationList" ADD CONSTRAINT "SpecificationList_specificationid_fkey" FOREIGN KEY ("specificationid") REFERENCES "Specification"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
