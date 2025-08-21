/*
  Warnings:

  - You are about to drop the column `allergens` on the `MenuItem` table. All the data in the column will be lost.
  - You are about to drop the column `calories` on the `MenuItem` table. All the data in the column will be lost.
  - You are about to drop the column `currency` on the `MenuItem` table. All the data in the column will be lost.
  - You are about to drop the column `isPopular` on the `MenuItem` table. All the data in the column will be lost.
  - You are about to drop the column `preparation` on the `MenuItem` table. All the data in the column will be lost.
  - You are about to drop the column `weight` on the `MenuItem` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "MenuItem" DROP COLUMN "allergens",
DROP COLUMN "calories",
DROP COLUMN "currency",
DROP COLUMN "isPopular",
DROP COLUMN "preparation",
DROP COLUMN "weight";

-- CreateTable
CREATE TABLE "Hookah" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "description" TEXT,
    "price" DECIMAL(8,2) NOT NULL,
    "features" TEXT[],
    "isActive" BOOLEAN NOT NULL DEFAULT true,
    "sortOrder" INTEGER NOT NULL DEFAULT 0,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Hookah_pkey" PRIMARY KEY ("id")
);
