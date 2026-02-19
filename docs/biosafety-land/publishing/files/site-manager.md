## Site Manager Role

Site Managers are the **only role** with access to the Files tab. The Files tab shows all uploaded files across the site — including files uploaded through content and media.

::: info
Files are uploaded through content forms and media. The Files tab does **not** have an "Add file" button. It is a management view for monitoring and deleting existing files.
:::

### View Files List {#view-files-site-manager}

::: details Authenticated?
If you have not already logged in, follow the [Login](/biosafety-land/authentication/login) instructions.
:::

#### Step 1: Open the Admin Menu

1. Click **Publishing** in the admin toolbar
2. The Publishing page opens

![Admin toolbar with Publishing highlighted](/images/biosafety-land/files/file-add-site-manager-02-admin-menu.png)

#### Step 2: Go to the Files Tab

1. Click **Files** in the tab bar (next to Content, Media, Unpublished)
2. The Files list opens

![Files tab in the Publishing area](/images/biosafety-land/files/file-add-site-manager-03-files-list.png)

#### Step 3: Understand the Files List

The Files list shows all files on the site with these columns:

| Column | Description |
|--------|-------------|
| **Name** | The filename (click to download) |
| **Entity type** | Where the file belongs (e.g., `media`, `node`) |
| **User ID** | Who uploaded the file |
| **Changed date** | When the file was last modified |
| **Used in** | How many places use this file (click to see details) |
| **Operations** | Available actions (Delete) |
| **Size** | File size |
| **Status** | Permanent or Temporary |

#### Step 4: Filter Files (Optional)

Use the filter form at the top to find specific files:

1. **Filename** — Type part of the filename to search
2. **MIME type** — Filter by file type (e.g., `image/jpeg`, `application/pdf`)
3. **Status** — Filter by Permanent or Temporary
4. Click **Filter** to apply

---

### View File Usage {#view-file-usage-site-manager}

Site Managers can see where each file is used across the site.

#### Step 1: Find the File

1. Go to the Files list (see [View Files List](#view-files-site-manager))
2. Find the file you want to check

#### Step 2: Click the Usage Link

1. In the **Used in** column, click the link (e.g., "1 place" or "2 places")
2. The File Usage page opens

![File usage information page](/images/biosafety-land/files/file-usage-site-manager.png)

#### Step 3: Review Usage

The usage page shows:

| Column | Description |
|--------|-------------|
| **Entity** | The content or media item using this file |
| **Entity type** | Type of entity (media, node, etc.) |
| **Registering module** | The Drupal module that registered the usage |
| **Use count** | Number of times the file is used in that entity |

::: tip
Always check file usage before deleting. Deleting a file that is used in content will break those references.
:::

---

### Delete File {#delete-file-site-manager}

Site Managers can delete files from the Files tab.

::: warning
Deleting a file **cannot be undone**. Always check the "Used in" column first to make sure the file is not referenced by content or media.
:::

#### Step 1: Find the File to Delete

1. Go to the Files list (see [View Files List](#view-files-site-manager))
2. Find the file you want to delete
3. Check the **Used in** column — if it shows "0 places", it is safe to delete

#### Step 2: Click Delete

1. Click **Delete** in the **Operations** column next to the file
2. A confirmation dialog appears

![Delete confirmation dialog](/images/biosafety-land/files/file-delete-site-manager-confirm-dialog.png)

#### Step 3: Review the Warning

1. Read: "Are you sure you want to delete the file [filename]?"
2. Note: "This action cannot be undone."
3. Make sure this is the correct file

#### Step 4: Confirm or Cancel

- Click **Delete** to permanently remove the file
- Click **Cancel** to keep the file

#### Step 5: Verify Deletion

1. You return to the Files list
2. The deleted file no longer appears in the list
