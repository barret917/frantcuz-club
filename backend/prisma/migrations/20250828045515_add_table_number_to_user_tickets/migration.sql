-- AlterTable
ALTER TABLE "user_tickets" ADD COLUMN     "table_number" VARCHAR(50);

-- CreateIndex
CREATE INDEX "user_tickets_table_number_idx" ON "user_tickets"("table_number");
