## Creating a Pull Request

After you commit your changes, you need to create a **pull request** (PR) to ask the documentation team to review and include your edits in the live site.

### What is a Pull Request?

A pull request is a way of saying: "I've made some changes — please review them and add them to the documentation." It lets reviewers see exactly what you changed, leave comments, and approve your work before it goes live.

### Step 1: Start the Pull Request

After committing changes to a new branch, GitHub displays a yellow banner at the top of the page:

1. Look for the **Compare & pull request** button in the yellow banner
2. Click it to start creating your pull request

![Compare and Pull Request Banner](/images/contrib/contrib-pr-01-compare-banner.png)

::: tip
If you don't see the yellow banner, you can create a pull request manually:
1. Go to the repository: [https://github.com/scbd/bioland-docs](https://github.com/scbd/bioland-docs)
2. Click the **Pull requests** tab
3. Click **New pull request**
4. Select your branch from the dropdown
:::

### Step 2: Fill in the Details

The pull request form has two main fields:

![Pull Request Form](/images/contrib/contrib-pr-02-pr-form.png)

1. **Title** — A short summary of what you changed
   - Good examples:
     - "Update getting started guide with new login screenshots"
     - "Fix typo in content management page"
     - "Add missing image for media upload step"
2. **Description** — Additional context about your changes
   - Explain **why** you made the changes
   - List the specific pages or sections you edited
   - Mention anything reviewers should pay attention to

![Pull Request Form Filled In](/images/contrib/contrib-pr-03-pr-form-filled.png)

::: tip
Write a clear, descriptive title. Reviewers see this first and it helps them understand your contribution at a glance.
:::

### Step 3: Submit the Pull Request

1. Review the information you've entered
2. Scroll down to see the **Files changed** section — this shows your exact edits
3. Click the green **Create pull request** button

![Created Pull Request Page](/images/contrib/contrib-pr-04-created-pr.png)

### What Happens After You Submit

1. **Reviewers are notified** — The documentation team receives a notification about your pull request
2. **Review process** — A reviewer will look at your changes. They may:
   - **Approve** your changes immediately
   - **Leave comments** asking questions or suggesting improvements
   - **Request changes** if something needs to be updated
3. **Merge** — Once approved, a maintainer merges your changes into the main branch
4. **Live site update** — Your changes will appear on the live documentation site after the next deployment

![Review Comments on Pull Request](/images/contrib/contrib-pr-05-review-comments.png)

::: info
Reviews usually happen within a few business days. You will receive an email notification when there is activity on your pull request.
:::

### Responding to Review Comments

If a reviewer requests changes:

1. Go to your pull request page
2. Read the reviewer's comments
3. Navigate to the file(s) that need changes
4. Click the **pencil icon** to edit the file on your branch
5. Make the requested changes
6. Commit the changes — they will automatically be added to your existing pull request
7. Reply to the reviewer's comment to let them know you've addressed their feedback

### After Your PR is Merged

Once your pull request is merged:

- Your changes become part of the main documentation
- The live website will be updated with your edits after the next deployment
- Your pull request will be marked as **Merged** with a purple badge
- You can delete your branch (GitHub may offer this option automatically)

![Merge Area](/images/contrib/contrib-pr-06-merge-area.png)

Congratulations — you've successfully contributed to the documentation! 🎉
