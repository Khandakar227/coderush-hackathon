-- CreateTable
CREATE TABLE "userCVData" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "email" TEXT NOT NULL,
    "data" TEXT NOT NULL,
    CONSTRAINT "userCVData_email_fkey" FOREIGN KEY ("email") REFERENCES "User" ("email") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "userCVData_email_key" ON "userCVData"("email");
