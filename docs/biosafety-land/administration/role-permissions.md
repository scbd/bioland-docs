# Role Permissions in Biosafety Land

This document shows the different permission levels for the three main user roles in Biosafety Land (BSL).

## Role Hierarchy

Biosafety Land has three main roles with decreasing levels of access:

1. **Site Manager** - Full administrative access
2. **Content Manager** - Content-focused access
3. **Contributor** - Basic content access

## Admin Menu Access by Role

Each role can see different sections in the admin menu. Here's what each role can access:

### Site Manager (6 sections - Full Access)

<!-- SCREENSHOT NEEDED: /images/biosafety-land/menus/site-manager-admin-menu.png -->

The Site Manager role has access to all administrative functions:

- **Tools** - Site utilities and maintenance tools
- **Publishing** - Content management and publishing workflows
- **Structure** - Site structure, menus, and taxonomy
- **Configuration** - System settings and configurations
- **People** - User management and permissions
- **Reports** - Site reports and analytics

### Content Manager (3 sections - Content-Focused)

<!-- SCREENSHOT NEEDED: /images/biosafety-land/menus/content-manager-admin-menu.png -->

The Content Manager role has limited access to content-related functions:

- **Tools** - Site utilities and maintenance tools
- **Publishing** - Content management and publishing workflows
- **Structure** - Site structure, menus, and taxonomy

**Cannot access:**
- Configuration (system settings)
- People (user management)
- Reports (site analytics)

### Contributor (2 sections - Basic Access)

<!-- SCREENSHOT NEEDED: /images/biosafety-land/menus/contributor-admin-menu.png -->

The Contributor role has the most restricted access:

- **Tools** - Limited site utilities
- **Publishing** - Basic content creation and editing

**Cannot access:**
- Structure (site structure and menus)
- Configuration (system settings)
- People (user management)
- Reports (site analytics)

## Permission Summary

| Feature | Site Manager | Content Manager | Contributor |
|---------|:------------:|:---------------:|:-----------:|
| Tools | ✅ | ✅ | ✅ |
| Publishing | ✅ | ✅ | ✅ |
| Structure | ✅ | ✅ | ❌ |
| Configuration | ✅ | ❌ | ❌ |
| People | ✅ | ❌ | ❌ |
| Reports | ✅ | ❌ | ❌ |

## Understanding the Roles

### When to Use Site Manager
- Full system administration
- User management
- Configuration changes
- Site structure modifications

### When to Use Content Manager
- Day-to-day content management
- Menu structure organization

## Detailed Workflow Guides

For detailed step-by-step workflows for specific functions, see:

- **[Content Management](../content-management.md)** - Complete content workflows (Add, Edit, Delete, Clone, Translate)
- **[Media Management](../media-management.md)** - Complete media workflows (Add, Edit, Delete, Clone, Translate)
- **[File Management](../file-management.md)** - Complete file workflows (Add, Edit, Delete)
- **[Menu Management](../menu-management.md)** - Complete menu workflows (Add, Edit, Delete)
- **[People Management](../people-management.md)** - Complete people management workflows (Add, Edit, Delete, Block, Roles) - Site Managers only
- **[Configuration Management](../configuration-management.md)** - System settings and configuration - Site Managers only
- **[Reports Management](../reports-management.md)** - Site reports, analytics, and monitoring - Site Managers only
- Publishing workflows
- Menu and taxonomy management
- No need for system configuration

### When to Use Contributor
- Basic content creation
- Limited editing capabilities
- No structural changes
- No administrative access

## Next Steps

For detailed guides on each role's capabilities, see:
- [Content Management Guide](../content-management.md) - How to add, edit, and manage content
- [Media Management Guide](../media-management.md) - Complete guide to managing media and files
- [File Management Guide](../file-management.md) - Complete guide to managing files
- [User Guide](../user-guide.md) - Complete documentation for all features
