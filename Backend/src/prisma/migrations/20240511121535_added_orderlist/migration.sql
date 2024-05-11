-- CreateTable
CREATE TABLE "OrderList" (
    "id" SERIAL NOT NULL,
    "orderid" INTEGER NOT NULL,
    "productid" INTEGER NOT NULL,
    "Price" DOUBLE PRECISION NOT NULL,
    "OrderStartT" TIMESTAMP(3) NOT NULL,
    "OrderEndT" TIMESTAMP(3) NOT NULL,
    "IsReviewLeft" BOOLEAN NOT NULL,

    CONSTRAINT "OrderList_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "OrderList" ADD CONSTRAINT "OrderList_orderid_fkey" FOREIGN KEY ("orderid") REFERENCES "Order"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "OrderList" ADD CONSTRAINT "OrderList_productid_fkey" FOREIGN KEY ("productid") REFERENCES "Product"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
