# 🚀 Deploy Your Digital ID Card to GitHub Pages

## Quick Setup (5 Steps)

### Step 1: Create GitHub Repository
1. Go to [GitHub.com](https://github.com) and sign in
2. Click **"+"** → **"New repository"**
3. Repository name: `digital-id-card` (or your preferred name)
4. Set to **Public** (required for free GitHub Pages)
5. Click **"Create repository"**

### Step 2: Download Your Project Files
From this Replit project, download these folders/files:
```
📁 client/                 (your React app)
📁 attached_assets/        (your profile photo)
📁 .github/               (deployment workflow)
📄 vite.config.ts
📄 package.json
📄 tailwind.config.ts
📄 tsconfig.json
📄 postcss.config.js
📄 components.json
📄 build-gh-pages.js
```

### Step 3: Upload to GitHub
1. In your new repository, click **"uploading an existing file"**
2. Drag and drop ALL the files/folders from Step 2
3. Commit message: `"Initial commit - Digital ID Card"`
4. Click **"Commit changes"**

### Step 4: Enable GitHub Pages
1. Go to repository **Settings** tab
2. Click **"Pages"** in left sidebar
3. Source: Select **"GitHub Actions"**
4. Done! GitHub will start building your site automatically

### Step 5: Get Your Live Link
- Your site will be at: `https://YOUR-USERNAME.github.io/digital-id-card/`
- Check the **Actions** tab to see deployment progress
- First build takes 2-3 minutes

## 🎯 What Happens Next

✅ **Automatic Deployment**: Every time you push changes, GitHub rebuilds your site  
✅ **Live Updates**: Your digital ID card updates instantly  
✅ **Professional URL**: Share your link anywhere  
✅ **Mobile Responsive**: Works perfectly on all devices  

## 🔧 If Something Goes Wrong

**Images not showing?**
- Make sure `attached_assets/` folder uploaded correctly
- Check that your photo file is named `profile.jpg`

**Site shows 404?**
- Wait 5 minutes for deployment to complete
- Check **Actions** tab for build errors

**Wrong repository name?**
- Edit `build-gh-pages.js` and change `/digital-id-card/` to your actual repo name

## 💡 Pro Tips

- Use a custom domain by adding a `CNAME` file with your domain name
- Your site automatically has HTTPS security
- Share the link on your resume, LinkedIn, business cards
- Update anytime by uploading new files to GitHub

**Your professional digital ID card will be live in minutes!** 🎉