/*
  Warnings:

  - You are about to drop the `Post` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `User` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Post" DROP CONSTRAINT "Post_authorId_fkey";

-- DropTable
DROP TABLE "Post";

-- DropTable
DROP TABLE "User";

-- CreateTable
CREATE TABLE "Team" (
    "teamId" SERIAL NOT NULL,
    "teamName" VARCHAR(50) NOT NULL,
    "leaderName" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "rollNum" INTEGER NOT NULL,
    "depart" VARCHAR(50) NOT NULL,

    CONSTRAINT "Team_pkey" PRIMARY KEY ("teamId")
);

-- CreateTable
CREATE TABLE "TeamMates" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "rollNum" INTEGER NOT NULL,
    "depart" VARCHAR(50) NOT NULL,
    "tId" INTEGER NOT NULL,

    CONSTRAINT "TeamMates_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Team_teamName_key" ON "Team"("teamName");

-- CreateIndex
CREATE UNIQUE INDEX "Team_email_key" ON "Team"("email");

-- CreateIndex
CREATE UNIQUE INDEX "TeamMates_rollNum_key" ON "TeamMates"("rollNum");

-- AddForeignKey
ALTER TABLE "TeamMates" ADD CONSTRAINT "TeamMates_tId_fkey" FOREIGN KEY ("tId") REFERENCES "Team"("teamId") ON DELETE RESTRICT ON UPDATE CASCADE;
