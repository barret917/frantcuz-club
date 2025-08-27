-- AlterTable
ALTER TABLE "user_tickets" ADD COLUMN     "email" VARCHAR(255),
ADD COLUMN     "first_name" VARCHAR(255),
ADD COLUMN     "last_name" VARCHAR(255),
ADD COLUMN     "phone" VARCHAR(20);

-- CreateIndex
CREATE INDEX "user_tickets_email_idx" ON "user_tickets"("email");

-- CreateIndex
CREATE INDEX "user_tickets_phone_idx" ON "user_tickets"("phone");

-- CreateIndex
CREATE INDEX "user_tickets_name_idx" ON "user_tickets"("first_name", "last_name");
