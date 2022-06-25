const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient({ log: ["query"] });

module.exports = prisma;

model Acitivity {
    id Int @default(autoincrement())
    name String
}

Id      Int @default(autoincrement())
title       String
content     String
post []
cancelAnimationFrame        bOOLEAN @default(FALSE)
name

@relation(field: [activity], reférence: [id])