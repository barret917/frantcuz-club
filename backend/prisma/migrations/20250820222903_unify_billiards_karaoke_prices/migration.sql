/*
  Warnings:

  - You are about to drop the column `weekdayPrice` on the `BilliardsService` table. All the data in the column will be lost.
  - You are about to drop the column `weekendPrice` on the `BilliardsService` table. All the data in the column will be lost.
  - You are about to drop the column `weekdayPrice` on the `KaraokeService` table. All the data in the column will be lost.
  - You are about to drop the column `weekendPrice` on the `KaraokeService` table. All the data in the column will be lost.
  - Added the required column `price` to the `BilliardsService` table without a default value. This is not possible if the table is not empty.
  - Added the required column `price` to the `KaraokeService` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "BilliardsService" DROP COLUMN "weekdayPrice",
DROP COLUMN "weekendPrice",
ADD COLUMN     "price" DECIMAL(8,2) NOT NULL;

-- AlterTable
ALTER TABLE "KaraokeService" DROP COLUMN "weekdayPrice",
DROP COLUMN "weekendPrice",
ADD COLUMN     "price" DECIMAL(8,2) NOT NULL;
