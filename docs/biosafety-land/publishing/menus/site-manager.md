## Site Manager Role

Site Managers can manage the links within existing menus. Their menu management capabilities are **identical** to Content Managers.

### View Menus List {#sm-view-menus}

::: details Authenticated?
If you have not already logged in, follow the [Login](/biosafety-land/authentication/login) instructions.
:::

1. From the admin toolbar, click **Structure** → **Menus**
2. The menus list page displays all available menus

![Menus list as Site Manager](/images/biosafety-land/menus/menu-list-site-manager.png)

You will see six menus: Footer, Footer Credits, National Biosafety Framework, News & Updates, Resources, and Useful Links. Each menu has a **List links** button and a dropdown arrow.

---

### View Menu Links {#sm-view-links}

1. On the menus list page, click **List links** next to any menu
2. The menu links page shows all links in that menu

![Menu links list showing link names, enabled status, and operations](/images/biosafety-land/menus/menu-links-list-site-manager.png)

The page shows:
- **Menu link name** — the display text
- **Enabled** checkbox — whether the link is active on the site
- **Drag handles** — cross-arrow icons for reordering
- **Operations** — Edit button + dropdown with Add child, Translate, Delete, View

---

### Add a Menu Link {#sm-add-link}

1. On the menus list page, click the **dropdown arrow** next to **List links** for the target menu
2. Select **Add link** from the dropdown

![Operations dropdown showing Add link option](/images/biosafety-land/menus/menu-operations-dropdown-site-manager.png)

3. Fill in the **Add menu link** form:

![Add menu link form](/images/biosafety-land/menus/menu-add-link-form-site-manager.png)

| Field | Description |
|-------|-------------|
| **Menu link title** | The text displayed in the navigation |
| **Link** | The URL or page reference (supports autocomplete for internal pages) |
| **Enabled** | Check to make the link visible on the site |
| **Attributes** | Set target window (e.g., open in new tab) |
| **Parent link** | Select a parent to create a nested/child link |
| **Display settings** | Configure display options |
| **Description** | Optional description of the link |

4. Click **Save** to create the menu link

::: tip
When typing in the **Link** field, start typing the title of an internal page — the system will autocomplete matching pages.
:::

---

### Edit a Menu Link {#sm-edit-link}

1. Navigate to **Structure** → **Menus** and click **List links** for the target menu
2. Click **Edit** next to the link you want to change

![Link operations dropdown showing Edit, Add child, Translate, Delete, View](/images/biosafety-land/menus/menu-link-operations-dropdown-site-manager.png)

3. Modify the link title, URL, enabled state, parent link, or other settings
4. Click **Save** to apply your changes

---

### Delete a Menu Link {#sm-delete-link}

1. Navigate to **Structure** → **Menus** and click **List links** for the target menu
2. In the **Operations** dropdown next to the link, click **Delete**
3. Confirm the deletion when prompted

::: warning
Deleting a menu link is permanent. If the link has child links, consider reassigning or deleting them first.
:::

---

### Add a Child Link {#sm-add-child}

1. Navigate to **Structure** → **Menus** and click **List links** for the target menu
2. In the **Operations** dropdown next to the parent link, click **Add child**
3. Fill in the menu link form (same fields as [Add a Menu Link](#sm-add-link))
4. The **Parent link** field will be pre-set to the link you selected
5. Click **Save**

---

### Reorder Menu Links {#sm-reorder}

1. Navigate to **Structure** → **Menus** and click **List links** for the target menu
2. Use the **drag handles** (cross-arrow icon) on the left side of each link to drag it to a new position
3. To nest a link under another, drag it slightly to the right beneath the intended parent
4. Click **Save** at the bottom of the page to apply the new order

::: tip
Reordering changes are not saved until you click **Save**. If you navigate away without saving, your changes will be lost.
:::

---

### Translate a Menu Link {#sm-translate}

1. Navigate to **Structure** → **Menus** and click **List links** for the target menu
2. In the **Operations** dropdown next to the link, click **Translate**
3. Select the target language and provide the translated title and link
4. Click **Save**

::: info
Site Managers and Content Managers have **identical** menu management capabilities. The workflows documented here are the same as those in the [Content Manager section](#content-manager-role).
:::
