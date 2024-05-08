-- CreateTable
CREATE TABLE "User" (
    "id" SERIAL NOT NULL,
    "login" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "phone" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "firstname" TEXT NOT NULL,
    "lastname" TEXT NOT NULL,
    "middlename" TEXT NOT NULL,
    "sex" BOOLEAN NOT NULL,
    "birthdate" TIMESTAMP(3) NOT NULL,
    "creditcard" TEXT NOT NULL,
    "emailpermission" BOOLEAN NOT NULL,
    "smspermission" BOOLEAN NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_login_key" ON "User"("login");
