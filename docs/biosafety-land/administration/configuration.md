---
outline: false
---

# Configuration

This guide shows how to manage system configuration settings in Biosafety Land (BSL).

> **Important:** Only **Site Managers** can access Configuration settings.
> Content Managers and Contributors cannot change system settings.

For related guides, see:
- [People Management](../people-management.md) - Managing users and roles
- [Content Management](../content-management.md) - Managing site content
- [User Guide](../user-guide.md) - Complete documentation

## Table of Contents

1. [Overview](#overview)
2. [Accessing Configuration](#accessing-configuration)
3. [Site Information Settings](#site-information-settings)
4. [Regional Settings](#regional-settings)
5. [Media Settings](#media-settings)
6. [Content Settings](#content-settings)
7. [User Settings](#user-settings)
8. [Search Settings](#search-settings)
9. [Performance Settings](#performance-settings)
10. [Development Settings](#development-settings)
11. [Security Settings](#security-settings)
12. [Email Settings](#email-settings)
13. [Best Practices](#best-practices)
14. [Common Mistakes](#common-mistakes)
15. [Quick Reference](#quick-reference)

---

## Overview

Configuration settings control how your Biosafety Land site works.

Site Managers can change:
- Site name and contact details
- Regional settings (date, time, language)
- Media and file handling
- User registration and account settings
- Search behavior
- Site performance
- Security settings
- Email configuration

**Who Can Access:** Site Managers only

**Navigation:** Admin menu → Configuration

---

## Accessing Configuration

### Step 1: Log in as Site Manager

<!-- SCREENSHOT NEEDED: /images/biosafety-land/general/login-page.png -->

1. Go to the Biosafety Land site
2. Click **Log in**
3. Enter your Site Manager email and password
4. Click **Log in**

### Step 2: Open Admin Menu

<!-- SCREENSHOT NEEDED: /images/biosafety-land/general/admin-main-page.png -->

1. Click the **Admin** link in the top navigation
2. The admin menu appears on the left

### Step 3: Navigate to Configuration

<!-- SCREENSHOT NEEDED: /images/biosafety-land/configuration/config-section-menu.png -->

1. Find **Configuration** in the admin menu
2. Click **Configuration**
3. The Configuration overview page opens

---

## Site Information Settings

Site information controls your site's basic details.

### Viewing Site Information

<!-- SCREENSHOT NEEDED: /images/biosafety-land/configuration/site-info-overview.png -->

**Path:** Configuration → System → Site Information

This page shows:
- Site name
- Slogan
- Email address
- Front page setting
- Error page settings

### Changing Site Name

<!-- SCREENSHOT NEEDED: /images/biosafety-land/configuration/site-info-edit-name.png -->

#### Step 1: Open Site Information

1. Go to Configuration → System → Site Information
2. The site information form opens

#### Step 2: Update Site Name

1. Find the **Site name** field
2. Type your new site name
3. Keep it short and clear

#### Step 3: Update Slogan (Optional)

1. Find the **Slogan** field
2. Type a short description of your site
3. This appears in some themes

#### Step 4: Save Changes

1. Scroll to the bottom
2. Click **Save configuration**
3. A success message appears

**Example Site Names:**
- "CBD Biosafety Clearing-House"
- "National Biosafety Portal"
- "Regional BCH Node"

### Changing Site Email

<!-- SCREENSHOT NEEDED: /images/biosafety-land/configuration/site-info-edit-email.png -->

The site email is used for system messages.

#### Step 1: Open Site Information

1. Go to Configuration → System → Site Information
2. Find the **Email address** field

#### Step 2: Enter New Email

1. Type a valid email address
2. Use a monitored email account
3. This receives important notifications

#### Step 3: Save Changes

1. Click **Save configuration**
2. Test by sending a test email

**Important:** Use an email you check regularly.

### Setting Front Page

<!-- SCREENSHOT NEEDED: /images/biosafety-land/configuration/site-info-edit-front-page.png -->

The front page is what visitors see first.

#### Step 1: Find Front Page Setting

1. Go to Configuration → System → Site Information
2. Find **Default front page**

#### Step 2: Enter Page Path

1. Type the path to your front page
2. Example: `/node/1` or `/home`
3. Must be a valid page path

#### Step 3: Save Changes

1. Click **Save configuration**
2. Visit your site to verify

---

## Regional Settings

Regional settings control date, time, and language.

### Date and Time Settings

<!-- SCREENSHOT NEEDED: /images/biosafety-land/configuration/regional-date-time.png -->

**Path:** Configuration → Regional and language → Regional settings

#### Step 1: Set Default Time Zone

1. Go to Regional settings
2. Find **Default time zone**
3. Select your time zone from dropdown
4. Example: "America/New_York"

#### Step 2: Configure Date Formats

1. Go to Configuration → Regional → Date and time formats
2. View default formats:
   - Short: `m/d/Y - H:i`
   - Medium: `D, m/d/Y - H:i`
   - Long: `l, F j, Y - H:i`

#### Step 3: Allow User Time Zones (Optional)

1. Check **Users may set their own time zone**
2. Users can choose their local time
3. Click **Save configuration**

### Language Settings

<!-- SCREENSHOT NEEDED: /images/biosafety-land/configuration/regional-languages.png -->

**Path:** Configuration → Regional and language → Languages

#### Step 1: View Languages

1. Go to Configuration → Languages
2. See all enabled languages
3. Default language is marked

#### Step 2: Add a New Language

<!-- SCREENSHOT NEEDED: /images/biosafety-land/configuration/regional-languages-add.png -->

1. Click **Add language**
2. Select language from dropdown
3. Click **Add language**
4. The language is added to the site

#### Step 3: Set Default Language

1. Find your preferred language in the list
2. Click **Edit** next to it
3. Check **Default language**
4. Click **Save language**

#### Step 4: Import Translations (If Available)

1. Go to Configuration → Regional → Translations
2. Click **Check manually** to find available translations
3. Select languages to update
4. Click **Update translations**

**Supported Languages:**
- English
- French
- Spanish
- Arabic
- Chinese
- Russian
- Many others via translation downloads

---

## Media Settings

Media settings control how files and images work.

### File System Settings

<!-- SCREENSHOT NEEDED: /images/biosafety-land/configuration/media-file-system.png -->

**Path:** Configuration → Media → File system

#### Step 1: View File Paths

1. Go to Configuration → Media → File system
2. See these paths:
   - **Public files:** Files anyone can access
   - **Private files:** Files only authorized users see
   - **Temporary files:** Files for processing

#### Step 2: Set Default Download Method

1. Find **Default download method**
2. Choose:
   - **Public:** Files accessible via direct URL
   - **Private:** Files require permission check
3. Click **Save configuration**

**When to Use Private Files:**
- Confidential documents
- Member-only content
- Draft materials

### Image Styles

<!-- SCREENSHOT NEEDED: /images/biosafety-land/configuration/media-image-styles.png -->

**Path:** Configuration → Media → Image styles

Image styles create different sizes of uploaded images.

#### View Available Styles

1. Go to Configuration → Media → Image styles
2. See default styles:
   - Thumbnail (100×100)
   - Medium (220×220)
   - Large (480×480)

Each style automatically creates a resized version.

### File Upload Settings

<!-- SCREENSHOT NEEDED: /images/biosafety-land/configuration/media-file-upload.png -->

**Path:** Configuration → Media → File settings

#### Step 1: Set Maximum Upload Size

1. Go to Configuration → Media → File settings
2. This is controlled by server settings
3. Contact system administrator to change

#### Step 2: Set Allowed File Extensions

1. Configure in content type or field settings
2. Go to Structure → Content types → [Type] → Manage fields
3. Edit field → File settings
4. Add or remove extensions

**Common Extensions:**
- Documents: pdf, doc, docx, xls, xlsx, ppt, pptx
- Images: jpg, jpeg, png, gif, svg
- Archives: zip, tar, gz

---

## Content Settings

Content settings control how content works.

### Text Formats

<!-- SCREENSHOT NEEDED: /images/biosafety-land/configuration/content-text-formats.png -->

**Path:** Configuration → Content authoring → Text formats and editors

Text formats control what HTML users can use.

#### View Text Formats

1. Go to Configuration → Text formats
2. See available formats:
   - **Full HTML:** All HTML allowed (Site Managers)
   - **Basic HTML:** Limited safe HTML (Content Managers)
   - **Restricted HTML:** Very limited HTML (Contributors)
   - **Plain text:** No HTML

#### Configure a Text Format

<!-- SCREENSHOT NEEDED: /images/biosafety-land/configuration/content-text-format-edit.png -->

1. Click **Configure** next to a format
2. Select which roles can use it
3. Configure allowed HTML tags
4. Set editor toolbar options
5. Click **Save configuration**

**Security Note:** Limit who can use Full HTML.

### Content Types

<!-- SCREENSHOT NEEDED: /images/biosafety-land/configuration/content-types-list.png -->

**Path:** Structure → Content types

Content types define what fields content has.

#### View Content Types

1. Go to Structure → Content types
2. See all content types
3. Common types:
   - Article
   - Basic page
   - Announcement
   - Document

#### Edit a Content Type

1. Click **Edit** next to the type
2. Change name and description
3. Configure publishing options
4. Click **Save content type**

### Display Modes

<!-- SCREENSHOT NEEDED: /images/biosafety-land/configuration/content-display-modes.png -->

**Path:** Structure → Display modes

Display modes control how content appears.

#### View Display Modes

1. Go to Structure → Display modes
2. See content view modes:
   - Default
   - Teaser
   - Full content
   - Search result

---

## User Settings

User settings control accounts and registration.

### Account Settings

<!-- SCREENSHOT NEEDED: /images/biosafety-land/configuration/user-account-settings.png -->

**Path:** Configuration → People → Account settings

#### Step 1: Configure Registration

1. Go to Configuration → People → Account settings
2. Find **Registration and cancellation**
3. Choose one:
   - **Administrators only:** Only Site Managers add users (recommended)
   - **Visitors:** Anyone can register
   - **Visitors with approval:** Registration needs approval

#### Step 2: Set Registration Emails

1. Find **Email** section
2. Configure messages:
   - **Welcome (new user):** Email to new users
   - **Welcome (by admin):** When admin creates account
   - **Password recovery:** Reset password email

#### Step 3: Customize Email Text

1. Click in an email template field
2. Edit the message text
3. Use tokens like `[user:name]`
4. Click **Save configuration**

### User Fields

<!-- SCREENSHOT NEEDED: /images/biosafety-land/configuration/user-fields.png -->

**Path:** Configuration → People → Account settings → Manage fields

User fields collect information about users.

#### View User Fields

1. Go to Account settings → Manage fields
2. See all fields on user profiles
3. Examples:
   - First name
   - Last name
   - Organization
   - Country

#### Add a User Field

<!-- SCREENSHOT NEEDED: /images/biosafety-land/configuration/user-field-add.png -->

1. Click **Add field**
2. Choose field type (text, email, date, etc.)
3. Enter field label
4. Click **Save and continue**
5. Configure field settings
6. Click **Save settings**

---

## Search Settings

Search settings control site search behavior.

### Search Pages

<!-- SCREENSHOT NEEDED: /images/biosafety-land/configuration/search-pages.png -->

**Path:** Configuration → Search and metadata → Search pages

#### View Search Pages

1. Go to Configuration → Search pages
2. See available search pages:
   - Content search
   - User search
   - Help search

#### Enable/Disable Search Types

1. Click **Edit** next to a search page
2. Check or uncheck **Enabled**
3. Click **Save search page**

### Search Settings

<!-- SCREENSHOT NEEDED: /images/biosafety-land/configuration/search-settings.png -->

**Path:** Configuration → Search and metadata → Search settings

#### Configure Indexing

1. Go to Search settings
2. Set **Indexing throttle**:
   - How many items to index per run
   - Default: 100 items
3. Set **Minimum word length**:
   - Shortest word to index
   - Default: 3 characters
4. Click **Save configuration**

#### Run Search Indexing

1. Click **Re-index site**
2. Confirm the action
3. Run cron to start indexing

---

## Performance Settings

Performance settings control site speed.

### Caching

<!-- SCREENSHOT NEEDED: /images/biosafety-land/configuration/performance-cache.png -->

**Path:** Configuration → Development → Performance

#### Enable Page Caching

1. Go to Configuration → Performance
2. Check **Cache pages for anonymous users**
3. Set **Page cache maximum age**:
   - How long to cache pages
   - Recommended: 15 minutes (900 seconds)
4. Click **Save configuration**

#### Clear Cache

1. Go to Configuration → Performance
2. Click **Clear all caches**
3. Wait for confirmation

**When to Clear Cache:**
- After configuration changes
- After module updates
- When content doesn't update

### Aggregation

<!-- SCREENSHOT NEEDED: /images/biosafety-land/configuration/performance-aggregation.png -->

#### Enable CSS/JS Aggregation

1. Go to Configuration → Performance
2. Check **Aggregate CSS files**
3. Check **Aggregate JavaScript files**
4. Click **Save configuration**

**Benefits:**
- Faster page loads
- Fewer server requests
- Better performance

---

## Development Settings

Development settings are for testing and debugging.

### Maintenance Mode

<!-- SCREENSHOT NEEDED: /images/biosafety-land/configuration/dev-maintenance-mode.png -->

**Path:** Configuration → Development → Maintenance mode

#### Enable Maintenance Mode

1. Go to Configuration → Maintenance mode
2. Check **Put site into maintenance mode**
3. Enter a message for visitors
4. Click **Save configuration**

**When to Use:**
- During major updates
- When fixing critical issues
- During server maintenance

Site Managers can still access the site.

### Logging and Errors

<!-- SCREENSHOT NEEDED: /images/biosafety-land/configuration/dev-logging.png -->

**Path:** Configuration → Development → Logging and errors

#### Configure Error Reporting

1. Go to Configuration → Logging and errors
2. Choose **Error messages to display**:
   - **None:** No errors shown (production)
   - **Errors and warnings:** Some details (staging)
   - **All messages:** Full details (development)
3. Click **Save configuration**

**Production Sites:** Use "None"

---

## Security Settings

Security settings protect your site.

### Account Security

<!-- SCREENSHOT NEEDED: /images/biosafety-land/configuration/security-account.png -->

**Path:** Configuration → People → Account settings

#### Set Password Requirements

1. Go to Account settings
2. Find password policy settings
3. Configure:
   - Minimum password length
   - Required character types
   - Password expiration
4. Click **Save configuration**

**Recommended:**
- Minimum 12 characters
- Mix of letters, numbers, symbols
- No expiration (use 2FA instead)

### Flood Control

<!-- SCREENSHOT NEEDED: /images/biosafety-land/configuration/security-flood.png -->

**Path:** Configuration → System → Flood control

#### Configure Login Attempts

1. Go to Configuration → Flood control
2. Set **Failed login attempts**:
   - How many tries before lockout
   - Recommended: 5 attempts
3. Set **Time window**:
   - How long until reset
   - Recommended: 1 hour
4. Click **Save configuration**

**Purpose:** Prevents brute force attacks

---

## Email Settings

Email settings control how your site sends messages.

### SMTP Configuration

<!-- SCREENSHOT NEEDED: /images/biosafety-land/configuration/email-smtp.png -->

**Path:** Configuration → System → SMTP Configuration

> **Note:** May require SMTP module installation

#### Configure SMTP

1. Go to SMTP Configuration
2. Enable SMTP
3. Enter SMTP server details:
   - **Server:** smtp.example.com
   - **Port:** 587 (TLS) or 465 (SSL)
   - **Username:** Your email username
   - **Password:** Your email password
4. Test connection
5. Click **Save configuration**

### Email Templates

<!-- SCREENSHOT NEEDED: /images/biosafety-land/configuration/email-templates.png -->

**Path:** Configuration → People → Account settings → Emails

#### Customize Email Messages

1. Go to Account settings → Emails
2. Find the message type to edit:
   - Welcome email
   - Password reset
   - Account cancellation
3. Edit the message text
4. Use tokens: `[user:name]`, `[site:name]`
5. Click **Save configuration**

---

## Best Practices

### Configuration Safety

1. **Test on staging first**
   - Try changes on test site
   - Verify everything works
   - Then apply to production

2. **Document your changes**
   - Keep notes on what you changed
   - Record date and reason
   - Save old values

3. **Back up before changes**
   - Export configuration before editing
   - Keep database backup
   - Can restore if needed

4. **Change one thing at a time**
   - Make small changes
   - Test each change
   - Easier to find problems

### Regional Settings

1. **Set time zone correctly**
   - Match your location
   - Affects all timestamps
   - Important for reports

2. **Configure languages early**
   - Add all needed languages first
   - Import translations
   - Test language switcher

### Performance

1. **Enable caching**
   - Turn on for production sites
   - Improves speed significantly
   - Clear after major changes

2. **Use aggregation**
   - Combine CSS and JS files
   - Reduces load time
   - Better user experience

3. **Monitor regularly**
   - Check site speed
   - Review error logs
   - Clear cache when needed

### Security

1. **Limit registration**
   - Administrator-only registration recommended
   - Prevents spam accounts
   - Better control

2. **Use strong settings**
   - Enable flood control
   - Require strong passwords
   - Log all security events

3. **Review permissions**
   - Check who has Site Manager role
   - Limit Full HTML access
   - Audit regularly

---

## Common Mistakes

### Mistake 1: Not Testing Changes

**Problem:**
- Change settings on live site
- Something breaks
- Site goes down

**Solution:**
- Always test on staging first
- Have a rollback plan
- Keep backups current

### Mistake 2: Forgetting to Clear Cache

**Problem:**
- Make configuration changes
- Changes don't appear
- Think something is broken

**Solution:**
- Clear cache after config changes
- Go to Configuration → Performance
- Click "Clear all caches"

### Mistake 3: Wrong Time Zone

**Problem:**
- Set incorrect time zone
- All dates are wrong
- Confuses users

**Solution:**
- Verify your time zone
- Check a few timestamps
- Update if wrong

### Mistake 4: Weak Email Configuration

**Problem:**
- Use default PHP mail
- Emails don't send
- Go to spam

**Solution:**
- Configure SMTP properly
- Use reliable email service
- Test email sending

### Mistake 5: Opening Registration

**Problem:**
- Allow public registration
- Get spam accounts
- Security risk

**Solution:**
- Keep "Administrators only" setting
- Create accounts manually
- Better security

### Mistake 6: No Maintenance Mode

**Problem:**
- Update site while users active
- Users see errors
- Bad experience

**Solution:**
- Enable maintenance mode first
- Display clear message
- Do updates safely

---

## Quick Reference

### Common Configuration Paths

| Setting | Path |
|---------|------|
| Site name | Configuration → System → Site Information |
| Time zone | Configuration → Regional → Regional settings |
| Languages | Configuration → Regional → Languages |
| File system | Configuration → Media → File system |
| Text formats | Configuration → Content → Text formats |
| User accounts | Configuration → People → Account settings |
| Search | Configuration → Search → Search pages |
| Performance | Configuration → Development → Performance |
| Maintenance | Configuration → Development → Maintenance mode |
| Logging | Configuration → Development → Logging |

### Essential Settings for New Sites

1. **Site Information**
   - Set site name
   - Set site email
   - Set front page

2. **Regional Settings**
   - Set time zone
   - Add languages
   - Configure date formats

3. **User Settings**
   - Set registration to "Administrators only"
   - Customize welcome email
   - Configure password policy

4. **Performance**
   - Enable page caching
   - Enable CSS/JS aggregation
   - Set cache lifetime

5. **Security**
   - Enable flood control
   - Set password requirements
   - Review text format permissions

### Configuration Checklist

- [ ] Site name and email set
- [ ] Time zone configured
- [ ] Languages added and imported
- [ ] File system paths verified
- [ ] User registration locked down
- [ ] Email templates customized
- [ ] Performance caching enabled
- [ ] Maintenance mode tested
- [ ] Backup system configured
- [ ] Security settings reviewed

---

## Related Documentation

- [People Management](../people-management.md) - Managing users and roles
- [Role Permissions](./role-permissions.md) - Understanding roles
- [Content Management](../content-management.md) - Managing content
- [User Guide](../user-guide.md) - Complete feature guide

---

**Remember:**
- Only Site Managers can change configuration
- Test changes on staging first
- Clear cache after configuration changes
- Keep backups of your configuration
- Document what you change

**Need Help?**
- Check related documentation above
- Review error logs if something breaks
- Contact your system administrator
- Restore from backup if needed
