-- CreateEnum
CREATE TYPE "HallType" AS ENUM ('restaurant', 'karaoke', 'billiards', 'disco', 'playstation', 'bowling', 'spa', 'cinema', 'banquet', 'custom');

-- CreateEnum
CREATE TYPE "ZoneType" AS ENUM ('karaoke', 'billiards', 'restaurant', 'disco', 'playstation', 'bowling', 'spa', 'cinema', 'custom');

-- CreateEnum
CREATE TYPE "ZoneItemType" AS ENUM ('table', 'booth', 'stage', 'bar', 'danceFloor', 'gameTable', 'lounge', 'spaRoom', 'cinemaHall', 'custom');

-- CreateEnum
CREATE TYPE "ReservationType" AS ENUM ('seating', 'fullItem', 'event', 'timeSlot');

-- CreateEnum
CREATE TYPE "ReservationStatus" AS ENUM ('booked', 'arrived', 'no_show', 'cancelled');

-- CreateEnum
CREATE TYPE "BanquetRequestStatus" AS ENUM ('pending', 'approved', 'rejected', 'completed');

-- CreateEnum
CREATE TYPE "CarouselPage" AS ENUM ('billiards', 'karaoke', 'disco');

-- CreateTable
CREATE TABLE "Hall" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "description" TEXT,
    "type" "HallType" NOT NULL DEFAULT 'restaurant',
    "imageUrl" TEXT,
    "isActive" BOOLEAN NOT NULL DEFAULT true,
    "sortOrder" INTEGER NOT NULL DEFAULT 0,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Hall_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Zone" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "type" "ZoneType" NOT NULL DEFAULT 'restaurant',
    "hallId" INTEGER NOT NULL DEFAULT 1,
    "openTime" TEXT NOT NULL,
    "closeTime" TEXT NOT NULL,
    "imageUrl" TEXT,
    "description" TEXT,
    "isActive" BOOLEAN NOT NULL DEFAULT true,
    "sortOrder" INTEGER NOT NULL DEFAULT 0,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Zone_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ZoneItem" (
    "id" SERIAL NOT NULL,
    "zoneId" INTEGER NOT NULL,
    "floor" INTEGER NOT NULL DEFAULT 1,
    "label" TEXT NOT NULL,
    "type" "ZoneItemType" NOT NULL DEFAULT 'table',
    "isBooking" BOOLEAN NOT NULL DEFAULT false,
    "isActive" BOOLEAN NOT NULL DEFAULT true,
    "x" DOUBLE PRECISION NOT NULL,
    "y" DOUBLE PRECISION NOT NULL,
    "width" DOUBLE PRECISION NOT NULL,
    "height" DOUBLE PRECISION NOT NULL,
    "seats" INTEGER,
    "capacity" INTEGER,
    "pricePerHour" DECIMAL(8,2),
    "pricePerSeat" DECIMAL(8,2),
    "pricePerSlot" DECIMAL(8,2),
    "minDuration" INTEGER,
    "maxDuration" INTEGER,
    "timeSlots" TEXT[],
    "description" TEXT,
    "features" TEXT[],

    CONSTRAINT "ZoneItem_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Reservation" (
    "id" SERIAL NOT NULL,
    "zoneItemId" INTEGER NOT NULL,
    "type" "ReservationType" NOT NULL DEFAULT 'seating',
    "userName" TEXT NOT NULL,
    "phone" TEXT NOT NULL,
    "startsAt" TIMESTAMP(3) NOT NULL,
    "endsAt" TIMESTAMP(3) NOT NULL,
    "deposit" DECIMAL(5,2) NOT NULL,
    "status" "ReservationStatus" NOT NULL DEFAULT 'booked',
    "seatsCount" INTEGER,
    "guestsCount" INTEGER,
    "duration" INTEGER,
    "comment" TEXT,
    "specialRequests" TEXT,
    "totalPrice" DECIMAL(8,2),

    CONSTRAINT "Reservation_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Payment" (
    "id" SERIAL NOT NULL,
    "reservationId" INTEGER NOT NULL,
    "amount" DECIMAL(5,2) NOT NULL,
    "payDate" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "refunded" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "Payment_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "MenuType" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "slug" TEXT NOT NULL,
    "description" TEXT,
    "isActive" BOOLEAN NOT NULL DEFAULT true,
    "sortOrder" INTEGER NOT NULL DEFAULT 0,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "MenuType_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "MenuCategory" (
    "id" SERIAL NOT NULL,
    "menuTypeId" INTEGER NOT NULL,
    "name" TEXT NOT NULL,
    "slug" TEXT NOT NULL,
    "description" TEXT,
    "isActive" BOOLEAN NOT NULL DEFAULT true,
    "sortOrder" INTEGER NOT NULL DEFAULT 0,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "MenuCategory_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "MenuItem" (
    "id" SERIAL NOT NULL,
    "categoryId" INTEGER NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT,
    "price" DECIMAL(8,2) NOT NULL,
    "imageUrl" TEXT,
    "isActive" BOOLEAN NOT NULL DEFAULT true,
    "sortOrder" INTEGER NOT NULL DEFAULT 0,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "MenuItem_pkey" PRIMARY KEY ("id")
);

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

-- CreateTable
CREATE TABLE "BoardGame" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "description" TEXT,
    "price" DECIMAL(8,2) NOT NULL,
    "duration" VARCHAR(100),
    "players" VARCHAR(100),
    "difficulty" VARCHAR(100),
    "category" VARCHAR(100),
    "imageUrl" TEXT,
    "isActive" BOOLEAN NOT NULL DEFAULT true,
    "sortOrder" INTEGER NOT NULL DEFAULT 0,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "BoardGame_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "BilliardsService" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "type" VARCHAR(50) NOT NULL,
    "price" DECIMAL(8,2) NOT NULL,
    "description" TEXT,
    "imageUrl" TEXT,
    "isActive" BOOLEAN DEFAULT true,
    "sortOrder" INTEGER DEFAULT 0,
    "createdAt" TIMESTAMP(6) DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(6) DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "BilliardsService_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "BilliardsSettings" (
    "id" SERIAL NOT NULL,
    "bookingFee" DECIMAL(8,2) DEFAULT 100,
    "bookingTimeoutMinutes" INTEGER DEFAULT 20,
    "minBookingDuration" INTEGER DEFAULT 60,
    "maxBookingDuration" INTEGER DEFAULT 480,
    "isActive" BOOLEAN DEFAULT true,
    "createdAt" TIMESTAMP(6) DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(6) DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "BilliardsSettings_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "KaraokeService" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "type" VARCHAR(50) NOT NULL,
    "price" DECIMAL(8,2) NOT NULL,
    "description" TEXT,
    "imageUrl" TEXT,
    "isActive" BOOLEAN DEFAULT true,
    "sortOrder" INTEGER DEFAULT 0,
    "createdAt" TIMESTAMP(6) DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(6) DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "KaraokeService_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "KaraokeSettings" (
    "id" SERIAL NOT NULL,
    "depositPolicy" TEXT DEFAULT 'В случае неиспользования суммы депозита, денежные средства не возвращаются.',
    "isActive" BOOLEAN DEFAULT true,
    "createdAt" TIMESTAMP(6) DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(6) DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "KaraokeSettings_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "BanquetRequest" (
    "id" SERIAL NOT NULL,
    "eventDate" TIMESTAMP(3) NOT NULL,
    "eventTime" TEXT NOT NULL,
    "endTime" TEXT,
    "guestCount" INTEGER NOT NULL,
    "eventType" TEXT NOT NULL,
    "budget" TEXT NOT NULL,
    "banquetType" TEXT,
    "specialMenu" TEXT,
    "music" TEXT,
    "decor" TEXT,
    "name" TEXT NOT NULL,
    "phone" TEXT NOT NULL,
    "email" TEXT,
    "additionalWishes" TEXT,
    "status" "BanquetRequestStatus" NOT NULL DEFAULT 'pending',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "BanquetRequest_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Event" (
    "id" SERIAL NOT NULL,
    "title" VARCHAR(255) NOT NULL,
    "description" TEXT NOT NULL,
    "date" TIMESTAMP(3) NOT NULL,
    "time" VARCHAR(100) NOT NULL,
    "price" VARCHAR(100),
    "category" VARCHAR(100) NOT NULL,
    "isUpcoming" BOOLEAN NOT NULL DEFAULT true,
    "isActive" BOOLEAN NOT NULL DEFAULT true,
    "imageUrl" TEXT,
    "maxGuests" INTEGER,
    "location" VARCHAR(255),
    "organizer" VARCHAR(255),
    "contactInfo" TEXT,
    "tags" TEXT[],
    "sortOrder" INTEGER NOT NULL DEFAULT 0,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Event_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "CarouselPhoto" (
    "id" SERIAL NOT NULL,
    "title" VARCHAR(255) NOT NULL,
    "description" TEXT,
    "imageUrl" TEXT NOT NULL,
    "page" "CarouselPage" NOT NULL DEFAULT 'billiards',
    "isActive" BOOLEAN NOT NULL DEFAULT true,
    "sortOrder" INTEGER NOT NULL DEFAULT 0,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "CarouselPhoto_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "MenuType_slug_key" ON "MenuType"("slug");

-- CreateIndex
CREATE UNIQUE INDEX "MenuCategory_slug_key" ON "MenuCategory"("slug");

-- CreateIndex
CREATE UNIQUE INDEX "BilliardsService_type_key" ON "BilliardsService"("type");

-- CreateIndex
CREATE UNIQUE INDEX "KaraokeService_type_key" ON "KaraokeService"("type");

-- AddForeignKey
ALTER TABLE "Zone" ADD CONSTRAINT "Zone_hallId_fkey" FOREIGN KEY ("hallId") REFERENCES "Hall"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ZoneItem" ADD CONSTRAINT "ZoneItem_zoneId_fkey" FOREIGN KEY ("zoneId") REFERENCES "Zone"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Reservation" ADD CONSTRAINT "Reservation_zoneItemId_fkey" FOREIGN KEY ("zoneItemId") REFERENCES "ZoneItem"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Payment" ADD CONSTRAINT "Payment_reservationId_fkey" FOREIGN KEY ("reservationId") REFERENCES "Reservation"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "MenuCategory" ADD CONSTRAINT "MenuCategory_menuTypeId_fkey" FOREIGN KEY ("menuTypeId") REFERENCES "MenuType"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "MenuItem" ADD CONSTRAINT "MenuItem_categoryId_fkey" FOREIGN KEY ("categoryId") REFERENCES "MenuCategory"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
