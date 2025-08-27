/*
  Warnings:

  - You are about to drop the `Event` table. If the table is not empty, all the data it contains will be lost.

*/
-- CreateEnum
CREATE TYPE "PaymentStatus" AS ENUM ('pending', 'paid', 'failed', 'canceled');

-- CreateEnum
CREATE TYPE "OrderStatus" AS ENUM ('pending', 'paid', 'completed', 'canceled');

-- DropTable
DROP TABLE "Event";

-- CreateTable
CREATE TABLE "users" (
    "id" SERIAL NOT NULL,
    "telegram_id" BIGINT,
    "username" VARCHAR(255),
    "first_name" VARCHAR(255) NOT NULL DEFAULT 'Гость',
    "last_name" VARCHAR(255),
    "is_admin" BOOLEAN NOT NULL DEFAULT false,
    "language_code" VARCHAR(10),
    "is_bot" BOOLEAN NOT NULL DEFAULT false,
    "phone" VARCHAR(20),
    "email" VARCHAR(255),
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "users_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "tickets" (
    "id" SERIAL NOT NULL,
    "title" VARCHAR(100) NOT NULL,
    "short_description" VARCHAR(255),
    "description" TEXT,
    "image_url" TEXT,
    "event_date" TIMESTAMP(3) NOT NULL,
    "event_location" TEXT NOT NULL,
    "price" DECIMAL(10,2) NOT NULL,
    "is_used" BOOLEAN NOT NULL DEFAULT false,
    "qr_code" TEXT,
    "ticket_number" VARCHAR(50) NOT NULL,
    "user_id" INTEGER,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "tickets_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "user_tickets" (
    "id" SERIAL NOT NULL,
    "user_id" INTEGER,
    "ticket_id" INTEGER NOT NULL,
    "ticket_number" VARCHAR(50) NOT NULL,
    "qr_code" TEXT,
    "purchase_date" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "is_used" BOOLEAN NOT NULL DEFAULT false,
    "used_at" TIMESTAMP(3),
    "payment_status" "PaymentStatus" NOT NULL DEFAULT 'pending',
    "payment_id" TEXT,
    "expires_at" TIMESTAMP(3),
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "user_tickets_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "orders" (
    "id" SERIAL NOT NULL,
    "user_id" INTEGER,
    "first_name" VARCHAR(50) NOT NULL,
    "last_name" VARCHAR(50) NOT NULL,
    "email" VARCHAR(100) NOT NULL,
    "phone" VARCHAR(20) NOT NULL,
    "status" "OrderStatus" NOT NULL DEFAULT 'pending',
    "total_amount" DECIMAL(10,2) NOT NULL,
    "payment_id" TEXT,
    "payment_method" VARCHAR(50),
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "orders_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "order_items" (
    "id" SERIAL NOT NULL,
    "order_id" INTEGER NOT NULL,
    "user_ticket_id" INTEGER NOT NULL,
    "price" DECIMAL(10,2) NOT NULL,
    "quantity" INTEGER NOT NULL DEFAULT 1,

    CONSTRAINT "order_items_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "refunds" (
    "id" SERIAL NOT NULL,
    "user_id" INTEGER,
    "email" VARCHAR(100) NOT NULL,
    "phone" VARCHAR(20) NOT NULL,
    "full_name" VARCHAR(150) NOT NULL,
    "account_number" VARCHAR(50) NOT NULL,
    "bank_name" VARCHAR(100) NOT NULL,
    "bik" VARCHAR(20) NOT NULL,
    "correspondent_account" VARCHAR(50) NOT NULL,
    "inn" VARCHAR(20) NOT NULL,
    "kpp" VARCHAR(20),
    "okpo" VARCHAR(20),
    "ogrn" VARCHAR(20),
    "refund_amount" DECIMAL(10,2) NOT NULL,
    "refund_reason" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,
    "deleted_at" TIMESTAMP(3),

    CONSTRAINT "refunds_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "refund_tickets" (
    "refund_id" INTEGER NOT NULL,
    "user_ticket_id" INTEGER NOT NULL,
    "ticket_number" VARCHAR(50) NOT NULL,
    "refund_amount" DECIMAL(10,2) NOT NULL,

    CONSTRAINT "refund_tickets_pkey" PRIMARY KEY ("refund_id","user_ticket_id")
);

