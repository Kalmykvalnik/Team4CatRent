-- CreateTable
CREATE TABLE "Order" (
    "id" SERIAL NOT NULL,
    "userid" INTEGER NOT NULL,
    "DealDate" TIMESTAMP(3) NOT NULL,
    "Cost" DOUBLE PRECISION NOT NULL,
    "DeliveryDate" TIMESTAMP(3) NOT NULL,
    "RentTime" TIMESTAMP(3) NOT NULL,
    "Status" INTEGER NOT NULL,
    "Notes" TEXT NOT NULL,

    CONSTRAINT "Order_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Order" ADD CONSTRAINT "Order_userid_fkey" FOREIGN KEY ("userid") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
