/*
  Warnings:

  - You are about to drop the column `profileId` on the `Event` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "Event" DROP CONSTRAINT "Event_profileId_fkey";

-- AlterTable
ALTER TABLE "Event" DROP COLUMN "profileId";

-- CreateTable
CREATE TABLE "_interestEvent" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_interestEvent_AB_unique" ON "_interestEvent"("A", "B");

-- CreateIndex
CREATE INDEX "_interestEvent_B_index" ON "_interestEvent"("B");

-- AddForeignKey
ALTER TABLE "_interestEvent" ADD CONSTRAINT "_interestEvent_A_fkey" FOREIGN KEY ("A") REFERENCES "Event"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_interestEvent" ADD CONSTRAINT "_interestEvent_B_fkey" FOREIGN KEY ("B") REFERENCES "Profile"("id") ON DELETE CASCADE ON UPDATE CASCADE;
