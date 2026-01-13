# GitHub Setup Guide for Marian Ply Website

## Step 1: Install Git

1. **Download Git for Windows:**
   - Go to: https://git-scm.com/download/win
   - Download and install Git
   - During installation, use default settings

2. **Verify Installation:**
   - Open a new PowerShell/Command Prompt
   - Run: `git --version`
   - You should see the Git version number

## Step 2: Create GitHub Account (if you don't have one)

1. Go to: https://github.com
2. Click "Sign up"
3. Create your account (free)
4. Verify your email

## Step 3: Create GitHub Repository

1. **Login to GitHub**
2. **Click the "+" icon** (top right) → "New repository"
3. **Repository name:** `marian-ply-website` (or any name you prefer)
4. **Description:** "Marian Ply - Premium Plywood Manufacturer Website"
5. **Visibility:** 
   - ✅ Public (free, anyone can see code)
   - OR Private (free, only you can see code)
6. **DO NOT check:**
   - ❌ "Add a README file"
   - ❌ "Add .gitignore"
   - ❌ "Choose a license"
7. **Click "Create repository"**

## Step 4: Initialize Git in Your Project

Open PowerShell/Command Prompt in your project folder and run:

```bash
# Navigate to your project
cd "c:\Tony\acer backup\Main work files\marian-ply-pulluvazhy"

# Initialize Git repository
git init

# Configure Git (replace with your name and email)
git config user.name "Your Name"
git config user.email "your.email@example.com"

# Add all files
git add .

# Make first commit
git commit -m "Initial commit - Marian Ply website"

# Add GitHub repository as remote (replace YOUR_USERNAME with your GitHub username)
git remote add origin https://github.com/YOUR_USERNAME/marian-ply-website.git

# Rename main branch (if needed)
git branch -M main

# Push to GitHub
git push -u origin main
```

**Note:** When you run `git push`, GitHub will ask for:
- **Username:** Your GitHub username
- **Password:** Use a **Personal Access Token** (not your GitHub password)

## Step 5: Create Personal Access Token (for password)

1. **GitHub Settings:**
   - Click your profile picture (top right) → **Settings**
   - Scroll down → **Developer settings** (left sidebar)
   - Click **Personal access tokens** → **Tokens (classic)**

2. **Generate New Token:**
   - Click **Generate new token** → **Generate new token (classic)**
   - **Note:** "Marian Ply Website"
   - **Expiration:** Choose your preference (90 days, or No expiration)
   - **Select scopes:** Check ✅ **repo** (this gives full repository access)
   - Click **Generate token**

3. **Copy the token** (you won't see it again!)
   - Use this token as your password when Git asks

## Step 6: Push Your Code

After creating the token, run the push command again:

```bash
git push -u origin main
```

Enter:
- **Username:** your GitHub username
- **Password:** the Personal Access Token you just created

## Step 7: Connect to Vercel/Netlify

Once your code is on GitHub:

### Vercel:
1. Go to https://vercel.com
2. Sign up/Login with GitHub
3. Click "Add New..." → "Project"
4. Import your `marian-ply-website` repository
5. Click "Deploy"

### Netlify:
1. Go to https://netlify.com
2. Sign up/Login with GitHub
3. Click "Add new site" → "Import an existing project"
4. Select your repository
5. Build settings:
   - Build command: `npm run build`
   - Publish directory: `.next`
6. Click "Deploy site"

## Quick Command Reference

```bash
# Check Git status
git status

# Add changes
git add .

# Commit changes
git commit -m "Your commit message"

# Push to GitHub
git push

# Pull latest changes
git pull
```

## Troubleshooting

### "git: command not found"
- Git is not installed or not in PATH
- Restart terminal after installing Git
- Or use Git Bash instead of PowerShell

### "remote origin already exists"
```bash
git remote remove origin
git remote add origin https://github.com/YOUR_USERNAME/marian-ply-website.git
```

### "Authentication failed"
- Make sure you're using Personal Access Token, not password
- Token needs `repo` scope checked

### "Permission denied"
- Check repository name matches
- Verify you have access to the repository
- Try using SSH instead of HTTPS (more advanced)

## Alternative: GitHub Desktop (GUI Option)

If you prefer a graphical interface:

1. **Download GitHub Desktop:**
   - https://desktop.github.com
   - Install and login with your GitHub account

2. **Add Repository:**
   - File → Add Local Repository
   - Select your project folder
   - Publish repository to GitHub

This is easier for beginners who don't like command line!
