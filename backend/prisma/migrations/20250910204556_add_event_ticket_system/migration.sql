/*
  Warnings:

  - You are about to drop the `Hall` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Payment` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Reservation` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Zone` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `ZoneItem` table. If the table is not empty, all the data it contains will be lost.

*/
-- CreateEnum
CREATE TYPE "TicketStatus" AS ENUM ('available', 'sold', 'used', 'cancelled');

-- DropForeignKey
ALTER TABLE "Payment" DROP CONSTRAINT "Payment_reservationId_fkey";

-- DropForeignKey
ALTER TABLE "Reservation" DROP CONSTRAINT "Reservation_zoneItemId_fkey";

-- DropForeignKey
ALTER TABLE "Zone" DROP CONSTRAINT "Zone_hallId_fkey";

-- DropForeignKey
ALTER TABLE "ZoneItem" DROP CONSTRAINT "ZoneItem_zoneId_fkey";

-- DropTable
DROP TABLE "Hall";

-- DropTable
DROP TABLE "Payment";

-- DropTable
DROP TABLE "Reservation";

-- DropTable
DROP TABLE "Zone";

-- DropTable
DROP TABLE "ZoneItem";

-- DropEnum
DROP TYPE "HallType";

-- DropEnum
DROP TYPE "ReservationStatus";

-- DropEnum
DROP TYPE "ReservationType";

-- DropEnum
DROP TYPE "ZoneItemType";

-- DropEnum
DROP TYPE "ZoneType";

-- CreateTable
CREATE TABLE "EventTicket" (
    "id" SERIAL NOT NULL,
    "eventId" INTEGER NOT NULL,
    "zoneId" INTEGER NOT NULL,
    "tableId" INTEGER NOT NULL,
    "ticketNumber" VARCHAR(50) NOT NULL,
    "qrCode" TEXT,
    "price" DECIMAL(8,2) NOT NULL,
    "status" "TicketStatus" NOT NULL DEFAULT 'available',
    "customerName" VARCHAR(255) NOT NULL,
    "customerEmail" VARCHAR(255) NOT NULL,
    "customerPhone" VARCHAR(20) NOT NULL,
    "paymentId" VARCHAR(255),
    "paymentStatus" "PaymentStatus" NOT NULL DEFAULT 'pending',
    "purchasedAt" TIMESTAMP(3),
    "usedAt" TIMESTAMP(3),
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "EventTicket_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "EventZone" (
    "id" SERIAL NOT NULL,
    "eventId" INTEGER NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "description" TEXT,
    "price" DECIMAL(8,2) NOT NULL,
    "maxSeats" INTEGER,
    "isActive" BOOLEAN NOT NULL DEFAULT true,
    "sortOrder" INTEGER NOT NULL DEFAULT 0,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "EventZone_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "EventTable" (
    "id" SERIAL NOT NULL,
    "zoneId" INTEGER NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "x" DOUBLE PRECISION NOT NULL,
    "y" DOUBLE PRECISION NOT NULL,
    "width" DOUBLE PRECISION NOT NULL,
    "height" DOUBLE PRECISION NOT NULL,
    "seats" INTEGER NOT NULL DEFAULT 4,
    "isActive" BOOLEAN NOT NULL DEFAULT true,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "EventTable_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "EventTicket_ticketNumber_key" ON "EventTicket"("ticketNumber");

-- AddForeignKey
ALTER TABLE "EventTicket" ADD CONSTRAINT "EventTicket_eventId_fkey" FOREIGN KEY ("eventId") REFERENCES "Event"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "EventTicket" ADD CONSTRAINT "EventTicket_zoneId_fkey" FOREIGN KEY ("zoneId") REFERENCES "EventZone"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "EventTicket" ADD CONSTRAINT "EventTicket_tableId_fkey" FOREIGN KEY ("tableId") REFERENCES "EventTable"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "EventZone" ADD CONSTRAINT "EventZone_eventId_fkey" FOREIGN KEY ("eventId") REFERENCES "Event"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "EventTable" ADD CONSTRAINT "EventTable_zoneId_fkey" FOREIGN KEY ("zoneId") REFERENCES "EventZone"("id") ON DELETE CASCADE ON UPDATE CASCADE;
