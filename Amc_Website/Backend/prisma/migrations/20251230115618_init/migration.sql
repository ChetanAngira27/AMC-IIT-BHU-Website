/*
  Warnings:

  - A unique constraint covering the columns `[num]` on the table `Team` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `num` to the `Team` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Team" ADD COLUMN     "num" INTEGER NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "Team_num_key" ON "Team"("num");
