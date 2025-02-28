import { 
  getAllParentsForFolder, 
  getFiles, 
  getFolders 
} from "~/server/db/queries";
import DriveContents from "../../drive-contents";


export default async function GoogleDriveClone(props: { 
  params: Promise<{ folderId: string }>; 
}) {
  const param = await props.params;

  const parsedFolderId = parseInt(param.folderId);
  if (isNaN(parsedFolderId)) {
    return <div>Invalid folder ID</div>
  }

  const [folders, files, parents] = await Promise.all([
    getFolders(parsedFolderId), 
    getFiles(parsedFolderId),
    getAllParentsForFolder(parsedFolderId)
  ]);

  return <DriveContents files={files} folders={folders} parents={parents} />
}
