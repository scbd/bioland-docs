# Access Levels

This guide explains the different access levels and user roles in the Biosafety Land system.

## Overview

Biosafety Land uses a role-based access control system to manage what users can see and do within the platform. Each user is assigned one or more roles that determine their permissions.

## User Roles

### Anonymous (Public) User

Users who are not logged in can:

- View published public content
- Search public records
- Access public documents and resources

### Authenticated User

Basic logged-in users can:

- View all published content
- Access their user profile
- Update personal settings

### Contributor

Contributors can:

- Create new content drafts
- Edit their own content
- Submit content for review
- Upload media and files

::: info
Contributors cannot publish content directly. All content must be reviewed by a Content Manager or Site Manager.
:::

### Content Manager

Content Managers can:

- All Contributor permissions
- Review and publish content
- Edit content from other users
- Manage media library
- Moderate content submissions

### Site Manager

Site Managers have elevated permissions including:

- All Content Manager permissions
- Manage site configuration
- Create and manage menus
- Access site reports and analytics
- Manage content types and taxonomies

### Administrator

Administrators have full system access:

- All Site Manager permissions
- Manage users and roles
- Configure system settings
- Access all administrative functions
- Manage security settings

## Permission Matrix

| Action | Anonymous | Authenticated | Contributor | Content Manager | Site Manager |
|--------|:---------:|:-------------:|:-----------:|:---------------:|:------------:|
| View public content | ✓ | ✓ | ✓ | ✓ | ✓ |
| View restricted content | | ✓ | ✓ | ✓ | ✓ |
| Create content | | | ✓ | ✓ | ✓ |
| Edit own content | | | ✓ | ✓ | ✓ |
| Edit any content | | | | ✓ | ✓ |
| Publish content | | | | ✓ | ✓ |
| Manage media | | | | ✓ | ✓ |
| Manage menus | | | | | ✓ |
| View reports | | | | | ✓ |
| Manage users | | | | | |
| System configuration | | | | | |

## Requesting Access Changes

If you need additional permissions:

1. Contact your Site Manager or Administrator
2. Explain the additional access you need
3. Provide justification for the request
4. Your request will be reviewed and processed

## Role Assignment

Roles are assigned by Administrators through the [People management](/biosafety-land/administration/people) interface. Users can have multiple roles if needed.

## Security Considerations

- Users should only have the minimum permissions necessary
- Role changes should be documented
- Regular access reviews should be conducted
- Report any unauthorized access immediately

## Related Topics

- [Login](/biosafety-land/authentication/login)
- [People Management](/biosafety-land/administration/people)
- [Role Permissions](/biosafety-land/administration/role-permissions)
- [Content Publishing](/biosafety-land/publishing/content/)
