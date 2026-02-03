# Hostinger Deployment Guide for Canva Solutions

## Overview
This guide ensures your React build deploys correctly to Hostinger's public_html folder.

## Prerequisites
1. Build your project locally: `npm run build`
2. You should have a `dist` folder with all compiled files

## Step-by-Step Deployment

### 1. Clear Hostinger Cache
- Log in to Hostinger hPanel
- Search for "Cache" or "Flush Cache"
- Click the button to clear all cached content

### 2. Upload Files to Hostinger
**IMPORTANT:** Upload the **contents** of the `dist` folder, NOT the dist folder itself.

Using File Manager or FTP (e.g., FileZilla):
```
your-domain.com/public_html/
├── index.html          ← from dist/
├── .htaccess           ← included in this repo (critical!)
├── assets/             ← from dist/assets/
│   ├── index-xxxxx.js
│   ├── index-xxxxx.css
│   └── [all images]
├── favicon.ico         ← if present in dist/
└── [other files from dist/]
```

**DO NOT upload:**
- The `dist` folder itself
- `src/` folder
- `node_modules/` folder
- `package.json` or `package-lock.json`

### 3. Ensure .htaccess is Present
The `.htaccess` file in the root of `public_html` is **critical** for:
- Routing React paths correctly
- Handling page refreshes
- Setting proper cache headers
- Enabling gzip compression

### 4. Verify index.html
Check that `public_html/index.html` contains correct script/link tags:
```html
<script type="module" src="/assets/index-xxxxx.js"></script>
<link rel="stylesheet" crossorigin href="/assets/index-xxxxx.css">
```
(The xxxxx hash will vary - that's normal)

### 5. Test Your Site
1. Visit your live domain
2. Open Developer Tools (F12 → Console)
3. Check for any 404 errors
4. Test navigation:
   - Click buttons and links
   - Refresh the page (should not show 404)
   - Check browser console for errors

## Troubleshooting

### Issue: 404 Errors in Console
**Solution:** Ensure all files from `dist/` are uploaded to `public_html/`

### Issue: Styling Missing (Site Looks Broken)
**Solution:** 
- Check that `assets/` folder exists in `public_html/`
- Verify CSS file is present: `public_html/assets/index-xxxxx.css`
- Clear browser cache (Ctrl+Shift+Delete) and refresh

### Issue: Page Refresh Shows 404
**Solution:** Ensure `.htaccess` file is uploaded to `public_html/` root

### Issue: Images Not Loading
**Solution:**
- All imports in components use relative paths (./assets/...)
- The build process should convert these automatically
- Verify images are in `public_html/assets/`

## Build Process Reminder
Always run before deploying:
```bash
npm run build
```

This creates a fresh `dist` folder with optimized, production-ready files.

## Version Control
After uploading to Hostinger:
```bash
git add .htaccess
git commit -m "Add .htaccess for Hostinger deployment (routing & caching)"
git push origin main
```

## Support
If issues persist:
1. Check Hostinger's error logs
2. Verify .htaccess syntax is correct
3. Ensure mod_rewrite is enabled (usually is by default)
4. Contact Hostinger support if needed
