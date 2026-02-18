---
outline: false
---

# Reports

This guide shows how to generate and manage reports in Biosafety Land (BSL).

> **Important:** Only **Site Managers** can access Reports.
> Content Managers and Contributors cannot view or generate reports.

For related guides, see:
- [People Management](../people-management.md) - Managing users and roles
- [Configuration Management](../configuration-management.md) - System settings
- [User Guide](../user-guide.md) - Complete documentation

## Table of Contents

1. [Overview](#overview)
2. [Accessing Reports](#accessing-reports)
3. [Content Reports](#content-reports)
4. [User Activity Reports](#user-activity-reports)
5. [Site Status Reports](#site-status-reports)
6. [Recent Log Messages](#recent-log-messages)
7. [Top Access Denied Errors](#top-access-denied-errors)
8. [Available Updates](#available-updates)
9. [Exporting Reports](#exporting-reports)
10. [Scheduling Reports](#scheduling-reports)
11. [Best Practices](#best-practices)
12. [Common Mistakes](#common-mistakes)
13. [Quick Reference](#quick-reference)

---

## Overview

Reports help Site Managers monitor and analyze their Biosafety Land site.

Site Managers can view:
- Content statistics and performance
- User activity and engagement
- Site health and errors
- Security issues and denied access
- Available software updates
- System logs and messages

**Who Can Access:** Site Managers only

**Navigation:** Admin menu → Reports

---

## Accessing Reports

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

### Step 3: Navigate to Reports

<!-- SCREENSHOT NEEDED: /images/biosafety-land/reports/reports-section-menu.png -->

1. Find **Reports** in the admin menu
2. Click **Reports**
3. The Reports overview page opens

---

## Content Reports

Content reports show information about your site's content.

### Recent Content

<!-- SCREENSHOT NEEDED: /images/biosafety-land/reports/content-recent.png -->

**Path:** Reports → Recent content

Shows the most recently added or updated content.

#### Viewing Recent Content

1. Go to Reports → Recent content
2. See a list showing:
   - Content title
   - Content type
   - Author
   - Date updated
   - Published status

#### Using This Report

**Good for:**
- Monitoring new content
- Checking recent changes
- Seeing who added what
- Quality control

**Look for:**
- Unexpected content changes
- Content from new users
- Unpublished drafts
- Recent updates

### Content by Author

<!-- SCREENSHOT NEEDED: /images/biosafety-land/reports/content-by-author.png -->

**Path:** Reports → Authors → Content authored

Shows how much content each user created.

#### Viewing Author Statistics

1. Go to Reports → Content authored
2. See a list showing:
   - Author name
   - Number of published content
   - Number of unpublished content
   - Total content created

#### Using This Report

**Good for:**
- Identifying active contributors
- Balancing workload
- Recognizing contributions
- Finding inactive users

**Questions to ask:**
- Are some users overloaded?
- Are Contributors creating content?
- Is content being published?
- Do we need more active users?

---

## User Activity Reports

User activity reports show how people use your site.

### Who's Online

<!-- SCREENSHOT NEEDED: /images/biosafety-land/reports/users-online.png -->

**Path:** Reports → Who's online

Shows which users are currently active.

#### Viewing Online Users

1. Go to Reports → Who's online
2. See a list showing:
   - Username
   - Last access time
   - How long they've been active

#### Using This Report

**Good for:**
- Seeing current activity
- Knowing who's working
- Planning maintenance
- Coordinating work

**Best time to check:**
- Before maintenance mode
- During site updates
- When troubleshooting
- For coordination

### Top Pages

<!-- SCREENSHOT NEEDED: /images/biosafety-land/reports/pages-top-accessed.png -->

**Path:** Reports → Top pages

Shows the most viewed pages on your site.

#### Viewing Page Statistics

1. Go to Reports → Top pages
2. See a list showing:
   - Page URL
   - Number of views
   - Percentage of total views

#### Using This Report

**Good for:**
- Understanding what's popular
- Finding important content
- Improving navigation
- Content planning

**Look for:**
- Unexpected popular pages
- Underused important pages
- Broken page links
- Trending topics

### Recent Page Views

<!-- SCREENSHOT NEEDED: /images/biosafety-land/reports/pages-recent-views.png -->

**Path:** Reports → Recent hits

Shows recently viewed pages with details.

#### Viewing Recent Activity

1. Go to Reports → Recent hits
2. See a list showing:
   - Page URL
   - Timestamp
   - User (if logged in)
   - IP address

#### Using This Report

**Good for:**
- Monitoring site traffic
- Tracking user behavior
- Security monitoring
- Debugging issues

---

## Site Status Reports

Site status reports show system health and performance.

### Status Report

<!-- SCREENSHOT NEEDED: /images/biosafety-land/reports/status-overview.png -->

**Path:** Reports → Status report

Shows overall system health and configuration.

#### Viewing Status Report

1. Go to Reports → Status report
2. See sections for:
   - **Drupal core:** Software version
   - **Database:** System status
   - **File system:** Path configuration
   - **Security:** Update status
   - **Performance:** Caching status
   - **Configuration:** Settings review

#### Understanding Status Indicators

**🟢 Green (OK):** Everything working correctly

**🟡 Yellow (Warning):** Attention recommended
- May need configuration
- Non-critical issues
- Review settings

**🔴 Red (Error):** Immediate attention needed
- Security updates available
- Critical configuration problems
- System errors

#### Common Status Items

| Item | What It Means |
|------|--------------|
| Drupal | Current software version |
| PHP | Server software version |
| Database | Database system status |
| File system | Where files are stored |
| Cron maintenance | Automated tasks status |
| Update status | Available software updates |

### Cron Status

<!-- SCREENSHOT NEEDED: /images/biosafety-land/reports/status-cron.png -->

Shows when automated maintenance tasks last ran.

#### Viewing Cron Status

1. Go to Reports → Status report
2. Find **Cron maintenance tasks**
3. See last run time

**Cron should run:**
- At least every 3 hours
- Preferably hourly
- Automatically via system

**If cron hasn't run:**
- Search indexing stops
- Cache not cleared
- Updates not checked

---

## Recent Log Messages

<!-- SCREENSHOT NEEDED: /images/biosafety-land/reports/logs-recent-messages.png -->

**Path:** Reports → Recent log messages

Shows system events, errors, and warnings.

### Viewing Log Messages

1. Go to Reports → Recent log messages
2. See messages with:
   - **Type:** Emergency, Alert, Critical, Error, Warning, Notice, Info, Debug
   - **Date:** When it happened
   - **Message:** What happened
   - **User:** Who triggered it (if applicable)
   - **Operations:** View details

### Understanding Log Types

#### 🔴 Critical Levels (Need Immediate Action)

**Emergency:** System unusable
- Site completely down
- Critical failure
- **Action:** Fix immediately

**Alert:** Action required immediately
- Database connection lost
- File system full
- **Action:** Investigate now

**Critical:** Critical conditions
- Application component unavailable
- Unexpected exception
- **Action:** Address quickly

**Error:** Error conditions
- Runtime errors
- SQL errors
- **Action:** Review and fix

#### 🟡 Warning Levels (Review Soon)

**Warning:** Warning conditions
- Deprecated functions
- Poor practices
- **Action:** Review when possible

**Notice:** Normal but significant
- Configuration changes
- User actions logged
- **Action:** For information

#### 🟢 Info Levels (Normal Operations)

**Info:** Informational messages
- Normal operations
- Successful actions
- **Action:** Optional review

**Debug:** Debug-level messages
- Detailed technical info
- Only with debug enabled
- **Action:** For troubleshooting

### Filtering Log Messages

1. Go to Recent log messages
2. Use filters at top:
   - **Type:** Filter by severity
   - **Date:** Filter by time range
3. Click **Filter**

### Common Log Messages

**Page not found (404):**
- Users trying to access deleted pages
- Broken links
- **Action:** Check links, create redirects

**Access denied (403):**
- Users without permission
- Possible security issues
- **Action:** Review in Access Denied report

**PHP warnings:**
- Code issues
- Deprecated functions
- **Action:** Update modules or code

**Database errors:**
- Connection issues
- Query problems
- **Action:** Check database health

---

## Top Access Denied Errors

<!-- SCREENSHOT NEEDED: /images/biosafety-land/reports/errors-access-denied.png -->

**Path:** Reports → Top 'access denied' errors

Shows pages users tried to access without permission.

### Viewing Access Denied Errors

1. Go to Reports → Access denied errors
2. See a list showing:
   - Page URL users tried to access
   - Number of attempts
   - Last attempt time

### Using This Report

**Good for:**
- Finding permission problems
- Detecting security issues
- Improving navigation
- Fixing broken links

**Common causes:**
1. **Broken internal links**
   - Links to admin pages
   - Links requiring permissions
   - **Fix:** Update or remove links

2. **Users lost password**
   - Trying to access their content
   - Can't log in
   - **Fix:** Help users reset password

3. **Permission misconfiguration**
   - Users should have access
   - Role permissions wrong
   - **Fix:** Review role permissions

4. **Security probing**
   - Repeated attempts on admin URLs
   - Suspicious patterns
   - **Fix:** Monitor and block if needed

### Investigating Access Denied

1. Click on a denied URL to see details
2. Check who's being denied:
   - Anonymous users (not logged in)
   - Authenticated users (specific roles)
3. Decide action:
   - Grant permission if legitimate
   - Fix links if broken
   - Ignore if security-related

---

## Available Updates

<!-- SCREENSHOT NEEDED: /images/biosafety-land/reports/updates-available.png -->

**Path:** Reports → Available updates

Shows software updates for your site.

### Viewing Updates

1. Go to Reports → Available updates
2. See sections for:
   - **Drupal core:** Main system updates
   - **Modules:** Add-on updates
   - **Themes:** Design updates

### Understanding Update Status

**🟢 Up to date:** Current version, no action needed

**🟡 Update available:** New version available
- Security fixes
- Bug fixes
- New features
- **Recommended:** Update when convenient

**🔴 Security update:** Critical security fix
- Known vulnerabilities
- Potential security risk
- **Required:** Update immediately

### Checking for Updates

1. Go to Reports → Available updates
2. Click **Check manually**
3. Wait for update check to complete
4. Review available updates

**Auto-check settings:**
- System checks daily
- Email notifications sent
- Configure in Configuration → Reports

### Important Security Notes

**Security updates are critical:**
- Fix known vulnerabilities
- Protect against attacks
- Required for site security

**Always:**
- Update security releases immediately
- Test on staging first
- Back up before updating
- Read release notes

**Never:**
- Ignore security updates
- Update production without testing
- Skip backups before updating

---

## Exporting Reports

Most reports can be exported for analysis.

### Export Options

**CSV (Comma-Separated Values):**
- Open in Excel or spreadsheet apps
- Good for data analysis
- Easy to share

**PDF (Portable Document Format):**
- Professional appearance
- Easy to print
- Good for presentations

### Exporting a Report

<!-- SCREENSHOT NEEDED: /images/biosafety-land/reports/export-options.png -->

1. Open the report you want
2. Look for **Export** button or link
3. Choose format (CSV or PDF)
4. Click **Export**
5. Save the file

### Tips for Exporting

**Before exporting:**
- Apply any filters
- Set date ranges
- Select what to include

**File naming:**
- Use descriptive names
- Include date in filename
- Example: `content-report-2025-12-17.csv`

**Storage:**
- Keep reports organized
- Create folders by type
- Archive old reports

---

## Scheduling Reports

Automatically generate and email reports on a schedule.

> **Note:** May require additional module installation

### Creating a Scheduled Report

<!-- SCREENSHOT NEEDED: /images/biosafety-land/reports/schedule-create.png -->

#### Step 1: Access Scheduled Reports

1. Go to Reports → Scheduled reports
2. Click **Add schedule**

#### Step 2: Choose Report Type

1. Select the report to schedule:
   - Content statistics
   - User activity
   - Error logs
   - Access denied errors
2. Click **Next**

#### Step 3: Set Frequency

1. Choose how often to run:
   - **Daily:** Every day at specific time
   - **Weekly:** Specific day each week
   - **Monthly:** Specific date each month
2. Set the time to run
3. Click **Next**

#### Step 4: Configure Recipients

1. Add email addresses
2. Multiple recipients separated by commas
3. Include message (optional)
4. Click **Next**

#### Step 5: Choose Format

1. Select export format:
   - CSV for spreadsheets
   - PDF for presentations
2. Preview if available
3. Click **Save schedule**

### Managing Scheduled Reports

#### View Schedules

1. Go to Reports → Scheduled reports
2. See all active schedules
3. Check last run time

#### Edit a Schedule

1. Find the schedule in list
2. Click **Edit**
3. Update settings
4. Click **Save**

#### Disable a Schedule

1. Find the schedule in list
2. Click **Disable**
3. Confirm

**Note:** Disabled schedules can be re-enabled later

#### Delete a Schedule

1. Find the schedule in list
2. Click **Delete**
3. Confirm deletion

**Warning:** Cannot undo deletion

---

## Best Practices

### Regular Monitoring

1. **Check reports weekly**
   - Review recent content
   - Check error logs
   - Monitor user activity
   - Look for issues

2. **Set up key schedules**
   - Weekly error summary
   - Monthly content report
   - Daily critical errors
   - Weekly user activity

3. **Act on warnings**
   - Address yellow flags quickly
   - Fix red errors immediately
   - Don't ignore patterns
   - Investigate anomalies

### Report Review Routine

**Daily (5 minutes):**
- Check Recent log messages for errors
- Review Available updates for security
- Quick glance at Who's online

**Weekly (15 minutes):**
- Review Recent content
- Check Access denied errors
- Review User activity
- Check Status report

**Monthly (30 minutes):**
- Full Status report review
- Content by Author analysis
- Top Pages review
- Update planning

### Security Monitoring

1. **Watch for patterns**
   - Repeated access denied from same IP
   - Multiple failed login attempts
   - Unusual activity times
   - Suspicious URLs attempted

2. **Review regularly**
   - Access denied errors daily
   - Log messages for security events
   - Update status for patches
   - User activity for anomalies

3. **Act quickly**
   - Block suspicious IPs
   - Disable compromised accounts
   - Apply security updates
   - Report incidents

### Performance Monitoring

1. **Track trends**
   - Page view patterns
   - Popular content
   - Peak usage times
   - Slow responses in logs

2. **Optimize based on data**
   - Cache popular pages
   - Improve slow pages
   - Adjust capacity
   - Update content

### Update Management

1. **Prioritize security**
   - Apply security updates immediately
   - Test on staging first
   - Schedule maintenance window
   - Notify users

2. **Plan regular updates**
   - Weekly update checks
   - Monthly update window
   - Quarterly major updates
   - Annual platform review

3. **Document updates**
   - Record what was updated
   - Note any issues
   - Document configuration changes
   - Keep update log

---

## Common Mistakes

### Mistake 1: Ignoring Security Updates

**Problem:**
- Skip security update notifications
- "Will update later"
- Site becomes vulnerable
- Security breach occurs

**Solution:**
- Check updates daily
- Apply security patches immediately
- Set up email alerts
- Never delay security updates

### Mistake 2: Not Reviewing Error Logs

**Problem:**
- Errors accumulate
- Small issues become big problems
- Users experience problems
- Data loss or corruption

**Solution:**
- Check logs daily
- Set up error alerts
- Review patterns weekly
- Fix errors promptly

### Mistake 3: Ignoring Access Denied Reports

**Problem:**
- Users can't access needed content
- Broken links not fixed
- Poor user experience
- Security issues missed

**Solution:**
- Review access denied weekly
- Fix broken links promptly
- Adjust permissions as needed
- Remove bad links

### Mistake 4: No Scheduled Reports

**Problem:**
- Forget to check reports
- Issues not noticed
- No historical data
- Reactive instead of proactive

**Solution:**
- Set up weekly error reports
- Schedule monthly summaries
- Create alert reports
- Keep report history

### Mistake 5: Not Acting on Yellow Warnings

**Problem:**
- Think warnings aren't important
- Only fix red errors
- Warnings become errors
- Preventable problems

**Solution:**
- Review warnings regularly
- Address before they're critical
- Schedule warning fixes
- Prevent escalation

### Mistake 6: Updating Without Testing

**Problem:**
- Apply updates to production directly
- Updates cause problems
- Site breaks
- No easy rollback

**Solution:**
- Always test on staging
- Back up before updating
- Read update notes
- Have rollback plan

---

## Quick Reference

### Common Report Paths

| Report | Path |
|--------|------|
| Recent content | Reports → Recent content |
| Content authored | Reports → Authors → Content authored |
| Who's online | Reports → Who's online |
| Top pages | Reports → Top pages |
| Recent hits | Reports → Recent hits |
| Status report | Reports → Status report |
| Recent log messages | Reports → Recent log messages |
| Access denied | Reports → Top 'access denied' errors |
| Available updates | Reports → Available updates |

### Report Review Schedule

| Frequency | Reports to Check | Time Needed |
|-----------|-----------------|-------------|
| **Daily** | Error logs, Security updates, Online users | 5 minutes |
| **Weekly** | Recent content, Access denied, User activity, Status | 15 minutes |
| **Monthly** | Content by author, Top pages, Full status review | 30 minutes |

### When to Check Each Report

| Report | Check When |
|--------|-----------|
| Recent content | After others add content |
| Content authored | Monthly review time |
| Who's online | Before maintenance |
| Top pages | Monthly analytics review |
| Recent hits | When debugging issues |
| Status report | Weekly health check |
| Log messages | Daily and after issues |
| Access denied | Weekly security review |
| Available updates | Daily or when alerted |

### Priority Actions

**🔴 Red (Immediate):**
- Security updates
- Critical errors
- System down messages
- Database connection lost

**🟡 Yellow (This Week):**
- Warning messages
- Non-security updates
- Permission issues
- Broken links

**🟢 Green (Scheduled):**
- Content reviews
- Performance analysis
- Usage statistics
- Long-term planning

---

## Related Documentation

- [People Management](../people-management.md) - Managing users and roles
- [Configuration Management](../configuration-management.md) - System settings
- [Role Permissions](./role-permissions.md) - Understanding roles
- [User Guide](../user-guide.md) - Complete feature guide

---

**Remember:**
- Only Site Managers can access reports
- Check error logs daily
- Apply security updates immediately
- Review reports regularly
- Act on warnings and errors

**Security First:**
- Monitor access denied reports
- Watch for suspicious patterns
- Keep software updated
- Review logs for security events

**Stay Proactive:**
- Schedule regular report reviews
- Set up automated reports
- Fix issues before they escalate
- Keep your site healthy
