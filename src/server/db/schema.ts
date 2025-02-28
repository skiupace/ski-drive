import "server-only";

import { 
  int, 
  bigint,
  index, 
  text,  
  singlestoreTableCreator
} from "drizzle-orm/singlestore-core";

export const createTable = singlestoreTableCreator(
  (name) => `drive-clone_${name}`,
);

export const files_table = createTable(
  "files_table", 
  {
    id: bigint("id", { mode: "number", unsigned: true }).primaryKey().autoincrement(),
    name: text("name").notNull(),
    size: int("size").notNull(),
    url: text("url").notNull(),
    parent: bigint("parent", {mode: "number", unsigned: true }).notNull(),
  }, (t) => {
    return [index("parent_index").on(t.parent)];
  }
);

export const folders_table = createTable(
  "folders_table", 
  {
    id: bigint("id", { mode: "number", unsigned: true }).primaryKey().autoincrement(),
    name: text("name").notNull(),
    parent: bigint("parent", {mode: "number", unsigned: true }),
  }, (t) => {
    return [index("parent_index").on(t.parent)];
  }
);