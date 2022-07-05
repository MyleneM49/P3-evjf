/*
  Warnings:

  - You are about to drop the `Thing` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE `Thing`;

-- CreateTable
CREATE TABLE `Activity` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,
    `postId` INTEGER NOT NULL,
    `NumberId` INTEGER NOT NULL,

    UNIQUE INDEX `Activity_NumberId_key`(`NumberId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Place` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Number` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` DECIMAL(65, 30) NOT NULL,
    `activityID` INTEGER NOT NULL,

    UNIQUE INDEX `Number_activityID_key`(`activityID`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
