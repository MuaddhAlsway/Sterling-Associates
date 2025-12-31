# GitHub Pages Deployment Guide

## Prerequisites

Before deploying, ensure you have:
1. ✅ GitHub account
2. ✅ Git installed locally
3. ✅ Repository created on GitHub
4. ✅ Node.js and npm installed

## Deployment Steps

### Step 1: Update package.json Homepage

Update the `homepage` field in `package.json` with your GitHub username:

```json
"homepage": "https://YOUR_USERNAME.github.io/paraflow-legal-website"
```

Replace `YOUR_USERNAME` with your actual GitHub username.

### Step 2: Initialize Git Repository (if not already done)

```bash
git init
git add .
git commit -m "Initial commit: Paraflow Legal Website"
```

### Step 3: Add Remote Repository

```bash
git remote add origin https://github.com/YOUR_USERNAME/paraflow-legal-website.git
git branch -M main
git push -u origin main
```

### Step 4: Deploy to GitHub Pages

```bash
npm run deploy
```

This command will:
1. Build the project (`npm run build`)
2. Deploy the `dist` folder to GitHub Pages using `gh-pages`

### Step 5: Configure GitHub Pages Settings

1. Go to your repository on GitHub
2. Navigate to **Settings** → **Pages**
3. Under "Build and deployment":
   - Source: Select "Deploy from a branch"
   - Branch: Select `gh-pages` and `/root` folder
4. Click **Save**

### Step 6: Access Your Website

Your website will be available at:
```
https://YOUR_USERNAME.github.io/paraflow-legal-website
```

---

## Important Notes

### API Configuration

Since the backend is not deployed to GitHub Pages, you need to:

1. **Option A: Use a deployed backend**
   - Deploy your Express.js backend to Heroku, Railway, or similar
   - Update `VITE_API_URL` in your environment

2. **Option B: Use fallback data**
   - The app has fallback translations and data
   - Some features (admin, forms) won't work without backend
   - This is suitable for a demo/portfolio site

### Environment Variables

Create a `.env` file in the root directory:

```env
VITE_API_URL=https://your-backend-url.com/api
```

Or leave it empty to use fallback data.

### Base Path

The `vite.config.js` is already configured with:
```javascript
base: '/paraflow-legal-website/'
```

This ensures all assets load correctly from the GitHub Pages subdirectory.

---

## Troubleshooting

### Issue: 404 errors on page refresh

**Solution**: GitHub Pages doesn't support client-side routing by default. You need to:

1. Create a `public/404.html` file with the same content as `index.html`
2. This redirects 404s back to the app for client-side routing

### Issue: Assets not loading

**Solution**: Ensure the `base` path in `vite.config.js` matches your repository name:
```javascript
base: '/paraflow-legal-website/'
```

### Issue: Styles not applying

**Solution**: Clear browser cache and hard refresh (Ctrl+Shift+R or Cmd+Shift+R)

### Issue: gh-pages command not found

**Solution**: Install gh-pages globally:
```bash
npm install -g gh-pages
```

---

## Updating Your Site

To update your site after making changes:

```bash
git add .
git commit -m "Update: description of changes"
git push origin main
npm run deploy
```

---

## Monitoring Deployment

1. Go to your repository on GitHub
2. Click on **Actions** tab
3. You'll see the deployment workflow
4. Wait for it to complete (usually 1-2 minutes)
5. Your site will be live at the GitHub Pages URL

---

## Rollback

If you need to rollback to a previous version:

```bash
git log --oneline
git revert <commit-hash>
git push origin main
npm run deploy
```

---

## Performance Tips

1. **Optimize images** - Use smaller image sizes
2. **Enable caching** - GitHub Pages caches assets
3. **Minify code** - Vite does this automatically in build
4. **Use CDN** - Consider using a CDN for assets

---

## Security Notes

- ✅ GitHub Pages uses HTTPS by default
- ✅ No sensitive data should be in the code
- ✅ API keys should be in backend environment variables
- ✅ Never commit `.env` files with secrets

---

## Next Steps

1. Update `package.json` with your GitHub username
2. Initialize Git repository
3. Push to GitHub
4. Run `npm run deploy`
5. Configure GitHub Pages settings
6. Access your live website

---

## Support

For more information:
- [GitHub Pages Documentation](https://pages.github.com/)
- [Vite Deployment Guide](https://vitejs.dev/guide/static-deploy.html#github-pages)
- [gh-pages npm package](https://www.npmjs.com/package/gh-pages)

---

**Deployment Status: Ready to Deploy**

**Last Updated: January 1, 2026**
