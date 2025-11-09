-- CreateTable
CREATE TABLE "PageZoneBinding" (
    "id" SERIAL NOT NULL,
    "pageRoute" VARCHAR(255) NOT NULL,
    "zoneId" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "PageZoneBinding_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "PageZoneBinding_pageRoute_key" ON "PageZoneBinding"("pageRoute");

-- CreateIndex
CREATE INDEX "PageZoneBinding_pageRoute_idx" ON "PageZoneBinding"("pageRoute");

-- CreateIndex
CREATE INDEX "PageZoneBinding_zoneId_idx" ON "PageZoneBinding"("zoneId");

-- AddForeignKey
ALTER TABLE "PageZoneBinding" ADD CONSTRAINT "PageZoneBinding_zoneId_fkey" FOREIGN KEY ("zoneId") REFERENCES "BookingZone"("id") ON DELETE CASCADE ON UPDATE CASCADE;
