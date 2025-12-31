#!/bin/bash

# Paraflow Legal Website - GitHub Pages Deployment Script

echo "🚀 Starting deployment to GitHub Pages..."
echo ""

# Check if git is initialized
if [ ! -d ".git" ]; then
    echo "❌ Git not initialized. Initializing..."
    git init
    echo "✅ Git initialized"
fi

# Check if remote exists
if ! git remote get-url origin > /dev/null 2>&1; then
    echo "❌ Remote not configured. Please run:"
    echo "   git remote add origin https://github.com/YOUR_USERNAME/paraflow-legal-website.git"
    exit 1
fi

echo "📦 Installing dependencies..."
npm install
echo "✅ Dependencies installed"

echo ""
echo "🔨 Building project..."
npm run build
echo "✅ Build complete"

echo ""
echo "📤 Deploying to GitHub Pages..."
npm run deploy
echo "✅ Deployment complete!"

echo ""
echo "🎉 Your website is now live!"
echo "📍 Visit: https://yourusername.github.io/paraflow-legal-website"
echo ""
echo "Note: Replace 'yourusername' with your actual GitHub username"
