# Drive Clone

## TODO

- [x] Setup database and datamodel.
- [x] Move folder open state to URL.
- [x] Add auth.
- [x] Add file uploading.
- [x] Add analytics.
- [x] Make sure sort order is consistent.
- [x] Add delete button.
- [x] Real homepage + onboarding.


## Fun follow ups

### Folder deletions

Make sure you fetch all of the folders that have it as a parent, and their children too.

### Folder creations

Make a server action that takes a name and parentId, and creates a folder with that name and parentId (don't forget to set the ownerId).

### Folder rename

Make the user able to rename a certain folder.

### Access control

Check if the user is the owner before showing the drive page.

### Make a "file view" page

Maybe check out theo's last tutorial.

### Gray out a row while it's being deleted.