/*
  Warnings:

  - You are about to drop the column `userId` on the `Provider` table. All the data in the column will be lost.
  - You are about to drop the column `type` on the `User` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[email]` on the table `Provider` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `email` to the `Provider` table without a default value. This is not possible if the table is not empty.
  - Added the required column `location` to the `Provider` table without a default value. This is not possible if the table is not empty.
  - Added the required column `password` to the `Provider` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Provider" DROP CONSTRAINT "Provider_userId_fkey";

-- DropForeignKey
ALTER TABLE "Session" DROP CONSTRAINT "Session_userId_fkey";

-- AlterTable
ALTER TABLE "Provider" DROP COLUMN "userId",
ADD COLUMN     "email" VARCHAR(255) NOT NULL,
ADD COLUMN     "location" TEXT NOT NULL,
ADD COLUMN     "password" VARCHAR(255) NOT NULL;

-- AlterTable
ALTER TABLE "Session" ADD COLUMN     "providerId" INTEGER,
ALTER COLUMN "userId" DROP NOT NULL;

-- AlterTable
ALTER TABLE "User" DROP COLUMN "type";

-- CreateIndex
CREATE UNIQUE INDEX "Provider_email_key" ON "Provider"("email");

-- AddForeignKey
ALTER TABLE "Session" ADD CONSTRAINT "Session_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Session" ADD CONSTRAINT "Session_providerId_fkey" FOREIGN KEY ("providerId") REFERENCES "Provider"("id") ON DELETE SET NULL ON UPDATE CASCADE;
