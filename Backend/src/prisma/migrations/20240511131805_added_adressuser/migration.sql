-- CreateTable
CREATE TABLE "AdressUser" (
    "id" SERIAL NOT NULL,
    "userid" INTEGER NOT NULL,
    "order" INTEGER NOT NULL,
    "district" TEXT NOT NULL,
    "city_settlement" TEXT NOT NULL,
    "city" TEXT NOT NULL,
    "street" TEXT NOT NULL,
    "planning_structure" TEXT NOT NULL,
    "house" TEXT NOT NULL,
    "building" TEXT NOT NULL,
    "flat" TEXT NOT NULL,
    "room" TEXT NOT NULL,

    CONSTRAINT "AdressUser_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "AdressUser" ADD CONSTRAINT "AdressUser_userid_fkey" FOREIGN KEY ("userid") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
