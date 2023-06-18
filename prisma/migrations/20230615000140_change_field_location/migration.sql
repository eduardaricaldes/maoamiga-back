/*
  Warnings:

  - You are about to drop the column `location` on the `Provider` table. All the data in the column will be lost.
  - Added the required column `location` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Provider" DROP COLUMN "location";

-- AlterTable
ALTER TABLE "User" ADD COLUMN     "location" TEXT NOT NULL;
