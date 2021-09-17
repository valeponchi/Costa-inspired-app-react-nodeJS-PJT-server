-- CreateEnum
CREATE TYPE "Role" AS ENUM ('guest', 'user', 'admin');

-- CreateEnum
CREATE TYPE "Type" AS ENUM ('coffee', 'drink', 'frostino', 'food', 'snack', 'pastries');

-- CreateEnum
CREATE TYPE "Milk" AS ENUM ('cow', 'oat', 'almond', 'coconut', 'soy');

-- CreateEnum
CREATE TYPE "Syrup" AS ENUM ('cinnamon', 'maple', 'vanilla', 'chai');

-- CreateTable
CREATE TABLE "User" (
    "id" SERIAL NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "role" "Role" NOT NULL DEFAULT E'user',

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Diet" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "Diet_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "DietsOnProduct" (
    "id" SERIAL NOT NULL,
    "productId" INTEGER NOT NULL,
    "dietId" INTEGER NOT NULL,

    CONSTRAINT "DietsOnProduct_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Product" (
    "id" SERIAL NOT NULL,
    "type" "Type" NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "imageUrl" TEXT NOT NULL,
    "price" DOUBLE PRECISION NOT NULL,
    "syrup" "Syrup",
    "milk" "Milk" DEFAULT E'cow',

    CONSTRAINT "Product_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ProductsOnOrders" (
    "id" SERIAL NOT NULL,
    "productId" INTEGER NOT NULL,
    "orderId" INTEGER NOT NULL,

    CONSTRAINT "ProductsOnOrders_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Order" (
    "id" SERIAL NOT NULL,
    "city" TEXT NOT NULL,
    "postCode" TEXT NOT NULL,
    "road" TEXT NOT NULL,
    "userId" INTEGER NOT NULL,

    CONSTRAINT "Order_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- AddForeignKey
ALTER TABLE "DietsOnProduct" ADD CONSTRAINT "DietsOnProduct_productId_fkey" FOREIGN KEY ("productId") REFERENCES "Product"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "DietsOnProduct" ADD CONSTRAINT "DietsOnProduct_dietId_fkey" FOREIGN KEY ("dietId") REFERENCES "Diet"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ProductsOnOrders" ADD CONSTRAINT "ProductsOnOrders_productId_fkey" FOREIGN KEY ("productId") REFERENCES "Product"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ProductsOnOrders" ADD CONSTRAINT "ProductsOnOrders_orderId_fkey" FOREIGN KEY ("orderId") REFERENCES "Order"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Order" ADD CONSTRAINT "Order_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