-- CreateTable
CREATE TABLE "_OrderTickets" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateTable
CREATE TABLE "_RefundTickets" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "users_telegram_id_key" ON "users"("telegram_id");

-- CreateIndex
CREATE UNIQUE INDEX "tickets_ticket_number_key" ON "tickets"("ticket_number");

-- CreateIndex
CREATE INDEX "tickets_user_id_idx" ON "tickets"("user_id");

-- CreateIndex
CREATE INDEX "tickets_ticket_number_unique" ON "tickets"("ticket_number");

-- CreateIndex
CREATE UNIQUE INDEX "user_tickets_ticket_number_key" ON "user_tickets"("ticket_number");

-- CreateIndex
CREATE INDEX "user_tickets_user_id_idx" ON "user_tickets"("user_id");

-- CreateIndex
CREATE INDEX "user_tickets_ticket_id_idx" ON "user_tickets"("ticket_id");

-- CreateIndex
CREATE INDEX "user_tickets_ticket_number_idx" ON "user_tickets"("ticket_number");

-- CreateIndex
CREATE INDEX "user_tickets_payment_id_idx" ON "user_tickets"("payment_id");

-- CreateIndex
CREATE INDEX "user_tickets_expires_at_idx" ON "user_tickets"("expires_at");

-- CreateIndex
CREATE INDEX "orders_user_id_idx" ON "orders"("user_id");

-- CreateIndex
CREATE INDEX "orders_status_idx" ON "orders"("status");

-- CreateIndex
CREATE INDEX "orders_payment_id_idx" ON "orders"("payment_id");

-- CreateIndex
CREATE UNIQUE INDEX "order_items_user_ticket_id_key" ON "order_items"("user_ticket_id");

-- CreateIndex
CREATE INDEX "order_items_order_id_idx" ON "order_items"("order_id");

-- CreateIndex
CREATE INDEX "order_items_user_ticket_id_idx" ON "order_items"("user_ticket_id");

-- CreateIndex
CREATE INDEX "refunds_user_id_idx" ON "refunds"("user_id");

-- CreateIndex
CREATE INDEX "refunds_created_at_idx" ON "refunds"("created_at");

-- CreateIndex
CREATE UNIQUE INDEX "_OrderTickets_AB_unique" ON "_OrderTickets"("A", "B");

-- CreateIndex
CREATE INDEX "_OrderTickets_B_index" ON "_OrderTickets"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_RefundTickets_AB_unique" ON "_RefundTickets"("A", "B");

-- CreateIndex
CREATE INDEX "_RefundTickets_B_index" ON "_RefundTickets"("B");

-- AddForeignKey
ALTER TABLE "tickets" ADD CONSTRAINT "tickets_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "user_tickets" ADD CONSTRAINT "user_tickets_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "user_tickets" ADD CONSTRAINT "user_tickets_ticket_id_fkey" FOREIGN KEY ("ticket_id") REFERENCES "tickets"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "orders" ADD CONSTRAINT "orders_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "order_items" ADD CONSTRAINT "order_items_order_id_fkey" FOREIGN KEY ("order_id") REFERENCES "orders"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "order_items" ADD CONSTRAINT "order_items_user_ticket_id_fkey" FOREIGN KEY ("user_ticket_id") REFERENCES "user_tickets"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "refunds" ADD CONSTRAINT "refunds_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "refund_tickets" ADD CONSTRAINT "refund_tickets_refund_id_fkey" FOREIGN KEY ("refund_id") REFERENCES "refunds"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "refund_tickets" ADD CONSTRAINT "refund_tickets_user_ticket_id_fkey" FOREIGN KEY ("user_ticket_id") REFERENCES "user_tickets"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_OrderTickets" ADD CONSTRAINT "_OrderTickets_A_fkey" FOREIGN KEY ("A") REFERENCES "orders"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_OrderTickets" ADD CONSTRAINT "_OrderTickets_B_fkey" FOREIGN KEY ("B") REFERENCES "user_tickets"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_RefundTickets" ADD CONSTRAINT "_RefundTickets_A_fkey" FOREIGN KEY ("A") REFERENCES "refunds"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_RefundTickets" ADD CONSTRAINT "_RefundTickets_B_fkey" FOREIGN KEY ("B") REFERENCES "user_tickets"("id") ON DELETE CASCADE ON UPDATE CASCADE;
