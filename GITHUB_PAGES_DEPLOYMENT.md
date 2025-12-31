# GitHub Pages Deployment Guide

## 🚀 Deploy Paraflow Legal Website to GitHub Pages

This guide explains how to deploy the frontend to GitHub Pages.

---

## Prerequisites

- GitHub account
- Git installed locally
- Node.js (v18+) installed
- npm installed

---

## Step 1: Create GitHub Repository

1. Go to [GitHub](https://github.com)
2. Click "New repository"
3. Name it: `paraflow-legal-website`
4. Make it **Public** (required for GitHub Pages)
5. Click "Create repository"

---

## Step 2: Initialize Git Locally

```bash
# Navigate to project directory
cd paraflow-legal-website

# Initialize git
git init

# Add remote repository
git remote add origin https://github.com/YOUR_USERNAME/paraflow-legal-website.git

# Rename branch to main (if needed)
git branch -M main

# Add all files
git add .

# Create initial commit
git commit -m "Initial commit: Paraflow Legal Website"

# Push to GitHub
git push -u origin main
```

---

## Step 3: Update Configuration

### Update package.json
Replace `yourusername` with your actual GitHub username:

```json
"homepage": "https://yourusername.github.io/paraflow-legal-website"
```

### Verify vite.config.js
Should have:
```javascript
base: '/paraflow-legal-website/',
```

---

## Step 4: Deploy Options

### Option A: Automatic Deployment (Recommended)

The GitHub Actions workflow will automatically deploy on every push to main.

1. Workflow file is already created at `.github/workflows/deploy.yml`
2. Push code to main branch
3. GitHub Actions will automatically build and deploy
4. Check "Actions" tab in your repository to see deployment status

### Option B: Manual Deployment

```bash
# Install gh-pages if not already installed
npm install --save-dev gh-pages

# Build and deploy
npm run deploy
```

---

## Step 5: Enable GitHub Pages

1. Go to your repository on GitHub
2. Click "Settings"
3. Scroll to "Pages" section
4. Under "Source", select "Deploy from a branch"
5. Select branch: `gh-pages`
6. Select folder: `/ (root)`
7. Click "Save"

---

## Step 6: Verify Deployment

1. Wait 1-2 minutes for deployment to complete
2. Visit: `https://yourusername.github.io/paraflow-legal-website`
3. Your website should be live!

---

## 📋 Deployment Checklist

- ✅ GitHub repository created
- ✅ Repository is public
- ✅ Git initialized locally
- ✅ Remote added
- ✅ Initial commit pushed
- ✅ package.json updated with homepage
- ✅ vite.config.js has base path
- ✅ GitHub Pages enabled
- ✅ Deployment completed
- ✅ Website accessible

---

## 🔄 Updating Your Website

After deployment, to update your website:

```bash
# Make changes to your code
# ...

# Commit changes
git add .
git commit -m "Update: Description of changes"

# Push to GitHub
git push origin main

# GitHub Actions will automatically deploy
# Or manually deploy with: npm run deploy
```

---

## 🌐 Custom Domain (Optional)

To use a custom domain like `paraflow-legal.com`:

1. Update `.github/workflows/deploy.yml`:
   ```yaml
   cname: paraflow-legal.com
   ```

2. Update `package.json`:
   ```json
   "homepage": "https://paraflow-legal.com"
   ```

3. Update `vite.config.js`:
   ```javascript
   base: '/',
   ```

4. Configure DNS records with your domain provider:
   - Add CNAME record pointing to `yourusername.github.io`
   - Or add A records pointing to GitHub Pages IP addresses

5. In GitHub repository Settings > Pages:
   - Add custom domain
   - Enable "Enforce HTTPS"

---

## 🐛 Troubleshooting

### Website shows 404
- Check that repository is public
- Verify GitHub Pages is enabled
- Check branch is set to `gh-pages`
- Wait a few minutes for deployment

### Styles not loading
- Verify `base` path in vite.config.js
- Check that CSS files are in dist folder
- Clear browser cache

### Images not showing
- Verify image paths are relative
- Check images are in public folder
- Rebuild with `npm run build`

### Deployment fails
- Check GitHub Actions logs
- Verify Node.js version is 18+
- Check for build errors: `npm run build`
- Ensure all dependencies are installed

---

## 📊 Deployment Status

Check deployment status:

1. Go to your repository
2. Click "Actions" tab
3. View workflow runs
4. Click on latest run to see details
5. Check for any errors

---

## 🔐 Environment Variables

For production deployment, if you need environment variables:

1. Go to repository Settings
2. Click "Secrets and variables" > "Actions"
3. Click "New repository secret"
4. Add your secrets (e.g., API URLs)
5. Use in workflow: `${{ secrets.YOUR_SECRET }}`

---

## 📱 Testing Deployment

After deployment, test your website:

- ✅ Visit homepage
- ✅ Click navigation links
- ✅ Switch language (EN/ع)
- ✅ Fill contact form
- ✅ Check responsive design
- ✅ Test on mobile
- ✅ Test on tablet
- ✅ Test on desktop

---

## 🚀 Performance Tips

1. **Optimize images** - Use compressed images
2. **Minify CSS/JS** - Vite does this automatically
3. **Enable caching** - GitHub Pages caches automatically
4. **Use CDN** - Consider Cloudflare for faster delivery

---

## 📞 Support

### Common Issues

**Q: How long does deployment take?**
A: Usually 1-2 minutes. Check Actions tab for status.

**Q: Can I use a custom domain?**
A: Yes, see "Custom Domain" section above.

**Q: How do I update the website?**
A: Push changes to main branch. GitHub Actions will auto-deploy.

**Q: Is there a cost?**
A: No, GitHub Pages is free for public repositories.

**Q: Can I use the backend API?**
A: Yes, but you need to deploy backend separately (Heroku, Railway, etc.)

---

## 🎉 Deployment Complete!

Your Paraflow Legal Website is now live on GitHub Pages!

### Next Steps

1. **Share your website** - Send the URL to others
2. **Monitor performance** - Check GitHub Actions for any issues
3. **Update content** - Make changes and push to deploy
4. **Deploy backend** - Set up backend API separately
5. **Configure API URL** - Update frontend to use backend API

---

## 📚 Additional Resources

- [GitHub Pages Documentation](https://docs.github.com/en/pages)
- [Vite Deployment Guide](https://vitejs.dev/guide/static-deploy.html)
- [GitHub Actions Documentation](https://docs.github.com/en/actions)

---

**Deployment Status: ✅ READY**

**Website URL: https://yourusername.github.io/paraflow-legal-website**

**Last Updated: January 1, 2026**
