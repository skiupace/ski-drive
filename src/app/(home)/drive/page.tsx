import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import { MUTATIONS, QUERIES } from "~/server/db/queries";
import { Button } from "~/components/ui/button";


export default async function DrivePage() {
  const session = await auth();
  if (!session.userId)
    return redirect("/sign-in");

  const rootFolder = await QUERIES.getRootFolderForUser(session.userId);
  if (!rootFolder) {
    return (
      <form 
        action={async () => {
          "use server";
          const session = await auth();
          if (!session.userId)
            return redirect("/sign-in");

          const rootFolderId = await MUTATIONS.onboardUser(session.userId);
          return redirect(`/f/${rootFolderId}`);
        }}
      >
        <Button className="text-white bg-gradient-to-r from-blue-500 to-purple-500">Create New Drive</Button>
      </form>
    );
  }

  return redirect(`/f/${rootFolder.id}`);
}