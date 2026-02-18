## Finding and Navigating the Documentation

All Bioland documentation lives in a single GitHub repository. This section shows you how to find it and navigate to the pages you want to edit.

### Step 1: Open the Repository

1. Go to [https://github.com/scbd/bioland-docs](https://github.com/scbd/bioland-docs)
2. You will see the repository home page with a list of files and folders

![Repository Home Page](/images/contrib/contrib-nav-01-repo-home.png)

::: tip
Bookmark this page for quick access: [https://github.com/scbd/bioland-docs](https://github.com/scbd/bioland-docs)
:::

### Step 2: Understand the Folder Structure

The repository is organized into folders. Here are the most important ones:

| Folder | Contains |
|--------|----------|
| `docs/bioland/` | Bioland platform documentation pages |
| `docs/biosafety-land/` | Biosafety-Land platform documentation pages |
| `docs/public/images/` | All images used in the documentation |
| `contrib/` | This contributing guide |

1. Click the **docs** folder to open it
2. You will see the subfolders for each platform

![Docs Folder Contents](/images/contrib/contrib-nav-02-docs-folder.png)

### Step 3: Navigate to a Page

1. Click through the folders to find the page you want to edit
2. For example, to find the Biosafety-Land getting started page:
   - Click **docs**
   - Click **biosafety-land**
   - Click **getting-started.md**
3. GitHub will display the file contents

![File View on GitHub](/images/contrib/contrib-nav-03-file-view.png)

The **breadcrumb navigation** at the top of the page shows your current location in the folder hierarchy. You can click any part of the breadcrumb to go back to a parent folder.

![Breadcrumb Navigation](/images/contrib/contrib-nav-04-breadcrumbs.png)

### Step 4: Find a Specific File

If you know the name of the file you want to edit, you can search for it:

1. From the repository home page, click the **Go to file** button (or press **T** on your keyboard)
2. Start typing the file name
3. GitHub will filter the list of files as you type
4. Click the file you want to open

![Go to File Search](/images/contrib/contrib-nav-05-go-to-file.png)

::: tip
Press the **T** key on your keyboard from any page in the repository to quickly open the file search.
:::

### Understanding File Paths and URLs

Each documentation file maps to a page on the live website. The pattern is:

| File Path in GitHub | URL on Live Site |
|---------------------|------------------|
| `docs/biosafety-land/getting-started.md` | `/biosafety-land/getting-started` |
| `docs/bioland/features.md` | `/bioland/features` |
| `docs/biosafety-land/authentication/login.md` | `/biosafety-land/authentication/login` |

The rules are:
- Remove `docs/` from the beginning of the path
- Remove `.md` from the end of the filename
- The rest of the path becomes the URL
