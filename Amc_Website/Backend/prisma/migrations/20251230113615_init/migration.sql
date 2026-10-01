/*
  Warnings:

  - You are about to drop the `TeamMates` table. If the table is not empty, all the data it contains will be lost.
  - A unique constraint covering the columns `[TransactionId]` on the table `Team` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `TransactionId` to the `Team` table without a default value. This is not possible if the table is not empty.
  - Added the required column `time` to the `Team` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "TeamMates" DROP CONSTRAINT "TeamMates_tId_fkey";

-- AlterTable
ALTER TABLE "Team" ADD COLUMN     "TransactionId" TEXT NOT NULL,
ADD COLUMN     "mate1Dept" VARCHAR(50),
ADD COLUMN     "mate1Name" TEXT,
ADD COLUMN     "mate1rollNum" INTEGER,
ADD COLUMN     "mate2Dept" VARCHAR(50),
ADD COLUMN     "mate2Name" TEXT,
ADD COLUMN     "mate2rollNum" INTEGER,
ADD COLUMN     "mate3Dept" VARCHAR(50),
ADD COLUMN     "mate3Name" TEXT,
ADD COLUMN     "mate3rollNum" INTEGER,
ADD COLUMN     "mate4Dept" VARCHAR(50),
ADD COLUMN     "mate4Name" TEXT,
ADD COLUMN     "mate4rollNum" INTEGER,
ADD COLUMN     "time" VARCHAR(100) NOT NULL;

-- DropTable
DROP TABLE "TeamMates";

-- CreateIndex
CREATE UNIQUE INDEX "Team_TransactionId_key" ON "Team"("TransactionId");
