-- CreateTable
CREATE TABLE "Basket" (
    "id" SERIAL NOT NULL,
    "userid" INTEGER NOT NULL,
    "DeliveryDate" TIMESTAMP(3) NOT NULL,
    "RentTime" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Basket_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Photo" (
    "id" SERIAL NOT NULL,
    "productid" INTEGER NOT NULL,
    "photo" TEXT NOT NULL,
    "order" INTEGER NOT NULL,

    CONSTRAINT "Photo_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Feedback" (
    "id" SERIAL NOT NULL,
    "productid" INTEGER NOT NULL,
    "userid" INTEGER NOT NULL,
    "orderlistid" INTEGER NOT NULL,
    "anonymous" BOOLEAN NOT NULL,
    "rating" INTEGER NOT NULL,
    "text" TEXT NOT NULL,
    "photoid" INTEGER NOT NULL,

    CONSTRAINT "Feedback_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Basket" ADD CONSTRAINT "Basket_userid_fkey" FOREIGN KEY ("userid") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Photo" ADD CONSTRAINT "Photo_productid_fkey" FOREIGN KEY ("productid") REFERENCES "Product"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Feedback" ADD CONSTRAINT "Feedback_productid_fkey" FOREIGN KEY ("productid") REFERENCES "Product"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Feedback" ADD CONSTRAINT "Feedback_userid_fkey" FOREIGN KEY ("userid") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Feedback" ADD CONSTRAINT "Feedback_orderlistid_fkey" FOREIGN KEY ("orderlistid") REFERENCES "OrderList"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Feedback" ADD CONSTRAINT "Feedback_photoid_fkey" FOREIGN KEY ("photoid") REFERENCES "Photo"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
