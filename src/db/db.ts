import "dotenv/config";
import { drizzle } from "drizzle-orm/mysql2";
import * as schema from "@/db/schema";
import { eq, and, desc } from "drizzle-orm";
import { laptops, detail } from "@/db/schema";
import mysql from "mysql2/promise";

const connectionString = process.env.DB_URL!;
let client: mysql.Connection;
let db: any;

async function initializeDatabase() {
  if (!client) {
    client = await mysql.createConnection(connectionString);
    db = drizzle(client, { schema, mode: 'default' });
  }
}

export async function getLaptop({
  pekerjaan,
  penggunaan,
  jenis_laptop,
  processor,
}: {
  pekerjaan: string;
  penggunaan: string;
  jenis_laptop: string;
  processor: string;
}) {
  await initializeDatabase();
  const result = await db
    .select()
    .from(laptops)
    .where(
      and(
        eq(laptops.pekerjaan, pekerjaan),
        eq(laptops.penggunaan, penggunaan),
        eq(laptops.jenis_laptop, jenis_laptop),
        eq(laptops.processor, processor)
      )
    )
    .orderBy(desc(laptops.bobot))
    .limit(1);

  return result;
}

export async function getDetail(id: number) {
  await initializeDatabase();
  const result = await db.select().from(detail).where(eq(detail.id, id));

  return result;
}
