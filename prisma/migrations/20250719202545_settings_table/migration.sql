-- CreateTable


-- npx prisma db push to make update the migration and schema
CREATE TABLE "Settings" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "phone" TEXT NOT NULL,
    "adress" TEXT NOT NULL
);
