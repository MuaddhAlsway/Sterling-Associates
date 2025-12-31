# GitHub Pages Deployment - Quick Start

## 🚀 Deploy in 5 Steps

### Step 1: Update GitHub Username

Edit `package.json` and replace `yourusername` with your actual GitHub username:

```json
"homepage": "https://YOUR_USERNAME.github.io/paraflow-legal-website"
```

### Step 2: Initialize Git (if not already done)

```bash
git init
git add .
git commit -m "Initial commit: Paraflow Legal Website"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/paraflow-legal-website.git
git push -u origin main
```

### Step 3: Install Dependencies

```bash
npm install
```

### Step 4: Deploy to GitHub Pages

```bash
npm run deploy
```

This will:
- Build the project
- Deploy to GitHub Pages
- Create a `gh-pages` branch automatically

### Step 5: Configure GitHub Pages

1. Go to: `https://github.com/YOUR_USERNAME/paraflow-legal-website`
2. Click **Settings** → **Pages**
3. Under "Build and deployment":
   - Source: "Deploy from a branch"
   - Branch: `gh-pages` / `root`
4. Click **Save**

---

## ✅ Your Site is Live!

Access it at: `https://YOUR_USERNAME.github.io/paraflow-legal-website`

---

## 📝 Important Notes

### About the Backend

The frontend is deployed to GitHub Pages, but the backend API is not. You have two options:

**Option A: Demo Mode (No Backend)**
- The app works with fallback data
- Admin features won't work
- Forms won't submit
- Good for portfolio/demo

**Option B: With Backend**
- Deploy backend to Heroku, Railway, or similar
- Update API URL in environment
- All features will work

### Environment Variables

If you have a backend deployed, create `.env`:

```env
VITE_API_URL=https://your-backend-url.com/api
```

Then rebuild and redeploy:

```bash
npm run build
npm run deploy
```

---

## 🔄 Update Your Site

After making changes:

```bash
git add .
git commit -m "Update: description"
git push origin main
npm run deploy
```

---

## 🐛 Troubleshooting

### Pages not loading after refresh?
- Clear browser cache (Ctrl+Shift+R)
- Check that `vite.config.js` has correct base path

### Styles not showing?
- Hard refresh browser
- Check browser console for errors

### 404 errors?
- The `public/404.html` file handles this
- Make sure it's in the public folder

### gh-pages command not found?
```bash
npm install -g gh-pages
```

---

## 📊 Deployment Status

- ✅ Frontend ready
- ✅ GitHub Pages configured
- ✅ 404 handling set up
- ✅ Base path configured
- ✅ Ready to deploy

---

## 🎯 Next Steps

1. Update `package.json` with your GitHub username
2. Run `npm run deploy`
3. Configure GitHub Pages settings
4. Access your live site

**Your Paraflow Legal Website will be live in minutes!** 🎉
