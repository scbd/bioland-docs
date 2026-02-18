## Working with Images

Documentation often includes screenshots and diagrams. This section explains where images are stored, how to name them, and how to upload and reference them in your documentation.

### Where Images Are Stored

All images are stored in the `docs/public/images/` folder, organized by platform and topic:

```
docs/public/images/
├── bioland/              → /images/bioland/
├── biosafety-land/       → /images/biosafety-land/
│   ├── authentication/
│   ├── configuration/
│   ├── content/
│   ├── media/
│   ├── menus/
│   ├── people/
│   └── reports/
└── contrib/              → /images/contrib/
```

### Image Naming Convention

All image files must follow these naming rules:

1. **All lowercase** — no capital letters
2. **Kebab-case** — words separated by hyphens (`-`)
3. **Descriptive name** — includes the action, role, step number, and description
4. **PNG format** — use `.png` for screenshots

**Naming pattern:**
```
{action}-{role}-{step}-{description}.png
```

| Component | Description | Examples |
|-----------|-------------|----------|
| `action` | What is being done (prefixed with section) | `content-add`, `media-edit`, `content-delete` |
| `role` | User role performing the action | `contributor`, `content-manager`, `site-manager` |
| `step` | Two-digit step number | `01`, `02`, `03` |
| `description` | Short description of what is shown | `admin-menu`, `form-filled`, `save-button` |

**Examples from existing documentation:**
```
content-add-contributor-02-admin-menu.png
content-add-contributor-04-add-button.png
media-add-site-manager-03-add-media.png
```

::: tip
Keep image file sizes under 500KB when possible. Crop screenshots to show only the relevant part of the screen.
:::

### Step 1: Prepare Your Image

1. Take a screenshot of the relevant part of the screen
2. Crop the image to show only what is needed
3. Save it as a `.png` file
4. Name the file following the naming convention above

### Step 2: Navigate to the Image Folder

1. Go to the repository: [https://github.com/scbd/bioland-docs](https://github.com/scbd/bioland-docs)
2. Navigate to the correct image folder:
   - For Bioland images: `docs/public/images/bioland/`
   - For Biosafety-Land images: `docs/public/images/biosafety-land/{section}/`
   - For contributing guide images: `docs/public/images/contrib/`
3. Choose the subfolder that matches your content section

![Image Folder Structure](/docs/public/images/contrib/contrib-upload-05-image-folder.png)

### Step 3: Upload Your Image

1. Click the **Add file** dropdown button near the top of the page
2. Select **Upload files**

![Add File Dropdown](/docs/public/images/contrib/contrib-upload-01-add-file-dropdown.png)

![Upload Files Option](/docs/public/images/contrib/contrib-upload-02-upload-option.png)

3. You will see a drag-and-drop upload area
4. Either:
   - **Drag and drop** your image file onto the upload area, or
   - Click **choose your files** to browse and select the image

![Upload Page](/docs/public/images/contrib/contrib-upload-03-upload-page.png)

5. Your file will appear in the staging area below

![Files Staged for Upload](/docs/public/images/contrib/contrib-upload-04-files-staged.png)

6. Write a commit message describing the image (e.g., "Add screenshot for login step 3")
7. Select **Create a new branch** and click **Commit changes**

### Step 4: Reference the Image in Markdown

After uploading, reference the image in your documentation file using this syntax:

```markdown
![Descriptive Alt Text](/images/{platform}/{section}/{filename}.png)
```

**Examples:**
```markdown
![Admin Toolbar](/images/biosafety-land/content/content-add-contributor-02-admin-menu.png)

![Media Upload Form](/images/biosafety-land/media/media-add-contributor-04-image-form.png)
```

::: warning Important: Image Path
The image path in your markdown must start with `/images/`, **not** `docs/public/images/`. GitHub shows the full file path, but the documentation site uses the shorter path.
:::

### Image Path Mapping

When you see a file at this GitHub path:
```
docs/public/images/biosafety-land/content/my-image.png
```

Reference it in markdown as:
```markdown
![Description](/images/biosafety-land/content/my-image.png)
```

**Rule:** Remove `docs/public` from the beginning of the GitHub file path to get the correct markdown reference path.

| GitHub File Path | Markdown Reference |
|------------------|--------------------|
| `docs/public/images/bioland/screenshot.png` | `/images/bioland/screenshot.png` |
| `docs/public/images/biosafety-land/content/my-image.png` | `/images/biosafety-land/content/my-image.png` |
| `docs/public/images/contrib/my-screenshot.png` | `/images/contrib/my-screenshot.png` |

### Writing Good Alt Text

Alt text describes the image for accessibility. It should:
- Describe what the image shows
- Be concise but informative
- Help someone understand the step without seeing the image

**Good alt text:**
```markdown
![Content list page showing the Add Content button at the top](/images/biosafety-land/content/content-add-contributor-04-add-button.png)
```

**Poor alt text:**
```markdown
![Screenshot](/images/biosafety-land/content/content-add-contributor-04-add-button.png)
```

### Next Steps

Now that you know how to work with images, proceed to [Creating a Pull Request](./07-pull-requests.md) to submit your changes for review.
