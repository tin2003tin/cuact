/*
  Warnings:

  - Added the required column `name` to the `Event` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Event" ADD COLUMN     "name" VARCHAR(255) NOT NULL,
ALTER COLUMN "title" DROP NOT NULL;
