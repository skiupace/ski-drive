import { QUERIES } from "~/server/db/queries";
import DriveContents from "./drive-contents";
import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";


export default async function GoogleDriveClone(props: { 
  params: Promise<{ folderId: string }>; 
}) {
  const session = await auth();
  if (!session.userId)
    return redirect("/sign-in");

  const param = await props.params;
  const parsedFolderId = parseInt(param.folderId);

  if (isNaN(parsedFolderId)) {
    return <div>Invalid folder ID</div>
  }

  const folder = await QUERIES.getFolderById(parsedFolderId);
  if (!folder || folder.ownerId !== session.userId) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white">
        <h1 className="text-2xl font-bold mb-4">Access Denied</h1>
        <p>You don't have permission to view this folder.</p>
      </div>
    );
  }

  const [folders, files, parents] = await Promise.all([
    QUERIES.getFolders(parsedFolderId), 
    QUERIES.getFiles(parsedFolderId),
    QUERIES.getAllParentsForFolder(parsedFolderId)
  ]);

  return (
    <DriveContents 
      files={files} 
      folders={folders} 
      parents={parents} 
      currentFolderId={parsedFolderId} 
    />
  );
}
