-- CreateTable
CREATE TABLE "AddressDelivery" (
    "id" SERIAL NOT NULL,
    "orderid" INTEGER NOT NULL,
    "district" TEXT NOT NULL,
    "city_settlement" TEXT NOT NULL,
    "city" TEXT NOT NULL,
    "street" TEXT NOT NULL,
    "planning_structure" TEXT NOT NULL,
    "house" TEXT NOT NULL,
    "building" TEXT NOT NULL,
    "flat" TEXT NOT NULL,
    "room" TEXT NOT NULL,

    CONSTRAINT "AddressDelivery_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "AddressDelivery_orderid_key" ON "AddressDelivery"("orderid");

-- AddForeignKey
ALTER TABLE "AddressDelivery" ADD CONSTRAINT "AddressDelivery_orderid_fkey" FOREIGN KEY ("orderid") REFERENCES "Order"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
