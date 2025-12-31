# GitHub Pages Configuration - Step by Step

## 🎯 Your Page is Blank Because GitHub Pages is Not Configured

The code is deployed to the `gh-pages` branch, but GitHub doesn't know to serve it yet.

---

## ✅ Fix in 3 Steps

### STEP 1: Open Repository Settings

```
1. Go to: https://github.com/YOUR_USERNAME/paraflow-legal-website
2. Click "Settings" button (top right)
3. You should see a menu on the left side
```

### STEP 2: Find Pages Settings

```
Left sidebar menu:
├── General
├── Collaborators
├── Branches
├── Code and automation
│   ├── Actions
│   ├── Deployments
│   ├── Environments
│   └── Pages ← CLICK HERE
├── Security
└── ...
```

### STEP 3: Configure GitHub Pages

```
Under "Build and deployment" section:

Source:
  ○ GitHub Actions
  ● Deploy from a branch ← SELECT THIS

Branch:
  Dropdown: gh-pages ← SELECT THIS
  Folder: / (root) ← SELECT THIS

Then click: SAVE
```

---

## 📸 Visual Guide

```
GitHub Repository
    ↓
Settings (top right)
    ↓
Pages (left sidebar)
    ↓
Build and deployment
    ├── Source: "Deploy from a branch"
    ├── Branch: "gh-pages"
    ├── Folder: "/root"
    └── SAVE
    ↓
Wait 2-3 minutes
    ↓
Your site is live! 🎉
```

---

## ⏱️ Timeline

| Step | Time | Action |
|------|------|--------|
| 1 | 30 sec | Open Settings |
| 2 | 30 sec | Find Pages |
| 3 | 1 min | Configure |
| 4 | 2-3 min | GitHub processes |
| **Total** | **~5 min** | **Site Live!** |

---

## ✨ After Configuration

You should see:

```
Your site is live at:
https://YOUR_USERNAME.github.io/paraflow-legal-website
```

With a green checkmark ✅

---

## 🔍 Verification

After configuration, check:

1. **URL works**: Visit the GitHub Pages URL
2. **Page loads**: Should see hero section
3. **Navigation works**: Click menu items
4. **Styles applied**: Should see colors and layout
5. **Images load**: Should see background images

---

## 🐛 Troubleshooting

### Issue: Can't find Pages option
**Solution**: 
- Make sure you're in repository settings (not account settings)
- Look under "Code and automation" section

### Issue: gh-pages branch not available
**Solution**:
- Run `npm run deploy` again
- Wait a few seconds
- Refresh the page

### Issue: Still blank after 5 minutes
**Solution**:
- Hard refresh browser (Ctrl+Shift+R)
- Clear browser cache
- Wait another 5 minutes
- Check browser console for errors

### Issue: 404 error
**Solution**:
- Verify base path in vite.config.js is `/paraflow-legal-website/`
- Verify 404.html exists in public folder
- Hard refresh browser

---

## 📋 Configuration Checklist

- [ ] Opened repository Settings
- [ ] Found Pages section
- [ ] Selected "Deploy from a branch"
- [ ] Selected `gh-pages` branch
- [ ] Selected `/root` folder
- [ ] Clicked Save
- [ ] Waited 2-3 minutes
- [ ] Visited GitHub Pages URL
- [ ] Page loaded successfully

---

## 🎉 Success!

Once configured, your Paraflow Legal Website will be live at:

```
https://YOUR_USERNAME.github.io/paraflow-legal-website
```

---

## 📞 Need More Help?

### Check These Files
- `FIX_BLANK_PAGE.md` - Quick fix guide
- `DEPLOY_INSTRUCTIONS.md` - Deployment guide
- `GITHUB_PAGES_DEPLOYMENT.md` - Detailed guide

### External Resources
- [GitHub Pages Docs](https://pages.github.com/)
- [GitHub Pages Settings](https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site)

---

**That's it! Your site will be live in minutes!** 🚀

Do this now and your website will be live! ⚡
