/*
  Warnings:

  - Added the required column `userId` to the `FoodLog` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "FoodLog" ADD COLUMN     "userId" TEXT NOT NULL;

-- AddForeignKey
ALTER TABLE "FoodLog" ADD CONSTRAINT "FoodLog_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
