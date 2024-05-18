/*
  Warnings:

  - Added the required column `specificationvalueid` to the `SpecificationList` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "SpecificationList" ADD COLUMN     "specificationvalueid" INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE "SpecificationList" ADD CONSTRAINT "SpecificationList_specificationvalueid_fkey" FOREIGN KEY ("specificationvalueid") REFERENCES "SpecificationValue"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
