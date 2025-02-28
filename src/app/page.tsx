import { db } from "~/server/db";
import { 
  files_table as filesSchema, 
  folders_table as foldersSchema 
} from "~/server/db/schema";
import DriveContents from "./drive-contents";

export default async function GoogleDriveClone() {
  const files = await db.select().from(filesSchema);
  const folders = await db.select().from(foldersSchema);
  const parents = await db.select().from(foldersSchema);
  return <DriveContents files={files} folders={folders} parents={parents} />
}