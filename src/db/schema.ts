import { 
  mysqlTable, 
  serial, 
  varchar, 
 float, 
  int, 
  text 
} from "drizzle-orm/mysql-core";

export const laptops = mysqlTable("laptop", {
  id: serial("id").primaryKey(),
  merek: text("merek"),
  cpu: int("cpu"),
  gpu: int("gpu"),
  harga: int("harga"),
  ram: int("ram"),
  berat: int("berat"),
  gambar: varchar("gambar", { length: 256 }),
  pekerjaan: varchar("pekerjaan", { length: 50 }),
  penggunaan: varchar("penggunaan", { length: 50 }),
  jenis_laptop: varchar("jenis_laptop", { length: 50 }),
  processor: varchar("processor", { length: 50 }),
  bobot: float("bobot"),
});

export const detail = mysqlTable("detail", {
  id: serial("id").primaryKey(),
  merek: text("merek"),
  infosingkat1: text("infosingkat1"),
  slogan1: text("slogan1"),
  infoslogan1: text("infoslogan1"),
  slogan2: text("slogan2"),
  infoslogan2: text("infoslogan2"),
  slogan3: text("slogan3"),
  infoslogan3: text("infoslogan3"),
  harga: varchar("harga", { length: 50 }),
  gambar: varchar("gambar", { length: 256 }),
  processor: varchar("processor", { length: 256 }),
  gpu: varchar("gpu", { length: 256 }),
  ram: varchar("ram", { length: 256 }),
  penyimpanan: varchar("penyimpanan", { length: 256 }),
  display: varchar("display", { length: 256 }),
  berat: varchar("berat", { length: 50 }),
});
