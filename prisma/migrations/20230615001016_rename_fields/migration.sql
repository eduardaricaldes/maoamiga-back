/*
  Warnings:

  - You are about to drop the column `available_end` on the `Provider` table. All the data in the column will be lost.
  - You are about to drop the column `available_start` on the `Provider` table. All the data in the column will be lost.
  - You are about to drop the column `provider_service_id` on the `Scheduler` table. All the data in the column will be lost.
  - You are about to drop the column `schedule_date` on the `Scheduler` table. All the data in the column will be lost.
  - You are about to drop the column `schedule_time` on the `Scheduler` table. All the data in the column will be lost.
  - Added the required column `availableEnd` to the `Provider` table without a default value. This is not possible if the table is not empty.
  - Added the required column `availableStart` to the `Provider` table without a default value. This is not possible if the table is not empty.
  - Added the required column `providerServiceId` to the `Scheduler` table without a default value. This is not possible if the table is not empty.
  - Added the required column `scheduleDate` to the `Scheduler` table without a default value. This is not possible if the table is not empty.
  - Added the required column `scheduleTime` to the `Scheduler` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Scheduler" DROP CONSTRAINT "Scheduler_provider_service_id_fkey";

-- AlterTable
ALTER TABLE "Provider" DROP COLUMN "available_end",
DROP COLUMN "available_start",
ADD COLUMN     "availableEnd" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "availableStart" TIMESTAMP(3) NOT NULL;

-- AlterTable
ALTER TABLE "Scheduler" DROP COLUMN "provider_service_id",
DROP COLUMN "schedule_date",
DROP COLUMN "schedule_time",
ADD COLUMN     "providerServiceId" INTEGER NOT NULL,
ADD COLUMN     "scheduleDate" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "scheduleTime" TIMESTAMP(3) NOT NULL;

-- AddForeignKey
ALTER TABLE "Scheduler" ADD CONSTRAINT "Scheduler_providerServiceId_fkey" FOREIGN KEY ("providerServiceId") REFERENCES "Provider"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
