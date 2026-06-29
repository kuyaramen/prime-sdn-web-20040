import { PrismaClient } from "@prisma/client";
import { PrismaBetterSqlite3 } from "@prisma/adapter-better-sqlite3";
import path from "path";
import fs from "fs";

// Manually parse .env file to ensure DATABASE_URL is loaded (especially for non-Next environments like Prisma migrations/seeds)
try {
  const envPath = path.resolve(process.cwd(), ".env");
  if (fs.existsSync(envPath)) {
    const envFile = fs.readFileSync(envPath, "utf-8");
    envFile.split("\n").forEach((line) => {
      const parts = line.split("=");
      if (parts.length >= 2) {
        const key = parts[0].trim();
        const value = parts.slice(1).join("=").trim().replace(/^['"]|['"]$/g, "");
        if (key && !process.env[key]) {
          process.env[key] = value;
        }
      }
    });
  }
} catch (e) {
  console.warn("Could not load .env file manually in db.ts:", e);
}

const globalForPrisma = globalThis as unknown as {
  prisma: PrismaClient | undefined;
};

function createPrismaClient() {
  const dbUrl = process.env.DATABASE_URL || "file:./dev.db";
  
  if (dbUrl.startsWith("file:")) {
    const relativePath = dbUrl.replace(/^file:/, "");
    const absolutePath = path.resolve(process.cwd(), relativePath);
    const adapter = new PrismaBetterSqlite3({ url: absolutePath });
    return new PrismaClient({ adapter });
  }
  
  throw new Error(
    `Unsupported DATABASE_URL: "${dbUrl}". Currently only SQLite (file:...) is supported. ` +
    "To use PostgreSQL in production, install @prisma/adapter-pg and pg, then update this file."
  );
}

export const db = globalForPrisma.prisma ?? createPrismaClient();

if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = db;

